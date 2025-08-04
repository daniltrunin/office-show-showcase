// styles
import styles from './DesktopHomeView.module.css';

// components
import Header from '@shared/ui/Header/Header';

export default function DesktopHomeView() {
  return (
    <main className={styles.container}>
      <Header />
    </main>
  );
}
