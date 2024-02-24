"use client";
import Image from "next/image";
import image1 from "../../public/carrousel/carrousel_photo_1.jpg";
import image2 from "../../public/carrousel/carrousel_photo_2.jpg";
import image3 from "../../public/carrousel/carrousel_photo_3.jpg";
import { useEffect, useRef, useState } from "react";
import LightIcon from "./components/LightIcon";
import RocketIcon from "./components/RocketIcon";
import TrophyIcon from "./components/TrophyIcon";

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState<boolean>(true);
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [direction, setDirection] = useState<"" | "left" | "right">("");
  const divRef = useRef<HTMLDivElement>(null);
  const [divWidth, setDivWidth] = useState(0);
  const [divHeight, setDivHeight] = useState(0);


  const ref = useRef<HTMLParagraphElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // Use null para o viewport
        rootMargin: "0px", // Margem adicional em relação ao viewport
        threshold: 0.5, // Quanto do elemento precisa estar visível para ser considerado visível (50%)
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);


  useEffect(() => {
    if (divRef.current) {
      setDivWidth(divRef.current.clientWidth);
      setDivHeight(divRef.current.clientHeight);
    }
  }, []);
  return (
    <div className="w-full">
      <div className="w-full overflow-hidden bg-neutral-300 flex h-[60vh]">
        <div className="w-2/5 p-16 flex items-center">
          <div
            className={
              selectedPage === 1
                ? "duration-300 relative w-0 opacity-100"
                : "duration-300 relative w-0 opacity-0 translate-y-8"
            }
          >
            <p className="whitespace-nowrap font-thin text-6xl text-neutral-900">
              Cartazes
            </p>
            <p className="whitespace-nowrap mt-2 text-neutral-700 text-xl">
              ERS PRINT é líder na balizagem de lojas
            </p>
          </div>

          <div
            className={
              selectedPage === 2
                ? "duration-300 relative w-0 opacity-100"
                : "duration-300 relative w-0 opacity-0 translate-y-8"
            }
          >
            <p className="whitespace-nowrap font-thin text-6xl text-neutral-900">
              Insumos logísticos
            </p>
            <p className="whitespace-nowrap mt-2 text-neutral-700 text-xl">
              Tudo que você precisa no seu estoque
            </p>
          </div>

          <div
            className={
              selectedPage === 3
                ? "duration-300 relative w-0 opacity-100"
                : "duration-300 relative w-0 opacity-0 translate-y-8"
            }
          >
            <p className="whitespace-nowrap font-thin text-6xl text-neutral-900">
              Etiquetas Adesivas
            </p>
            <p className="whitespace-nowrap mt-2 text-neutral-700 text-xl">
              A maior variedade e custo beneficio do mercado
            </p>
          </div>
        </div>
        {/* <div className="w-0 relative h-0 opacity-80 z-40 blur">
          <div className="w-10 h-[700px] bg-neutral-900 rotate-[15deg] ml-16 mt-[-16px]">a</div>
        </div> */}

        <div className="grow crop-carroucel" ref={divRef}>
          <div className="absolute h-full w-3/5 z-40 opacity-60 blur">
            <svg width={divWidth} height={divHeight}>
              <polygon
                fill="#292929"
                points={`0 0,${0.18 * divWidth} 0, ${
                  0.03 * divWidth
                } ${divHeight}, 0 ${divHeight}`}
              />
            </svg>
          </div>

          <div className="w-full h-full relative overflow-hidden">
            <div className="w-full ">
              <Image
                src={image1}
                className={`absolute w-full h-full duration-1000 ${
                  selectedPage === 1
                    ? "z-30"
                    : selectedPage === 3
                    ? "-translate-x-full"
                    : "translate-x-full"
                }
                ${selectedPage === 2 && direction === "right" ? "z-20" : ""}
                ${selectedPage === 3 && direction === "left" ? "z-20" : ""}`}
                alt=""
              />
              <Image
                src={image2}
                className={`absolute w-full h-full duration-1000 ${
                  selectedPage === 2
                    ? "z-30"
                    : selectedPage === 1
                    ? "-translate-x-full"
                    : "translate-x-full"
                }
                ${selectedPage === 3 && direction === "right" ? "z-20" : ""}
                ${selectedPage === 1 && direction === "left" ? "z-20" : ""}`}
                alt=""
              />
              <Image
                src={image3}
                className={`absolute w-full h-full duration-1000 ${
                  selectedPage === 3
                    ? "z-30"
                    : selectedPage === 2
                    ? "-translate-x-full"
                    : "translate-x-full"
                }
                ${selectedPage === 1 && direction === "right" ? "z-20" : ""}
                ${selectedPage === 2 && direction === "left" ? "z-20" : ""}`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-y-[200%] w-full">
        <div className="flex w-full justify-center">
          <div
            className="p-2 rounded-l-full pr-4 bg-neutral-200 opacity-50 hover:opacity-90 cursor-pointer"
            onClick={() => {
              if (animationComplete) {
                setAnimationComplete(false);
                setSelectedPage((prev) => (prev - 1 === 0 ? 3 : prev - 1));
                setDirection("left");
                setTimeout(() => {
                  setAnimationComplete(true);
                }, 1000);
              }
            }}
          >
            <div className="rounded-full w-2 h-2 bg-neutral-800" />
          </div>
          <div
            className="p-2 rounded-r-full pl-4 bg-neutral-200 opacity-50 hover:opacity-90 cursor-pointer"
            onClick={() => {
              if (animationComplete) {
                setAnimationComplete(false);
                setSelectedPage((prev) => (prev + 1 === 4 ? 1 : prev + 1));
                setDirection("right");
                setTimeout(() => {
                  setAnimationComplete(true);
                }, 1000);
              }
            }}
          >
            <div className="rounded-full w-2 h-2 bg-neutral-800" />
          </div>
        </div>
      </div>

      <p className="text-center text-3xl my-6 text-neutral-900 font-bold">
        A gráfica completa para todas as suas necessidades
      </p>
      <p className="text-center text-lg mt-4 text-neutral-700 font-normal sm:px-12 md:px-24 lg:px-48 px-96">
        A ErsPrint é uma gráfica completa para todas as suas necessidades de
        impressão. Oferecemos uma{" "}
        <span className="text-neutral-900 font-bold">
          ampla variedade de opções
        </span>{" "}
        de impressão, desde cartões de visita, etiquetas, cartazes, panfletos
        até onde a sua criatividade chegar. Tudo isso com a{" "}
        <span className="text-neutral-900 font-bold">qualidade</span> que você
        espera e um{" "}
        <span className="text-neutral-900 font-bold">
          atendimento humanizado e personalizado.
        </span>
      </p>

      <div className="mb-12 mt-8 flex justify-center gap-6 sm:px-12 md:px-24 lg:px-48 px-96">
        <div className="grow p-6 flex flex-col items-center justify-center">
          {/* <div className="flex justify-center items-center w-full">
            <div className="w-48">
              <LightIcon fill="#9b9b9b" />
            </div>
          </div> */}
          <p className={`font-bold text-xl text-center ${isVisible?'opacity-100':'opacity-0 -translate-y-4'} duration-1000`}>
            Soluções personalizadas
          </p>
          <p className={`font-regular text-neutral-700 mt-4 text-lg text-center ${isVisible?'opacity-100':'opacity-0 translate-x-5'} duration-1000 delay-500`}>
            Entendemos que cada projeto é único, por isso oferecemos soluções
            personalizadas para atender às suas necessidades específicas. Nossa
            equipe está sempre pronta para ajudar e oferecer sugestões para
            tornar o seu projeto ainda melhor.
          </p>
        </div>
        <div className="grow p-6 flex flex-col items-center justify-center">
          {/* <div className="flex justify-center items-center w-full">
            <div className="w-48">
              <RocketIcon fill="#9b9b9b" />
            </div>
          </div> */}
          <p className={`font-bold text-xl text-center ${isVisible?'opacity-100':'opacity-0 -translate-y-4'} duration-1000`}>Agilidade na produção</p>
          <p className={`font-regular text-neutral-700 mt-4 text-lg text-center ${isVisible?'opacity-100':'opacity-0'} duration-1000 delay-500`} ref={ref}>
            Com equipamentos modernos e uma equipe altamente qualificada,
            garantimos uma produção rápida e eficiente para que você receba suas
            impressões no prazo prometido.
          </p>
        </div>
        <div className="grow p-6 flex items-center flex-col justify-center">
          {/* <div className="flex justify-center items-center w-full">
            <div className="w-48">
              <TrophyIcon fill="#9b9b9b" />
            </div>
          </div> */}
          <p className={`font-bold text-xl text-center ${isVisible?'opacity-100':'opacity-0 -translate-y-4'} duration-1000`}>
            Impressões de alta qualidade
          </p>
          <p className={`font-regular text-neutral-700 mt-4 text-lg text-center ${isVisible?'opacity-100':'opacity-0 -translate-x-5'} duration-1000 delay-500`}>
            Oferecemos impressões de alta qualidade para que seus projetos
            tenham um acabamento perfeito. Trabalhamos com materiais de primeira
            qualidade e equipamentos modernos para garantir que suas ideias
            sejam traduzidas em impressões incríveis.
          </p>
        </div>
      </div>
    </div>
  );
}
