import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-black font-bold text-lg">
                  <Image
                    src={"/logo.svg"}
                    width={25}
                    height={25}
                    alt={""}
                  ></Image>
                </span>
              </div>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Creating exceptional digital experiences through innovative design
              and development.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {["Home", "Services", "Work", "Process", "About", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                      className="text-gray-400 hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Mobile Apps",
                "UI/UX Design",
                "Branding",
                "Consulting",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>alizuhaib828@gmail.com</li>
              <li>+92 (344) 2709695</li>
              <li>Lahore, Pakistan</li>
            </ul>

            <div className="mt-6">
              <h3 className="font-bold mb-4">Stay Connected</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 hover:border-primary/50 transition-all"
                >
                  <Facebook
                    size={16}
                    className="text-gray-400 hover:text-primary transition-colors"
                  />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 hover:border-primary/50 transition-all"
                >
                  <Twitter
                    size={16}
                    className="text-gray-400 hover:text-primary transition-colors"
                  />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 hover:border-primary/50 transition-all"
                >
                  <Linkedin
                    size={16}
                    className="text-gray-400 hover:text-primary transition-colors"
                  />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 hover:border-primary/50 transition-all"
                >
                  <Github
                    size={16}
                    className="text-gray-400 hover:text-primary transition-colors"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Zohaib. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-500 hover:text-primary text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-500 hover:text-primary text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
