import React, { useState } from "react";

const FAQFormSection = () => {
  const [faqOpen, setFaqOpen] = useState({});

  const toggleFaq = (id) => {
    setFaqOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section id="contact" className="relative -mb-5 pb-0 pt-[74px] md:pt-[113px] bg-white text-black">
      <div className="absolute bottom-[-110px] right-0 z-50 md:bottom-[-270px]">
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
      <div className="absolute left-0 top-[-50px] w-full sm:top-[-110px] lg:top-[-290px]">
        <img
          src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/6d4741aa-dbb2-4242-ee05-27a3519e2d00/publicContain"
          alt="Illustration"
          className="w-full"
        />
      </div>

      <div className="relative z-50 mx-auto w-full max-w-[1206px] px-[18px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h4 className="text-[26px] font-[var(--font-family-heading)] font-bold leading-none text-black lg:text-4xl xl:text-[42px]">
              Connectez-vous rapidement avec des artisans qualifiés
            </h4>
            <span className="relative mb-14 mt-4 block text-[28px] font-[var(--font-family-heading)] font-light italic leading-none text-gray-800 md:mb-10 md:text-[30px] lg:mb-[68px] lg:text-[38px]">
              pour vos besoins en plomberie, électricité, chauffage et
              climatisation.
              <span className="absolute bottom-0 left-[-31px] z-[-1] flex items-center">
                <img
                  src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/5d061ea5-a8e4-4a30-9af3-5aafc7fa7c00/publicContain"
                  alt="Decoration"
                  className="h-[22px] md:h-auto"
                />
              </span>
            </span>

            <form className="pr-0 md:pr-14">
              <div className="mb-[50px] flex items-start">
                <input
                  type="text"
                  name="Name"
                  className="w-full border-b border-solid border-gray-400 p-0 pb-3 text-sm font-normal leading-none text-gray-600 shadow-none outline-0 focus:border-gray-800 md:text-base"
                  placeholder="Votre Nom*"
                />
              </div>
              <div className="mb-[50px] flex items-start">
                <input
                  type="email"
                  name="Email"
                  className="w-full border-b border-solid border-gray-400 p-0 pb-3 text-sm font-normal leading-none text-gray-600 shadow-none outline-0 focus:border-gray-800 md:text-base"
                  placeholder="Votre Adresse E-mail*"
                />
              </div>
              <div className="flex items-start">
                <textarea
                  name="Message"
                  className="h-[60px] w-full resize-none border-b border-solid border-gray-400 p-0 pb-3 text-sm font-normal leading-none text-gray-600 shadow-none outline-0 focus:border-gray-800 md:text-base"
                  placeholder="Partagez votre message ou question*"
                />
              </div>
              <div className="mt-8 md:mt-11">
                <button
                  type="submit"
                  className="flex h-[52px] items-center justify-center rounded-full bg-blue-600 px-8 text-sm font-medium leading-none text-white transition-all duration-500 ease-in-out hover:bg-blue-700 md:h-11 md:text-base lg:h-[52px]"
                >
                  Envoyer un Message
                </button>
              </div>
            </form>
          </div>

          <div>
            <div className="lg:pl-8">
              {[
                "Comment JooBi facilite-t-il la mise en relation ?",
                "Quels types de services sont proposés ?",
                "Comment puis-je comparer les artisans ?",
                "Quelles mesures prenez-vous pour garantir la qualité ?",
                "Comment dois-je commencer ?",
              ].map((question, index) => (
                <div
                  key={index}
                  className="w-full border-b border-solid border-gray-400 p-0 py-6 text-base font-normal leading-none text-gray-600 shadow-none md:py-[33px]"
                >
                  <button
                    className="flex w-full items-center justify-between text-left text-base font-bold leading-none text-black lg:text-xl xl:text-2xl"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{question}</span>
                    <span className="flex w-6 items-center">
                      <i
                        className={`fa-solid fa-angle-${
                          faqOpen[index] ? "up" : "down"
                        } text-lg text-black`}
                      />
                    </span>
                  </button>
                  {faqOpen[index] && (
                    <div className="mt-5">
                      <p className="text-left text-sm font-normal leading-[22px] text-black md:text-base md:leading-6 lg:leading-[30px]">
                        {/* Add your answer here */}
                        La réponse à la question sera ici.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQFormSection;
