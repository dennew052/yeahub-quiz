import { setQuizSettings } from '@entities/quiz/model/quizSettingsSlice';
import { SetQuestionCount } from '@features/quiz/SetQuestionCount/ui/SetQuestionCount';
import { SelectSkill } from '@features/skill/selectSkill';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SelectComplexity } from "@features/quiz/SelectComplexity";

const StartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [quizSettingsLocal, setQuizSettingsLocal] = useState({
    specialization: 11,
    complexity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    questionsCount: 1,
  });

  const handleStart = () => {
    dispatch(setQuizSettings(quizSettingsLocal));
    navigate('/quiz');
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box sx={{ width: '66.66%', py: 2 }}>
        <Paper elevation={3} sx={{ height: '100%', p: 2, borderRadius: 3 }}>
          <Typography variant="h5">Собеседование</Typography>
          <Typography sx={{ mt: 2, mb: 1 }}>Специализация</Typography>

          <SelectSkill
            selectedId={quizSettingsLocal.specialization}
            onSelect={(id) =>
              setQuizSettingsLocal((prev) => ({ ...prev, specialization: id }))
            }
          />
        </Paper>
      </Box>

      <Box sx={{ width: '33.33%', p: 2 }}>
        <Paper elevation={3} sx={{ height: '100%', p: 2, borderRadius: 3 }}>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            Сложность вопросов
          </Typography>
          <SelectComplexity
            selected={quizSettingsLocal.complexity}
            onChange={(complexity) =>
              setQuizSettingsLocal((prev) => ({ ...prev, complexity }))
            }
          />
          <Typography variant="subtitle1" sx={{ mt: 3 }}>
            Количество вопросов
          </Typography>
          <SetQuestionCount
            value={quizSettingsLocal.questionsCount}
            onChange={(questionsCount) =>
              setQuizSettingsLocal((prev) => ({ ...prev, questionsCount }))
            }
          />
          <Button variant="contained" sx={{ mt: 3 }} onClick={handleStart}>
            Начать
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default StartPage;
