import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1600"
            alt="Background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">My Work</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Discover a collection of projects showcasing my skills and
            creativity.
          </p>
        </div>
      </section>

      {/* Portfolio Introduction */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <p className="text-gray-300 mb-8 max-w-3xl">
            I've had the privilege of working with a diverse range of clients
            across various industries. Here are some examples of my notable
            works:
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                category: "Web Development",
                description:
                  "A modern e-commerce platform with seamless shopping experience, secure payment integration, and comprehensive admin dashboard.",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Mobile App for Food Delivery",
                category: "Mobile Development",
                description:
                  "A user-friendly food delivery app with real-time tracking, order management, and payment processing features.",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Portfolio Website",
                category: "Web Design",
                description:
                  "A creative portfolio website for a photographer showcasing their work with a focus on visual storytelling and user experience.",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Booking System",
                category: "Web Application",
                description:
                  "A comprehensive booking and reservation system for event management with calendar integration and payment processing.",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Fitness Tracking App",
                category: "Mobile Development",
                description:
                  "A feature-rich fitness tracking app with workout plans, progress monitoring, and social sharing capabilities.",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Corporate Website Redesign",
                category: "UI/UX Design",
                description:
                  "A complete redesign of a corporate website focusing on improved user experience, modern aesthetics, and conversion optimization.",
                image: "/placeholder.svg?height=600&width=800",
              },
            ].map((project, index) => (
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
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/work/project-${index + 1}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects and creative ideas. Let's
            work together to bring your vision to life.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
