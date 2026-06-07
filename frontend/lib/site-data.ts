export type TimelineItem = {
  number: string;
  title: string;
  subtitle: string;
  text: string;
};

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  points: string[];
  logo?: string;
  initials?: string;
};

export type ProjectItem = {
  label: string;
  title: string;
  tech: string;
  desc: string;
  tags: string[];
  img: string;
};

export type CourseItem = {
  term: string;
  id: string;
  code: string;
  title: string;
  desc: string;
};

export const timelineItems: TimelineItem[] = [
  {
    number: "01",
    title: "THE_BEGINNING",
    subtitle: "DevOps Foundations",
    text: "Started my journey in DevOps, building infrastructure and automating workflows. Focused on reliability and scalable architecture.",
  },
  {
    number: "02",
    title: "THE_TRANSITION",
    subtitle: "AI Engineering Pivot",
    text: "Pivoted to AI engineering, currently developing internal tools at Revvity. Implementing agentic protocols and high-performance vision models.",
  },
  {
    number: "03",
    title: "THE_FUTURE",
    subtitle: "Quantum & Hardware",
    text: "Now exploring hardware design and quantum computing to build the next generation of technology. Modeling the world with silicon and electrons.",
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    title: "AI / ML Engineer",
    company: "Revvity",
    period: "May 2025 - Present",
    points: [
      "Developing high-performance computer vision models for automated laboratory diagnostics.",
      "Optimizing inference pipelines on edge hardware using TensorRT and CUDA.",
    ],
    logo: "https://lh3.googleusercontent.com/aida/AP1WRLsEvPEXV7cVcB0uqpGWnaxiYG1n4_kE4ZAHUt6amKgAUk_NAtJFMbo4cbvmIU1fhq0QM9qBpl2wlhRG72yQi-QARIOgap-3PLwvpmfVtnnJXykatPKDKeD31eHKp5KjW4LkC1cRQrGjYxIiTmHPWG9JRjBiuKSQqn3P13cju1eJkukWXwDHf8OEFUQCmFie9yKp2CcR_x-3NZ_DluIDBubj5Jdq0W3TBo72A3UNVPMVFRjWrQj3g3Y5Dw",
  },
  {
    title: "Embedded Systems Intern",
    company: "Co-operators",
    period: "Sept 2024 - Dec 2024",
    points: [
      "Architected real-time data acquisition firmware for IoT sensor arrays.",
      "Reduced system latency by 40% through interrupt-driven I/O optimization.",
    ],
    initials: "CO",
  },
];

export const projectItems: ProjectItem[] = [
  {
    label: "Featured Project",
    title: "Rust Snake Game",
    tech: "Rust + WebAssembly",
    desc: "Classic snake game built with Rust and compiled to WebAssembly for browser play, delivering native-like performance.",
    tags: ["Rust", "WASM"],
    img: "https://lh3.googleusercontent.com/aida/AP1WRLu2-TscYpzBoCSTYtD_pn6WZIzT_B4VXXquRcmAJuVpDxzT0XquJGLRrvvKMwPM_iCONfjG8KuSNSl-Mp3g2HCh0K3p2bs20CTDniJMED2Qge-YbHoYiW3GZENIJ3EVAWFzHq6c6-Gx_bgAZO6PPb9xe-aU_beCcJEY0B_8zt8GmArTz-OgHZ5zdcm4RCmBtlQ-Q42f2eL4CN_2gPvbeHFdHfCCUaNfPs-nQBL71rB_ylYQWf4KfGQq8g",
  },
  {
    label: "Hardware Project",
    title: "Medication Dispenser",
    tech: "C++ + Arduino + IoT",
    desc: "An IoT-enabled device designed to automate medication schedules with real-time alerts and dosage tracking.",
    tags: ["C++", "IoT"],
    img: "https://lh3.googleusercontent.com/aida/AP1WRLupzrgVundDVB882J5Gm_1cURRrGlIiuyfEBJ0Wv2CzDtdxEYejfpiuEfRxHSiIk3xUaktI9Gzdk6NYHgKzXC1Gw-dJ7qQagIZ1eY-C4b7Z0yeIhEwx0B0PcvR7Ie0Ww-F44klOG6QQqgjzgKcEKySQOJ97uQXxoYFJGRYvjD_wFm9qYrO3NQ3mLY3M1G1wFs_nX8uRpOF-uZc8WUcnN2QgZRUwPtgeqbqIng_AhDoV0Dlt4MZ38nDXC-w",
  },
  {
    label: "Web Project",
    title: "Sorting Visualizer",
    tech: "React + Framer Motion",
    desc: "Interactive visualization of common sorting algorithms to help students understand time complexity and execution flow.",
    tags: ["React", "Motion"],
    img: "https://lh3.googleusercontent.com/aida/AP1WRLu9_oTd0AdFIWPlXyQ42jWVgHsjHZHFFEVHvmCpWqFHGTx2PqGPXYlcsajVjnzyr7WkiUIiUATg5XMakb3SE7DKuEYBi9QHzAX-VdPzKhBt3A-OZ_lcVAfvIygth8etq2EBwU-uP6U6EwbTuCWjBgWiLD5kXq4wkl4r5RZ-E4qMx3-dgriEmjneWyw1UKWgdkpQ0xqHkBsuZcaLA3bCPp4bxpdtuRlDC2iEFgTeKShzJ6I2EGzpxacBAw",
  },
];

export const courseItems: CourseItem[] = [
  {
    term: "TERM_LOG [3A]",
    id: "ece318",
    code: "ECE 318",
    title: "Comunnication Systems",
    desc: "Focusing on concurrency, mutual exclusion, and the design of distributed software systems.",
  },
  {
    term: "TERM_LOG [3A]",
    id: "ece327",
    code: "ECE 327",
    title: "Digital Hardware Systems",
    desc: "Focusing on concurrency, mutual exclusion, and the design of distributed software systems.",
  },
  {
    term: "TERM_LOG [3A]",
    id: "ece350",
    code: "ECE 350",
    title: "Real-Time Operating Systems",
    desc: "Focusing on concurrency, mutual exclusion, and the design of distributed software systems.",
  },
  {
    term: "TERM_LOG [3A]",
    id: "ece380",
    code: "ECE 380",
    title: "Analog Control Systems",
    desc: "Focusing on concurrency, mutual exclusion, and the design of distributed software systems.",
  },
  {
    term: "TERM_LOG [3A]",
    id: "ne332",
    code: "NE 332",
    title: "Quantum Mechanics",
    desc: "Focusing on concurrency, mutual exclusion, and the design of distributed software systems.",
  },
  {
    term: "TERM_LOG [COOP 4]",
    id: "math235",
    code: "MATH 235",
    title: "Linear Algebra 2 for Honours Mathematics",
    desc: "Focusing on concurrency, mutual exclusion, and the design of distributed software systems.",
  },
  {
    term: "TERM_LOG [COOP 4]",
    id: "pd5",
    code: "PD 5",
    title: "Project Management",
    desc: "Focusing on concurrency, mutual exclusion, and the design of distributed software systems.",
  },
  {
    term: "TERM_LOG [2B]",
    id: "ece203",
    code: "ECE 203",
    title: "Probability Theory and Statistics 1",
    desc: "Focusing on concurrency, mutual exclusion, and the design of distributed software systems.",
  },
  {
    term: "TERM_LOG [2B]",
    id: "ece207",
    code: "ECE 207",
    title: "Signals and Systems",
    desc: "Focusing on concurrency, mutual exclusion, and the design of distributed software systems.",
  },
  {
    term: "TERM_LOG [2B]",
    id: "ece208",
    code: "ECE 208",
    title: "Discrete Mathematics and Logic 2",
    desc: "Focusing on concurrency, mutual exclusion, and the design of distributed software systems.",
  },
  {
    term: "TERM_LOG [2B]",
    id: "ece224",
    code: "ECE 224",
    title: "Embedded Microprocessor Systems",
    desc: "Focusing on concurrency, mutual exclusion, and the design of distributed software systems.",
  },
  {
    term: "TERM_LOG [2B]",
    id: "ece252",
    code: "ECE 252",
    title: "Distributed Systems & Operating Environments",
    desc: "Focusing on concurrency, mutual exclusion, and the design of distributed software systems.",
  },
    {
    term: "TERM_LOG [2B]",
    id: "ece298",
    code: "ECE 298",
    title: "Instrumentation and Prototyping Laboratory",
    desc: "Focusing on concurrency, mutual exclusion, and the design of distributed software systems.",
  },
  {
    term: "TERM_LOG [COOP 3]",
    id: "pd20",
    code: "PD 22",
    title: "Professionalism and Ethics in Engineering Practice",
    desc: "Focusing on concurrency, mutual exclusion, and the design of distributed software systems.",
  },
  {
    term: "TERM_LOG [2A]",
    id: "ece109",
    code: "ECE 109",
    title: "Materials Chemistry for Engineers",
    desc: "Study of computer organization, assembly language programming, and modern processor architectures.",
  },
  {
    term: "TERM_LOG [2A]",
    id: "ece204",
    code: "ECE 204",
    title: "Numerical Methods",
    desc: "Study of computer organization, assembly language programming, and modern processor architectures.",
  },
  {
    term: "TERM_LOG [2A]",
    id: "ece205",
    code: "ECE 205",
    title: "Advanced Calculus 1 for Electrical and Computer Engineers",
    desc: "Integration of sensors and actuators through specialized digital interfaces (I2C, SPI) for autonomous robotic feedback loops.",
  },
  {
    term: "TERM_LOG [2A]",
    id: "ece222",
    code: "ECE 222",
    title: "Digital Computers & Architecture",
    desc: "Study of computer organization, assembly language programming, and modern processor architectures.",
  },
  {
    term: "TERM_LOG [2A]",
    id: "ece240",
    code: "ECE 240",
    title: "Electronic Circuits 1",
    desc: "Integration of sensors and actuators through specialized digital interfaces (I2C, SPI) for autonomous robotic feedback loops.",
  },
  {
    term: "TERM_LOG [2A]",
    id: "ece250",
    code: "ECE 250",
    title: "Algorithms and Data Sctructures",
    desc: "Integration of sensors and actuators through specialized digital interfaces (I2C, SPI) for autonomous robotic feedback loops.",
  },
  {
    term: "TERM_LOG [COOP 2]",
    id: "pd20",
    code: "PD 20",
    title: "Strategies for Career Success",
    desc: "Focusing on concurrency, mutual exclusion, and the design of distributed software systems.",
  },
  {
    term: "TERM_LOG [1B]",
    id: "ece106",
    code: "ECE 106",
    title: "Electricity and Magnetism",
    desc: "Synthesis and optimization of combinational and sequential logic circuits using hardware description languages.",
  },
  {
    term: "TERM_LOG [1B]",
    id: "ece108",
    code: "ECE 108",
    title: "Discrete Mathematics and Logic 1",
    desc: "Synthesis and optimization of combinational and sequential logic circuits using hardware description languages.",
  },
  {
    term: "TERM_LOG [1B]",
    id: "ece124",
    code: "ECE 124",
    title: "Digital Circuits",
    desc: "Synthesis and optimization of combinational and sequential logic circuits using hardware description languages.",
  },
  {
    term: "TERM_LOG [1B]",
    id: "ece140",
    code: "ECE 140",
    title: "Linear Circuits",
    desc: "Synthesis and optimization of combinational and sequential logic circuits using hardware description languages.",
  },
  {
    term: "TERM_LOG [1B]",
    id: "ece192",
    code: "ECE 192",
    title: "Engineering Economics and Impact on Society",
    desc: "Synthesis and optimization of combinational and sequential logic circuits using hardware description languages.",
  },
  {
    term: "TERM_LOG [1B]",
    id: "math119",
    code: "MATH 119",
    title: "Calculus 2 for Engineering",
    desc: "Synthesis and optimization of combinational and sequential logic circuits using hardware description languages.",
  },
  {
    term: "TERM_LOG [COOP 1]",
    id: "pd19",
    code: "PD 19",
    title: "Tactics for Workplace Success",
    desc: "Focusing on concurrency, mutual exclusion, and the design of distributed software systems.",
  },
  {
    term: "TERM_LOG [1A]",
    id: "ece105",
    code: "ECE 105",
    title: "Classical Mechanics",
    desc: "Synthesis and optimization of combinational and sequential logic circuits using hardware description languages.",
  },
  {
    term: "TERM_LOG [1A]",
    id: "ece150",
    code: "ECE 150",
    title: "Fundamentals of Programming",
    desc: "Synthesis and optimization of combinational and sequential logic circuits using hardware description languages.",
  },
  {
    term: "TERM_LOG [1A]",
    id: "ece190",
    code: "ECE 190",
    title: "Engineering Profession and Practice",
    desc: "Synthesis and optimization of combinational and sequential logic circuits using hardware description languages.",
  },
  {
    term: "TERM_LOG [1A]",
    id: "ece198",
    code: "ECE 198",
    title: "Project Studio",
    desc: "Synthesis and optimization of combinational and sequential logic circuits using hardware description languages.",
  },
  {
    term: "TERM_LOG [1A]",
    id: "math115",
    code: "MATH 115",
    title: "Linear Algebra for Engineering",
    desc: "Synthesis and optimization of combinational and sequential logic circuits using hardware description languages.",
  },
  {
    term: "TERM_LOG [1A]",
    id: "math117",
    code: "MATH 117",
    title: "Calculus 1 for Engineering",
    desc: "Synthesis and optimization of combinational and sequential logic circuits using hardware description languages.",
  },
  {
    term: "TERM_LOG [1A]",
    id: "commst192",
    code: "COMMST 192",
    title: "Communication in the Engineering Profession",
    desc: "Synthesis and optimization of combinational and sequential logic circuits using hardware description languages.",
  },
];
