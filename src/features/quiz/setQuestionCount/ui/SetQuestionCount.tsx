import { Box, InputBase } from '@mui/material';
import type { ChangeEvent } from 'react';

type Props = {
  value: number;
  onChange: (val: number) => void;
};

export const SetQuestionCount = ({ value, onChange }: Props) => {
  const decrement = () => {
    onChange(Math.max(1, value - 1));
  };

  const increment = () => {
    onChange(Math.min(100, value + 1));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const num = Math.max(1, Math.min(100, Number(e.target.value)));
    onChange(num);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '4px 8px',
          backgroundColor: '#f9f9f9',
          mt: 1,
          width: 'fit-content',
        }}
      >
        <button
          onClick={decrement}
          style={{
            border: 'none',
            background: 'transparent',
            fontSize: '24px',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
          }}
        >
          –
        </button>

        <InputBase
          type="number"
          value={value}
          onChange={handleInputChange}
          sx={{
            width: '40px',
            height: '40px',
            fontSize: '18px',
            padding: 0,
            background: 'transparent',
            '& input': {
              textAlign: 'center',
              padding: 0,
            },
            '& input[type=number]::-webkit-outer-spin-button': {
              WebkitAppearance: 'none',
              margin: 0,
            },
            '& input[type=number]::-webkit-inner-spin-button': {
              WebkitAppearance: 'none',
              margin: 0,
            },
            '& input[type=number]': {
              MozAppearance: 'textfield',
            },
          }}
        />

        <button
          onClick={increment}
          style={{
            border: 'none',
            background: 'transparent',
            fontSize: '24px',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
          }}
        >
          +
        </button>
      </Box>
    </>
  );
};
