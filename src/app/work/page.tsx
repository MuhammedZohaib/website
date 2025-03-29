"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MotionWrapper from "@/components/motion-wrapper";
import SectionAnimation from "@/components/section-animation";
import StaggeredChildren from "@/components/staggered-children";

export default function Work() {
  const projects = [
    {
      title: "ASD Detection System",
      category: "AI & Healthcare",
      description:
        "Developed an advanced autism detection system leveraging deep learning and AI-driven analysis of facial expressions and speech patterns. Achieved 87% accuracy in early diagnosis prediction using a custom CNN-LSTM architecture.",
      image: "/image.jpg",
      tech: "TensorFlow, OpenCV, PyTorch, Flask, React.js",
      link: "https://github.com/MuhammedZohaib/ASD-Detection",
    },
    {
      title: "Breast Cancer Prediction",
      category: "Machine Learning",
      description:
        "Developed a predictive analytics model for breast cancer diagnosis using clinical data. Implemented advanced feature selection, hyperparameter tuning, and ensemble learning techniques, achieving 94% accuracy on test data.",
      image: "/bc-prediction.png",
      tech: "Scikit-Learn, NumPy, Pandas, XGBoost, Flask API",
      link: "https://github.com/MuhammedZohaib/Breast-Cancer-Prediction",
    },
    {
      title: "Cat-Dog-Panda Classification & Object Detection",
      category: "Computer Vision",
      description:
        "Built a deep learning pipeline for multi-class image classification and real-time object detection using YOLOv8. Integrated with PyTorch-based ResNet-18 for enhanced accuracy and deployed as a web service.",
      image: "/cnn.jpg",
      tech: "YOLOv8, PyTorch, OpenCV, Scikit-Learn, Label Studio",
      link: "#",
    },
    {
      title: "Sowing Success: Crop Selection with ML",
      category: "AI in Agriculture",
      description:
        "Designed an intelligent system for crop selection based on soil metrics and environmental factors. Used Random Forest and XGBoost for multi-class classification with 92% accuracy and feature importance analysis.",
      image: "/crop.jpg",
      tech: "Scikit-learn, Pandas, NumPy, Random Forest, XGBoost",
      link: "#",
    },
    {
      title: "Customer Churn Prediction",
      category: "AI & Business Intelligence",
      description:
        "Developed a machine learning model for predicting customer churn in a telecom company. Implemented logistic regression, decision trees, and neural networks with SMOTE for handling class imbalance, improving retention by 24%.",
      image: "/churn.jpg",
      tech: "Scikit-learn, Pandas, NumPy, Matplotlib, TensorFlow",
      link: "#",
    },
    {
      title: "Automated Data Extraction System",
      category: "NLP & Web Scraping",
      description:
        "Engineered a high-speed web scraper with NLP capabilities for structured data extraction from various sources. Implemented named entity recognition and text classification for automated data categorization.",
      image: "/scrapy.png",
      tech: "Scrapy, Selenium, NLTK, spaCy, Hugging Face Transformers",
      link: "https://github.com/MuhammedZohaib/ChurchAngel-Scraper",
    },
    {
      title: "Time Series Forecasting for Stock Prices",
      category: "Financial ML",
      description:
        "Created a time series forecasting system for stock price prediction using LSTM networks and traditional statistical methods. Incorporated sentiment analysis from financial news for improved accuracy.",
      image: "/forecasting.jpg",
      tech: "TensorFlow, ARIMA, Prophet, LSTM, NLP",
      link: "#",
    },
    {
      title: "Recommendation Engine",
      category: "Recommender Systems",
      description:
        "Built a hybrid recommendation system combining collaborative filtering and content-based approaches. Implemented matrix factorization and deep learning techniques to provide personalized recommendations.",
      image: "/recommender.jpg",
      tech: "PyTorch, Surprise, LightFM, FastAPI",
      link: "#",
    },
  ];

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
              src="/bg-img.svg"
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
              My Work
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-2xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore my portfolio of AI, Machine Learning, and Data Science
              projects, crafted with cutting-edge technologies.
            </motion.p>
          </div>
        </motion.section>

        {/* Portfolio Introduction */}
        <SectionAnimation className="py-12">
          <div className="container mx-auto px-4">
            <motion.p
              className="text-gray-300 mb-8 max-w-3xl"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              I&apos;ve built AI-driven solutions, predictive models, and data
              science applications across multiple domains. Here are some of my
              research and development highlights:
            </motion.p>
          </div>
        </SectionAnimation>

        {/* Portfolio Grid */}
        <SectionAnimation className="pb-16">
          <div className="container mx-auto px-4">
            <StaggeredChildren className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 group hover:border-primary/50 transition-all"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-2">{project.description}</p>
                    <p className="text-gray-500 text-sm mb-4">
                      <strong>Tech Stack:</strong> {project.tech}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.link}>View Project</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </StaggeredChildren>
          </div>
        </SectionAnimation>

        {/* CTA Section */}
        <SectionAnimation className="relative py-20 bg-zinc-950">
          <div className="absolute inset-0 z-0">
            <Image
              src="/bg-img.svg"
              alt="Background"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Have a Data Science Project in Mind?
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I&apos;m always open to discussing new AI, ML, and data science
              research opportunities. Let&apos;s collaborate and transform your
              data into actionable insights!
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button asChild size="lg">
                <Link href="/contact">Start a Project</Link>
              </Button>
            </motion.div>
          </div>
        </SectionAnimation>
      </div>
    </MotionWrapper>
  );
}
