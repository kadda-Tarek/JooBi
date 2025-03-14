import React from "react";

const ProjetSection = () => {
  return (
    <section
      className="relative pb-0 pt-[26px] md:pt-[50px] xl:pt-[106px] bg-white text-black"
      id="szpt3pr"
    >
      <div className="absolute bottom-[-120px] right-0 md:bottom-[-220px] xl:bottom-[-230px]">
        <svg
          className="h-[162px] md:h-[300px] xl:h-[400px]"
          viewBox="0 0 135 463"
        >
          <use
            href="/embed/assets/10-half-circles-shape-right.svg#halfCirclesShapeRight"
            style={{
              "--svg-color": "var(--primary-color)",
              "--svg-color2": "var(--accent-color)",
            }}
          />
        </svg>
      </div>

      <div className="relative z-50 mx-auto w-full max-w-[1206px] px-[18px]">
        <div className="flex flex-col gap-8 md:flex-row md:gap-6">
          <div className="w-full md:w-5/12">
            <div className="mt-0 md:mt-7 lg:mt-[68px]">
              <h2 className="w-full max-w-full text-center text-[28px] font-bold leading-9 text-black md:max-w-[394px] md:text-left md:text-[40px] md:leading-[44px] lg:text-[52px] lg:leading-[62px]">
                Transformez vos projets avec JooBi
              </h2>
              <p className="mt-3.5 w-full max-w-full text-center text-sm font-normal leading-[22px] text-black md:mt-6 md:max-w-[470px] md:text-left md:text-base md:leading-[26px] lg:text-lg">
                Profitez d'une mise en relation simplifiée entre particuliers et
                entreprises avec des artisans qualifiés dans la plomberie,
                l'électricité, le chauffage et la climatisation.
              </p>
              <ul className="mt-4 border-t border-solid border-[#e0e0e0] pt-5 sm:pt-8 md:mt-5">
                <li className="mb-[26px]">
                  <div className="flex items-start gap-4">
                    <span className="flex w-8 items-center justify-center">
                      <i
                        className="fa-regular fa-square-check text-[28px] text-[var(--primary-color)]"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <div className="w-full max-w-[340px] flex-1">
                      <h4 className="mb-3 text-[22px] font-semibold leading-none text-black">
                        Interface Multilingue
                      </h4>
                      <p className="text-sm font-normal leading-6 text-black md:text-base">
                        Naviguez facilement entre le français, l'anglais et
                        l'arabe pour toucher un large public.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mb-[26px]">
                  <div className="flex items-start gap-4">
                    <span className="flex w-8 items-center justify-center">
                      <i
                        className="fa-regular fa-square-check text-[28px] text-[var(--primary-color)]"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <div className="w-full max-w-[340px] flex-1">
                      <h4 className="mb-3 text-[22px] font-semibold leading-none text-black">
                        Artisans de Confiance
                      </h4>
                      <p className="text-sm font-normal leading-6 text-black md:text-base">
                        Accédez à une sélection d'artisans soigneusement choisis
                        pour leur qualité de service.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-4">
                    <span className="flex w-8 items-center justify-center">
                      <i
                        className="fa-regular fa-square-check text-[28px] text-[var(--primary-color)]"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <div className="w-full max-w-[340px] flex-1">
                      <h4 className="mb-3 text-[22px] font-semibold leading-none text-black">
                        Gestion Facile des Projets
                      </h4>
                      <p className="text-sm font-normal leading-6 text-black md:text-base">
                        Comparez les artisans, lisez des avis et choisissez le
                        bon partenaire pour vos travaux.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-7/12">
            <div className="flex items-start justify-end">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/home-maintenance-13101198-10674718.png"
                className="h-full w-full object-contain"
                alt="Illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjetSection;
