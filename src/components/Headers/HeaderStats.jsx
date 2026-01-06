import React from "react";

// components
import CardStats from "../Cards/CardStats";

export default function HeaderStats() {
  const stats = [
    {
      statSubtitle: "En cours",
      statTitle: "2",
      statArrow: "up",
      statPercent: "3.48",
      statPercentColor: "text-emerald-500", // Couleur pour le pourcentage
      statDescription: "Depuis une semaine",
      statIconName: "far fa-chart-bar",
      statIconColor: "bg-green-500", // Couleur de l'icône
    },
    {
      statSubtitle: "A venir",
      statTitle: "16",
      statArrow: "down",
      statPercent: "3.48",
      statPercentColor: "text-red-500", // Couleur pour le pourcentage
      statDescription: "Depuis une semaine",
      statIconName: "fas fa-chart-pie",
      statIconColor: "bg-pink-500", // Couleur de l'icône
    },
    {
      statSubtitle: "Terminés",
      statTitle: "22",
      statArrow: "down",
      statPercent: "1.10",
      statPercentColor: "text-orange-500", // Couleur pour le pourcentage
      statDescription: "Depuis une semaine",
      statIconName: "fas fa-users",
      statIconColor: "bg-sky-500", // Couleur de l'icône
    },
    {
      statSubtitle: "Annulés",
      statTitle: "0",
      statArrow: "up",
      statPercent: "12",
      statPercentColor: "text-emerald-500", // Couleur pour le pourcentage
      statDescription: "Depuis une semaine",
      statIconName: "fas fa-percent",
      statIconColor: "bg-pink-500", // Couleur de l'icône
    },
  ];

  return (
    <div className="relative bg-sky-600 md:pt-24 pb-24 pt-12">
      <div className="px-4 md:px-10 mx-auto w-full">
        <div className="flex flex-wrap">
          {stats.map((stat, index) => (
            <div key={index} className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <CardStats {...stat} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
