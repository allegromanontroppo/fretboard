import { useState, useEffect } from 'react';

import Scale from './scale';

function useScale(): [Scale, React.Dispatch<React.SetStateAction<Scale>>] {
  const [scale, setScale] = useState(() => localStorage.getItem('scale') as Scale || Scale.Major);

  useEffect(function () {
    localStorage.setItem('scale', scale);
  }, [scale]);

  return [scale, setScale];
}

export default useScale;
