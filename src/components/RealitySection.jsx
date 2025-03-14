import React from 'react';

const RealitySection = () => {
  return (
    <section className="relative pb-12 pt-[250px] md:pb-[100px] bg-white text-black" id="ss1j1o9">
      <div className="absolute top-[-120px] w-full">
        <img
          src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/6d4741aa-dbb2-4242-ee05-27a3519e2d00/publicContain"
          alt=""
          className="w-full"
          data-dont-replace=""
        />
      </div>
      <div className="relative z-50 mx-auto w-full max-w-[1206px] px-[18px]">
        <div className="flex flex-col gap-8 md:flex-row md:gap-6">
          <div className="w-full md:w-5/12">
            <div className="md:mt-[108px]">
              <h2 className="w-full max-w-full text-center text-[28px] font-bold leading-9 md:max-w-[394px] md:text-left md:text-[40px] md:leading-[44px] lg:text-[52px] lg:leading-[62px]">
                Transformez vos projets en réalité avec JooBi
              </h2>
              <p className="mt-3.5 w-full max-w-full text-center text-sm font-normal leading-[22px] md:mt-6 md:max-w-[470px] md:text-left md:text-base md:leading-[26px] lg:text-lg">
                Notre plateforme vous connecte instantanément avec des artisans qualifiés en plomberie, électricité, chauffage et climatisation. Besoin d'une intervention d'urgence ? JooBi garantit un accès rapide à des professionnels fiables qui comprennent vos besoins spécifiques.
              </p>
              <p className="mb-6 mt-3.5 w-full max-w-full text-center text-sm font-normal leading-[22px] md:mb-12 md:mt-6 md:max-w-[470px] md:text-left md:text-base md:leading-[26px] lg:text-lg">
                Grâce à notre interface multilingue, disponible en français, anglais et arabe, nos services sont accessibles à un large public. Explorez notre réseau d'artisans triés sur le volet, lisez des avis authentiques et choisissez le partenaire idéal pour vos projets.
              </p>
              <ul className="flex items-center justify-center md:justify-start">
                <li>
                  <a
                    href="/contact"
                    className="flex h-[52px] w-[170px] items-center justify-center rounded-full bg-[var(--primary-color)] text-sm font-medium leading-none text-white transition-all duration-500 ease-in-out hover:bg-[var(--primary-button-hover-bg-color)] md:h-11 md:w-[155px] md:text-base lg:h-[52px] lg:w-[170px]"
                  >
                    Contactez-nous
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-7/12">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/home-maintenance-13101197-10674717.png"
              alt=""
              className="ml-0 h-full w-full object-contain xl:ml-10"
              data-landingsite-gallery-type="illustration"
              data-media="{&quot;id&quot;:&quot;2da20e80-a564-11ef-8539-0242ac140003&quot;,&quot;src&quot;:&quot;iconscout&quot;,&quot;type&quot;:&quot;illustration&quot;}"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealitySection;
