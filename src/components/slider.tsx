import React, { useEffect } from "react";
import Swiper from "react-id-swiper";
import { useRef } from "react";
import { TData } from "../utils/types";


export default function Slider({ data }: { data: TData[] }) {
  const ref: any = useRef(null);

  const linearAppearance = () => {
    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 50,
        duration: 1,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );
  };

  useEffect(() => {
    linearAppearance();
  });

  return (
    <section className="slider-container">
      <section className="slider">
        <Swiper ref={ref}>
          {data.map((el: TData) => (
            <div className="slider-content">
              <h3>{el.year}</h3>
              <p>{el.text}</p>
            </div>
          ))}
        </Swiper>
      </section>
    </section>
  );
}
