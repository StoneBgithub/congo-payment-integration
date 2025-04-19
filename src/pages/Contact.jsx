import { useState, useRef, useEffect, memo } from "react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// ----------------- COMPOSANT PRINCIPAL -----------------
function Contact() {
  // Utilisation de clés uniques pour le premier rendu seulement
  const [mountKey] = useState(() => Math.random());

  return (
    <div className="bg-gray-50 w-full overflow-hidden">
      {/* Structure à trois sections qui ne seront jamais re-rendues après le montage initial */}
      <HeroSection key={`hero-${mountKey}`} />
      <MainSection key={`main-${mountKey}`} />
      <InfoSection key={`info-${mountKey}`} />
    </div>
  );
}

// ----------------- HERO SECTION ISOLÉE -----------------
const HeroSection = memo(() => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Fond d'image avec overlay dégradé */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
        }}
      />

      {/* Overlay avec gradient plus subtil */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-900/80 to-purple-900/80" />

      {/* Motif en grille plus subtil */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 8 0 L 0 0 0 8"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 sm:px-6 relative z-10"
      >
        <div className="text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 relative inline-block">
            Contactez-nous
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute bottom-0 left-0 h-1 bg-white rounded-full"
            />
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-6 opacity-90">
            N'hésitez pas à nous écrire pour toute demande d'information ou
            assistance.
          </p>
        </div>
      </motion.div>

      {/* Formes décoratives */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute top-20 right-[20%] w-32 h-32 rounded-full bg-white"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="absolute bottom-10 left-[15%] w-40 h-40 rounded-full bg-white"
      />
    </section>
  );
});

// ----------------- SECTION PRINCIPALE ISOLÉE -----------------
const MainSection = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-12 md:py-16 bg-white -mt-12 rounded-t-3xl relative z-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Partie visuelle avec animations - Complètement isolée */}
          <VisualElement />

          {/* Formulaire - Complètement isolé */}
          <FormContainer />
        </div>
      </div>
    </motion.section>
  );
});

// ----------------- ÉLÉMENT VISUEL ISOLÉ -----------------
const VisualElement = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full md:w-2/5 relative"
    >
      <div className="relative z-10 h-full flex items-center justify-center">
        {/* Cercle décoratif principal */}
        <div
          className="absolute w-60 h-60 md:w-72 md:h-72 rounded-full bg-indigo-100"
          style={{ filter: "blur(2px)" }}
        />

        {/* Image principale avec forme organique */}
        <div
          className="relative overflow-hidden z-20 shadow-xl"
          style={{
            borderRadius: "40% 60% 60% 40% / 40% 50% 50% 60%",
            width: "85%",
            maxWidth: "380px",
          }}
        >
          <LazyLoadImage
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            alt="Professionnel au travail"
            className="w-full h-auto"
            effect="blur"
            placeholderSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiIGhlaWdodD0iMSIgd2lkdGg9IjEiPjxyZWN0IGZpbGw9IiNlNGU4ZmEiIGhlaWdodD0iMSIgd2lkdGg9IjEiLz48L3N2Zz4="
          />
        </div>

        {/* Points décoratifs qui tournent - statiques après rendu initial */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-indigo-500"
              style={{
                top: `${50 + 45 * Math.sin((i / 8) * Math.PI * 2)}%`,
                left: `${50 + 45 * Math.cos((i / 8) * Math.PI * 2)}%`,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
});

// ----------------- CONTENEUR DE FORMULAIRE ISOLÉ -----------------
const FormContainer = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="w-full md:w-3/5 bg-white p-6 rounded-xl shadow-sm border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Envoyez-nous un message
      </h2>

      {/* Le formulaire est rendu dans un composant séparé qui gère son propre état */}
      <ContactForm />
    </motion.div>
  );
});

// ----------------- FORMULAIRE AVEC ÉTAT INDÉPENDANT ET ENVOI D'EMAIL -----------------
function ContactForm() {
  // États pour le formulaire - isolés du reste du composant
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  });
  const formRef = useRef(null);

  // Gestionnaires d'événements
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Utilisation de la méthode FormSubmit correcte - formulaire HTML direct
      if (formRef.current) {
        // Envoi du formulaire via FormSubmit
        const actionUrl = "https://formsubmit.co/integrateurcongo@gmail.com";

        // Création d'un FormData pour envoyer les données
        const formDataObj = new FormData();
        formDataObj.append("nom", formData.nom);
        formDataObj.append("prenom", formData.prenom);
        formDataObj.append("email", formData.email);
        formDataObj.append("message", formData.message);
        formDataObj.append("_captcha", "false"); // Désactiver le captcha pour les tests
        formDataObj.append(
          "_subject",
          `Nouveau message de ${formData.prenom} ${formData.nom}`
        );

        // Envoi de la requête fetch
        const response = await fetch(actionUrl, {
          method: "POST",
          body: formDataObj,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          // Réinitialisation du formulaire après envoi réussi
          setFormData({ prenom: "", nom: "", email: "", message: "" });
          setNotification({
            show: true,
            type: "success",
            message:
              "Votre message a été envoyé avec succès. Nous vous contacterons bientôt!",
          });
        } else {
          throw new Error("Erreur lors de l'envoi du formulaire");
        }
      }
    } catch (error) {
      console.error("Erreur:", error);
      setNotification({
        show: true,
        type: "error",
        message:
          "Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou nous contacter directement.",
      });
    } finally {
      setIsSubmitting(false);
      // Masquer la notification après 5 secondes
      setTimeout(
        () => setNotification({ show: false, type: "", message: "" }),
        5000
      );
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6"
      action="https://formsubmit.co/integrateurcongo@gmail.com"
      method="POST"
    >
      {/* Champs cachés pour FormSubmit */}
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_subject"
        value={`Nouveau message de ${formData.prenom} ${formData.nom}`}
      />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={window.location.href} />

      {/* Affichage des notifications */}
      <AnimatePresence>
        {notification.show && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`p-4 rounded-lg ${
              notification.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="prenom"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Prénom <span className="text-indigo-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              required
            />
            {formData.prenom && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="nom"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nom <span className="text-indigo-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              required
            />
            {formData.nom && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          E-mail <span className="text-indigo-500">*</span>
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            required
          />
          {formData.email && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Commentaire ou message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
        ></textarea>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="relative overflow-hidden px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          ) : (
            "Envoyer"
          )}
        </button>

        <div className="flex space-x-3">
          <a
            href="https://www.facebook.com/share/1Dz1S5CjHE/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors"
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
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a
            href="https://wa.me/+242069868959"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors"
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
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </a>
        </div>
      </div>
    </form>
  );
}

// ----------------- SECTION D'INFORMATION ISOLÉE -----------------
const InfoSection = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      className="py-12 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <ContactInfo />
          </div>

          <div className="w-full md:w-1/2">
            <LocationImage />
          </div>
        </div>
      </div>
    </motion.section>
  );
});

// ----------------- COMPOSANTS D'INFORMATION ISOLÉS -----------------
const ContactInfo = memo(() => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        Information de contact
      </h3>
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
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
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div>
            <h4 className="text-base font-semibold text-gray-800">Adresse</h4>
            <p className="text-gray-600">Brazzaville, Congo</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
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
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </div>
          <div>
            <h4 className="text-base font-semibold text-gray-800">WhatsApp</h4>
            <p className="text-gray-600">+242 06 986 89 59</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
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
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div>
            <h4 className="text-base font-semibold text-gray-800">Email</h4>
            <p className="text-gray-600">integrateurcongo@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
});

const LocationImage = memo(() => {
  return (
    <div className="rounded-xl overflow-hidden shadow-sm h-64 md:h-80">
      <LazyLoadImage
        src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="Bureau Intégrateur Congo"
        className="w-full h-full object-cover"
        effect="blur"
        placeholderSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiIGhlaWdodD0iMSIgd2lkdGg9IjEiPjxyZWN0IGZpbGw9IiNlNGU4ZmEiIGhlaWdodD0iMSIgd2lkdGg9IjEiLz48L3N2Zz4="
      />
    </div>
  );
});

export default Contact;
