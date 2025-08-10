import { Button, Stack } from '@mui/material';
import type { Answer } from "@entities/quiz/model/types";

type AnswerButtonsProps = {
  currentAnswer?: Answer;
  onAnswer: (answer: Answer) => void;
};

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
