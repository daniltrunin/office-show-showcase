// styles
import styles from './DesktopHomeView.module.css';

// components
import DesktopHeader from '@shared/ui/Header/DesktopHeader';
import DesktopSidebar from '@features/Sidebar/DesktopSidebar';
import DesktopMain from '@features/Main/DesktopMain/DesktopMain';

// react lib imports
import { useState } from 'react';

export default function DesktopHomeView() {
  const [activeId, setActiveId] = useState<string>('1');

  return (
    <main className={styles.container}>
      <DesktopSidebar activeId={activeId} setActiveId={setActiveId} />
      <DesktopHeader />
      <DesktopMain activeId={activeId} />
    </main>
  );
}
