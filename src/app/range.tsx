import React from "react";

interface RangeProps {
  frets: number[];
  setLow: (value: number) => void;
  setHigh: (value: number) => void;
}

function Range({ frets, setLow, setHigh }: RangeProps) {
  const low = Math.min(...frets);
  const high = Math.max(...frets);

  return (
    <form>
      <label>Frets to show</label>

      <div className="row">
        <p className="range-field col s6">
          <input
            type="range"
            min="0"
            max={Math.min(high, 24)}
            value={low}
            title={`Adjust lowest shown fret. Currently ${low}.`}
            onChange={(e) => setLow(parseInt(e.target.value))}
          />
        </p>
        <p className="range-field col s6">
          <input
            type="range"
            min={Math.max(low, 0)}
            max="24"
            value={high}
            title={`Adjust highest shown fret. Currently ${high}.`}
            onChange={(e) => setHigh(parseInt(e.target.value))}
          />
        </p>
      </div>
    </form>
  );
}

export default Range;
