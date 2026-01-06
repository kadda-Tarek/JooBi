import React from "react";

export default function Footer() {
  return (
    <footer className="py-4 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <hr className="mb-4 border-gray-200" />
        <div className="flex flex-wrap items-center justify-between text-gray-500 text-sm">
          <p className="w-full md:w-auto text-center md:text-left">
            © {new Date().getFullYear()} JooBi. Tous droits réservés.
          </p>
          <ul className="flex flex-wrap gap-4 justify-center md:justify-end">
            <li>
              <a href="/about" className="hover:text-gray-700">
                À propos
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gray-700">
                Blog
              </a>
            </li>
            <li>
              <a href="/legal" className="hover:text-gray-700">
                Mentions légales
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
