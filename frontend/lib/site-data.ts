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
    title: "START COOP",
    subtitle: "DevOps Foundations",
    text: "Started my journey in DevOps, building [[infrastructure]] and automating workflows. Focused on [[reliability]] and scalable architecture.",
  },
  {
    number: "02",
    title: "TRANSITION",
    subtitle: "AI Engineering Pivot",
    text: "Pivoted into [[AI engineering]], where I developed internal tools at Revvity. I built [[agentic tooling]] and lab automation.",
  },
  {
    number: "03",
    title: "TRANSITION AGAIN",
    subtitle: "Robotics Pivot",
    text: "Moved closer to hardware through [[robotics]] and applied DSP, with more attention on realtime behavior and [[physical systems]].",
  },
  {
    number: "04",
    title: "TRANSITION ONE MORE TIME",
    subtitle: "Quantum & Control Systems",
    text: "Now aiming toward [[quantum hardware]] and control systems, building on a background shaped by software, AI, and machines driven by [[silicon and electrons]].",
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    title: "AI/ML Engineer Intern",
    company: "Revvity",
    period: "May 2025 - August 2025",
    points: [
      "Created \\textbf{retrieval-augmented generation (RAG)} pipelines and prompt-engineered LLM behavior for domain-specific contexts, boosting output accuracy and adoption.",
      "Built modular, agentic LLM workflows using \\textbf{LangGraph}, deploying across AWS Bedrock and Azure AI Agents to support scalable, \\textbf{cloud-agnostic AI service orchestration}.",
      "Designed and deployed \\textbf{multi-tenant AI infrastructure} with Docker, GitHub Actions, and Terraform to serve Claude 4 Sonnet, ensuring secure data partitioning and scalable enterprise access.",
      "Built a \\textbf{seamless rollback mechanism}, transforming recovery from a high-risk, manual process into a smooth operation, dramatically minimizing downtime and business risk.",
      "Implemented a comprehensive \\textbf{automated testing} framework in Playwright spanning \\textbf{10+ system components}, proactively catching regressions before production and significantly improving reliability.",
    ],
    logo: "https://lh3.googleusercontent.com/aida/AP1WRLsEvPEXV7cVcB0uqpGWnaxiYG1n4_kE4ZAHUt6amKgAUk_NAtJFMbo4cbvmIU1fhq0QM9qBpl2wlhRG72yQi-QARIOgap-3PLwvpmfVtnnJXykatPKDKeD31eHKp5KjW4LkC1cRQrGjYxIiTmHPWG9JRjBiuKSQqn3P13cju1eJkukWXwDHf8OEFUQCmFie9yKp2CcR_x-3NZ_DluIDBubj5Jdq0W3TBo72A3UNVPMVFRjWrQj3g3Y5Dw",
  },
  {
    title: "Systems Developer",
    company: "Co-operators",
    period: "Sept 2024 - Dec 2024",
    points: [
      "Automated workflows by developing and deploying \\textbf{Python and Bash scripts} for tracking and management of areas such as SSL certificate renewal, improving efficiency and reducing manual oversight.",
      "Debugged and \\textbf{optimized CI/CD tools}, including Dockerfiles and Jenkins build jobs, ensuring reliability through GitHub checks and various unit tests.",
      "Designed and implemented new CI/CD \\textbf{pipelines using Terraform}, enhancing deployment automation and adhering to Infrastructure as Code best practices.",
      "Created GitHub automations with \\textbf{GitHub Actions}, streamlining repository management and integration.",
      "Developed and maintained \\textbf{.NET Web APIs using C#}, integrating internal NuGet packages to enhance functionality.",
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
    title: "Communication Systems",
    desc: "Introduction to random processes, power spectral density. Thermal noise and the white noise model. Amplitude and angle modulation, generation and detection schemes. Sampling and reconstruction, quantization. Digital baseband transmission. Overview of digital passband communications.",
  },
  {
    term: "TERM_LOG [3A]",
    id: "ece327",
    code: "ECE 327",
    title: "Digital Hardware Systems",
    desc: "Design and modelling of digital hardware systems using a hardware description language. Development process. Impact of implementation technologies. Performance analysis and optimization. Functional verification. Timing analysis. Power analysis and optimization. Faults and testability. Reliability and fault tolerance.",
  },
  {
    term: "TERM_LOG [3A]",
    id: "ece350",
    code: "ECE 350",
    title: "Real-Time Operating Systems",
    desc: "Memory and virtual memory and caching; I/O devices, drivers, and permanent storage management; process scheduling; queue management in the kernel; real-time kernel development. Aspects of multi-core operating systems.",
  },
  {
    term: "TERM_LOG [3A]",
    id: "ece380",
    code: "ECE 380",
    title: "Analog Control Systems",
    desc: "Introduction to control systems. Advantages of closed-loop feedback systems. The role of the system mathematical model. Block diagrams and signal flow graphs. The basic control system design problem, stability in control systems. Frequency response analysis techniques. Root-locus analysis. Elementary lead-lag compensation.",
  },
  {
    term: "TERM_LOG [3A]",
    id: "ne332",
    code: "NE 332",
    title: "Quantum Mechanics",
    desc: "Historical background; the differential equation approach to quantum mechanics; treatments of solvable problems such as the particle-in-a-box, harmonic oscillator, rigid rotor, and the hydrogen atom; introduction to approximation methods for more complex systems; application to solid state problems, including band theory.",
  },
  {
    term: "TERM_LOG [COOP 4]",
    id: "math235",
    code: "MATH 235",
    title: "Linear Algebra 2 for Honours Mathematics",
    desc: "Orthogonal and unitary matrices and transformations. Orthogonal projections, Gram-Schmidt procedure, best approximations, least-squares. Inner products, angles and orthogonality, orthogonal diagonalization, singular value decomposition, applications.",
  },
  {
    term: "TERM_LOG [COOP 4]",
    id: "pd5",
    code: "PD 5",
    title: "Project Management",
    desc: "This course is intended to provide students with knowledge of basic project management techniques and practices while placing these within their organizational context. Students should understand how these techniques and practices are used and the human issues in their application.",
  },
  {
    term: "TERM_LOG [2B]",
    id: "ece203",
    code: "ECE 203",
    title: "Probability Theory and Statistics 1",
    desc: "Ensemble model of randomness. Conditional probability, independence, and Bayes' theorem. Random variables, probability distribution functions. Expected values. Collections of random variables, joint and marginal probability distributions, and correlation. Introduction to random processes.",
  },
  {
    term: "TERM_LOG [2B]",
    id: "ece207",
    code: "ECE 207",
    title: "Signals and Systems",
    desc: "Discrete, continuous and periodic signals, time- and frequency-domain analysis of continuous- and discrete-time linear systems, periodic signals and Fourier series, non-periodic signals, and Fourier transforms.",
  },
  {
    term: "TERM_LOG [2B]",
    id: "ece208",
    code: "ECE 208",
    title: "Discrete Mathematics and Logic 2",
    desc: "Formal logics, methods, and associated tools, and their uses in specifying, synthesizing, and verifying computing systems. Predicate logic. Temporal logic. Relational logic. Set theory. Proof theory. Model theory. Graph theory. Formal models of computation. Applications in computer and software engineering.",
  },
  {
    term: "TERM_LOG [2B]",
    id: "ece224",
    code: "ECE 224",
    title: "Embedded Microprocessor Systems",
    desc: "Microprocessor system architecture, bus systems, memory systems, peripherals, parallel interfaces, serial interfaces, analog interfaces, data transfer, synchronization, error detection/correction, testing and debugging.",
  },
  {
    term: "TERM_LOG [2B]",
    id: "ece252",
    code: "ECE 252",
    title: "Distributed Systems & Operating Environments",
    desc: "Processes and threads (pthreads); system calls; concurrency (semaphore, mutex, monitors, and barrier synchronization); user-level memory management. Performance and correctness of concurrent systems. Deadlock detection and recovery; file systems.",
  },
  {
    term: "TERM_LOG [2B]",
    id: "ece298",
    code: "ECE 298",
    title: "Instrumentation and Prototyping Laboratory",
    desc: "Practical aspects of analog and digital instrumentation. Prototyping such as printed circuit board design and manufacture.",
  },
  {
    term: "TERM_LOG [COOP 3]",
    id: "pd22",
    code: "PD 22",
    title: "Professionalism and Ethics in Engineering Practice",
    desc: "This course provides a framework for understanding professionalism and ethics within society as reflected through practice in the field of professional engineering. Course topics on professionalism include the history of engineering and professions, the licensing of professional engineers and the certification of the practice of offering engineering services to the public, and the regulation of professional engineering in Ontario through Professional Engineers Ontario. Course topics on ethics include the philosophy of ethics and the Code of Ethics, the philosophy of justice, and the definition and disciplining of professional misconduct. Case studies will apply these principles to workplace situations including factors such as environmental ethics, whistle blowing, conflict of interest, and health and safety.",
  },
  {
    term: "TERM_LOG [2A]",
    id: "ece109",
    code: "ECE 109",
    title: "Materials Chemistry for Engineers",
    desc: "This course will help students understand the relationship between the microstructure of common semiconductor and optoelectronic materials, and the electrical, optical, and magnetic properties exhibited by the materials. Topics include structure of atoms, models of the atom, electronic configuration, band theory, atomic bonding, dielectric properties, optical transparency, magnetic properties, molecular bonding, metals and alloys, and activation energy.",
  },
  {
    term: "TERM_LOG [2A]",
    id: "ece204",
    code: "ECE 204",
    title: "Numerical Methods",
    desc: "Application of computational methods to engineering problems. Number systems, errors and error propagation. Roots of nonlinear equations. Introduction to numerical linear algebra. Interpolation and numerical integration. Introduction to numerical solutions of ordinary differential equations, optimization. Emphasis will be placed on algorithm development.",
  },
  {
    term: "TERM_LOG [2A]",
    id: "ece205",
    code: "ECE 205",
    title: "Advanced Calculus 1 for Electrical and Computer Engineers",
    desc: "Fourier series. Ordinary differential equations. Laplace transform. Applications to linear electrical systems.",
  },
  {
    term: "TERM_LOG [2A]",
    id: "ece222",
    code: "ECE 222",
    title: "Digital Computers",
    desc: "Computer organization. Memory units, control units, I/O operations. Assembly language programming, translation and loading. Arithmetic logic units. Computer case studies.",
  },
  {
    term: "TERM_LOG [2A]",
    id: "ece240",
    code: "ECE 240",
    title: "Electronic Circuits 1",
    desc: "Introduction to electronic signal processing; second-order circuits; operational amplifier circuits; diode device and circuits; metal-oxide-semiconductor (MOS) biasing networks; load-line analysis; diode and MOS small-signal equivalent circuits; single-stage small-signal MOS amplifiers; complementary metal-oxide-semiconductor (CMOS) logic circuits.",
  },
  {
    term: "TERM_LOG [2A]",
    id: "ece250",
    code: "ECE 250",
    title: "Algorithms and Data Structures",
    desc: "Data structures, abstract data types, recursive algorithms, algorithm analysis, sorting and searching, and problem-solving strategies.",
  },
  {
    term: "TERM_LOG [COOP 2]",
    id: "pd20",
    code: "PD 20",
    title: "Strategies for Career Success",
    desc: "An introduction to critical thinking and communication in the workplace for co-op engineering students. Students will practise general critical thinking and communication skills to assess evidence, interpret textual and visual information, and work through ethical and professional situations. Topics include the role of self-reflection in successful professional development, admitting ignorance to develop improved knowledge, understanding arguments, evaluating evidence, communicating conclusion and findings, recognizing and avoiding bias, and application to professional conduct.",
  },
  {
    term: "TERM_LOG [1B]",
    id: "ece106",
    code: "ECE 106",
    title: "Electricity and Magnetism",
    desc: "Electrostatics: electric field, flux, Gauss's Law, potential and potential energy. Capacitors: dielectric, capacitance, electric energy storage. Resistors: charge flow, current, resistance. Magnetostatic: magnetic force, magnetic fields, Ampere's Law. Inductors: magnetic flux, inductance, magnetic materials, magnetic energy storage. Time-varying fields: Faraday's Law, mutual inductance, simple motors and generators.",
  },
  {
    term: "TERM_LOG [1B]",
    id: "ece108",
    code: "ECE 108",
    title: "Discrete Mathematics and Logic 1",
    desc: "Introduction to discrete mathematics, including propositional/Boolean logic, syntax and semantics, proof theory, and model theory; set theory, relations and functions, combinatorics (counting techniques, permutations, and combinations), graph theory. Applications in electrical, computing, and software engineering.",
  },
  {
    term: "TERM_LOG [1B]",
    id: "ece124",
    code: "ECE 124",
    title: "Digital Circuits",
    desc: "Number systems and Boolean arithmetic. Boolean algebra and simplification of Boolean functions. Combinational circuits. Sequential circuits; design and implementation. Hardware description languages. Timing analysis. Implementation technologies.",
  },
  {
    term: "TERM_LOG [1B]",
    id: "ece140",
    code: "ECE 140",
    title: "Linear Circuits",
    desc: "Analysis of linear circuits. Voltage, current, resistance, capacitance, inductance, voltage source, current source, dependent sources, Ohm's Law, Kirchhoff's Laws, nodal analysis, mesh analysis, circuit transformations, operational amplifier circuits, time response, sinusoidal steady-state response. Preparing for, conducting, and reporting of laboratory experiments.",
  },
  {
    term: "TERM_LOG [1B]",
    id: "ece192",
    code: "ECE 192",
    title: "Engineering Economics and Impact on Society",
    desc: "This course teaches engineering economics and the impact of engineering on the society at large. Important concepts of engineering economics including cash flow diagrams, present worth, quantification of impact costs, and rate of return analysis are presented. This course discusses real-life engineering cases that cover the above aspects, and provide a broad perspective on the issues. Energy supply scenarios and the environment, global energy use and supply, and environmental impacts of engineering projects are discussed.",
  },
  {
    term: "TERM_LOG [1B]",
    id: "math119",
    code: "MATH 119",
    title: "Calculus 2 for Engineering",
    desc: "Elementary approximation methods: interpolation; Taylor polynomials and remainder; Newton's method, Landau order symbol, applications. Infinite series: Taylor series and Taylor's Remainder Theorem, geometric series, convergence test, power series, applications. Functions of several variables: partial derivatives, linear approximation and differential, gradient and directional derivative, optimization and Lagrange multipliers. Vector-valued functions: parametric representation of curves, tangent and normal vectors, line integrals and applications.",
  },
  {
    term: "TERM_LOG [COOP 1]",
    id: "pd19",
    code: "PD 19",
    title: "Tactics for Workplace Success",
    desc: "An introduction to strategies for success in the workplace and lifelong learning for co-op engineering students. Students explore the role of professional skills in the workplace, a model for self-reflection, a framework of co-operative education, and strategies to make the most of workplace opportunities and challenges. Topics include professional skills, strategies for workplace success, co-operative education, common workplace issues, typical corporate structures, work term planning, and effective self reflection.",
  },
  {
    term: "TERM_LOG [1A]",
    id: "ece105",
    code: "ECE 105",
    title: "Classical Mechanics",
    desc: "Forces in nature and Newton's laws, dynamics and circular motion, work, energy, and conservation of energy. Linear momentum and linear impulse, rotational dynamics. Oscillations; simple harmonic motion. Wave motion; travelling waves and standing waves.",
  },
  {
    term: "TERM_LOG [1A]",
    id: "ece150",
    code: "ECE 150",
    title: "Fundamentals of Programming",
    desc: "Software design process in a high-level programming environment. Programming fundamentals, language syntax, simple data types, control constructs, functions, parameter passing, recursion, classes, arrays and lists, list traversals, introduction to searching and sorting algorithms, basic object-oriented design, polymorphism and inheritance, simple testing and debugging strategies, pointers and references, basic memory management.",
  },
  {
    term: "TERM_LOG [1A]",
    id: "ece190",
    code: "ECE 190",
    title: "Engineering Profession and Practice",
    desc: "Introduction to electrical and computer engineering with an emphasis on the profession of engineering, and engineering design. Topics include engineering design, safety, risk analysis, engineering data analysis, project management, sustainability, business, entrepreneurship, and intellectual property. Additional topics include co-op fundamentals for engineering students, professional development, and diversity training with a goal of understanding the roles and responsibilities of the professional engineer in society.",
  },
  {
    term: "TERM_LOG [1A]",
    id: "ece198",
    code: "ECE 198",
    title: "Project Studio",
    desc: "A design project integrating content from physics, math, and programming courses. Topics include engineering design process, problem definition, risk analysis, design specification, system modelling and analysis, engineering data analysis, project management, and prototyping. Students work in teams to build and test a prototype. Safety orientation training including WHMIS assessment, is included in this course.",
  },
  {
    term: "TERM_LOG [1A]",
    id: "math115",
    code: "MATH 115",
    title: "Linear Algebra for Engineering",
    desc: "Linear equations, matrices, and determinants. Introduction to vector spaces. Eigenvalues and diagonalization. Applications. Complex numbers.",
  },
  {
    term: "TERM_LOG [1A]",
    id: "math117",
    code: "MATH 117",
    title: "Calculus 1 for Engineering",
    desc: "Functions of engineering importance; review of polynomial, exponential, and logarithmic functions; trigonometric functions and identities. Inverse functions (logarithmic and trigonometric). Limits and continuity. Derivatives, rules of differentiation; derivatives of elementary functions. Applications of the derivative, max-min problems, Mean Value Theorem. Antiderivatives, the Riemann definite integral, Fundamental Theorems. Methods of integration, approximation, applications, improper integrals.",
  },
  {
    term: "TERM_LOG [1A]",
    id: "commst192",
    code: "COMMST 192",
    title: "Communication in the Engineering Profession",
    desc: "In this course students in Computer, Electrical, and Management Engineering will enhance oral and written communication competencies in contexts relevant to the engineering profession.",
  },
];
