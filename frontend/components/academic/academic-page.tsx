"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Icon } from "@/components/shared/icon";
import { courseItems } from "@/lib/site-data";

export function AcademicPage() {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const groupedCourses = useMemo(() => {
    return courseItems.reduce<Record<string, typeof courseItems>>((acc, course) => {
      if (!acc[course.term]) {
        acc[course.term] = [];
      }
      acc[course.term].push(course);
      return acc;
    }, {});
  }, []);

  const selectedCourse =
    courseItems.find((course) => course.id === selectedCourseId) ?? courseItems[0];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="relative mx-auto max-w-7xl flex-grow overflow-visible px-4 pb-24 pt-32 md:ml-64 md:px-margin-safe">
        <div className="scanline"></div>
        <div className="mx-auto max-w-6xl px-gutter py-12">
          <div className="mb-12 flex flex-col items-end justify-between gap-6 border-l-4 border-primary pl-6 md:flex-row">
                <div>
                  <h1 className="mb-2 font-headline-xl text-5xl tracking-tighter text-primary md:text-7xl">
                    {"Courses I've Taken"}
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
            <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.8fr)]">
              <div className="overflow-hidden rounded border border-outline-variant/20 bg-surface-container-low/40">
                <table className="w-full table-fixed border-collapse text-left">
                  <thead>
                    <tr className="border-b border-outline-variant/30 bg-surface-container-high/60">
                      <th className="w-40 px-6 py-1.5 font-label-caps text-label-caps text-on-surface-variant/60">
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
                        {courses.map((course) => {
                          const isSelected = selectedCourse.id === course.id;

                          return (
                            <tr
                              key={course.id}
                              className={`high-density-row group/row cursor-pointer transition-colors ${
                                isSelected ? "bg-primary/8" : ""
                              }`}
                              onClick={() => setSelectedCourseId(course.id)}
                            >
                              <td className="px-6 py-2 align-top font-bold text-primary">
                                <div className="flex items-center gap-2">
                                  <Icon
                                    className={`h-4 w-4 transition-transform group-hover/row:text-glow-blue ${
                                      isSelected ? "rotate-45" : ""
                                    }`}
                                    name="add"
                                  />
                                  <span>{course.code}</span>
                                </div>
                              </td>
                              <td className="px-6 py-2 text-on-surface">{course.title}</td>
                            </tr>
                          );
                        })}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>

              <aside className="self-start">
                <div className="lg:sticky lg:top-28">
                  <div className="relative overflow-hidden rounded border border-primary/20 bg-surface-container-low/50 p-6">
                    <div className="scanline opacity-10"></div>
                    <div className="relative z-10 flex flex-col gap-4">
                      <div className="flex items-start justify-between gap-4 border-b border-primary/10 pb-4">
                        <div>
                          <p className="font-label-caps text-[10px] uppercase tracking-widest text-primary/60">
                            Selected Course
                          </p>
                          <h3 className="mt-2 font-headline-lg text-2xl text-on-surface">
                            {selectedCourse.code}
                          </h3>
                          <p className="mt-1 text-sm text-on-surface-variant">
                            {selectedCourse.title}
                          </p>
                        </div>
                        <span className="rounded border border-primary/15 bg-primary/5 px-2 py-1 font-label-caps text-[10px] text-primary">
                          {selectedCourse.term}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <p className="font-label-caps text-[10px] uppercase tracking-widest text-primary/60">
                          Calendar Description
                        </p>
                        <p className="text-sm leading-relaxed text-on-surface-variant">
                          {selectedCourse.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
