import Image from "next/image";

export default function Services() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">My Services</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Transforming your ideas into exceptional digital solutions that
            capture your audience.
          </p>
        </div>
      </section>

      {/* Design Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Design</h2>
          <p className="text-gray-300 mb-8 max-w-3xl">
            As a designer, my approach is centered around creating intuitive,
            user-friendly designs that combine aesthetics with functionality. I
            focus on creating visually stunning and user-friendly interfaces
            that enhance the overall user experience.
          </p>

          <h3 className="text-xl font-bold mb-6">
            User Experience (UX) Design
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { title: "User Research and Persona Development" },
              { title: "Information Architecture and Wireframing" },
              { title: "Interaction Prototyping and User Testing" },
              { title: "UI Design and Visual Branding" },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl">{index + 1}</span>
                </div>
                <h4 className="font-medium">{service.title}</h4>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-6">User Interface (UI) Design</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { title: "Interface and Visual Hierarchy" },
              { title: "Custom Iconography and Illustration" },
              { title: "Typography and Color Palette Selection" },
              { title: "Responsive Design for Various Devices" },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl">{index + 1}</span>
                </div>
                <h4 className="font-medium">{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Services */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Development</h2>
          <p className="text-gray-300 mb-8 max-w-3xl">
            I build robust, scalable, and cutting-edge digital solutions using
            modern technologies and best practices. My development approach
            focuses on creating clean, maintainable code that delivers
            exceptional performance.
          </p>

          <h3 className="text-xl font-bold mb-6">Web Development</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { title: "Front-End Development (HTML, CSS, JavaScript)" },
              { title: "Back-End Development (Node.js, Python, Ruby)" },
              { title: "Content Management System Integration" },
              { title: "E-Commerce Platform Development" },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl">{index + 1}</span>
                </div>
                <h4 className="font-medium">{service.title}</h4>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-6">Mobile App Development</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Native iOS and Android App Development" },
              {
                title: "Cross-Platform App Development (React Native, Flutter)",
              },
              { title: "App Prototyping and UI/UX Design Integration" },
              { title: "App Testing, Deployment, and Maintenance" },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl">{index + 1}</span>
                </div>
                <h4 className="font-medium">{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Management */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Project Management</h2>
          <p className="text-gray-300 mb-8 max-w-3xl">
            I approach each project with careful planning and coordination,
            ensuring that every aspect is executed smoothly, on time, and within
            budget. My project management methodology is tailored to meet the
            specific needs of each client.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Requirements Gathering and Analysis" },
              { title: "Project Scoping and Timeline Development" },
              { title: "Resource Allocation and Task Management" },
              { title: "Risk Assessment and Mitigation Planning" },
              { title: "Sprint Planning and Agile Development" },
              { title: "Regular Progress Updates and Reports" },
              { title: "Quality Assurance and Testing" },
              { title: "Deployment and Post-Launch Support" },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl">{index + 1}</span>
                </div>
                <h4 className="font-medium">{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
