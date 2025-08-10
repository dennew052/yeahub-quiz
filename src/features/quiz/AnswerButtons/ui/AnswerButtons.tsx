import type { AnswerButtonsProps } from '@entities/quiz/model/types';
import { Button, Stack } from '@mui/material';

export const AnswerButtons = ({
  currentAnswer,
  onAnswer,
}: AnswerButtonsProps) => (
  <Stack direction="row" spacing={2} mt={2} justifyContent="center">
    <Button
      variant="contained"
      color="success"
      onClick={() => onAnswer('KNOW')}
      sx={{
        backgroundColor: currentAnswer === 'KNOW' ? 'success.main' : undefined,
        opacity: currentAnswer && currentAnswer !== 'KNOW' ? 0.5 : 1,
      }}
    >
      Знаю
    </Button>

    <Button
      variant="contained"
      color="error"
      onClick={() => onAnswer('UNKNOWN')}
      sx={{
        backgroundColor: currentAnswer === 'UNKNOWN' ? 'error.main' : undefined,
        opacity: currentAnswer && currentAnswer !== 'UNKNOWN' ? 0.5 : 1,
      }}
    >
      Не знаю
    </Button>
  </Stack>
);
