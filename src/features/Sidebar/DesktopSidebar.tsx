// стили
import styles from './DesktopSidebar.module.css';

// external imports
import { SIDEBAR_ITEMS, TypeSidebarItem } from '@shared/const/sidebar';

// active id type
type TypeActiveId = {
  activeId: string;
  setActiveId: (id: string) => void;
};

export default function DesktopSidebar({ activeId, setActiveId }: TypeActiveId) {
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
