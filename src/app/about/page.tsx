"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MotionWrapper from "@/components/motion-wrapper";
import SectionAnimation from "@/components/section-animation";
import StaggeredChildren from "@/components/staggered-children";

export default function About() {
  return (
    <MotionWrapper>
      <div className="flex flex-col">
        {/* Hero Section */}
        <motion.section
          className="relative h-[40vh] flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero.svg"
              alt="Background"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="container mx-auto px-4 z-10">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Me
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-2xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Passionate about data science, machine learning, and solving
              complex problems.
            </motion.p>
          </div>
        </motion.section>

        {/* About Content */}
        <SectionAnimation className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                className="relative aspect-square max-w-md mx-full"
                initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="absolute inset-0 bg-primary/20 rounded-lg -rotate-6"></div>
                <div className="absolute inset-0 bg-zinc-900 rounded-lg border border-primary/50 overflow-hidden">
                  <Image
                    src="/headshot.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <div>
                <motion.h2
                  className="text-3xl font-bold mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Who I Am
                </motion.h2>
                <motion.p
                  className="text-gray-300 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  I&apos;m a data scientist and machine learning engineer with a
                  passion for extracting meaningful insights from complex
                  datasets. With expertise in statistical analysis, predictive
                  modeling, and deep learning, I develop intelligent solutions
                  that drive decision-making and innovation.
                </motion.p>
                <motion.p
                  className="text-gray-300 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  My journey in the world of data science began with a strong
                  foundation in mathematics and computer science, which evolved
                  into a fascination with how algorithms can learn from data to
                  solve real-world problems.
                </motion.p>
                <motion.p
                  className="text-gray-300"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  I believe in a research-driven approach to data science,
                  ensuring that every model and analysis is grounded in solid
                  methodology while delivering practical, actionable results.
                </motion.p>
              </div>
            </div>

            {/* Journey Section */}
            <motion.h2
              className="text-3xl font-bold mb-12 text-center"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              My Journey
            </motion.h2>
            <div className="space-y-16">
              {[
                {
                  number: "01",
                  title: "Data Analysis",
                  content:
                    "My approach to data analysis combines statistical rigor with creative exploration. I specialize in transforming raw data into meaningful insights through advanced statistical techniques, exploratory data analysis, and visualization methods that reveal patterns and trends not immediately apparent.",
                },
                {
                  number: "02",
                  title: "Machine Learning",
                  content:
                    "I develop sophisticated machine learning models that learn from data to make predictions, identify patterns, and automate decision processes. My expertise spans supervised and unsupervised learning, ensemble methods, and deep learning architectures tailored to specific problem domains.",
                },
                {
                  number: "03",
                  title: "Research & Development",
                  content:
                    "Innovation drives my approach to R&D in data science. I stay at the forefront of ML research, implementing and adapting cutting-edge algorithms to solve complex problems. My work involves experimental design, hypothesis testing, and iterative refinement to develop novel solutions.",
                },
                {
                  number: "04",
                  title: "MLOps & Deployment",
                  content:
                    "Bridging the gap between development and production is crucial for ML success. I implement robust MLOps practices including version control for models and data, automated testing, continuous integration, and monitoring systems that ensure models perform reliably in production environments.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="grid md:grid-cols-5 gap-6 items-start"
                  initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  <div className="md:col-span-1">
                    <div className="text-7xl font-bold text-primary/80">
                      {step.number}
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-300">{step.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionAnimation>

        {/* Skills Section */}
        <SectionAnimation className="py-16 bg-zinc-950">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold mb-12 text-center"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Skills & Expertise
            </motion.h2>
            <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Machine Learning",
                  skills: [
                    "Supervised Learning",
                    "Unsupervised Learning",
                    "Reinforcement Learning",
                    "Ensemble Methods",
                    "Feature Engineering",
                    "Model Evaluation",
                    "Hyperparameter Tuning",
                  ],
                },
                {
                  category: "Deep Learning",
                  skills: [
                    "Neural Networks",
                    "Convolutional Networks (CNNs)",
                    "Recurrent Networks (RNNs)",
                    "Transformers",
                    "GANs",
                    "Transfer Learning",
                    "Computer Vision",
                  ],
                },
                {
                  category: "Data Engineering",
                  skills: [
                    "ETL Pipelines",
                    "Data Warehousing",
                    "Big Data Processing",
                    "SQL & NoSQL Databases",
                    "Data Cleaning",
                    "Feature Stores",
                    "Data Versioning",
                  ],
                },
                {
                  category: "Programming & Tools",
                  skills: [
                    "Python",
                    "R",
                    "SQL",
                    "TensorFlow",
                    "PyTorch",
                    "Scikit-learn",
                    "Pandas & NumPy",
                  ],
                },
                {
                  category: "Visualization & Communication",
                  skills: [
                    "Matplotlib",
                    "Seaborn",
                    "Plotly",
                    "Tableau",
                    "Power BI",
                    "Technical Writing",
                    "Data Storytelling",
                  ],
                },
                {
                  category: "MLOps & Deployment",
                  skills: [
                    "Model Versioning",
                    "CI/CD for ML",
                    "Docker",
                    "Kubernetes",
                    "Model Monitoring",
                    "Cloud Deployment",
                    "API Development",
                  ],
                },
              ].map((skillGroup, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 p-6 rounded-lg border border-zinc-800"
                >
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="text-gray-300">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </StaggeredChildren>
          </div>
        </SectionAnimation>
      </div>
    </MotionWrapper>
  );
}
