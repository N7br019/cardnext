"use client"
import Image from "next/image";
import React, {useState} from "react";
import cardstyle from './page.module.scss'

export default function Home() {

  const [count, setCount] = useState<number>(0);

  return (
    <main>
      <section id={cardstyle.cardContainer}>
        <div id={cardstyle.card}></div>
      </section>
    </main>
  );
}
