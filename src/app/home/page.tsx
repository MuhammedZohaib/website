"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Brain,
  Database,
  LineChart,
  BarChart3,
  Network,
  Microscope,
  Code,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "@/components/motion-wrapper";
import SectionAnimation from "@/components/section-animation";
import StaggeredChildren from "@/components/staggered-children";

export default function Home() {
  // Typewriter effect using useState and useEffect
  const [text, setText] = useState("Data Science");
  const phrases = [
    "Data Science",
    "Machine Learning",
    "AI Solutions",
    "Predictive Analytics",
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typewriter effect
  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
        setText(phrases[index].substring(0, subIndex));
      },
      reverse ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, phrases]);

  // Blinking cursor effect
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <MotionWrapper>
      <div className="flex flex-col">
        {/* Hero Section */}
        <motion.section
          className="relative h-[100vh] flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Desktop Background Image */}
          <div className="absolute inset-0 z-0 hidden md:block">
            <Image
              src="/hero.svg"
              alt="Background"
              fill
              className="object-contain opacity-30"
              priority
            />
          </div>

          {/* Mobile Background Image */}
          <div className="absolute inset-0 z-0 md:hidden">
            <Image
              src="/hero-mobile.svg"
              alt="Mobile Background"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-4 z-10 text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforming Data <br />
              <span className="text-primary">
                into {text}
                <span className={`${blink ? "opacity-100" : "opacity-0"}`}>
                  _
                </span>
              </span>{" "}
              <br />
              Insights
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I&apos;m a Data Scientist and Machine Learning Engineer
              specializing in creating intelligent solutions through innovative
              algorithms and data-driven approaches.
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* About Preview Section */}
        <SectionAnimation className="relative py-16 bg-zinc-950">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/bg-img.svg"
              alt="Background"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>

          {/* Foreground Content */}
          <div className="relative container mx-auto px-4 z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2
                  className="text-3xl font-bold mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  About Me
                </motion.h2>
                <motion.p
                  className="text-gray-300 mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  I&apos;m a skilled Data Scientist with expertise in developing
                  machine learning models, statistical analysis, and data
                  visualization. With a strong foundation in both theoretical
                  concepts and practical applications, I bring a unique
                  perspective to every data challenge.
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Button variant="outline" asChild>
                    <Link href="/about">Learn More</Link>
                  </Button>
                </motion.div>
              </div>
              <motion.div
                className="relative aspect-square max-w-md w-full h-full mx-auto overflow-hidden"
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
                    layout="fill"
                    objectFit="cover"
                    className="opacity-70 rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </SectionAnimation>

        <SectionAnimation className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold mb-12 text-center"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              My Expertise
            </motion.h2>
            <StaggeredChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Machine Learning", icon: <Brain /> },
                { name: "Data Engineering", icon: <Database /> },
                { name: "Data Visualization", icon: <BarChart3 /> },
                { name: "Statistical Analysis", icon: <LineChart /> },
                { name: "Deep Learning", icon: <Network /> },
                { name: "Research & Development", icon: <Microscope /> },
                { name: "MLOps", icon: <Code /> },
                { name: "CV & LLMs", icon: <Layers /> },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-primary/50 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary text-xl">{skill.icon}</span>
                  </div>
                  <h3 className="font-medium text-lg">{skill.name}</h3>
                </div>
              ))}
            </StaggeredChildren>
          </div>
        </SectionAnimation>

        {/* Featured Projects */}
        <SectionAnimation className="py-16 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <motion.h2
                className="text-3xl font-bold"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Featured Projects
              </motion.h2>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Button variant="outline" asChild>
                  <Link href="/work">View All</Link>
                </Button>
              </motion.div>
            </div>
            <StaggeredChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "ASD Detection System",
                  description:
                    "A deep learning system for detecting Autism Spectrum Disorder (ASD) in children using speech and facial cues analysis.",
                  tech: ["Deep Learning", "Computer Vision", "TensorFlow"],
                  image: "/image.jpg",
                  link: "https://github.com/MuhammedZohaib/ASD-Detection",
                },
                {
                  name: "Breast Cancer Prediction",
                  description:
                    "A machine learning model for early breast cancer detection using clinical data with advanced feature selection techniques.",
                  tech: ["Scikit-Learn", "XGBoost", "Statistical Analysis"],
                  image: "/bc-prediction.png",
                  link: "https://github.com/MuhammedZohaib/Breast-Cancer-Prediction",
                },
                {
                  name: "Crop Selection System",
                  description:
                    "An intelligent system for optimal crop selection based on soil metrics and environmental factors using ML techniques.",
                  tech: ["Random Forest", "Data Analysis", "Agricultural AI"],
                  image: "/crop.jpg",
                  link: "#",
                },
              ].map((project, index) => (
                <Link
                  href={project.link}
                  key={index}
                  target="_blank"
                  className="group"
                >
                  <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 group-hover:border-primary/50 transition-all h-full">
                    <div className="relative aspect-video">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-zinc-800 text-gray-300 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </StaggeredChildren>
          </div>
        </SectionAnimation>

        {/* CTA Section */}
        <SectionAnimation className="py-20 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/bg-img.svg"
              alt="Background"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 z-10 relative text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Let&apos;s Solve Complex Problems Together
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Have a data challenge or ML project in mind? I&apos;d love to hear
              about it. Let&apos;s discuss how we can leverage data science to
              achieve your goals.
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
