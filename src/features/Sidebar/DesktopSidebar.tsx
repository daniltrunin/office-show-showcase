// стили
import styles from './DesktopSidebar.module.css';

// react imports
import { useState } from 'react';

// external imports
import { SIDEBAR_ITEMS, TypeSidebarItem } from '@shared/const/sidebar';

export default function DesktopSidebar() {
  const [activeId, setActiveId] = useState<string>('1');

  return (
    <aside className={styles.container}>
      <nav>
        <h2 className={styles.title}>Resourses</h2>
        <ul className={styles.list}>
          {SIDEBAR_ITEMS.map((item: TypeSidebarItem) => {
            const Icon = item.icon;
            return (
              <li
                onClick={() => setActiveId(item.id)}
                key={item.id}
                className={item.id === activeId ? `${styles.itemActive}` : styles.item}
              >
                <Icon />
                {item.title}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
