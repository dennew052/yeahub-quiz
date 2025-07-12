interface SkillButtonProps {
  title: string;
  selected: boolean;
  onClick: () => void;
}

const SkillButton = ({ title, selected, onClick }: SkillButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 15px',
        borderRadius: 5,
        border: '1px solid #333',
        backgroundColor: selected ? '#007bff' : '#fff',
        color: selected ? '#fff' : '#000',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      {title}
    </button>
  );
};

export default SkillButton;
