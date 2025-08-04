// стили
import styles from './Button.module.css';

// типизация
type TypeButtonProps = {
  text: string;
  onClick?: () => void;
};

export default function Button(props: TypeButtonProps) {
  return (
    <button onClick={props.onClick} className={styles.button}>
      {props.text}
    </button>
  );
}
