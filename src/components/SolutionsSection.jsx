import { solutions } from "../constants";
import { backgroundWaveShape, circlesShape } from "../assets";

const SolutionsSection = () => {
  return (
    <section id="services" className="relative bg-white py-[50px] xl:pb-[106px]">
      {/* Background SVG */}
      <span className="absolute left-0 top-[140px] flex h-full w-full items-center">
        <img
          src={backgroundWaveShape}
          alt="Background Wave"
          className="h-full w-full object-cover object-center md:h-auto"
        />
      </span>

      {/* SVG en Background gauche */}
      <div className="absolute left-0 top-10 md:-top-20 lg:top-[-170px] w-[135px] h-[463px]">
        <img
          src={circlesShape}
          alt="Half Circles Left"
          className="h-[162px] md:h-[300px] xl:h-[400px]"
        />
      </div>

      {/* Contenu principal */}
      <div className="relative z-50 mx-auto w-full max-w-[1206px] px-[18px] text-center">
        <h4 className="mx-auto max-w-[570px] text-[28px] font-bold leading-9 text-gray-900 md:text-[40px] md:leading-[44px] lg:text-[52px] lg:leading-[62px]">
          {solutions?.title}
        </h4>
        <span className="absolute left-0 top-[140px] flex h-full w-full items-center">
          <img
            src={backgroundWaveShape}
            alt="Background Wave"
            className="h-full w-full object-cover object-center md:h-auto"
          />
        </span>

        {/* Liste des solutions */}
        <div className="mx-auto mt-9 grid w-full max-w-[976px] gap-5 md:mt-14 md:grid-cols-2 md:gap-10">
          {solutions?.list?.map((solution, index) => (
            <div
              key={index}
              className="relative group flex items-start gap-4 rounded-[20px] border border-gray-300 bg-white p-8 shadow-md md:p-6 lg:pb-9 lg:pl-8 lg:pr-12 lg:pt-8"
            >
              <span className="flex w-8 items-center justify-center">
                <i className="fa-regular fa-square-check text-[28px] text-blue-500" />
              </span>
              <div className="w-full flex-1 max-w-[340px]">
                <h4 className="mb-4 text-[22px] font-semibold text-gray-900">
                  {solution.title}
                </h4>
                <p className="text-base text-gray-700">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
