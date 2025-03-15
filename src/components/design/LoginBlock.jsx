import { Link } from "react-router-dom";
import Button from "../Button";

export const LoginBlock = ({ handleClick }) => {
  return (
    <div>
      {/* Version mobile */}
      <div className="lg:hidden flex flex-col items-center space-y-4 py-4 px-6 bg-blue-50">
        <Link
          to="/register"
          onClick={handleClick}
          className="text-sm font-medium text-blue-400 transition-colors hover:text-color-1"
        >
          Créer un compte
        </Link>

        <Link to="/login">
          <Button
            onClick={handleClick}
            className="bg-transparent text-blue-400 px-6 py-3 rounded-lg border border-transparent hover:text-color-1"
          >
            Se connecter
          </Button>
        </Link>
      </div>

      {/* Version desktop */}
      <div className="hidden lg:flex lg:items-center lg:space-x-4 lg:justify-center py-4 px-6">
        <Link
          to="/register"
          className="text-sm font-medium text-blue-400 transition-colors hover:text-color-1"
        >
          Créer un compte
        </Link>

        <Link to="/login">
          <Button className="bg-transparent text-blue-400 px-6 py-3 rounded-lg border border-transparent hover:text-color-1">
            Se connecter
          </Button>
        </Link>
      </div>
    </div>
  );
};
