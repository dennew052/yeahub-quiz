import type { RootState } from '@/store';
import { toggleSkill } from '@features/quizSettings/model/slice/quizSettingsSlice';
import type { Skill } from '@features/selectSkills/model/types';
import styles from '@pages/SkillsPage/SkillsPage.module.css';
import QuizSettings from '@features/quizSettings/ui/QuizSettings';
import { useGetSpecializationsQuery } from '@shared/api/skillsApi';
import SkillButton from '@shared/components/SkillButton/SkillButton';
import { useDispatch, useSelector } from 'react-redux';

const SkillsPage = () => {
  const dispatch = useDispatch();
  const selectedSkills = useSelector(
    (state: RootState) => state.quizSettings.selectedSkills
  );
  const { data, error, isLoading } = useGetSpecializationsQuery({
    page: 1,
    limit: 50,
  });

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки навыков</div>;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Собеседование</h1>
        <h2>Выберите навыки</h2>
        <div className={styles.skillsList}>
          {data?.data.map((skill: Skill) => (
            <SkillButton
              key={skill.id}
              title={skill.title}
              selected={selectedSkills.includes(skill.id)}
              onClick={() => dispatch(toggleSkill(skill.id))}
            />
          ))}
        </div>
      </div>

      <div className={styles.right}>
        <h2>Настройки квиза</h2>
        <QuizSettings />
      </div>
    </div>
  );
};

export default SkillsPage;
