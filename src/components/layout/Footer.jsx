import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="bg-blue-500 w-2 h-6 mr-2 rounded"></span>
              Integrateur Congo
            </h3>
            <p className="text-gray-400">
              Experts en intégration de paiements pour booster vos projets.
            </p>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-gray-300">
                Suivez-nous
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/1Dz1S5CjHE/?mibextid=wwXIfr"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://wa.me/242069868959"
                  className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.497 3.503C18.287 1.294 15.297 0 12.12 0C5.488 0 0.102 5.387 0.102 12.018c0 2.11.547 4.177 1.594 6.008l-1.594 5.87 6.04-1.584c1.765.966 3.76 1.476 5.778 1.476h.005c6.63 0 12.02-5.39 12.02-12.02 0-3.21-1.236-6.22-3.448-8.465zM12.12 22.005h-.004c-1.792 0-3.551-.483-5.082-1.396l-.365-.217-3.782.992 1.01-3.69-.236-.379c-1.002-1.591-1.525-3.426-1.525-5.297 0-5.52 4.488-10.007 10.01-10.007 2.663 0 5.173 1.04 7.057 2.926 1.887 1.885 2.928 4.396 2.927 7.06-.002 5.52-4.491 10.008-10.01 10.008zm5.492-7.493c-.303-.152-1.784-.88-2.06-.98-.275-.103-.476-.152-.676.15-.202.303-.78.982-.954 1.181-.175.2-.35.226-.652.075-.302-.15-1.275-.47-2.432-1.497-.897-.8-1.507-1.787-1.682-2.088-.174-.3-.018-.465.132-.616.134-.133.3-.35.45-.524.148-.175.198-.3.297-.502.1-.2.05-.376-.025-.526-.075-.15-.675-1.63-.927-2.23-.242-.583-.49-.505-.674-.514-.175-.01-.373-.01-.574-.01-.2 0-.526.075-.802.376-.275.302-1.05 1.026-1.05 2.505 0 1.479 1.075 2.91 1.225 3.11.148.2 2.105 3.206 5.097 4.487.714.306 1.272.49 1.705.635.726.231 1.39.198 1.912.12.580-.08 1.785-.73 2.037-1.434.25-.704.25-1.307.176-1.434-.076-.126-.277-.202-.578-.352z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="bg-purple-500 w-2 h-6 mr-2 rounded"></span>
              Liens rapides
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-primary flex items-center transition-transform duration-300 hover:translate-x-1"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary flex items-center transition-transform duration-300 hover:translate-x-1"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  Nos services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-primary flex items-center transition-transform duration-300 hover:translate-x-1"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="bg-pink-500 w-2 h-6 mr-2 rounded"></span>
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <svg
                  className="w-5 h-5 mr-2 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                integrateurcongo@gmail.com
              </li>
              <li className="flex items-center text-gray-400">
                <svg
                  className="w-5 h-5 mr-2 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <a href="tel:+242069868959" className="hover:text-primary">
                  +242 06 986 89 59
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <svg
                  className="w-5 h-5 mr-2 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                Brazzaville, République du Congo
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>© 2025 Integrateur Congo. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm">
              Conçu avec <span className="text-red-500">❤</span> pour le Congo
            </p>
          </div>
        </div>
      </div>
      {/* Effet de dégradé subtil */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent opacity-20"></div>
    </footer>
  );
}

export default Footer;
