import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Me</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Welcome to my portfolio, where passion, expertise, and creativity
            come together.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-lg -rotate-6"></div>
              <div className="absolute inset-0 bg-zinc-900 rounded-lg border border-primary/50 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
              <p className="text-gray-300 mb-4">
                I'm a passionate developer with a keen eye for design and a love
                for creating exceptional digital experiences. With expertise in
                web and mobile development, I bring ideas to life through clean
                code and intuitive interfaces.
              </p>
              <p className="text-gray-300 mb-4">
                My journey in the tech world began over 5 years ago, and since
                then, I've been constantly learning and evolving my skills to
                stay at the forefront of digital innovation.
              </p>
              <p className="text-gray-300">
                I believe in a user-centered approach to development, ensuring
                that every project not only looks great but also provides an
                exceptional user experience.
              </p>
            </div>
          </div>

          {/* Journey Section */}
          <h2 className="text-3xl font-bold mb-12 text-center">My Journey</h2>
          <div className="space-y-16">
            {[
              {
                number: "01",
                title: "Design",
                content:
                  "My passion for design stems from a belief that great user experiences begin with thoughtful interfaces. I focus on creating visually stunning and user-friendly designs that enhance usability while maintaining aesthetic appeal.",
              },
              {
                number: "02",
                title: "Development",
                content:
                  "With a strong foundation in coding and development, I build robust, scalable, and cutting-edge digital solutions. I'm proficient in various programming languages and frameworks, allowing me to transform designs into fully functional applications.",
              },
              {
                number: "03",
                title: "Project Management",
                content:
                  "Organization and efficiency are key to successful project delivery. I approach each project with careful planning and coordination, ensuring that every aspect is executed smoothly, on time, and within budget.",
              },
              {
                number: "04",
                title: "Collaboration",
                content:
                  "I believe in the power of collaboration and open communication. By working closely with clients and understanding their needs, I can deliver solutions that exceed expectations and truly address their specific requirements.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="grid md:grid-cols-5 gap-6 items-start"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend Development",
                skills: [
                  "HTML/CSS",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Vue.js",
                  "Tailwind CSS",
                  "SASS",
                ],
              },
              {
                category: "Backend Development",
                skills: [
                  "Node.js",
                  "Express",
                  "Python",
                  "Django",
                  "RESTful APIs",
                  "GraphQL",
                  "Database Design",
                ],
              },
              {
                category: "UI/UX Design",
                skills: [
                  "Figma",
                  "Adobe XD",
                  "User Research",
                  "Wireframing",
                  "Prototyping",
                  "Responsive Design",
                ],
              },
              {
                category: "Mobile Development",
                skills: [
                  "React Native",
                  "Flutter",
                  "iOS",
                  "Android",
                  "Cross-platform Solutions",
                ],
              },
              {
                category: "Tools & Technologies",
                skills: [
                  "Git",
                  "Docker",
                  "AWS",
                  "Firebase",
                  "Vercel",
                  "CI/CD",
                  "Testing",
                ],
              },
              {
                category: "Soft Skills",
                skills: [
                  "Project Management",
                  "Communication",
                  "Problem Solving",
                  "Time Management",
                  "Teamwork",
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
          </div>
        </div>
      </section>
    </div>
  );
}
