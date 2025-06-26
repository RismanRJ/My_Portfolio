type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Risman J — 3D Portfolio",
    fullName: "Risman J",
    email: "rismanshanker21@gmail.com",
  },
  hero: {
    name: "Risman J",
p: ["I build scalable backend systems,", "interactive user interfaces and full stack web applications"],

  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
 sections: {
  about: {
    p: "Get to know me",
    h2: "Overview.",
    content: `I'm a passionate Software Developer with hands-on experience in backend and full stack development.
    Proficient in Java, C#, JavaScript, and TypeScript, with expertise in frameworks like React.js, Node.js, and .NET.
    I've built scalable APIs using REST and gRPC, optimized performance with Redis, and secured systems with OAuth and JWT.
    With a strong foundation in system design, databases like MongoDB, SQL, and Firebase, and real-world project experience,
    I'm eager to solve meaningful problems and grow in a dynamic tech environment.`,
  },
  experience: {
    p: "Where I've worked",
    h2: "Work Experience.",
  },
  feedbacks: {
    p: "What others say",
    h2: "Testimonials.",
  },
  works: {
    p: "My projects",
    h2: "Projects.",
    content: `These projects demonstrate my skills in backend and full stack development.
    From building real-time alumni platforms with websockets to award-winning AI applications,
    my work reflects a problem-solving mindset and a passion for scalable software.
    Each project includes technologies used and links to source code or live demos.`,
  },
}

};
