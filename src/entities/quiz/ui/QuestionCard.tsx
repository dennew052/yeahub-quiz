import {
  Box,
  Button,
  Card,
  CardContent,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';

import type { QuestionCardProps } from '../types';

export function QuestionCard({
  question,
  currentIndex,
  total,
  currentAnswer,
  showAnswer,
  onToggleAnswer,
  onAnswer,
  onBack,
  onSkip,
  isLast,
}: QuestionCardProps) {
  const progress = Math.round(((currentIndex + 1) / total) * 100);

  return (
    <Box maxWidth="md" mx="auto" mt={4} px={2}>
      <Typography variant="h6" gutterBottom>
        Вопрос {currentIndex + 1} / {total}
      </Typography>
      <LinearProgress variant="determinate" value={progress} sx={{ mb: 2 }} />

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
              onClick={() => onAnswer('know')}
              sx={{
                backgroundColor:
                  currentAnswer === 'know' ? 'success.main' : undefined,
                opacity: currentAnswer && currentAnswer !== 'know' ? 0.5 : 1,
              }}
            >
              Знаю
            </Button>

            <Button
              variant="contained"
              color="error"
              onClick={() => onAnswer('dont_know')}
              sx={{
                backgroundColor:
                  currentAnswer === 'dont_know' ? 'error.main' : undefined,
                opacity:
                  currentAnswer && currentAnswer !== 'dont_know' ? 0.5 : 1,
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
