"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";

import {
  Code,
  Palette,
  Smartphone,
  Layers,
  Layout,
  Database,
  Zap,
  Search,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center">
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bringing{" "}
            <span className="text-primary">
              <Typewriter
                words={[
                  "Creative Ideas",
                  "Innovative Designs",
                  "Unique Solutions",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>{" "}
            to Life
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            I'm a passionate developer specializing in creating exceptional
            digital experiences through innovative design and development.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="relative py-16 bg-zinc-950">
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
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-300 mb-6">
                I'm a skilled developer with expertise in creating modern,
                responsive, and user-friendly web applications. With a strong
                foundation in both design and development, I bring a unique
                perspective to every project.
              </p>
              <Button variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div className="relative aspect-square max-w-md mx-full">
              <div className="absolute inset-0 bg-primary/20 rounded-lg -rotate-6"></div>
              <div className="absolute inset-0 bg-zinc-900 rounded-lg border border-primary/50 overflow-hidden">
                <Image
                  src="/headshot.jpg"
                  alt="Profile"
                  fill
                  className="object-cover opacity-40"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">My Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Web Development", icon: <Code /> },
              { name: "UI/UX Design", icon: <Palette /> },
              { name: "Mobile Apps", icon: <Smartphone /> },
              { name: "Responsive Design", icon: <Layers /> },
              { name: "Frontend", icon: <Layout /> },
              { name: "Backend", icon: <Database /> },
              { name: "Performance", icon: <Zap /> },
              { name: "SEO", icon: <Search /> },
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
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Button variant="outline" asChild>
              <Link href="/work">View All</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "ASD Detection",
                description:
                  "A system for detecting Autism Spectrum Disorder (ASD) in children using speech and facial cues.",
                tech: ["Deep Learning", "Computer Vision", "FastAPI"],
                image: "/image.jpg",
                link: "https://github.com/MuhammedZohaib/FYP-2025.git",
              },
              {
                name: "Tech Job Finder",
                description:
                  "An Electron.js-based desktop application that helps job seekers find and apply to tech companies worldwide.",
                tech: ["Electron.js", "JavaScript", "Tailwind"],
                image: "/tech-comp.png",
                link: "https://github.com/MuhammedZohaib/GlobalTechJobs.git",
              },
              {
                name: "HitFit Gym App",
                description:
                  "A Java based Gym Management App with login/signup and admin features for streamlined gym operations.",
                tech: ["Java", "JavaFX", "PostgreSQL"],
                image: "/gym.png",
                link: "https://github.com/MuhammedZohaib/HitFit-Gym-App.git",
              },
            ].map((project, index) => (
              <Link
                href={project.link}
                key={index}
                target="_blank"
                className="group"
              >
                <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 group-hover:border-primary/50 transition-all">
                  <div className="relative aspect-video">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-img.svg"
            alt="Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 z-10 relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how
            we can bring your ideas to life.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
