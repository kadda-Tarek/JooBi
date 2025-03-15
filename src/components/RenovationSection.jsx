import React from "react";
import { bottomWave } from "../assets";

const RenovationSection = () => {
  return (
    <section
      className="relative pb-[50px] lg:pb-[225px] bg-white text-black"
      id="s3xit2w"
    >
      <div className="relative z-50 mx-auto w-full max-w-[1206px] px-[18px] pt-24">
        <div className="flex flex-col-reverse gap-8 md:flex-row md:gap-6">
          <div className="w-full md:w-7/12">
            <div className="flex items-start justify-end">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/home-maintenance-13101196-10674716.png"
                alt=""
                className="h-full w-full object-contain lg:mr-6"
              />
            </div>
          </div>
          <div className="w-full md:w-5/12">
            <div className="mt-2.5">
              <h2 className="w-full max-w-full text-center text-[28px] font-bold leading-9 text-black md:max-w-[394px] md:text-left md:text-[40px] md:leading-[44px] lg:text-[52px] lg:leading-[62px]">
                Transformez vos projets de rénovation
              </h2>
              <p className="mt-3.5 w-full max-w-full text-center text-sm font-normal leading-[22px] text-black md:mt-6 md:max-w-[470px] md:text-left md:text-base md:leading-[26px] lg:text-lg">
                Avec JooBi, trouvez rapidement des artisans spécialisés en
                plomberie, électricité, chauffage et climatisation pour tous vos
                besoins de rénovation, qu'il s'agisse d'une urgence ou d'un
                projet à long terme.
              </p>
              <ul className="mt-4 border-t border-solid border-[#e0e0e0] pt-5 md:mt-5 md:pt-8">
                <li className="mb-3.5 lg:mb-[26px]">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary-color)] text-[22px] font-semibold leading-none text-[var(--light-text-color)]">
                      1
                    </span>
                    <div className="mt-1.5 w-full max-w-[340px] flex-1">
                      <h4 className="mb-3 text-[22px] font-semibold leading-none text-black md:text-lg lg:text-[22px]">
                        Service Multilingue
                      </h4>
                      <p className="text-sm font-normal leading-6 text-black md:text-base">
                        Naviguez facilement grâce à notre interface en français,
                        anglais et arabe.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mb-3.5 lg:mb-[26px]">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary-color)] text-[22px] font-semibold leading-none text-[var(--light-text-color)]">
                      2
                    </span>
                    <div className="mt-1.5 w-full max-w-[340px] flex-1">
                      <h4 className="mb-3 text-[22px] font-semibold leading-none text-black md:text-lg lg:text-[22px]">
                        Artisans Vérifiés
                      </h4>
                      <p className="text-sm font-normal leading-6 text-black md:text-base">
                        Découvrez des professionnels qualifiés, prêts à réaliser
                        vos idées avec expertise.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary-color)] text-[22px] font-semibold leading-none text-[var(--light-text-color)]">
                      3
                    </span>
                    <div className="mt-1.5 w-full max-w-[340px] flex-1">
                      <h4 className="mb-3 text-[22px] font-semibold leading-none text-black md:text-lg lg:text-[22px]">
                        Comparaison Facile
                      </h4>
                      <p className="text-sm font-normal leading-6 text-black md:text-base">
                        Comparez les profils et lisez les avis clients pour
                        choisir le prestataire idéal.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image du bas */}
      <div className="absolute bottom-[-80px] left-0 w-full sm:bottom-[-100px] lg:bottom-[-130px] z-10">
        <img src={bottomWave} alt="Bottom Shape" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default RenovationSection;
