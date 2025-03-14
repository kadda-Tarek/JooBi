import React from "react";

const TransformationSection = () => {
  return (
    <section
      className="relative  pt-8 md:pb-[50px] md:pt-[50px] lg:pb-[100px] bg-white "
      id="smbkhq"
    >
      <div className="absolute right-0 top-[-100px] hidden lg:block lg:top-[-160px]">
        <svg className="h-[300px] xl:h-[400px]" viewBox="0 0 135 463">
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
        <div className="flex flex-col-reverse gap-6 md:flex-row">
          <div className="mt-2.5 w-full md:mt-0 md:w-7/12">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/home-maintenance-13101195-10674715.png"
              className="h-full w-full object-contain"
              alt="Illustration"
            />
          </div>
          <div className="w-full md:w-5/12">
            <div className="mt-0 text-center md:mt-12 md:text-left lg:mt-[108px]">
              <h2 className="w-full max-w-full text-[28px] font-bold leading-9 text-black md:max-w-[394px] md:text-[40px] md:leading-[44px] lg:text-[52px] lg:leading-[62px]">
                Transformez votre quotidien grâce à JooBi
              </h2>
              <p className="mt-6 w-full max-w-full text-sm font-normal leading-[22px] text-black md:max-w-[470px] md:text-base md:leading-[26px] lg:text-lg">
                La plateforme idéale pour mettre en relation particuliers et
                entreprises avec des artisans qualifiés. Que vous ayez besoin
                d'une intervention rapide en plomberie, d'une installation
                électrique ou de travaux de climatisation, nous facilitons votre
                recherche en vous connectant à des professionnels de confiance.
              </p>
              <p className="mb-7 mt-3 w-full max-w-full text-sm font-normal leading-[22px] text-black md:mt-6 md:max-w-[470px] md:text-base md:leading-[26px] lg:mb-12 lg:text-lg">
                Profitez de notre service multilingue pour naviguer facilement
                en français, anglais ou arabe, rendant notre plateforme
                accessible à tous. Découvrez des artisans qui comprennent vos
                besoins, vous assurant ainsi une expérience adaptée et
                personnalisée.
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
