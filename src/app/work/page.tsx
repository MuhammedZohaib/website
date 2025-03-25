import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  const projects = [
    {
      title: "ASD Detection System",
      category: "AI & Healthcare",
      description:
        "Developed an advanced autism detection system leveraging deep learning and AI-driven analysis of facial and speech cues. Integrated with a web-based interface for early diagnosis.",
      image: "/image.jpg",
      tech: "TensorFlow, OpenCV, PyTorch, Flask, React.js",
      link: "https://github.com/MuhammedZohaib/ASD-Detection",
    },
    {
      title: "Tech Job Finder",
      category: "Desktop Application",
      description:
        "An Electron.js-based cross-platform desktop app for job seekers. Features include company data aggregation, filtering by location & services, and built-in browser integration.",
      image: "/tech-comp.png",
      tech: "Electron.js, React.js, Node.js, TypeScript, SQLite",
      link: "https://github.com/MuhammedZohaib/Tech-Job-Finder",
    },
    {
      title: "Breast Cancer Prediction",
      category: "Machine Learning",
      description:
        "Developed a predictive analytics model for breast cancer diagnosis using clinical data. Implemented advanced feature selection, hyperparameter tuning, and ensemble learning techniques.",
      image: "/bc-prediction.png",
      tech: "Scikit-Learn, NumPy, Pandas, Matplotlib, Flask API",
      link: "https://github.com/MuhammedZohaib/Breast-Cancer-Prediction",
    },
    {
      title: "Cat-Dog-Panda Classification & Object Detection",
      category: "Computer Vision",
      description:
        "Built a deep learning pipeline for classifying cats, dogs, and pandas with real-time object detection using YOLOv8. Integrated with PyTorch-based ResNet-18 for enhanced accuracy.",
      image: "/cnn.jpg",
      tech: "YOLOv8, PyTorch, OpenCV, Scikit-Learn, Label Studio",
      link: "#",
    },
    {
      title: "Sowing Success: Crop Selection with ML",
      category: "AI in Agriculture",
      description:
        "Designed an intelligent system for crop selection based on soil metrics and environmental factors. Used advanced ML techniques for multi-class classification.",
      image: "/crop.jpg",
      tech: "Scikit-learn, Pandas, NumPy, Random Forest, XGBoost",
      link: "#",
    },
    {
      title: "Church Scraper",
      category: "Web Scraping",
      description:
        "Engineered a high-speed web scraper for structured data collection from Church directories, achieving ~250 records/min extraction rate with automated scheduling.",
      image: "/scrapy.png",
      tech: "Scrapy, Selenium, BeautifulSoup, Python",
      link: "https://github.com/MuhammedZohaib/ChurchAngel-Scraper",
    },
    {
      title: "Customer Churn Prediction",
      category: "AI & Business Intelligence",
      description:
        "Developed a machine learning model for predicting customer churn, integrating logistic regression and decision trees to enhance retention strategies.",
      image: "/churn.jpg",
      tech: "Scikit-learn, Pandas, NumPy, Matplotlib, Flask API",
      link: "#",
    },
    {
      title: "HitFit Gym App",
      category: "JavaFX Desktop App",
      description:
        "Designed and built a full-fledged gym management system with user authentication, membership tracking, and payment handling using JavaFX.",
      image: "/gym.png",
      tech: "JavaFX, MySQL, Spring Boot, Hibernate",
      link: "https://github.com/MuhammedZohaib/HitFit-Gym-App",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-img.svg"
            alt="Background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">My Work</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Explore my portfolio of AI, Machine Learning, and Full-Stack
            projects, crafted with cutting-edge technologies.
          </p>
        </div>
      </section>

      {/* Portfolio Introduction */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <p className="text-gray-300 mb-8 max-w-3xl">
            I’ve built AI-driven solutions, automated workflows, and full-stack
            applications across multiple domains. Here are some of my
            highlights:
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
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
                  <p className="text-gray-400 mb-2">{project.description}</p>
                  <p className="text-gray-500 text-sm mb-4">
                    <strong>Tech Stack:</strong> {project.tech}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.link}>View Project</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-img.svg"
            alt="Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I’m always open to discussing new AI, ML, and full-stack development
            projects. Let’s collaborate and bring your ideas to life!
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
