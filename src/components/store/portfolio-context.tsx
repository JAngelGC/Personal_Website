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
        " A website created with Next.js for Reserva Ancestral, a mezcal company which hired me to do the job.",
      bulletPoints: [
        "Implemented pre-rendering with static generation, so it results in better performance and SEO.",
        "Used Firebase services to store dynamic information and to save all form responses.",
        "Designed from scratch a mockup in Figma of the website following my own ideas.",
        "Applied responsive design best practices to adjust the content to any device.",
      ],
      imgs: [
        "/mezcal/mezcal_1.png",
        "/mezcal/mezcal_2.png",
        "/mezcal/mezcal_3.png",
        "/mezcal/mezcal_4.png",
        "/mezcal/mezcal_5.png",
      ],
      links: {
        page: "https://reservaancestral.com/",
      },
    },
    {
      id: 1,
      title: "Traffic simulator",
      date: "December 2022",
      subtitles: [
        "Flask",
        "Mesa",
        "IBM Cloud",
        "Three.js",
        "Node.js",
        "Express",
      ],
      paragraph:
        "A multi-agent system that represents a solution to traffic by placing traffic lights in strategic points, while the interaction between different agents is handled.",
      bulletPoints: [
        "Used Mesa library to create agent-based models for cars, traffic lights, and streets.",
        "Built an API with Flask to update the system state to the frontend.",
        "Created 3d models with Three.js to make a visualization.",
        "Implemented an Express web server to handle HTTP requests.",
        "Deployed in IBM Cloud through Docker containers for the frontend and backend separately.",
      ],
      imgs: [
        "/traffic/traffic_1.png",
        "/traffic/traffic_2.png",
        "/traffic/traffic_3.png",
        "/traffic/traffic_4.png",
        "/traffic/traffic_5.png",
      ],
      links: {
        github: "https://github.com/JAngelGC/TrafficBackend",
        youtube: "https://www.youtube.com/watch?v=YCAIzt0Q8VA&t=275s",
        page: "https://frontend-traffic.mybluemix.net/",
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
