"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import MotionWrapper from "@/components/motion-wrapper";
import SectionAnimation from "@/components/section-animation";
import StaggeredChildren from "@/components/staggered-children";

import {
  User,
  Grid,
  MousePointerClick,
  Brush,
  Layout,
  PenTool,
  Type,
  TabletSmartphone,
  Code,
  Server,
  Globe,
  ShoppingCart,
  Smartphone,
  Layers,
  CheckCircle,
  ClipboardList,
  Calendar,
  Users,
  ShieldCheck,
  RefreshCw,
  BarChart,
  CheckSquare,
  Rocket,
} from "lucide-react";

export default function Services() {
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
              My Services
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-2xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transforming your ideas into exceptional digital solutions that
              capture your audience.
            </motion.p>
          </div>
        </motion.section>

        {/* Design Services */}
        <SectionAnimation className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold mb-12"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Design
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-8 max-w-3xl"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              As a designer, my approach is centered around creating intuitive,
              user-friendly designs that combine aesthetics with functionality.
              I focus on creating visually stunning and user-friendly interfaces
              that enhance the overall user experience.
            </motion.p>

            {/* UX Design */}
            <motion.h3
              className="text-xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              User Experience (UX) Design
            </motion.h3>
            <StaggeredChildren className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                {
                  title: "User Research and Persona Development",
                  icon: <User />,
                },
                {
                  title: "Information Architecture and Wireframing",
                  icon: <Grid />,
                },
                {
                  title: "Interaction Prototyping and User Testing",
                  icon: <MousePointerClick />,
                },
                { title: "UI Design and Visual Branding", icon: <Brush /> },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-primary\/50 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 text-primary">
                    {service.icon}
                  </div>
                  <h4 className="font-medium">{service.title}</h4>
                </div>
              ))}
            </StaggeredChildren>

            {/* UI Design */}
            <motion.h3
              className="text-xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              User Interface (UI) Design
            </motion.h3>
            <StaggeredChildren className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { title: "Interface and Visual Hierarchy", icon: <Layout /> },
                {
                  title: "Custom Iconography and Illustration",
                  icon: <PenTool />,
                },
                {
                  title: "Typography and Color Palette Selection",
                  icon: <Type />,
                },
                {
                  title: "Responsive Design for Various Devices",
                  icon: <TabletSmartphone />,
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-primary\/50 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 text-primary">
                    {service.icon}
                  </div>
                  <h4 className="font-medium">{service.title}</h4>
                </div>
              ))}
            </StaggeredChildren>
          </div>
        </SectionAnimation>

        <SectionAnimation className="py-16 bg-zinc-950">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold mb-12"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Development
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-8 max-w-3xl"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I build robust, scalable, and cutting-edge digital solutions using
              modern technologies and best practices. My development approach
              focuses on creating clean, maintainable code that delivers
              exceptional performance.
            </motion.p>

            {/* Web Development */}
            <motion.h3
              className="text-xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Web Development
            </motion.h3>
            <StaggeredChildren className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                {
                  title: "Front-End Development",
                  icon: <Code />,
                },
                {
                  title: "Back-End Development (Node.js, Python)",
                  icon: <Server />,
                },
                {
                  title: "Content Management System Integration",
                  icon: <Globe />,
                },
                {
                  title: "E-Commerce Platform Development",
                  icon: <ShoppingCart />,
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-primary/50 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 text-primary">
                    {service.icon}
                  </div>
                  <h4 className="font-medium">{service.title}</h4>
                </div>
              ))}
            </StaggeredChildren>

            {/* Mobile App Development */}
            <motion.h3
              className="text-xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Mobile App Development
            </motion.h3>
            <StaggeredChildren className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Native iOS and Android App Development",
                  icon: <Smartphone />,
                },
                {
                  title: "Cross-Platform App Development",
                  icon: <Layers />,
                },
                {
                  title: "UI/UX Design Integration",
                  icon: <PenTool />,
                },
                {
                  title: "App Testing, Deployment, and Maintenance",
                  icon: <CheckCircle />,
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-primary\/50 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 text-primary">
                    {service.icon}
                  </div>
                  <h4 className="font-medium">{service.title}</h4>
                </div>
              ))}
            </StaggeredChildren>
          </div>
        </SectionAnimation>

        <SectionAnimation className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold mb-12"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Project Management
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-8 max-w-3xl"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I approach each project with careful planning and coordination,
              ensuring that every aspect is executed smoothly, on time, and
              within budget. My project management methodology is tailored to
              meet the specific needs of each client.
            </motion.p>

            <StaggeredChildren className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Requirements Gathering and Analysis",
                  icon: <ClipboardList />,
                },
                {
                  title: "Project Scoping and Timeline Development",
                  icon: <Calendar />,
                },
                {
                  title: "Resource Allocation and Task Management",
                  icon: <Users />,
                },
                {
                  title: "Risk Assessment and Mitigation Planning",
                  icon: <ShieldCheck />,
                },
                {
                  title: "Sprint Planning and Agile Development",
                  icon: <RefreshCw />,
                },
                {
                  title: "Regular Progress Updates and Reports",
                  icon: <BarChart />,
                },
                {
                  title: "Quality Assurance and Testing",
                  icon: <CheckSquare />,
                },
                {
                  title: "Deployment and Post-Launch Support",
                  icon: <Rocket />,
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-primary/50 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 text-primary">
                    {service.icon}
                  </div>
                  <h4 className="font-medium">{service.title}</h4>
                </div>
              ))}
            </StaggeredChildren>
          </div>
        </SectionAnimation>
      </div>
    </MotionWrapper>
  );
}
