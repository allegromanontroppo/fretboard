import { useEffect } from 'react';
import qs from 'querystringify';

function useHistory(attributes: { [key: string]: string | number[] }) {
  useEffect(function () {
    const frets = attributes['frets'];

    const hash = {
      ...attributes,
      frets: [frets[0], frets[frets.length - 1]].join('-'),
    }

    window.location.hash = qs.stringify(hash, '#');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, Object.values(attributes));
}

export default useHistory;
