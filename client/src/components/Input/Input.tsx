import styles from "./Input.module.css";

export default function Input({
  type,
  placeHolder,
}: {
  type: string;
  placeHolder: string;
}) {
  return (
    <input type={type} placeholder={placeHolder} className={styles.input} />
  );
}
