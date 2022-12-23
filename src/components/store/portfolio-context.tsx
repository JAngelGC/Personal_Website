import React from "react";

type ProjectContextObj = {
  id: number;
  title: string;
  date: string;
  subtitles: string[];
  paragraph: string;
  bulletPoints: string[];
  imgs: string[];
  links: {
    github?: string;
    youtube?: string;
    page?: string;
  };
};

type Props = { children: React.ReactNode };

export const PortfolioContext = React.createContext<ProjectContextObj[]>([]);

const PortfolioContextProvider: React.FC<Props> = (props) => {
  const portfolioArray: ProjectContextObj[] = [
    {
      id: 0,
      title: "Mezcal Website",
      date: "May 2022",
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
      links: {
        github: "https://github.com/JAngelGC",
        youtube: "https://www.youtube.com/channel/",
        page: "https://www.google.com",
      },
    },
    {
      id: 1,
      title: "Multi-agent system",
      date: "May 2022",
      subtitles: ["Next JS", "Firebase"],
      paragraph:
        "A website created with Next.js for Reserva Ancestral, a mexican mezcal company.",
      bulletPoints: [
        "Designed from scratch a mockup in Figma",
        "Applied responsive design best practices to adjust the content to any device",
      ],
      imgs: ["path1", "path2"],
      links: {
        github: "https://github.com/JAngelGC",
        youtube:
          "https://www.youtube.com/channel/UClwAiPMuPvo9Mwd0jLhbu2g?view_as=subscriber",
        page: "https://www.google.com",
      },
    },
    {
      id: 2,
      title: "Chatbot",
      date: "May 2022",
      subtitles: ["Next JS", "Firebase"],
      paragraph:
        "A website created with Next.js for Reserva Ancestral, a mexican mezcal company.",
      bulletPoints: [
        "Designed from scratch a mockup in Figma",
        "Applied responsive design best practices to adjust the content to any device",
      ],
      imgs: ["path1", "path2"],
      links: {
        github: "https://github.com/JAngelGC",
        youtube:
          "https://www.youtube.com/channel/UClwAiPMuPvo9Mwd0jLhbu2g?view_as=subscriber",
        page: "https://www.google.com",
      },
    },
    {
      id: 3,
      title: "Alerta Can",
      date: "May 2022",
      subtitles: ["Next JS", "Firebase"],
      paragraph:
        "A website created with Next.js for Reserva Ancestral, a mexican mezcal company.",
      bulletPoints: [
        "Designed from scratch a mockup in Figma",
        "Applied responsive design best practices to adjust the content to any device",
      ],
      imgs: ["path1", "path2"],
      links: {
        github: "https://github.com/JAngelGC",
        youtube:
          "https://www.youtube.com/channel/UClwAiPMuPvo9Mwd0jLhbu2g?view_as=subscriber",
        page: "https://www.google.com",
      },
    },
    {
      id: 4,
      title: "Pergolas",
      date: "May 2022",
      subtitles: ["Next JS", "Firebase"],
      paragraph:
        "A website created with Next.js for Reserva Ancestral, a mexican mezcal company.",
      bulletPoints: [
        "Designed from scratch a mockup in Figma",
        "Applied responsive design best practices to adjust the content to any device",
      ],
      imgs: ["path1", "path2"],
      links: {
        github: "https://github.com/JAngelGC",
        youtube:
          "https://www.youtube.com/channel/UClwAiPMuPvo9Mwd0jLhbu2g?view_as=subscriber",
        page: "https://www.google.com",
      },
    },
    {
      id: 5,
      title: "Syntax Highlighter",
      date: "May 2022",
      subtitles: ["Next JS", "Firebase"],
      paragraph:
        "A website created with Next.js for Reserva Ancestral, a mexican mezcal company.",
      bulletPoints: [
        "Designed from scratch a mockup in Figma",
        "Applied responsive design best practices to adjust the content to any device",
      ],
      imgs: ["path1", "path2"],
      links: {
        github: "https://github.com/JAngelGC",
        youtube:
          "https://www.youtube.com/channel/UClwAiPMuPvo9Mwd0jLhbu2g?view_as=subscriber",
        page: "https://www.google.com",
      },
    },
    {
      id: 6,
      title: "Weather App",
      date: "May 2022",
      subtitles: ["Next JS", "Firebase"],
      paragraph:
        "A website created with Next.js for Reserva Ancestral, a mexican mezcal company.",
      bulletPoints: [
        "Designed from scratch a mockup in Figma",
        "Applied responsive design best practices to adjust the content to any device",
      ],
      imgs: ["path1", "path2"],
      links: {
        github: "https://github.com/JAngelGC",
        youtube:
          "https://www.youtube.com/channel/UClwAiPMuPvo9Mwd0jLhbu2g?view_as=subscriber",
        page: "https://www.google.com",
      },
    },
    {
      id: 7,
      title: "Pokedex",
      date: "May 2022",
      subtitles: ["Next JS", "Firebase"],
      paragraph:
        "A website created with Next.js for Reserva Ancestral, a mexican mezcal company.",
      bulletPoints: [
        "Designed from scratch a mockup in Figma",
        "Applied responsive design best practices to adjust the content to any device",
      ],
      imgs: ["path1", "path2"],
      links: {
        github: "https://github.com/JAngelGC",
        youtube:
          "https://www.youtube.com/channel/UClwAiPMuPvo9Mwd0jLhbu2g?view_as=subscriber",
        page: "https://www.google.com",
      },
    },
  ];

  return (
    <PortfolioContext.Provider value={portfolioArray}>
      {props.children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContextProvider;
