import { Box, Card, CardContent, Stack, Typography } from '@mui/material';

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
  ToggleAnswerButton,
  AnswerButtons,
  BackButton,
  SkipButton,
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

          <ToggleAnswerButton
            showAnswer={showAnswer}
            onToggle={onToggleAnswer}
          />

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

          <AnswerButtons currentAnswer={currentAnswer} onAnswer={onAnswer} />

          <Stack direction="row" justifyContent="space-between" mt={4}>
            <BackButton onBack={onBack} disabled={currentIndex === 0} />
            {!isLast && <SkipButton onSkip={onSkip} />}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
