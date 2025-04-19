import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const location = useLocation();

  // Effet pour remonter en haut de la page lors du changement de route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const sticky = header.offsetTop + 100; // Déclencher après avoir dépassé de 100px
    setHeaderHeight(header.offsetHeight);

    const handleScroll = () => {
      if (window.pageYOffset > sticky) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Détecter la route active
    const path = window.location.pathname;
    setActiveLink(path);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile quand l'écran devient plus grand
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Empêcher le défilement du corps quand le menu mobile est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Gestion du clic en dehors du menu pour le fermer
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest('button[aria-label="Menu principal"]')
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Piéger le focus à l'intérieur du menu pour l'accessibilité
  useEffect(() => {
    if (!isMenuOpen || !menuRef.current) return;

    const menuElement = menuRef.current;

    const focusableElements = menuElement.querySelectorAll(
      "a[href], button, textarea, input, select"
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus sur le premier élément quand le menu s'ouvre
    setTimeout(() => {
      firstElement.focus();
    }, 100);

    function handleTabKey(e) {
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }

      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    menuElement.addEventListener("keydown", handleTabKey);
    return () => menuElement.removeEventListener("keydown", handleTabKey);
  }, [isMenuOpen]);

  const menuItems = [
    { title: "Accueil", path: "/" },
    { title: "Nos services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];

  // Définition des styles CSS pour l'animation slideDown
  const slideDownKeyframes = `
    @keyframes slideDown {
      0% {
        transform: translateY(-100%);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
    .animate-slideDown {
      animation: slideDown 0.5s ease forwards;
    }
  `;

  // Définition des styles CSS pour noscript
  const noscriptStyles = `
    .mobile-menu {
      display: none !important;
    }
    @media (max-width: 767px) {
      header nav:not(.mobile-menu) {
        display: block !important;
      }
    }
  `;

  return (
    <>
      {/* Injecter les styles via une balise style standard */}
      <style>{slideDownKeyframes}</style>

      <header
        ref={headerRef}
        id="site-header"
        className={`w-full transition-all duration-500 ${
          isSticky
            ? "fixed top-0 left-0 right-0 shadow-lg bg-white transform-gpu animate-slideDown z-20"
            : "relative bg-white shadow-sm"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6">
          <Link
            to="/"
            className="flex flex-col items-center relative group z-10"
            onClick={() => setActiveLink("/")}
          >
            <div className="text-xl sm:text-2xl font-bold tracking-tight flex items-center">
              <span className="relative overflow-hidden inline-block">
                <span className="inline-block transform transition-transform duration-300 group-hover:-translate-y-full">
                  Integrateur
                </span>
                <span className="absolute top-0 left-0 inline-block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-indigo-600">
                  Integrateur
                </span>
              </span>
              <span className="text-indigo-600 transition-colors">.</span>
            </div>
            <div className="text-xs sm:text-sm uppercase tracking-widest text-gray-600 relative overflow-hidden">
              <span className="inline-block transform transition-transform duration-300 group-hover:-translate-y-full">
                CONGO
              </span>
              <span className="absolute top-0 left-0 inline-block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-indigo-600">
                CONGO
              </span>
            </div>
          </Link>

          {/* Menu pour écrans moyens et grands */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.path} className="relative group">
                  <Link
                    to={item.path}
                    className={`transition-colors hover:text-indigo-600 py-2 px-1 block ${
                      activeLink === item.path
                        ? "text-indigo-600 font-medium"
                        : "text-gray-700"
                    }`}
                    onClick={() => setActiveLink(item.path)}
                  >
                    {item.title}
                    <span
                      className={`absolute left-0 bottom-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
                        activeLink === item.path
                          ? "scale-x-100 bg-indigo-600"
                          : "scale-x-0 bg-indigo-400 group-hover:scale-x-100"
                      }`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bouton menu avancé pour mobile */}
          <button
            className="md:hidden relative z-50 w-12 h-12 flex items-center justify-center rounded-full bg-indigo-50 hover:bg-indigo-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu principal"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-6 relative flex items-center justify-center">
              <span
                className={`absolute block w-5 h-0.5 bg-indigo-600 transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                className={`absolute block w-5 h-0.5 bg-indigo-600 transition-all duration-200 ease-in-out ${
                  isMenuOpen ? "opacity-0 translate-x-4" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute block w-5 h-0.5 bg-indigo-600 transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </header>

      {/* Spacer pour éviter les sauts de contenu */}
      {isSticky && <div style={{ height: `${headerHeight}px` }} />}

      {/* Menu mobile avec position fixe constante et fond opaque - DÉPLACÉ EN DEHORS DU HEADER */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            className="fixed inset-0 bg-white z-50 md:hidden flex flex-col mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation principal"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{
              duration: 0.4,
              ease: [0.25, 1, 0.5, 1],
              willChange: "transform, opacity",
            }}
            style={{
              backgroundColor: "white",
              top: 0, // S'assure que le menu commence en haut de l'écran quelle que soit la position du header
            }}
          >
            {/* Bouton de fermeture en haut */}
            <div className="absolute top-4 right-4 z-50">
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Fermer le menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Fond décoratif sans transparence */}
            <div
              className="absolute inset-0 bg-white"
              style={{ opacity: 1 }}
            ></div>
            <div
              className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white"
              style={{ opacity: 1 }}
            ></div>

            <div className="pt-24 pb-6 px-8 h-full flex flex-col justify-center relative z-10">
              <nav className="flex-1 flex items-center justify-center">
                <ul className="flex flex-col space-y-12 w-full max-w-xs">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + index * 0.15,
                        duration: 0.4,
                        willChange: "transform, opacity",
                      }}
                    >
                      <Link
                        to={item.path}
                        className={`text-3xl font-medium block transition-colors relative overflow-hidden group ${
                          activeLink === item.path
                            ? "text-indigo-600"
                            : "text-gray-800"
                        }`}
                        onClick={() => {
                          setActiveLink(item.path);
                          setIsMenuOpen(false);
                        }}
                      >
                        <span className="relative z-10 flex items-center">
                          {item.title}
                          {activeLink === item.path && (
                            <motion.span
                              className="ml-2 inline-block"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </motion.span>
                          )}
                        </span>

                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-300 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>

                        <motion.span
                          className="absolute left-0 top-0 bottom-0 w-full bg-indigo-50 -z-10 origin-left"
                          initial={{ scaleX: 0 }}
                          animate={{
                            scaleX: activeLink === item.path ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        ></motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Bouton de fermeture supplémentaire pour plus d'accessibilité */}
              <motion.button
                className="mt-8 mx-auto px-6 py-3 rounded-full bg-indigo-100 text-indigo-600 font-medium hover:bg-indigo-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                Fermer le menu
              </motion.button>

              {/* Image décorative */}
              <motion.div
                className="absolute bottom-12 right-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                aria-hidden="true"
              >
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-400"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-400"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-400"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Solution de repli en cas de désactivation de JavaScript */}
      <noscript>
        <style>{noscriptStyles}</style>
      </noscript>
    </>
  );
}

export default Header;
