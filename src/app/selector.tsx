import React from 'react';

import Note from '../logic/note';
import Scale from '../logic/scale';

interface SelectorProps {
  title: string;
  value: Note | Scale;
  object: object;
  onChange: (value: string) => void;
}

function Selector({ title, value, object, onChange }: SelectorProps) {
  const id = `selector-${title}`;

  return (
    <form>
      <label htmlFor={id}>{title}</label>
      <p>
        <select id={id} className="browser-default" value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="" disabled>
            Choose {title}
          </option>
          {Object.entries(object).map(([v, t]) => (
            <option key={v} value={v}>
              {t}
            </option>
          ))}
        </select>
      </p>
    </form>
  );
}

export default Selector;
