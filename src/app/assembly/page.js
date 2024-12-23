"use client"

import { useState, useEffect } from "react";
import styles from "./assembly.module.css";
import Image from "next/image";

export default function assembly() {
    const [level, setLevel] = useState("Дора");
    const [inGame, setInGame] = useState(false);
    const [imgsGameRow1, setImgsGameRow1] = useState([]);
    const [imgsGameRow2, setImgsGameRow2] = useState([]);
    const [imgsGameRow3, setImgsGameRow3] = useState([]);
    const options = ["Дора", "Мейби Бейби", "Серега Пират"];

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    }

    const startGame = () => {
        let numberOfRepeat = 0;
        setInGame(true);

        const spinning = setInterval(() => {
            setImgsGameRow1(shuffle([...imgsGameRow1]));
            setImgsGameRow2(shuffle([...imgsGameRow2]));
            setImgsGameRow3(shuffle([...imgsGameRow3]));
            numberOfRepeat++;

            if (numberOfRepeat == 5) {
                clearInterval(spinning);
            }
        }, 100);
        setInGame(false);
    }

    const handleChange = (e) => {
        const level = e.target.value;
        setLevel(level);
    }

    useEffect(() => {
        switch (level) {
            case "Дора":
                setImgsGameRow1(["/dora/1.png", "/dora/2.png", "/dora/3.png"]);
                setImgsGameRow2(["/dora/4.png", "/dora/5.png", "/dora/6.png"]);
                setImgsGameRow3(["/dora/7.png", "/dora/8.png", "/dora/9.png"]);
                break;
            case "Мейби Бейби":
                setImgsGameRow1(["/maybe_baybe/1.png", "/maybe_baybe/2.png", "/maybe_baybe/3.png"]);
                setImgsGameRow2(["/maybe_baybe/4.png", "/maybe_baybe/5.png", "/maybe_baybe/6.png"]);
                setImgsGameRow3(["/maybe_baybe/7.png", "/maybe_baybe/8.png", "/maybe_baybe/9.png"]);
                break;
            case "Серега Пират":
                setImgsGameRow1(["/serega_pirat/1.png", "/serega_pirat/2.png", "/serega_pirat/3.png"]);
                setImgsGameRow2(["/serega_pirat/4.png", "/serega_pirat/5.png", "/serega_pirat/6.png"]);
                setImgsGameRow3(["/serega_pirat/7.png", "/serega_pirat/8.png", "/serega_pirat/9.png"]);
                break;
        }
    }, [, level])

    return (
        <main className={styles.dora_assemblyPage}>
            <h2>
                <span>Сборка</span>
                <span>
                    <select name="level" onChange={handleChange}>
                        {options.map((option, index) =>  
                            <option key={index} value={option}>{option}</option>
                        )}
                    </select>
                </span>
            </h2>
            <div className={styles.gameField}>
                {imgsGameRow1.map((img, index) => (
                    <Image key={index} src={img} alt={index} width={180} height={180} />
                ))}
                {imgsGameRow2.map((img, index) => (
                    <Image key={index} src={img} alt={index} width={180} height={180} />
                ))}
                {imgsGameRow3.map((img, index) => (
                    <Image key={index} src={img} alt={index} width={180} height={180} />
                ))}
                {inGame ? 
                <button onClick={startGame} className={styles.startGameButton} disabled>Кнопка</button> 
                : 
                <button onClick={startGame} className={styles.startGameButton}>Кнопка</button>
                }
            </div>
        </main>
    )
}