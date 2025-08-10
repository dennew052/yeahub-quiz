import { Button } from '@mui/material';

interface SkipButtonProps {
  onSkip: () => void;
}

export const SkipButton = ({ onSkip }: SkipButtonProps) => (
  <Button onClick={onSkip} variant="text">
    Пропустить
  </Button>
);
