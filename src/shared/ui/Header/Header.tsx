// стили
import styles from './Header.module.css';

// ui компоненты
import Button from '@shared/ui/Button/Button';

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.details}>
          <h1 className={styles.title}>Office Show Showcase</h1>
          <p className={styles.subtitle}>Everything you need to know about The Office</p>
        </section>
        <section className={styles.controls}>
          <Button text="Switch theme" />
        </section>
      </div>
    </header>
  );
}
