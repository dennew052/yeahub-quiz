import { Box, Chip } from '@mui/material';

const complexityRanges = {
  '1–3': [1, 2, 3],
  '4–6': [4, 5, 6],
  '7–8': [7, 8],
  '9–10': [9, 10],
} as const;

type Props = {
  selected: number[];
  onChange: (selected: number[]) => void;
};

export const SelectComplexity = ({ selected, onChange }: Props) => {
  const handleToggleRange = (rangeKey: keyof typeof complexityRanges) => {
    const levels = complexityRanges[rangeKey] as readonly number[];
    const allSelected = levels.every((lvl) => selected.includes(lvl));

    const newSelected = allSelected
      ? selected.filter((lvl) => !levels.includes(lvl))
      : Array.from(new Set([...selected, ...levels]));

    onChange(newSelected);
  };

  return (
    <>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
        {(
          Object.keys(complexityRanges) as Array<keyof typeof complexityRanges>
        ).map((rangeKey) => {
          const levels = complexityRanges[rangeKey];
          const isSelected = levels.some((lvl) => selected.includes(lvl));

          return (
            <Chip
              key={rangeKey}
              label={rangeKey}
              clickable
              color={isSelected ? 'primary' : 'default'}
              variant={isSelected ? 'filled' : 'outlined'}
              onClick={() => handleToggleRange(rangeKey)}
            />
          );
        })}
      </Box>
    </>
  );
};
