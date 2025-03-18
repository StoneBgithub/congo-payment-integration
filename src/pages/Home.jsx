import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useInView, useAnimation } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Home() {
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

  return (
    <div className="bg-gray-50 w-full overflow-hidden">
      {/* Hero Section avec forme organique en bas */}
      <section className="bg-gray-100 py-8 sm:py-12 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 space-y-4 md:space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight"
              >
                Nous simplifions l'intégration des paiements en ligne
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm sm:text-base text-gray-600"
              >
                L'idée, c'est de simplifier la vie des développeurs, des
                startups et des entreprises qui veulent intégrer des solutions
                comme MTN Mobile Money, Airtel Money, ou d'autres moyens de
                paiement numérique. On propose un accompagnement personnalisé et
                tout ce qu'il faut pour rendre l'intégration rapide et efficace.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"
              >
                <Link
                  to="/services"
                  className="bg-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors text-center transform hover:scale-105 transition-transform duration-200"
                >
                  Nos services
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium border border-gray-300 hover:bg-gray-100 transition-colors text-center transform hover:scale-105 transition-transform duration-200"
                >
                  Contact
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full md:w-1/2 relative mt-8 md:mt-0"
            >
              {/* Conteneur pour les deux formes de pilule */}
              <div className="relative h-64 sm:h-80 md:h-96 w-full">
                {/* Première forme de pilule (plus grande) */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute top-0 right-0 w-4/5 h-full md:h-[350px]"
                  style={{
                    overflow: "hidden",
                    borderRadius: "65% 35% 60% 40% / 45% 55% 40% 60%",
                    backgroundColor: "rgb(228, 232, 250)",
                    zIndex: 1,
                  }}
                >
                  <LazyLoadImage
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Équipe de travail 1"
                    className="w-full h-full object-cover"
                    effect="blur"
                    placeholderSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiIGhlaWdodD0iMSIgd2lkdGg9IjEiPjxyZWN0IGZpbGw9IiNlNGU4ZmEiIGhlaWdodD0iMSIgd2lkdGg9IjEiLz48L3N2Zz4="
                  />
                </motion.div>

                {/* Deuxième forme de pilule (plus petite, en avant-plan) */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-0 left-0 w-3/5 h-48 sm:h-56 md:h-[250px]"
                  style={{
                    overflow: "hidden",
                    borderRadius: "40% 60% 30% 70% / 60% 30% 70% 40%",
                    backgroundColor: "#fff",
                    border: "10px solid white",
                    zIndex: 2,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <LazyLoadImage
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Équipe de travail 2"
                    className="w-full h-full object-cover"
                    effect="blur"
                    placeholderSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiIGhlaWdodD0iMSIgd2lkdGg9IjEiPjxyZWN0IGZpbGw9IiNmZmZmZmYiIGhlaWdodD0iMSIgd2lkdGg9IjEiLz48L3N2Zz4="
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Vague fluide avec SVG */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-0 left-0 right-0"
        >
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-8 sm:h-12 md:h-16 block"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="white"
            ></path>
          </svg>
        </motion.div>
      </section>

      {/* About Section */}
      <AnimatedSection className="bg-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
            <motion.div
              variants={fadeInVariants}
              custom={0}
              className="w-full md:w-1/2 mb-6 md:mb-0 overflow-hidden rounded-lg shadow-md h-64 sm:h-80 md:h-96"
            >
              <LazyLoadImage
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Équipe Intégrateur Congo"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                effect="blur"
                placeholderSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiIGhlaWdodD0iMSIgd2lkdGg9IjEiPjxyZWN0IGZpbGw9IiNlNGU4ZmEiIGhlaWdodD0iMSIgd2lkdGg9IjEiLz48L3N2Zz4="
              />
            </motion.div>
            <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
              <motion.h2
                variants={fadeInVariants}
                custom={1}
                className="text-2xl sm:text-3xl font-bold text-gray-800"
              >
                A propos de Intégrateur CG
              </motion.h2>
              <motion.p
                variants={fadeInVariants}
                custom={2}
                className="text-sm sm:text-base text-gray-600"
              >
                Nous sommes des experts en intégration de paiements numériques,
                engagés à aider les développeurs et entreprises à connecter
                facilement leurs applications aux solutions de paiement comme
                MTN Mobile Money et Airtel Money.
              </motion.p>
              <motion.div variants={fadeInVariants} custom={3}>
                <Link
                  to="/services"
                  className="inline-block bg-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors transform hover:scale-105 transition-transform duration-200"
                >
                  Nos services
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection
        className="bg-gray-100 py-8 sm:py-12 md:py-16"
        delay={0.3}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Service 1 */}
            <motion.div
              variants={fadeInVariants}
              custom={0}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-sm p-4 sm:p-6"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="bg-indigo-500 h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center mr-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  Définir vos besoins
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                Contactez-nous et expliquez vos besoins d'intégration (MTN,
                Airtel, ou autres services de paiement). Nous analysons votre
                projet et vous proposons la solution la plus adaptée.
              </p>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              variants={fadeInVariants}
              custom={1}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-sm p-4 sm:p-6"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="bg-indigo-500 h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center mr-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  Intégration personnalisée
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                Nous vous accompagnons dans l'intégration des services de
                paiement à votre application, avec un suivi technique et des
                solutions sur mesure pour garantir un processus fluide.
              </p>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              variants={fadeInVariants}
              custom={2}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-sm p-4 sm:p-6"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="bg-indigo-500 h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center mr-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  Lancer et automatiser
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                Une fois l'intégration terminée, vos paiements sont
                opérationnels ! Nous restons disponibles pour assurer la
                maintenance et optimiser vos solutions si nécessaire.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section avec nouvelle image de fond montrant des personnes collaborant */}
      {/* CTA Section avec nouvelle image de fond montrant des personnes collaborant */}
      {/* CTA Section avec nouvelle image de fond montrant des personnes collaborant */}
      <AnimatedSection
        className="py-8 sm:py-12 md:py-16 text-white relative overflow-hidden"
        delay={0.4}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(67, 56, 202, 0.5), rgba(67, 56, 202, 0.5)), url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.h2
            variants={fadeInVariants}
            custom={0}
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4"
          >
            Simplifiez l'intégration des paiements, démarrez dès aujourd'hui !
          </motion.h2>
          <motion.p
            variants={fadeInVariants}
            custom={1}
            className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto"
          >
            Intégrateur Congo : experts en intégration de paiements pour booster
            vos projets
          </motion.p>
          <motion.div
            variants={fadeInVariants}
            custom={2}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-block bg-white text-indigo-900 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Demander un devis
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default Home;
