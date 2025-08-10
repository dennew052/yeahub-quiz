import { Button } from '@mui/material';

interface BackButtonProps {
  onBack: () => void;
  disabled: boolean;
}

export const BackButton = ({ onBack, disabled }: BackButtonProps) => (
  <Button onClick={onBack} disabled={disabled}>
    Назад
  </Button>
);
