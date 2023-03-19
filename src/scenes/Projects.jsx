import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
        <a
          className="mt-5 underline hover:underline-offset-4"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Link Project
        </a>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Welcome to my software developer portfolio! As a skilled software
          developer, I have created a variety of projects that showcase my
          abilities in solving complex problems, writing efficient and clean
          code, and delivering high-quality software products. In this portfolio, you will find a diverse collection of projects that
          I have completed, both professionally and as personal projects. Each
          project includes a detailed description that highlights the
          technologies used, the challenges overcome, and the final product
          achieved.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Chat AI App"
            description="React Fullstack, Chat App. The frontend will consist of ChatEngine, Redux Toolkit for our state management, Redux Toolkit Query for making api calls, Hero icons and React Router for Navigation. For the backend we will be using Node Js as our runtime, Express Js as our backend framework, and OpenAI for Ai integration with our chat."
            link="https://github.com/Carlosaj18/Fullstack-React-Chat-AI-App/"
  
          />
          <Project
            title="Ecommerce App"
            description="React Responsive, Fullstack, Ecommerce App. We used React, Material UI, Stripe, Formik, Yup, Strapi, and Redux Toolkit to build this entire application. This application will allow you to add products into a cart, have a form to fill out information and make payments through Stripe with a backend supported by Strapi."
            link="https://github.com/Carlosaj18/Fullstack-React-Ecommerce-App"
          />

          {/* ROW 2 */}
          <Project
            title="Social Media Application"
            description="React Responsive, Fullstack MERN, Social Media Application. For frontend, we will be using Material UI, Material UI Data Grid, Nivo Charts, Redux Toolkit, Formik and Yup. For backend, we will be using Node JS, Express Js, Mongoose, and MongoDB. We will also go through how to Data Model using Entity Relationship Diagrams."
            link="https://github.com/Carlosaj18/Fullstack-React-Social-App"
          />
          <Project
            title="Admin Dashboard"
            description="React Responsive Admin Dashboard Application. We used React, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, 4 different Charts, 3 different Data Table Pages, FAQ Page, Form Page, and Calendar Integration."
            link="https://github.com/Carlosaj18/Admin-Dashboard-App"
          />
          <Project
            title="Legal Document Application"
            description="React Responsive, Fullstack, Legal Document Application. For frontend, we will be using Material UI, Material UI Data Grid, and Redux Toolkit. For backend, we will be using Node JS, Express Js, and Firebase. We will also go through how to Data Model using Entity Relationship Diagrams."
            link="https://github.com/Carlosaj18/Fullstack-React-Legal-App"
          />

          {/* ROW 3 */}
          <Project
            title="Admin Fullstack Dashboard"
            description="React Responsive, Fullstack MERN, Admin Dashboard Application. For frontend, we will be using Material UI, Material UI Data Grid, Nivo Charts, Redux Toolkit and Redux Toolkit Query. For backend, we will be using Node JS, Express Js, Mongoose, and MongoDB. We will also go through how to Data Model using Entity Relationship Diagrams as well as making aggregate calls in MongoDB."
            link="https://github.com/Carlosaj18/Fullstack-React-Admin-App"
          />
          <Project
            title="Project 6"
            description="Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt."
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
