import React from "react";
import { bottomWave, circlesShape } from "../assets";

const ArtisansSection = () => {
  return (
    <section
      className="relative pb-[50px] pt-[135px] md:pt-[160px] lg:pb-[100px] bg-white text-black"
      id="avantages"
    >
      {/* Image du bas */}
      <div className="absolute bottom-[-80px] left-0 w-full sm:bottom-[-100px] lg:bottom-[-130px]">
        <img src={bottomWave} alt="Bottom Shape" className="w-full h-auto" />
      </div>

      {/* SVG en Background gauche */}
      <div className="absolute left-0 top-10 md:-top-20 lg:top-[-170px] w-[135px] h-[463px]">
        <img
          src={circlesShape}
          alt="Half Circles Left"
          className="h-[162px] md:h-[300px] xl:h-[400px]"
        />
      </div>
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
            Découvrez la simplicité de la mise en relation avec des artisans
            qualifiés grâce à JooBi
          </h4>
        </div>

        <div className="overflow-hidden">
          <div className="mt-[30px] flex transition-transform duration-500 ease-in-out md:mt-[60px] md:grid md:grid-cols-3 md:gap-2 lg:gap-8">
            <div className="relative flex w-full flex-shrink-0 flex-grow bg-white px-1">
              <div className="w-full border border-solid border-[#E1E1E1]">
                <div className="flex items-center justify-center">
                  <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/home-maintenance-13101201-10674721.png"
                    alt="Comparaison des artisans"
                    className="h-[222px] w-full object-contain object-center"
                  />
                </div>
                <div className="px-[22px] py-8 md:p-4 lg:px-8 lg:pb-[34px] lg:pt-[30px]">
                  <h4 className="mb-2 text-[22px] font-semibold leading-normal text-black md:text-lg lg:text-[22px]">
                    Comparaison des artisans
                  </h4>
                  <p className="text-base font-normal leading-6 text-black">
                    Nous vous permettons de comparer les artisans, de lire des
                    avis clients et de choisir celui qui correspond le mieux à
                    vos attentes.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex w-full flex-shrink-0 flex-grow bg-white px-1">
              <div className="w-full border border-solid border-[#E1E1E1]">
                <div className="flex items-center justify-center">
                  <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/home-maintenance-13101200-10674720.png"
                    alt="Service Multilingue"
                    className="h-[222px] w-full object-contain object-center"
                  />
                </div>
                <div className="px-[22px] py-8 md:p-4 lg:px-8 lg:pb-[34px] lg:pt-[30px]">
                  <h4 className="mb-2 text-[22px] font-semibold leading-normal text-black md:text-lg lg:text-[22px]">
                    Service Multilingue
                  </h4>
                  <p className="text-base font-normal leading-6 text-black">
                    Grâce à notre service en français, anglais et arabe, nous
                    garantissons un accès à notre plateforme pour tous.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex w-full flex-shrink-0 flex-grow bg-white px-1">
              <div className="w-full border border-solid border-[#E1E1E1]">
                <div className="flex items-center justify-center">
                  <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/home-maintenance-13101203-10674723.png"
                    alt="Planifiez vos projets"
                    className="h-[222px] w-full object-contain object-center"
                  />
                </div>
                <div className="px-[22px] py-8 md:p-4 lg:px-8 lg:pb-[34px] lg:pt-[30px]">
                  <h4 className="mb-2 text-[22px] font-semibold leading-normal text-black md:text-lg lg:text-[22px]">
                    Planifiez vos Projets
                  </h4>
                  <p className="text-base font-normal leading-6 text-black">
                    Avec JooBi, vous pouvez facilement planifier vos projets,
                    demander des devis et entrer en contact avec des artisans de
                    confiance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 block md:hidden">
          <ul className="flex items-center justify-center gap-3">
            <li className="h-5 w-5 rounded-full cursor-pointer transition-colors border border-[#C9CECD] bg-[var(--primary-button-bg-color)]"></li>
            <li className="h-5 w-5 rounded-full cursor-pointer transition-colors border border-[#C9CECD] bg-[#C9CECD]"></li>
            <li className="h-5 w-5 rounded-full cursor-pointer transition-colors border border-[#C9CECD] bg-[#C9CECD]"></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ArtisansSection;
