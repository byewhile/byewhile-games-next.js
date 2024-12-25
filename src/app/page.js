import Link from "next/link";
import Image from "next/image";

import styles from "./page.module.css";

export default function Home() {
  const pages = [
    {
      title: "Найди emoji",
      url: "/find-emoji",
      bg: "/find_emoji_bg.webp",
    },
    {
      title: "Сборка",
      url: "/assembly",
      bg: "/assembly_bg.webp",
    },
    {
      title: "To-Do Лист",
      url: "/to-do-list",
      bg: "/to_do_list_bg.webp",
    }
  ];

  return (
    <main className={styles.homePage}>
      {pages.map(page => (
        <Link key={page.url} href={page.url}>
            <div className={styles.gameBlock}>
                <Image src={page.bg} alt={page.title} width={1152} height={896} />
                <div className={styles.gameTitle}>{page.title}</div>
            </div>
        </Link>
      ))}
    </main>
  );
}
