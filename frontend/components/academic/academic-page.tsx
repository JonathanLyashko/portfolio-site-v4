"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Icon } from "@/components/shared/icon";
import { courseItems } from "@/lib/site-data";

export function AcademicPage() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const groupedCourses = useMemo(() => {
    return courseItems.reduce<Record<string, typeof courseItems>>((acc, course) => {
      if (!acc[course.term]) {
        acc[course.term] = [];
      }
      acc[course.term].push(course);
      return acc;
    }, {});
  }, []);

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="relative mx-auto max-w-7xl flex-grow overflow-hidden px-4 pb-24 pt-32 md:ml-64 md:px-margin-safe">
        <div className="scanline"></div>
        <div className="mx-auto max-w-6xl px-gutter py-12">
          <div className="mb-12 flex flex-col items-end justify-between gap-6 border-l-4 border-primary pl-6 md:flex-row">
                <div>
                  <h1 className="mb-2 font-headline-xl text-5xl tracking-tighter text-primary md:text-7xl">
                    {"./Course History"}
                  </h1>
              <p className="font-code-sm text-code-sm uppercase tracking-widest text-on-surface-variant">
                <br />
              </p>
            </div>
            <Link
              className="group flex items-center gap-2 rounded-lg border border-outline-variant bg-surface-glass px-6 py-3 shadow-lg transition-all active:scale-95 hover:border-primary-fixed-dim"
              href="/"
            >
              <Icon className="h-5 w-5 text-primary group-hover:animate-pulse" name="home" />
              <span className="font-label-caps text-label-caps text-primary">
                RETURN TO HOME
              </span>
            </Link>
          </div>

          <section className="mb-12">
            <div className="mb-4 flex items-center gap-4">
              <h2 className="border border-secondary/20 bg-secondary/10 px-3 py-1 font-label-caps text-label-caps text-secondary">
                Degree Data
              </h2>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-secondary/30 to-transparent"></div>
            </div>
            <div className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded border border-secondary/20 bg-surface-container-low/40 p-6 md:flex-row md:items-center">
              <div className="scanline opacity-10"></div>
              <div className="relative z-10 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded border border-secondary/30 bg-secondary/5">
                  <Icon className="h-6 w-6 text-secondary" name="school" />
                </div>
                <div>
                  <p className="mb-1 font-label-caps text-[10px] uppercase tracking-widest text-secondary/60">
                    Degree: Currently pursuing
                  </p>
                  <h3 className="font-headline-lg text-xl tracking-tight text-on-surface">
                    BASc in Computer Engineering, Honours, &apos;28
                  </h3>
                </div>
              </div>
              <div className="relative z-10 flex flex-col gap-2">
                <p className="font-label-caps text-[10px] uppercase tracking-widest text-secondary/60">
                  Specializations
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded border border-secondary/20 bg-secondary/10 px-2 py-0.5 font-label-caps text-[10px] text-secondary">
                    Quantum Engineering
                  </span>
                  <span className="rounded border border-secondary/20 bg-secondary/10 px-2 py-0.5 font-label-caps text-[10px] text-secondary">
                    Communications and Signal Processing
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="overflow-hidden rounded border border-outline-variant/20 bg-surface-container-low/40">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-outline-variant/30 bg-surface-container-high/60">
                    <th className="px-6 py-1.5 font-label-caps text-label-caps text-on-surface-variant/60">
                      CODE
                    </th>
                    <th className="px-6 py-1.5 font-label-caps text-label-caps text-on-surface-variant/60">
                      TITLE
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10 font-code-sm text-code-sm">
                  {Object.entries(groupedCourses).map(([term, courses]) => (
                    <Fragment key={term}>
                      <tr key={`${term}-header`} className="bg-primary/5">
                        <td
                          className="px-6 py-2 font-label-caps text-[10px] tracking-widest text-primary-fixed-dim"
                          colSpan={2}
                        >
                          {term}
                        </td>
                      </tr>
                      {courses.map((course) => (
                        <Fragment key={course.id}>
                          <tr
                            className="high-density-row group/row cursor-pointer transition-colors"
                            onClick={() => toggleExpand(course.id)}
                          >
                            <td className="flex gap-2 px-6 py-2 font-bold text-primary">
                              <Icon
                                className={`h-4 w-4 transition-transform group-hover/row:text-glow-blue ${
                                  expanded[course.id] ? "rotate-45" : ""
                                }`}
                                name="add"
                              />
                              {course.code}
                            </td>
                            <td className="px-6 py-2 text-on-surface">{course.title}</td>
                          </tr>
                          {expanded[course.id] && (
                            <tr className="border-l-2 border-primary bg-primary/5">
                              <td
                                className="px-12 py-3 font-code-sm leading-relaxed text-on-surface-variant/80"
                                colSpan={2}
                              >
                                <span className="mr-2 text-primary/40">[DESC]:</span>
                                {course.desc}
                              </td>
                            </tr>
                          )}
                        </Fragment>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
