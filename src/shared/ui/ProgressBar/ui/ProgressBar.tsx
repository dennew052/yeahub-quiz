import styles from './ProgressBar.module.css';

type ProgressBarProps = {
  currentIndex: number;
  total: number;
  title: string;
};

const ProgressBar = ({ currentIndex, total, title }: ProgressBarProps) => {
  return (
    <div className={styles.bar}>
      <div>
        {title} {currentIndex + 1} / {total}
      </div>
      <div className={styles.bar_line}>
        <div
          className={styles.bar_line__fulfilled}
          style={{
            width: `${((currentIndex + 1) / total) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
