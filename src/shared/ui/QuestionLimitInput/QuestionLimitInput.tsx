import type { CSSProperties } from 'react';

interface QuestionLimitInputProps {
  value: number;
  onChange: (value: number) => void;
}

const buttonStyle = (active: boolean): CSSProperties => ({
  width: '40px',
  height: '40px',
  fontSize: '20px',
  textAlign: 'center',
  padding: 0,
  borderRadius: '5px',
  border: '1px solid #333',
  backgroundColor: active ? '#007bff' : '#fff',
  color: active ? '#fff' : '#000',
  cursor: 'pointer',
  userSelect: 'none',
});

export const QuestionLimitInput = ({
  value,
  onChange,
}: QuestionLimitInputProps) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <button
        onClick={() => onChange(Math.max(1, value - 1))}
        style={buttonStyle(false)}
      >
        –
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          width: '60px',
          height: '40px',
          fontSize: '18px',
          textAlign: 'center',
        }}
      />
      <button onClick={() => onChange(value + 1)} style={buttonStyle(false)}>
        +
      </button>
    </div>
  );
};
