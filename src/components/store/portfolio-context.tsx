import React from "react";

type ProjectContextObj = {
  id: number;
  title: string;
  subtitles: string[];
  paragraph: string;
  bulletPoints: string[];
  imgs: string[];
};

type Props = { children: React.ReactNode };

export const PortfolioContext = React.createContext<ProjectContextObj[]>([]);

const PortfolioContextProvider: React.FC<Props> = (props) => {
  const portfolioArray: ProjectContextObj[] = [
    {
      id: 0,
      title: "Mezcal Website",
      subtitles: ["Next JS", "Firebase"],
      paragraph:
        "A website created with Next.js for Reserva Ancestral, a mexican mezcal company.",
      bulletPoints: [
        "Designed from scratch a mockup in Figma of the website following my own ideas.",
        "Applied responsive design best practices to adjust the content to any device",
        "Used Firebase services to save all the contact information that the users send on the website",
        "Implemented routing using pages, so it can result in better performance and SEO.",
      ],
      imgs: ["path1", "path2"],
    },
    {
      id: 1,
      title: "Multi-agent system",
      subtitles: ["Next JS", "Firebase"],
      paragraph:
        "A website created with Next.js for Reserva Ancestral, a mexican mezcal company.",
      bulletPoints: [
        "Designed from scratch a mockup in Figma",
        "Applied responsive design best practices to adjust the content to any device",
      ],
      imgs: ["path1", "path2"],
    },
    {
      id: 2,
      title: "Chatbot",
      subtitles: ["Next JS", "Firebase"],
      paragraph:
        "A website created with Next.js for Reserva Ancestral, a mexican mezcal company.",
      bulletPoints: [
        "Designed from scratch a mockup in Figma",
        "Applied responsive design best practices to adjust the content to any device",
      ],
      imgs: ["path1", "path2"],
    },
    {
      id: 3,
      title: "Alerta Can",
      subtitles: ["Next JS", "Firebase"],
      paragraph:
        "A website created with Next.js for Reserva Ancestral, a mexican mezcal company.",
      bulletPoints: [
        "Designed from scratch a mockup in Figma",
        "Applied responsive design best practices to adjust the content to any device",
      ],
      imgs: ["path1", "path2"],
    },
    {
      id: 4,
      title: "Pergolas",
      subtitles: ["Next JS", "Firebase"],
      paragraph:
        "A website created with Next.js for Reserva Ancestral, a mexican mezcal company.",
      bulletPoints: [
        "Designed from scratch a mockup in Figma",
        "Applied responsive design best practices to adjust the content to any device",
      ],
      imgs: ["path1", "path2"],
    },
    {
      id: 5,
      title: "Syntax Highlighter",
      subtitles: ["Next JS", "Firebase"],
      paragraph:
        "A website created with Next.js for Reserva Ancestral, a mexican mezcal company.",
      bulletPoints: [
        "Designed from scratch a mockup in Figma",
        "Applied responsive design best practices to adjust the content to any device",
      ],
      imgs: ["path1", "path2"],
    },
    {
      id: 6,
      title: "Weather App",
      subtitles: ["Next JS", "Firebase"],
      paragraph:
        "A website created with Next.js for Reserva Ancestral, a mexican mezcal company.",
      bulletPoints: [
        "Designed from scratch a mockup in Figma",
        "Applied responsive design best practices to adjust the content to any device",
      ],
      imgs: ["path1", "path2"],
    },
    {
      id: 7,
      title: "Pokedex",
      subtitles: ["Next JS", "Firebase"],
      paragraph:
        "A website created with Next.js for Reserva Ancestral, a mexican mezcal company.",
      bulletPoints: [
        "Designed from scratch a mockup in Figma",
        "Applied responsive design best practices to adjust the content to any device",
      ],
      imgs: ["path1", "path2"],
    },
  ];

  return (
    <PortfolioContext.Provider value={portfolioArray}>
      {props.children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContextProvider;
