import React from "react";
import { heroShape, bottomWave, circlesShape } from "../assets";

const HeroSection = () => {
  return (
    <section
      id="accueil"
      className="relative bg-white pt-[80px] py-11 pb-48 md:pb-[200px] flex items-center justify-center"
    >
      {/* SVG en Background gauche */}
      <div className="absolute left-0 top-10 md:-top-20 lg:top-[-170px] w-[135px] h-[463px]">
        <img
          src={circlesShape}
          alt="Half Circles Left"
          className="h-[162px] md:h-[300px] xl:h-[400px]"
        />
      </div>

      {/* SVG en Background côté droit */}
      <div className="absolute right-0 bottom-0 top-0 w-[359px] h-[600px] md:w-[400px] md:h-[625px] lg:w-[650px] lg:h-[700px]">
        <img
          src={heroShape}
          alt="Background Shape"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenu principal */}
      <div className="relative z-20 mx-auto w-full max-w-[1206px] px-[18px] grid grid-cols-1 md:grid-cols-2 gap-[70px] sm:gap-14 md:gap-6">
        {/* Texte */}
        <div className="flex flex-col justify-center text-center md:pt-8 md:text-left">
          <h1 className="text-[34px] font-bold text-gray-900 leading-9 text-[var(--dark-text-color)] md:max-w-[534px] md:text-[40px] md:leading-[50px] lg:text-[44px] xl:text-[60px] xl:leading-[65px]">
            Transformez votre espace de vie avec des artisans qualifiés
          </h1>
          <p className="mb-6 mt-3.5 text-sm font-normal text-gray-900 leading-[22px] text-[var(--dark-text-color)] md:mb-8 md:mt-6 md:max-w-[470px] md:text-base md:leading-6 lg:text-lg lg:leading-[30px] xl:mb-12 xl:text-xl">
            JooBi facilite la connexion entre particuliers et professionnels,
            vous permettant de trouver rapidement des experts en plomberie,
            électricité, chauffage et climatisation. Bénéficiez d'un service
            multilingue en français, anglais et arabe, garantissant une
            accessibilité à un large public.
          </p>
          <ul className="flex items-center justify-center md:justify-start">
            <li>
              <a
                href="/contact"
                className="flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium leading-none px-6 transition-all duration-300 ease-in-out hover:bg-blue-500 w-[160px] h-[50px] md:w-[170px] md:h-[52px] lg:w-[180px] lg:h-[55px]"
              >
                Contactez-nous
              </a>
            </li>
          </ul>
        </div>

        {/* Vidéo */}
        <div>
          <video
            src="https://cdnl.iconscout.com/lottie/premium/thumb/plumber-repairing-washing-machine-10459941-8482299.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-contain"
          ></video>
        </div>
      </div>

      {/* Image du bas */}
      <div className="absolute bottom-[-80px] left-0 w-full sm:bottom-[-100px] lg:bottom-[-130px]">
        <img src={bottomWave} alt="Bottom Shape" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
