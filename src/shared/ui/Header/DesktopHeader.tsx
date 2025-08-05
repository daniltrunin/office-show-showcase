// стили
import styles from './DesktopHeader.module.css';

// ui components
import Button from '@shared/ui/Button/Button';

// context
import { useTheme } from '../../lib/theme/ThemeContext';

export default function DesktopHeader() {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.details}>
          <h1 className={styles.title}>Office Show Showcase</h1>
          <p className={styles.subtitle}>Everything you need to know about The Office</p>
        </section>
        <section className={styles.controls}>
          <Button onClick={handleToggleTheme} text="Switch theme" />
        </section>
      </div>
    </header>
  );
}
