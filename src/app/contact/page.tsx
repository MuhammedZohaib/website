"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import MotionWrapper from "@/components/motion-wrapper";
import StaggeredChildren from "@/components/staggered-children";

export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactReason: "data-science",
    budget: 5000,
    message: "",
  });

  // Form submission handler
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  // Form input change handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Radio button change handler
  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      contactReason: value,
    }));
  };

  // Slider change handler
  const handleSliderChange = (value: number[]) => {
    setFormData((prev) => ({
      ...prev,
      budget: value[0],
    }));
  };

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
              Contact Me
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-2xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Let&apos;s discuss how we can leverage data science and AI to
              solve your challenges.
            </motion.p>
          </div>
        </motion.section>

        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-300 mb-8">
                  I&apos;m always interested in hearing about new data science
                  projects and research opportunities. Whether you have a
                  question about machine learning models, want to discuss a
                  potential collaboration, or just want to say hello, I&apos;d
                  love to hear from you.
                </p>

                <StaggeredChildren className="space-y-6" staggerAmount={0.15}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Mail className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-400">alizuhaib828@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Phone className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-400">+92 (344) 2709695</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <MapPin className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-gray-400">Lahore, Pakistan</p>
                    </div>
                  </div>
                </StaggeredChildren>

                <motion.div
                  className="mt-12"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                  <div className="flex gap-4">
                    {[
                      { name: "GitHub", icon: <Github />, url: "#" },
                      { name: "LinkedIn", icon: <Linkedin />, url: "#" },
                      { name: "Twitter", icon: <Twitter />, url: "#" },
                      { name: "Instagram", icon: <Instagram />, url: "#" },
                    ].map((platform, index) => (
                      <motion.a
                        key={index}
                        href={platform.url}
                        className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 hover:border-primary/50 transition-all"
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-gray-400 hover:text-primary transition-colors">
                          {platform.icon}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="bg-zinc-900 p-8 rounded-lg border border-zinc-800"
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <StaggeredChildren className="space-y-6" staggerAmount={0.1}>
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        placeholder="Your name"
                        className="bg-zinc-950 border-zinc-800"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="bg-zinc-950 border-zinc-800"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>What are you interested in?</Label>
                      <RadioGroup
                        value={formData.contactReason}
                        onValueChange={handleRadioChange}
                        className="grid grid-cols-2 gap-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="data-science"
                            id="data-science"
                          />
                          <Label htmlFor="data-science">Data Science</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="machine-learning"
                            id="machine-learning"
                          />
                          <Label htmlFor="machine-learning">
                            Machine Learning
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="collaboration"
                            id="collaboration"
                          />
                          <Label htmlFor="collaboration">
                            Research Collaboration
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label>Your Budget</Label>
                      <div className="pt-6 pb-2">
                        <Slider
                          value={[formData.budget]}
                          min={1000}
                          max={10000}
                          step={1000}
                          onValueChange={handleSliderChange}
                        />
                      </div>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>$1,000</span>
                        <span>$10,000</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project or research..."
                        className="bg-zinc-950 border-zinc-800 min-h-[120px]"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Submit
                    </Button>
                  </StaggeredChildren>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MotionWrapper>
  );
}
