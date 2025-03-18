import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useInView, useAnimation } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Services() {
  // Animation des sections au scroll
  const AnimatedSection = ({ children, className, delay = 0.2 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });
    const mainControls = useAnimation();

    useEffect(() => {
      if (isInView) {
        mainControls.start("visible");
      }
    }, [isInView, mainControls]);

    return (
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  // Animation des éléments d'interface
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Données des services
  const servicesList = [
    {
      id: 1,
      title: "Intégration de solutions de paiement",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      description:
        "Monetbill (MTN Mobile Money, Airtel Money) : Intégration des services de paiement mobile pour vos utilisateurs.",
    },
    {
      id: 2,
      title: "Accompagnement personnalisé pour l'intégration",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      description:
        "Accompagnement pour définir les besoins de votre projet, choisir les solutions adaptées et faciliter l'intégration des API de paiement, y compris les tests et la mise en production.",
    },
    {
      id: 3,
      title: "Formation et documentation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      description:
        "Formation pour les développeurs : Ateliers et sessions de formation sur l'intégration des services de paiement. Documentation API et guides pratiques : Fourniture de manuels et de tutoriels pour une intégration autonome.",
    },
    {
      id: 4,
      title: "Optimisation et automatisation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      description:
        "Automatisation et sécurisation des paiements : Mise en place de solutions pour automatiser la gestion des paiements et garantir la sécurité des transactions (cryptage, vérification, etc.).",
    },
    {
      id: 5,
      title: "Support technique continu",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      description:
        "Maintenance et assistance : Suivi, mise à jour et ajustement des systèmes de paiement, avec un service d'assistance pour résoudre les problèmes techniques liés aux paiements en ligne.",
    },
    {
      id: 6,
      title: "Tests et validation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      description:
        "Tests et simulations des paiements : Vérification de la performance des transactions et tests en environnement simulé pour garantir leur bon déroulement avant la mise en production.",
    },
  ];

  return (
    <div className="bg-gray-50 w-full overflow-hidden">
      {/* Hero Section avec fond et titre - Image centrée verticalement */}
      <section className="bg-indigo-700 py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="w-full h-full">
            <LazyLoadImage
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80"
              alt="Fond services"
              className="w-full h-full object-cover object-center"
              style={{ objectPosition: "center bottom" }}
              effect="blur"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md"
          >
            Nos services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto drop-shadow-md"
          >
            De l'intégration des paiements en ligne à l'automatisation de vos
            services, découvrez comment nous facilitons votre transformation
            digitale.
          </motion.p>
        </div>
      </section>

      {/* Section des services détaillés - Style amélioré et responsive */}
      <AnimatedSection className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeInVariants}
                custom={index * 0.2}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-indigo-500 h-full flex flex-col"
              >
                <div className="p-4 sm:p-6 flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-start mb-4">
                    {/* Fixed dimensions for icon container to prevent deformation */}
                    <div className="bg-indigo-600 flex-shrink-0 h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 shadow-md mx-auto sm:mx-0">
                      {service.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 text-center sm:text-left sm:pt-2 flex-grow">
                      {service.title}
                    </h3>
                  </div>
                  {/* Fixed left padding for description text on small screens */}
                  <p className="text-gray-600 mt-3 sm:pl-16 text-center sm:text-left">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Section Processus d'intégration - Responsive amélioré */}
      <AnimatedSection className="bg-gray-100 py-12 sm:py-16" delay={0.3}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              variants={fadeInVariants}
              custom={0}
              className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4"
            >
              Notre processus d'intégration
            </motion.h2>
            <motion.p
              variants={fadeInVariants}
              custom={1}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              Une méthodologie simple et efficace pour vous accompagner à chaque
              étape.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {/* Étape 1 */}
            <motion.div
              variants={fadeInVariants}
              custom={0}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-500 h-full flex flex-col"
            >
              {/* Fixed dimensions for numbered icon */}
              <div className="bg-indigo-600 h-14 w-14 flex-shrink-0 rounded-full flex items-center justify-center mb-5 mx-auto shadow-md">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-indigo-800">
                Consultation initiale
              </h3>
              <p className="text-gray-600 text-center flex-grow">
                Nous discutons de vos besoins spécifiques et définissons
                ensemble les objectifs de votre projet d'intégration de
                paiement.
              </p>
            </motion.div>

            {/* Étape 2 */}
            <motion.div
              variants={fadeInVariants}
              custom={1}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-500 h-full flex flex-col"
            >
              <div className="bg-indigo-600 h-14 w-14 flex-shrink-0 rounded-full flex items-center justify-center mb-5 mx-auto shadow-md">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-indigo-800">
                Développement et tests
              </h3>
              <p className="text-gray-600 text-center flex-grow">
                Nous développons la solution sur mesure et effectuons des tests
                rigoureux pour garantir son bon fonctionnement.
              </p>
            </motion.div>

            {/* Étape 3 */}
            <motion.div
              variants={fadeInVariants}
              custom={2}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-500 h-full flex flex-col"
            >
              <div className="bg-indigo-600 h-14 w-14 flex-shrink-0 rounded-full flex items-center justify-center mb-5 mx-auto shadow-md">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-indigo-800">
                Déploiement et support
              </h3>
              <p className="text-gray-600 text-center flex-grow">
                Nous mettons en production votre solution et assurons un support
                technique continu pour garantir sa performance.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Section FAQ - Responsive amélioré avec hauteur égale pour les cartes */}
      <AnimatedSection className="py-12 sm:py-16" delay={0.4}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              variants={fadeInVariants}
              custom={0}
              className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4"
            >
              Questions fréquentes
            </motion.h2>
            <motion.p
              variants={fadeInVariants}
              custom={1}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              Tout ce que vous devez savoir sur nos services d'intégration
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* FAQ 1 */}
            <motion.div
              variants={fadeInVariants}
              custom={0}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500 h-full flex flex-col"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Combien de temps prend l'intégration d'une solution de paiement
                ?
              </h3>
              <p className="text-gray-600 flex-grow">
                La durée dépend de la complexité de votre projet. Une
                intégration simple peut prendre quelques jours, tandis qu'une
                solution plus complexe peut nécessiter plusieurs semaines.
              </p>
            </motion.div>

            {/* FAQ 2 */}
            <motion.div
              variants={fadeInVariants}
              custom={1}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500 h-full flex flex-col"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Quels types de services de paiement pouvez-vous intégrer ?
              </h3>
              <p className="text-gray-600 flex-grow">
                Nous intégrons principalement MTN Mobile Money et Airtel Money,
                mais nous pouvons également travailler avec d'autres services de
                paiement selon vos besoins.
              </p>
            </motion.div>

            {/* FAQ 3 */}
            <motion.div
              variants={fadeInVariants}
              custom={2}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500 h-full flex flex-col"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Proposez-vous un support après l'intégration ?
              </h3>
              <p className="text-gray-600 flex-grow">
                Oui, nous offrons un support technique continu pour assurer le
                bon fonctionnement de votre solution de paiement et résoudre
                rapidement tout problème qui pourrait survenir.
              </p>
            </motion.div>

            {/* FAQ 4 */}
            <motion.div
              variants={fadeInVariants}
              custom={3}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500 h-full flex flex-col"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Comment garantissez-vous la sécurité des transactions ?
              </h3>
              <p className="text-gray-600 flex-grow">
                Nous mettons en place des protocoles de sécurité avancés,
                incluant le cryptage des données, la vérification des
                transactions et la protection contre la fraude.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Section CTA - Style amélioré et responsive */}
      <AnimatedSection className="py-16 sm:py-20" delay={0.5}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              {/* Barre latérale colorée */}
              <div className="w-2 md:w-2 h-full bg-indigo-300 self-stretch hidden md:block"></div>

              {/* Contenu */}
              <div className="p-6 sm:p-8 md:p-12 text-white text-center md:text-left flex-grow">
                <motion.h2
                  variants={fadeInVariants}
                  custom={0}
                  className="text-xl sm:text-2xl md:text-3xl font-bold mb-4"
                >
                  Facilitez l'intégration, commencez maintenant !
                </motion.h2>
                <motion.p
                  variants={fadeInVariants}
                  custom={1}
                  className="text-indigo-100 max-w-3xl mb-6 sm:mb-8"
                >
                  De l'intégration des paiements à la connectivité des services,
                  découvrez comment nous transformons vos idées en solutions
                  digitales simplifiées.
                </motion.p>
                <motion.div
                  variants={fadeInVariants}
                  custom={2}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="mb-4 md:mb-0"
                >
                  <Link
                    to="/contact"
                    className="inline-block bg-white text-indigo-700 px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-indigo-100 transition-colors shadow-md"
                  >
                    COMMENCER
                  </Link>
                </motion.div>
              </div>

              {/* Cercle décoratif avec dimensions fixes */}
              <div className="hidden md:flex md:flex-shrink-0">
                <div className="h-32 w-32 lg:h-40 lg:w-40 rounded-full bg-indigo-300 bg-opacity-20 mr-6 lg:mr-8 flex items-center justify-center">
                  <div className="h-20 w-20 lg:h-24 lg:w-24 rounded-full bg-indigo-200 bg-opacity-30 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 lg:h-10 lg:w-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default Services;
