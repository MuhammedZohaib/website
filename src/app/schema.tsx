import Script from "next/script";

export default function Schema() {
  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Muhammed Zohaib",
          "url": "https://zoha1b.vercel.app/home",
          "image": "https://yourwebsite.com/headshot.jpg",
          "jobTitle": "Data Scientist & Machine Learning Engineer",
          "description": "Data Scientist and Machine Learning Engineer specializing in AI solutions and predictive analytics",
          "sameAs": [
            "https://github.com/MuhammedZohaib",
            "https://www.linkedin.com/in/muhammadzohaib0/",
            "https://twitter.com/yourtwitter"
          ],
          "knowsAbout": [
            "Data Science",
            "Machine Learning",
            "Deep Learning",
            "Artificial Intelligence",
            "Statistical Analysis",
            "Computer Vision",
            "Natural Language Processing"
          ],
          "worksFor": {
            "@type": "Self-Employed",
            "name": "Upwork"
          }
        }
      `}
    </Script>
  );
}
