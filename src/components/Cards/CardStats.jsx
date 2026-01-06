import React from "react";
import PropTypes from "prop-types";

export default function CardStats({
  statSubtitle,
  statTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescription,
  statIconName,
  statIconColor,
}) {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg shadow-lg mb-6 xl:mb-0">
      <div className="flex-auto p-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full pr-4 max-w-full flex-grow">
            <h5 className="text-gray-400 uppercase font-bold text-xs">
              {statSubtitle}
            </h5>
            <span className="font-semibold text-xl text-gray-700">
              {statTitle}
            </span>
          </div>
          {/* Icône positionnée en haut à droite */}
          <div className="absolute top-4 right-4">
            <div
              className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ${statIconColor}`}
            >
              <i className={statIconName}></i>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-4">
          <span className={`${statPercentColor} mr-2`}>
            {statArrow && (
              <i
                className={`fas fa-arrow-${statArrow === "up" ? "up" : "down"}`}
              ></i>
            )}{" "}
            {statPercent}%
          </span>
          <span className="whitespace-nowrap">{statDescription}</span>
        </p>
      </div>
    </div>
  );
}

// Valeurs par défaut
CardStats.defaultProps = {
  statSubtitle: "Traffic",
  statTitle: "350,897",
  statArrow: "up",
  statPercent: "3.48",
  statPercentColor: "text-emerald-500",
  statDescription: "Since last month",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
};

// Validation des props
CardStats.propTypes = {
  statSubtitle: PropTypes.string.isRequired,
  statTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPercent: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  statPercentColor: PropTypes.string.isRequired,
  statDescription: PropTypes.string.isRequired,
  statIconName: PropTypes.string.isRequired,
  statIconColor: PropTypes.string.isRequired,
};
