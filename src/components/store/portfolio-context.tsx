import React from "react";

type ProjectContextObj = {
  id: number;
  title: string;
  date: string;
  subtitles: string[];
  paragraph: string;
  bulletPoints?: string[];
  imgs: string[];
  links?: {
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
        youtube: "https://www.youtube.com/watch?v=YCAIzt0Q8VA",
        page: "https://frontend-traffic.mybluemix.net/",
      },
    },
    {
      id: 2,
      title: "Rule-based chatbot",
      date: "April 2022",
      subtitles: ["FastApi", "SQL", "Javascript", "PHP"],
      paragraph:
        "A chatbot developed for Naatik, an AI company to answer their most frequently asked questions.",
      bulletPoints: [
        "Built an API using FastAPI that connected with the SQL database.",
        "Implemented a CRUD to modify questions and answers of the chatbot.",
        "Used PHP sessions to create a login page so only administrators can access the CRUD.",
        "Designed from scratch a character for the chatbot following the values and colors of the company. Added animations to the character depending on the action.",
        "Followed the Model-View-Controller pattern to develop the functioning of the program.",
      ],
      imgs: [
        "/chatbot/chatbot_1.png",
        "/chatbot/chatbot_2.png",
        "/chatbot/chatbot_3.png",
        "/chatbot/chatbot_4.png",
        "/chatbot/chatbot_5.png",
      ],
      links: {
        github: "https://github.com/Carlos24Rz/Construccion_Software",
        youtube: "https://www.youtube.com/watch?v=4QP1qdpOPkk",
      },
    },
    {
      id: 3,
      title: "Alerta Can",
      date: "October 2022",
      subtitles: ["Android Studio", "Java", "XML", "Firebase"],
      paragraph:
        "An Android App to help users to find their missing dogs by posting it on the app.",
      bulletPoints: [
        "Handled user authentication and user registration with Firebase Authentication service.",
        "Used Firebase Firestore to store all users and dogs’ information.",
        "Created screen visualization through XML files for each screen.",
        "Implemented logic for each screen with Java.",
      ],
      imgs: [
        "/alertacan/alertacan_1.png",
        "/alertacan/alertacan_2.png",
        "/alertacan/alertacan_3.png",
        "/alertacan/alertacan_4.png",
        "/alertacan/alertacan_5.png",
      ],
      links: {
        github: "https://github.com/Carlos24Rz/AlertaCan",
        youtube: "https://www.youtube.com/watch?v=gRcupGrYmlw",
      },
    },
    {
      id: 4,
      title: "Pergolas",
      date: "Incoming",
      subtitles: ["Next.js", "MongoDB", "AWS"],
      paragraph:
        "A website to promote Pergolas’ packages and services for social events.",
      imgs: ["/pergolas/pergolas_1.png"],
    },
    {
      id: 5,
      title: "Syntax Highlighter",
      date: "June 2022",
      subtitles: ["Elixir", "HTML", "CSS"],
      paragraph:
        "An Elixir application that highlights C++ input files to make them more readable.",
      bulletPoints: [
        "Used regular expressions to generate tokens according to different lexical categories.",
        "Implemented concurrency to process different files at the same time with Elixir.",
        "Applied CSS styles to do highlight the different keywords.",
      ],
      imgs: [
        "/syntax/syntax_1.png",
        "/syntax/syntax_2.png",
        "/syntax/syntax_3.png",
        "/syntax/syntax_4.png",
        "/syntax/syntax_5.png",
      ],
      links: {
        github: "https://github.com/JAngelGC",
      },
    },
    {
      id: 6,
      title: "Weather App",
      date: "January 2022",
      subtitles: ["React", "Netlify"],
      paragraph:
        "A single page application that retrieves the current weather and forecast for any city.",
      bulletPoints: [
        "Obtained the information of the forecast from Weather API.",
        "Implemented city name autocompletion by using GeoDB Cities API.",
        "Applied Context API to maintain the state in all the components where is need it.",
      ],
      imgs: [
        "/weather/weather_1.png",
        "/weather/weather_2.png",
        "/weather/weather_3.png",
        "/weather/weather_4.png",
      ],
      links: {
        page: "https://62d35cd48083e173512eaac9--the-great-jangelgc-site.netlify.app/",
      },
    },
    {
      id: 7,
      title: "Pokedex App",
      date: "Incoming",
      subtitles: ["React"],
      paragraph:
        "A single page application that retrieves information about the different Pokemon from the videogame.",
      bulletPoints: [
        "Handled multiple promises that contain data from the API where the information is located.",
        "Implemented a custom hook to make HTTP requests.",
        "Used React Router Dom to create dynamic pages.",
      ],
      imgs: [
        "/pokedex/pokedex_1.png",
        "/pokedex/pokedex_2.png",
        "/pokedex/pokedex_3.png",
        "/pokedex/pokedex_4.png",
        "/pokedex/pokedex_5.png",
      ],
    },
  ];

  return (
    <PortfolioContext.Provider value={portfolioArray}>
      {props.children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContextProvider;
