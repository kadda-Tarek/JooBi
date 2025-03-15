import React from "react";

const FooterSection = () => {
  return (
    <div className="bg-white">
      <footer
        className="relative rounded-t-[60px] bg-[#F6F9FF] pb-9 pt-[97px] code-section"
        id="snee7d"
      >
        {/* SVG bottom-right corner */}
        <span className="absolute bottom-0 right-0 flex items-center">
          <svg viewBox="0 0 516 344" width="516" height="344">
            <use
              href="/embed/assets/10-bottom-right-corner-shape.svg#bottomRightCornerShape"
              style={{
                "--svg-color": "#1D4ED8", // Bleu pour le SVG (JooBi couleur)
                "--svg-color2": "#4B8FD4", // Autre teinte de bleu pour l'accent
              }}
              data-landingsite-gallery-type="illustration"
            ></use>
          </svg>
        </span>
        {/* Container for the footer content */}
        <div className="relative z-50 mx-auto w-full max-w-[1206px] px-[18px]">
          <div className="flex flex-wrap pb-7 md:pb-[70px] lg:flex-nowrap">
            {/* JooBi Logo and Description */}
            <div className="mb-9 w-full md:mb-6 lg:mb-0 lg:w-4/12">
              <div className="w-full max-w-full lg:max-w-[330px]">
                <a
                  href="/"
                  className="text-xl font-semibold text-[#1D4ED8] [font-family:var(--font-family-heading)] sm:text-3xl"
                >
                  <span>JooBi</span>
                </a>
                <p className="mb-6 mt-5 text-center text-sm font-normal leading-[22px] text-black md:my-4 md:text-left md:text-base md:leading-[28px] lg:mb-8 lg:mt-4">
                  JooBi est une application de mise en relation des particuliers
                  et des entreprises avec des artisans pour des prestations de
                  plomberie, électricité, chauffage et climatisation, en
                  français, anglais et arabe pour toucher un large public.
                </p>
                <form className="relative hidden w-full">
                  <input
                    type="text"
                    className="h-[58.7px] w-full rounded-[10px] border border-solid border-[#E0E7FF] bg-white pl-4 text-sm font-normal leading-none text-black shadow-[0_4_60px_0px_rgba(40,55,79,0.10)] placeholder:text-black"
                    placeholder="S'abonner pour des mises à jour"
                  />
                  <a
                    href="#"
                    className="absolute right-2 top-1/2 flex h-[46px] w-[120px] -translate-y-1/2 items-center justify-center rounded-[10px] bg-[#1D4ED8] text-sm font-semibold leading-none text-white transition-all duration-500 ease-in-out hover:bg-[#2563EB]"
                  >
                    S'abonner
                  </a>
                </form>
              </div>
            </div>
            {/* Nos Services Section */}
            <div className="w-1/2 md:w-4/12 lg:w-3/12">
              <div className="md:pl-[26px]">
                <h4 className="mb-7 text-base font-semibold leading-none text-black md:mb-[38px]">
                  Nos Services
                </h4>
                <ul>
                  <li className="mb-6">
                    <a
                      href="/services"
                      className="block text-sm font-normal leading-none text-black hover:text-[#1D4ED8] md:text-base"
                    >
                      Mise en Relation
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="/services"
                      className="block text-sm font-normal leading-none text-black hover:text-[#1D4ED8] md:text-base"
                    >
                      Services de Plomberie
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="/services"
                      className="block text-sm font-normal leading-none text-black hover:text-[#1D4ED8] md:text-base"
                    >
                      Services d'Électricité
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="block text-sm font-normal leading-none text-black hover:text-[#1D4ED8] md:text-base"
                    >
                      Services de Climatisation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* À Propos Section */}
            <div className="w-1/2 md:w-4/12 lg:w-2/12">
              <div>
                <h4 className="mb-7 text-base font-semibold leading-none text-black md:mb-[38px]">
                  À Propos
                </h4>
                <ul>
                  <li className="mb-6">
                    <a
                      href="/a-propos"
                      className="block text-sm font-normal leading-none text-black hover:text-[#1D4ED8] md:text-base"
                    >
                      Notre Mission
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="/a-propos"
                      className="block text-sm font-normal leading-none text-black hover:text-[#1D4ED8] md:text-base"
                    >
                      Notre Vision
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="/a-propos"
                      className="block text-sm font-normal leading-none text-black hover:text-[#1D4ED8] md:text-base"
                    >
                      Notre Équipe
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="block text-sm font-normal leading-none text-black hover:text-[#1D4ED8] md:text-base"
                    >
                      Nous Contacter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Informations de Contact Section */}
            <div className="w-8/2 mt-[50px] sm:w-1/2 md:mt-0 md:w-4/12 lg:w-3/12">
              <div>
                <h4 className="mb-7 text-base font-semibold leading-none text-black md:mb-[38px]">
                  Informations de Contact
                </h4>
                <p className="text-sm font-normal leading-normal text-black md:text-base">
                  123 JooBi Avenue, Suite 456, Marketing City, NC 28201
                </p>
                <ul className="mt-[28px]">
                  <li className="mb-6 flex items-center gap-2.5">
                    <i
                      className="fa-solid fa-phone text-[#1D4ED8]"
                      aria-hidden="true"
                    ></i>{" "}
                    <a
                      href="#"
                      className="block text-base font-medium leading-none text-black hover:text-[#1D4ED8]"
                    >
                      +1 (888) 123-4567
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <i
                      className="fa-solid fa-envelope text-[#1D4ED8]"
                      aria-hidden="true"
                    ></i>
                    <a
                      href="mailto:info@joobi.com"
                      className="block text-base font-medium leading-none text-black hover:text-[#1D4ED8]"
                    >
                      info@joobi.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Footer bottom */}
          <div className="border-t border-solid border-[#12141D]/[0.15] pt-[30px]">
            <p className="text-center text-sm font-normal leading-normal text-black">
              © 2025 JooBi Tous Droits Réservés
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
