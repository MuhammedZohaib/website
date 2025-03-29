"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MotionWrapper from "@/components/motion-wrapper";
import SectionAnimation from "@/components/section-animation";

export default function Process() {
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
              My Process
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-2xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I value transparency, collaboration, and delivering exceptional
              results.
            </motion.p>
          </div>
        </motion.section>

        {/* Process Introduction */}
        <SectionAnimation className="py-12">
          <div className="container mx-auto px-4">
            <motion.p
              className="text-gray-300 mb-8 max-w-3xl"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              I follow a structured and collaborative process to ensure the
              successful delivery of exceptional digital products. My approach
              combines industry best practices, creative thinking, and a
              client-centric approach.
            </motion.p>
            <motion.p
              className="text-gray-300 mb-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Here&apos;s an overview of my typical process:
            </motion.p>
          </div>
        </SectionAnimation>

        {/* Process Steps */}
        <SectionAnimation className="pb-16">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {[
                {
                  number: "01",
                  title: "Discovery",
                  content:
                    "I begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research, analyze competitors, and define project objectives, allowing us to develop a tailored strategy.",
                },
                {
                  number: "02",
                  title: "Planning and Strategy",
                  content:
                    "Based on the gathered information, we create a comprehensive project plan and roadmap. This includes defining project scope, timeline, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision.",
                },
                {
                  number: "03",
                  title: "Design",
                  content:
                    "Our design process involves the creation of wireframes, user interfaces, and interactive prototypes to showcase the user interface, user experience, and overall design direction. We iterate on the designs based on your feedback until we achieve the perfect balance of aesthetics and functionality.",
                },
                {
                  number: "04",
                  title: "Development",
                  content:
                    "Once the design is approved, our skilled development team brings it to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open communication, providing regular updates and addressing any questions or concerns.",
                },
                {
                  number: "05",
                  title: "Testing and Quality Assurance",
                  content:
                    "We conduct rigorous testing to ensure that your digital product functions flawlessly across all devices and browsing systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of quality.",
                },
                {
                  number: "06",
                  title: "Deployment and Launch",
                  content:
                    "When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. This includes setting up hosting, configuring servers, and managing any required integrations.",
                },
                {
                  number: "07",
                  title: "Post-Launch Support",
                  content:
                    "Our commitment to your success doesn&apos;t end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. This includes addressing any issues, implementing feature enhancements, security updates, and technical support.",
                },
                {
                  number: "08",
                  title: "Continuous Improvement",
                  content:
                    "We believe in continuous improvement and strive to optimize your digital product over time. We monitor user feedback, analytics, and market trends to identify opportunities for enhancements and updates to keep your digital product ahead of the curve.",
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

        {/* CTA Section */}
        <SectionAnimation className="py-20 bg-zinc-950 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/bg-img.svg"
              alt="Background"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 text-center z-10 relative">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I&apos;d love to hear about your project and discuss how we can
              bring your digital ideas to life. Let&apos;s create something
              amazing together.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
            </motion.div>
          </div>
        </SectionAnimation>
      </div>
    </MotionWrapper>
  );
}
