// icons imports
import { SeasonsIcon } from '@shared/ui/icons/SeasonsIcon';
import { CharactersIcon } from '@shared/ui/icons/CharactersIcon';
import { EpisodesIcon } from '@shared/ui/icons/EpisodesIcon';

// типы
export type TypeSidebarItem = {
  id: string;
  title: string;
  icon: React.FC;
};

export const SIDEBAR_ITEMS: TypeSidebarItem[] = [
  { id: '1', title: 'Seasons', icon: SeasonsIcon },
  { id: '2', title: 'Characters', icon: CharactersIcon },
  { id: '3', title: 'Episodes', icon: EpisodesIcon },
];
