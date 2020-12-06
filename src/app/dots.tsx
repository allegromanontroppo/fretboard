import React from 'react';

interface DotsProps {
  frets: number[];
}

const dotCount: { [key: number]: number } = {
  0: 2,
  3: 1,
  5: 1,
  7: 1,
  9: 1,
};

function Dots({ frets }: DotsProps) {
  return (
    <div className="dots">
      <div></div>
      {frets.map((fret) => (
        <div key={fret} className="dot">
          {Array.from(Array((fret > 0 && dotCount[fret % 12]) || 0), (_, i) => (
            <i className="material-icons" key={i}>
              fiber_manual_record
            </i>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Dots;
