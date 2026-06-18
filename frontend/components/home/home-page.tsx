import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/home/contact-form";
import { ExperienceEntry } from "@/components/home/experience-entry";
import { ProjectCard } from "@/components/home/project-card";
import { ScrollIndicator } from "@/components/home/scroll-indicator";
import { TimelineEntry } from "@/components/home/timeline-entry";
import { Icon } from "@/components/shared/icon";
import { experienceItems, projectItems, timelineItems } from "@/lib/site-data";

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="relative mx-auto flex-grow max-w-7xl px-4 pt-32 md:ml-64 md:px-margin-safe">
        <section className="relative grid min-h-[716px] grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="order-2 flex flex-col gap-8 lg:order-1 lg:col-span-7">
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2 font-label-caps text-label-caps uppercase tracking-[0.3em] text-secondary">
                <span className="h-2 w-2 animate-pulse rounded-full bg-secondary shadow-[0_0_8px_rgba(222,255,82,0.8)]"></span>
                Term status: study
              </span>
              <h1 className="font-headline-xl text-6xl leading-[1.05] tracking-tight text-primary text-glow md:text-8xl">
                Jonathan{" "}
                <span className="italic text-primary-container" style={{ fontFamily: "serif" }}>
                  Lyashko
                </span>
              </h1>
              <p className="mt-2 font-headline-lg text-2xl text-on-surface">
                Computer Engineering Student
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 border-y border-primary/10 py-4 font-code-sm text-on-surface-variant md:grid-cols-3">
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary" name="location_on" />
                Ontario, Canada
              </div>
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary" name="school" />
                University of Waterloo
              </div>
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary" name="business" />
                Next Coop: Winter &apos;27
              </div>
            </div>
            <div className="max-w-xl">
              <p className="border-l-2 border-primary/20 py-2 pl-6 font-body-md text-lg text-on-surface-variant">
                I model the real world with silicon and electrons. Excited about
                quantum hardware with a background in AI and robotics
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                className="glitch-btn group flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/10 px-8 py-4 font-label-caps text-label-caps text-primary shadow-[0_0_10px_rgba(0,229,255,0.12)] transition-all hover:border-primary/35 hover:bg-primary/14"
                href="/projects"
              >
                <Icon
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  name="arrow_forward"
                />
                VIEW PROJECTS
              </Link>
              <a
                className="flex items-center gap-3 rounded-lg border border-primary/30 px-8 py-4 font-label-caps text-label-caps text-primary transition-all hover:border-primary hover:bg-primary/10"
                href="/Jonathan_Lyashko_CV.pdf"
                rel="noreferrer"
                target="_blank"
              >
                <Icon className="h-5 w-5" name="description" />
                RESUME
              </a>
            </div>
            <div className="flex items-center gap-4 pt-1">
              <span className="font-label-caps text-[10px] uppercase tracking-[0.24em] text-primary/45">
                Connect
              </span>
              <div className="h-px w-12 bg-primary/10" />
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/JonathanLyashko"
                  aria-label="GitHub"
                  className="group flex h-10 w-10 items-center justify-center rounded border border-primary/12 bg-primary/4 text-on-surface-variant transition-all hover:border-primary/35 hover:bg-primary/8 hover:text-primary"
                >
                  <Icon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" name="github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jonathan-lyashko/"
                  aria-label="LinkedIn"
                  className="group flex h-10 w-10 items-center justify-center rounded border border-primary/12 bg-primary/4 text-on-surface-variant transition-all hover:border-primary/35 hover:bg-primary/8 hover:text-primary"
                >
                  <Icon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" name="linkedin" />
                </a>
                <a
                  href="mailto:jlyashko@uwaterloo.ca"
                  aria-label="Email"
                  className="group flex h-10 w-10 items-center justify-center rounded border border-primary/12 bg-primary/4 text-on-surface-variant transition-all hover:border-primary/35 hover:bg-primary/8 hover:text-primary"
                >
                  <Icon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" name="mail" />
                </a>
              </div>
            </div>
          </div>
          <div className="order-1 relative flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
            <div className="group relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/30 p-2 shadow-[0_0_30px_rgba(0,229,255,0.2)] md:h-80 md:w-80">
              <div className="h-full w-full overflow-hidden rounded-full border-2 border-primary/20">
                <Image
                  alt="Jonathan Lyashko"
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  height={320}
                  src="/headshot.jpg"
                  width={320}
                />
              </div>
              <div className="scanline rounded-full"></div>
            </div>
          </div>
          <ScrollIndicator />
        </section>

        <section id="about" className="mb-16 mt-40">
          <div className="mb-12 flex items-center gap-4">
            <h2 className="font-headline-lg text-headline-lg tracking-tight text-primary">
              About Me
            </h2>
            <div className="h-[1px] flex-grow bg-primary/20"></div>
            <span className="font-code-sm text-code-sm text-primary/40">
              [TIME_LINE]
            </span>
          </div>
          <div className="relative ml-4 space-y-12 border-l border-primary/20 pl-8 md:ml-8 md:pl-12">
            {timelineItems.map((item) => (
              <TimelineEntry key={item.number} {...item} />
            ))}
          </div>

          <div className="mt-12 flex justify-start">
            <div className="inline-flex items-center gap-4 rounded-xl border border-primary/20 bg-surface-glass px-6 py-3 shadow-[0_0_15px_rgba(0,229,255,0.1)] backdrop-blur-lg">
              <div className="flex flex-col">
                <span className="mb-1 font-label-caps text-[10px] uppercase tracking-widest text-primary/60">
                  Education: Currently Pursuing
                </span>
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-primary" name="school" />
                  <div className="font-code-sm text-sm tracking-tight text-on-surface">
                    BASc in Computer Engineering, Honours, &apos;28
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="mr-1 font-code-sm text-[10px] uppercase tracking-wider text-primary/70">
                        Specializations:
                      </span>
                      <span className="rounded border border-secondary/20 bg-secondary/10 px-2 py-0.5 font-label-caps text-[10px] text-secondary">
                        Quantum Engineering
                      </span>
                      <span className="rounded border border-secondary/20 bg-secondary/10 px-2 py-0.5 font-label-caps text-[10px] text-secondary">
                        Communications and Signal Processing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-2 h-8 w-[1px] bg-primary/10"></div>
              <Link
                href="/academic"
                className="group flex cursor-pointer items-center gap-2 rounded border border-primary/10 bg-primary/5 px-3 py-1 transition-all hover:border-primary/40 hover:bg-primary/10 hover:shadow-[0_0_10px_rgba(0,229,255,0.2)]"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary group-hover:shadow-[0_0_8px_rgba(0,229,255,0.8)]"></span>
                <span className="font-label-caps text-[9px] uppercase tracking-tighter text-primary">
                  View course history
                </span>
                <Icon
                  className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                  name="arrow_forward"
                />
              </Link>
            </div>
          </div>
        </section>

        <section id="experience" className="mt-32">
          <div className="mb-12 flex items-center gap-4">
            <h2 className="font-headline-lg text-headline-lg tracking-tight text-primary">
              Where I&apos;ve Worked
            </h2>
            <div className="h-[1px] flex-grow bg-primary/20"></div>
            <span className="font-code-sm text-code-sm text-primary/40">
              [EXPERIENCE]
            </span>
          </div>
          <div className="relative ml-4 space-y-16 border-l border-primary/20 pl-8 md:ml-8 md:pl-12">
            {experienceItems.map((item) => (
              <ExperienceEntry key={`${item.title}-${item.company}`} {...item} />
            ))}
          </div>
        </section>

        <section id="projects" className="mt-32">
          <div className="mb-12 flex items-center gap-4">
            <h2 className="font-headline-lg text-headline-lg tracking-tight text-primary">
              Some Things I&apos;ve Built
            </h2>
            <div className="h-[1px] flex-grow bg-primary/20"></div>
            <Link
              className="rounded border border-primary/30 px-4 py-1 font-label-caps text-[10px] text-primary transition-all hover:bg-primary/10"
              href="/projects"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projectItems.map((item) => (
              <ProjectCard key={item.title} {...item} />
            ))}
          </div>
          <div className="relative z-10 mt-8 flex justify-center border-t border-primary/10 pt-8">
            <Link
              className="glitch-btn group flex items-center gap-3 rounded border border-primary/30 px-10 py-4 font-label-caps text-label-caps tracking-widest text-primary shadow-[0_0_15px_rgba(0,229,255,0.1)] transition-all hover:border-primary hover:bg-primary/10"
              href="/projects"
            >
              <Icon
                className="h-[18px] w-[18px] transition-transform group-hover:rotate-45"
                name="grid_view"
              />
              VIEW ALL PROJECTS ARCHIVE
            </Link>
          </div>
        </section>

        <section id="contact" className="mb-24 mt-24">
          <div className="mb-12 flex items-center gap-4">
            <h2 className="font-headline-lg text-headline-lg tracking-tight text-primary">
              Email Me
            </h2>
            <div className="h-[1px] flex-grow bg-primary/20"></div>
            <span className="font-code-sm text-code-sm text-primary/40">
              [CONTACT]
            </span>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-surface-glass p-6 shadow-[0_0_30px_rgba(0,229,255,0.1)] backdrop-blur-lg md:p-10">
              <div className="scanline opacity-20"></div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
