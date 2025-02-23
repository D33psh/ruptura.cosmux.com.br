"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { height, width } = useWindowSize();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="">
      {isLoaded && <Confetti width={width} height={height} />}
      <h1 className="font-bold text-8xl">Parabens</h1>
      <br />
      <p className="w-100">
        Você resolveu seu primeiro enigma 👏
        <br />
        Muitas historias precisam ser contadas por por hora refinadores
        descamse, pq esse provavelmente vai ser o ultimo desafio facil
      </p>
      <br />
      <p className="font-bold text-2xl">Vejo vocês em breve</p>
    </div>
  );
}
