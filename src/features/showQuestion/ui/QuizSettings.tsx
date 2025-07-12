import { QuestionLimitInput } from '@/shared/ui/QuestionLimitInput/QuestionLimitInput';
import type { RootState } from '@/store';
import {
  setLimit,
  toggleComplexity,
} from '@features/quizSettings/model/slice/quizSettingsSlice';
import type { CSSProperties } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const QuizSettings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedSkills = useSelector(
    (state: RootState) => state.quizSettings.selectedSkills
  );

  const selectedComplexity = useSelector(
    (state: RootState) => state.quizSettings.selectedComplexity
  );
  const limit = useSelector((state: RootState) => state.quizSettings.limit);

  const complexityRanges = {
    '1–3': [1, 2, 3],
    '4–6': [4, 5, 6],
    '7–8': [7, 8],
    '9–10': [9, 10],
  } as const;

  type RangeLabel = keyof typeof complexityRanges;

  const toggleRange = (rangeLabel: RangeLabel) => {
    const values = complexityRanges[rangeLabel];
    values.forEach((val) => {
      dispatch(toggleComplexity(String(val)));
    });
  };

  const buildUrl = () => {
    const skillsParam = selectedSkills.join(',');
    const complexityParam = selectedComplexity.join(',');
    return `https://api.yeatwork.ru/interview-preparation/quizzes/mock/new?specialization=${skillsParam}&complexity=${complexityParam}&limit=${limit}`;
  };

  const buttonStyle = (active: boolean): CSSProperties => ({
    padding: '10px 15px',
    borderRadius: '5px',
    border: '1px solid #333',
    backgroundColor: active ? '#007bff' : '#fff',
    color: active ? '#fff' : '#000',
    cursor: 'pointer',
    userSelect: 'none',
  });

  const canStart = selectedSkills.length > 0;

  const handleStart = () => {
    navigate('/questions');
  };

  return (
    <div>
      <h3>Сложность вопросов</h3>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {(
          Object.keys(complexityRanges) as (keyof typeof complexityRanges)[]
        ).map((label) => {
          const values = complexityRanges[label];
          const isActive = values.every((v) =>
            selectedComplexity.includes(String(v))
          );
          return (
            <button
              key={label}
              onClick={() => toggleRange(label)}
              style={buttonStyle(isActive)}
            >
              {label}
            </button>
          );
        })}
      </div>

      <h3 style={{ marginTop: '20px' }}>Количество вопросов</h3>
      <QuestionLimitInput
        value={limit}
        onChange={(newLimit) => dispatch(setLimit(newLimit))}
      />

      <h4 style={{ marginTop: '20px' }}>Сформированный запрос:</h4>
      <code style={{ wordBreak: 'break-word', display: 'block' }}>
        {buildUrl()}
      </code>

      <div>
        {canStart ? (
          <button
            onClick={handleStart}
            style={{ marginTop: '20px', padding: '10px 20px' }}
          >
            Начать
          </button>
        ) : (
          <p>Выберите хотя бы один навык, чтобы начать</p>
        )}
      </div>
    </div>
  );
};

export default QuizSettings;
