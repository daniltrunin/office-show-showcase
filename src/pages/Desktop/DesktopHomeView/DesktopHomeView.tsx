// styles
import styles from './DesktopHomeView.module.css';

// components
import DesktopHeader from '@shared/ui/Header/DesktopHeader';
import DesktopSidebar from '@features/Sidebar/DesktopSidebar';

export default function DesktopHomeView() {
  return (
    <main className={styles.container}>
      <DesktopSidebar />
      <DesktopHeader />
    </main>
  );
}
