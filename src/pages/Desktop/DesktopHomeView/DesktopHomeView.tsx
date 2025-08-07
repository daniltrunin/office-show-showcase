// styles
import styles from './DesktopHomeView.module.css';

// components
import DesktopHeader from '@shared/ui/Header/DesktopHeader';
import DesktopSidebar from '@features/Sidebar/DesktopSidebar';
import DesktopMain from '@features/Main/DesktopMain/DesktopMain';

export default function DesktopHomeView() {
  return (
    <main className={styles.container}>
      <DesktopSidebar />
      <DesktopHeader />
      <DesktopMain />
    </main>
  );
}
