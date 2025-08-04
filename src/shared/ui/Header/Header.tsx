import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.details}>
          <h1 className={styles.title}>Office Show Showcase</h1>
          <p className={styles.subtitle}>Everything you need to know about The Office</p>
        </div>
      </div>
    </header>
  );
}
