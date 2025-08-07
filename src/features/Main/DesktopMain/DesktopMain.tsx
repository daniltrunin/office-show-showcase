// стили
import styles from './DesktopMain.module.css';

// react lib imports
// import { useState } from 'react';

// components import
import Seasons from '@features/Seasons/Seasons';
import Characters from '@features/Characters/Characters';
import Episodes from '@features/Episodes/Episodes';

// active id type
type TypeActiveId = {
  activeId: string;
};

export default function DesktopMain({ activeId }: TypeActiveId) {
  if (activeId === '1') return <Seasons />;

  if (activeId === '2') return <Characters />;

  if (activeId === '3') return <Episodes />;

  // error occured
  return (
    <main className={styles.container}>
      Error occured 'DesktopMain component', 'None of the tabs chosen'
    </main>
  );
}
