import { useEffect, useState } from 'react';

import './styles.css';

export const App = () => {

  const [inside, setInside] = useState(false);

  useEffect(() => {
    const cursorVT = document.querySelector('.vt')
    const cursorHL = document.querySelector('.hl')

    document.addEventListener('mousemove', e => {
      cursorVT?.setAttribute('style', `left: ${e.clientX}px;`)
      cursorHL?.setAttribute('style', `top: ${e.clientY}px;`)
    });
  }, []);
  
  return (
    <div style={{ cursor: 'crosshair', width : 600, height : 600, border : 'solid 1px #ffb703' }} onBlur={() => console.log('blur')}>
      <div className="cursor" style={{ width : '100%', height : '100%' }}>
        <div className="vt"></div>
        <div className="hl"></div>
      </div>
    </div>
  )
}
