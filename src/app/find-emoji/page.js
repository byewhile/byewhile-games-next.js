"use client"

import { useState, useEffect } from "react";
import styles from "./find_emoji.module.css";

export default function find_emoji() {
    const [level, setLevel] = useState(1);
    const [color, setColor] = useState("gray");
    const [correctEmoji, setCorrectEmoji] = useState("");
    const [emojisInGame, setEmojisInGame] = useState([]);

    const levelUp = () => {
        setLevel(level + 1);
    }

    const shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
    }

    useEffect(() => {
        let prepareEmojisInGame = ["😂", "🤣", "😥", "😢", "🙄", "🤤", "😭", "🥺", "👿", "🥰", "😉", "😊", "😘", "😲", "😀", "😈", "😁"];

        if (level >= 10) {
            prepareEmojisInGame.push("👌", "🤘", "🤞", "🤙", "👍", "👏", "🙌", "✍", "🤏", "🤌", "✌", "🤟", "👆", "👇", "☝", "🫵");
            setColor("green");
        }
        if (level >= 20) {
            setColor("red");
        }
        if (level >= 30) {
            setColor("pink");
        }
        shuffle(prepareEmojisInGame);
        const prepareCorrectEmoji = prepareEmojisInGame.shift();

        for (let i = 0; i <= level / 5; i++) {
            prepareEmojisInGame = prepareEmojisInGame.concat(prepareEmojisInGame);
        }
        prepareEmojisInGame[0] = prepareCorrectEmoji;
        shuffle(prepareEmojisInGame);

        setCorrectEmoji(prepareCorrectEmoji);
        setEmojisInGame(prepareEmojisInGame);
    }, [, level])
  
  return (
    <main className={styles.find_emojiPage}>
        <h2><span>Найди: {correctEmoji}</span><span style={{color: color}}>Уровень: {level}</span></h2>
        <div className={styles.gameField}>
            {emojisInGame.map((emoji, index) => (
                <div key={index} className={styles.emoji}>
                {correctEmoji == emoji ?
                    <span onClick={levelUp}>{emoji}</span>
                :
                    <span>{emoji}</span>}
                </div>
            ))}
      </div>
    </main>
  )
}