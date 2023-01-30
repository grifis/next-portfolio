import styles from "./thumbnail.module.scss";

export default function Thumbnail({ src }) {
  return (
    <img
      className={styles.thumbnail}
      src={src}
      alt="画像を読み取れませんでした。"
    ></img>
  );
}
