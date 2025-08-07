import { useGetSkillsQuery } from '@entities/skill/model/skillsApi';
import { Box, Chip, CircularProgress, Typography } from '@mui/material';

type SelectSkillProps = {
  selectedId: number | null;
  onSelect: (id: number) => void;
};

type Skill = {
  id: number;
  title: string;
};

export const SelectSkill = ({ selectedId, onSelect }: SelectSkillProps) => {
  const { data, isLoading, error } = useGetSkillsQuery({ page: 1, limit: 50 });
  const specializations: Skill[] = data?.data ?? [];

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography color="error">Ошибка загрузки</Typography>;

  return (
    <>
      <Typography sx={{ mt: 2, mb: 1 }}>Специализация</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {specializations.map((item) => (
          <Chip
            key={item.id}
            label={item.title}
            clickable
            onClick={() => onSelect(item.id)}
            color={selectedId === item.id ? 'primary' : 'default'}
            variant={selectedId === item.id ? 'filled' : 'outlined'}
          />
        ))}
      </Box>
    </>
  );
};
