import Link from "next/link";
import styles from "./thumbnail.module.scss";
import Image from "next/image";

export default function Thumbnail({ src, href, children }) {
  return (
    <Link href={`${href}`}>
      <Image
        className={styles.thumbnail}
        src={src}
        alt="画像を読み取れませんでした。"
        width={1200}
        height={630}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      ></Image>
      <p className={styles.text}>{children}</p>
    </Link>
  );
}
