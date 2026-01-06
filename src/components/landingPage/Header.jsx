import { useLocation, Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { joobiLogo } from "../../assets";
import { navigation } from "../../constants";
import Button from "./Button";
import MenuSvg from "../../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { LoginBlock } from "./design/LoginBlock";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] border-b border-gray-200 bg-blue-50/90 backdrop-blur-md transition-all duration-300 ${
        openNavigation ? "bg-blue-50" : "bg-blue-50/90"
      }`}
    >
      <div className="mx-auto flex w-full items-center ">
        {/* Logo aligné à gauche */}
        <a className="block w-[10rem] lg:w-[12rem] ml-0" href="accueil">
          <Link to="/">
            <img src={joobiLogo} width={160} height={35} alt="JooBi" />
          </Link>
        </a>

        {/* Navigation */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[4rem] left-0 right-0 bottom-0 bg-blue-50 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <ul className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row lg:space-x-5 lg:px-8">
            {navigation.map((item) => (
              <li key={item.id} className="px-4 py-4 md:py-6 lg:p-0">
                <a
                  href={item.url}
                  onClick={handleClick}
                  className={`block text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 lg:text-base ${
                    item.url === pathname.hash ? "text-blue-600" : ""
                  }`}
                >
                  {item.title}
                </a>
              </li>
            ))}
            <li>
              {window.innerWidth < 1024 ? (
                <LoginBlock handleClick={handleClick} />
              ) : null}
            </li>
          </ul>

          {/* Ajout du composant HamburgerMenu ici */}
          <HamburgerMenu />
        </nav>

        {/* Affichage de la version desktop du LoginBlock */}
        {window.innerWidth >= 1024 ? <LoginBlock setOpenNavigation /> : null}

        {/* Bouton du menu mobile */}
        <Button
          className="ml-auto lg:hidden"
          px="px-2"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
