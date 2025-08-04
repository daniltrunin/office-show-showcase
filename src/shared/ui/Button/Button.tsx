// стили
import styles from './Button.module.css';

// типизация
type TypeButton = {
  text: string;
};

export default function Button(props: TypeButton) {
  return <button className={styles.button}>{props.text}</button>;
}
