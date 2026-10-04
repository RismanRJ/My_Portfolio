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
    title: "Risman J —Portfolio",
    fullName: "Risman J",
    email: "rismanshanker21@gmail.com",
  },
  hero: {
    name: "Risman J",
p: ["I build low-latency, event-driven backend systems", "and AI-powered tools on Node.js, Python and AWS"],

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
    content: `Backend Software Engineer with 1.5+ years of experience building low-latency, event-driven systems with Node.js, Python, PostgreSQL, Redis and AWS.
    I built a real-time order allocation engine to speed up same-day and next-day delivery, and owned an in-house data platform migration
    (Airbyte, Airflow, dbt, Redshift) from design to production. 3rd place at the TNCPL AI Hackathon among 82,000+ participants.`,
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
