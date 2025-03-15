import React, { useState } from "react";
import { bottomWave } from "../assets";
import { services } from "../constants";

const ArtisansSection = () => {
  // Déclare un état pour suivre l'index de l'image active
  const [activeImage, setActiveImage] = useState(0);

  // Tableau contenant les images et les descriptions associées

  return (
    <section
      className="relative pb-[50px] pt-[145px] md:pt-[160px] lg:pb-[100px] bg-white text-black"
      id="avantages"
    >
      <div className="absolute left-0 top-10 md:-top-20 lg:top-[-170px]">
        <svg
          className="h-[162px] md:h-[300px] xl:h-[400px]"
          viewBox="0 0 135 463"
        >
          <use
            href="/embed/assets/10-half-circles-shape-left.svg#halfCirclesShapeLeft"
            style={{
              "--svg-color": "var(--primary-color)",
              "--svg-color2": "var(--accent-color)",
            }}
          />
        </svg>
      </div>

      <div className="relative z-50 mx-auto w-full max-w-[1206px] px-[18px]">
        <div>
          <h4 className="mx-auto w-full max-w-[500px] text-center text-[28px] font-bold leading-9 text-black md:text-[32px] md:leading-10 lg:max-w-[830px] lg:text-[52px] lg:leading-[62px]">
            {services?.title}
          </h4>
        </div>

        {/* Section des services - grands écrans (grille) et petits écrans (pagination) */}
        <div className="overflow-hidden">
          <div className="mt-[30px] md:mt-[60px] lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Affichage dynamique des services basé sur activeImage */}
            {services?.items?.map((service, index) => (
              <div
                key={index}
                className={`${
                  // Sur petits écrans, un seul élément à la fois (pagination)
                  activeImage === index ? "block" : "hidden"
                } 
                // Sur grands écrans, tout est affiché en grille
                lg:block lg:w-full`}
              >
                <div className="w-full border border-solid border-[#E1E1E1]">
                  <div className="flex items-center justify-center">
                    <img
                      src={service.img}
                      alt={service.alt}
                      className="h-[222px] w-full object-contain object-center"
                    />
                  </div>
                  <div className="px-[22px] py-8 md:p-4 lg:px-8 lg:pb-[34px] lg:pt-[30px]">
                    <h4 className="mb-2 text-[22px] font-semibold leading-normal text-black md:text-lg lg:text-[22px]">
                      {service.title}
                    </h4>
                    <p className="text-base font-normal leading-6 text-black">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination (visible uniquement sur petit écran) */}
        <div className="mt-8 block md:hidden">
          <ul className="flex items-center justify-center gap-3">
            {services?.items?.map((_, index) => (
              <li
                key={index}
                className={`h-5 w-5 rounded-full cursor-pointer transition-colors border border-[#C9CECD] ${
                  activeImage === index
                    ? "bg-[var(--primary-button-bg-color)]"
                    : "bg-[#C9CECD]"
                }`}
                onClick={() => setActiveImage(index)} // Change l'image active au clic
              ></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Image du bas */}
      <div className="absolute bottom-[-80px] left-0 w-full sm:bottom-[-100px] lg:bottom-[-130px] z-10">
        <img src={bottomWave} alt="Bottom Shape" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default ArtisansSection;
