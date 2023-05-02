import "../scss/index.scss";
import React, { useState } from "react";
import { gsap } from "gsap";
import { useRef } from "react";
import Slider from "./slider";
import {
  carsData,
  cinemaData,
  literatureData,
  pencilData,
  scienceData,
  tablesData,
} from "../utils/constants";
import { TData } from "../utils/types";
import CountUp from "react-countup";

export default function TimeBlock() {
  const [data, setData] = useState(scienceData);
  const [name, setName] = useState<string>("Наука");
  const [number, setNumber] = useState<number>(1);

  const mainCircle: any = useRef();
  const numberOne: any = useRef();
  const numberTwo: any = useRef();
  const numberThree: any = useRef();
  const numberFour: any = useRef();
  const numberFive: any = useRef();
  const numberSix: any = useRef();

  const [thirdDeg, setThirdDeg] = useState<number>(60);

  

  let firstYear = data[0].year;
  let secondYear = data[data.length - 1].year;

  
  

  const rotateNumbers = (deg: number) => {
    gsap.to(numberOne.current, {
      rotate: `${deg}deg`,
    });
    gsap.to(numberTwo.current, {
      rotate: `${deg}deg`,
    });
    gsap.to(numberThree.current, {
      rotate: `${deg}deg`,
    });
    gsap.to(numberFour.current, {
      rotate: `${deg}deg`,
    });
    gsap.to(numberFive.current, {
      rotate: `${deg}deg`,
    });
    gsap.to(numberSix.current, {
      rotate: `${deg}deg`,
    });
  };

  const rotateCircle = (
    typeOfData: TData[],
    name: string,
    fromDeg: number,
    toDeg: number,
    numberDeg: number
  ) => {
    gsap.fromTo(
      mainCircle.current,
      {
        rotate: fromDeg,
      },
      {
        rotate: toDeg,
      }
    );

    setData(typeOfData);

    setName(name);
    rotateNumbers(numberDeg);
    setThirdDeg(thirdDeg + toDeg);
    console.log(thirdDeg);
  };

  const rotateBack = () => {
    number > 1 && setNumber(number - 1);

    name == "Кино" && rotateCircle(scienceData, "Наука", 0, 0, 0);

    name == "Литература" && rotateCircle(cinemaData, "Кино", 60, 120, 120);

    name == "Машины" &&
      rotateCircle(literatureData, "Литература", 120, 180, 180);

    name == "Столы" && rotateCircle(carsData, "Машины", 180, 240, 240);

    name == "Карандаши" && rotateCircle(tablesData, "Столы", 240, 300, 300);
  };
  const rotateForward = () => {
    number <= 5 && setNumber(number + 1);

    name == "Наука" && rotateCircle(cinemaData, "Кино", 0, 60, 60);

    name == "Кино" &&
      rotateCircle(literatureData, "Литература", -60, -120, -120);

    name == "Литература" && rotateCircle(carsData, "Машины", -120, -180, -180);

    name == "Машины" && rotateCircle(tablesData, "Столы", -180, -240, 240);

    name == "Столы" && rotateCircle(pencilData, "Карандаши", -240, -300, 300);
  };

  return (
    <main>
      
      <h1>Исторические даты</h1>
      
      <div className="years">
        <h3>
          <CountUp
            className="first-year"
            start={firstYear - 4}
            end={firstYear}
            separator=""
          />
        </h3>
        <h3>
          <CountUp
            className="last-year"
            start={secondYear - 4}
            end={secondYear}
            separator=""
          />
        </h3>
      </div>
      <Slider data={data} />
      <section className="footer">
      <div className="buttons-container">
        <p className="numbers">0{number}/06</p>
        <button
          className={`${number == 1 ? "button_disabled" : "button"}`}
          onClick={rotateBack}
        >
          <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.7489 1.04178L1.6239 4.16678L4.7489 7.29178" stroke="#42567A" strokeWidth="2"/>
</svg>
        </button>
        <button
          className={`${number == 6 ? "button_disabled" : "button"}`}
          onClick={rotateForward}
        >
          <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.58386 1.04178L4.70886 4.16678L1.58386 7.29178" stroke="#42567A" strokeWidth="2"/>
</svg>
        </button>
        

      </div>
      <div className="dots-container">
      <div className={`${number == 1 ? "dot" : "dot_disabled"}`}></div>
      <div className={`${number == 2 ? "dot" : "dot_disabled"}`}></div>
      <div className={`${number == 3 ? "dot" : "dot_disabled"}`}></div>
      <div className={`${number == 4 ? "dot" : "dot_disabled"}`}></div>
      <div className={`${number == 5 ? "dot" : "dot_disabled"}`}></div>
      <div className={`${number == 6 ? "dot" : "dot_disabled"}`}></div>

     </div>
      </section>
     
      
    </main>
  )
}
