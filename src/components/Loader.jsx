import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <>
      <div
        className={`${styles.button} inset-0 w-screen h-screen backdrop-blur-sm bg-black/45 flex items-center justify-center z-50`}
      >
        <div className={`${styles.ball} ${styles.ball1}`} />
        <div className={`${styles.ball} ${styles.ball2}`} />
        <div className={`${styles.ball} ${styles.ball3}`} />
        <div className={`${styles.ball} ${styles.ball4}`} />
      </div>
    </>
  );
}
