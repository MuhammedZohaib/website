import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Contact() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Me</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Let's discuss how we can bring your digital ideas to life.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question about my services,
                want to discuss a potential collaboration, or just want to say
                hello, I'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary text-xl">@</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-400">alizuhaib828@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-400">+92 (344) 2709695</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-400">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  {["GitHub", "LinkedIn", "Twitter", "Instagram"].map(
                    (platform, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 hover:border-primary/50 transition-all"
                      >
                        <span className="text-gray-400 hover:text-primary transition-colors">
                          {platform[0]}
                        </span>
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    placeholder="Your name"
                    className="bg-zinc-950 border-zinc-800"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-zinc-950 border-zinc-800"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Why are you contacting me?</Label>
                  <RadioGroup
                    defaultValue="web-design"
                    className="grid grid-cols-2 gap-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="web-design" id="web-design" />
                      <Label htmlFor="web-design">Web Design</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="mobile-app" id="mobile-app" />
                      <Label htmlFor="mobile-app">Mobile App Design</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="collaboration"
                        id="collaboration"
                      />
                      <Label htmlFor="collaboration">Collaboration</Label>
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
                      defaultValue={[5000]}
                      min={1000}
                      max={10000}
                      step={1000}
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
                    placeholder="Tell me about your project..."
                    className="bg-zinc-950 border-zinc-800 min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
