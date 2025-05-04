import useResizeObserver from '@react-hook/resize-observer';
import makeDebounced from '../utils/makeDebounced';
import { useCallback, useState } from 'react';

const useResize = (observable: SVGSVGElement): number => {
  const [timestamp, updateTimestamp] = useState(0);

  const debouncedSetHasUpdate = useCallback(
    makeDebounced(updateTimestamp, 200),
    [],
  );

  useResizeObserver(observable, () => {
    debouncedSetHasUpdate(() => {
      return Date.now();
    });
  });

  return timestamp;
};

export default useResize;
