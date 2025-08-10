import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';

import type { QuestionCardProps } from '../model/types';

export function QuestionCard({
  question,
  currentIndex,
  currentAnswer,
  showAnswer,
  onToggleAnswer,
  onAnswer,
  onBack,
  onSkip,
  isLast,
}: QuestionCardProps) {
  return (
    <Box maxWidth="md" mx="auto" mt={4} px={2}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {question.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {question.description}
          </Typography>

          <Button variant="outlined" onClick={onToggleAnswer} sx={{ my: 2 }}>
            {showAnswer ? 'Скрыть ответ' : 'Показать ответ'}
          </Button>

          {showAnswer && (
            <Box
              sx={{
                p: 2,
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
                mt: 1,
              }}
              dangerouslySetInnerHTML={{ __html: question.longAnswer }}
            />
          )}

          <Stack direction="row" spacing={2} mt={4} justifyContent="center">
            <Button
              variant="contained"
              color="success"
              onClick={() => onAnswer('KNOW')}
              sx={{
                backgroundColor:
                  currentAnswer === 'KNOW' ? 'success.main' : undefined,
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
                backgroundColor:
                  currentAnswer === 'UNKNOWN' ? 'error.main' : undefined,
                opacity: currentAnswer && currentAnswer !== 'UNKNOWN' ? 0.5 : 1,
              }}
            >
              Не знаю
            </Button>
          </Stack>

          <Stack direction="row" justifyContent="space-between" mt={4}>
            <Button onClick={onBack} disabled={currentIndex === 0}>
              Назад
            </Button>
            {!isLast && (
              <Button onClick={onSkip} variant="text">
                Пропустить
              </Button>
            )}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
