export default function Home() {
  const skills = [
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Prisma",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "AWS",
    "Tailwind CSS",
    "Golang",
    "Gin",
    "Gorm",
  ];

  const experiences = [
    {
      role: "Fullstack Developer",
      company: "Thailife Insurance (Bangkok, TH)",
      period: "April 2022 - Present",
      description: [
        "Develop and maintain scalable full-stack applications with React.js, Node.js, and TypeScript.",
        "Optimize PostgreSQL/MySQL queries and database design to improve performance and stability.",
        "Containerize services with Docker and support deployment workflows on AWS ECS.",
        "Designed and built a dynamic form platform where Admin and BU teams can configure form elements without code for multiple company events.",
        "Enabled non-technical users to create event-specific forms quickly through configurable form elements.",
        "Centralized submission data by event and provided Excel export for reporting and operational follow-up.",
      ],
    },
    {
      role: "Fullstack Developer",
      company: "Degito (Bangkok, TH)",
      period: "Nov 2018 - Mar 2022",
      description: [
        "Contributed to the team in building UI for the cu-book e-commerce website across both desktop and mobile experiences.",
        "Built responsive web applications from UI/UX wireframes using modern frontend technologies.",
        "Handled end-to-end delivery from implementation to testing and release coordination.",
        "Collaborated with cross-functional teams to improve product quality and delivery speed.",
      ],
    },
  ];

  const contacts = [
    {
      label: "Email",
      value: "rittikiert.s@gmail.com",
      href: "mailto:rittikiert.s@gmail.com",
    },
    {
      label: "GitHub",
      value: "github.com/rtkss",
      href: "https://github.com/rtkss",
    },
    {
      label: "Location",
      value: "Roi-et, Thailand",
      href: "",
    },
    {
      label: "Phone",
      value: "+66 83 842 7290",
      href: "tel:+66838427290",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="mx-auto w-full max-w-3xl px-6 py-20">
        <section className="space-y-6">
          <p className="text-sm uppercase tracking-[0.16em] text-slate-500">
            Fullstack Developer
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Rittikiert Sankamlang
          </h1>
          <p className="max-w-2xl text-slate-600">
            Fullstack developer with hands-on experience in modern web
            development, cloud deployment, and database optimization. Open to
            relocating internationally.
          </p>
        </section>

        <section id="about" className="mt-8 border-t border-slate-200 pt-8">
          <h2 className="text-xl font-semibold">About</h2>
          <p className="mt-4 text-slate-600">
            I have over 7 years of experience building and maintaining web
            applications across insurance and software service domains, with a
            focus on scalability, code quality, and long-term maintainability.
            I enjoy designing practical solutions, improving system performance,
            and collaborating closely with product and engineering teams.
          </p>
          <p className="mt-3 text-slate-600">
            My current focus is delivering reliable full-stack systems with
            clean architecture, efficient data access patterns, and smooth user
            experience.
          </p>
        </section>

        <section id="skills" className="mt-8 border-t border-slate-200 pt-8">
          <h2 className="text-xl font-semibold">Skills</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="highlights" className="mt-16">
          <h2 className="text-xl font-semibold">Work Experience</h2>
          <div className="mt-6 space-y-5">
            {experiences.map((item) => (
              <article
                key={`${item.company}-${item.period}`}
                className="rounded-lg border border-slate-200 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold">{item.role}</h3>
                    <p className="text-sm text-slate-500">{item.company}</p>
                  </div>
                  <span className="text-xs text-slate-500">{item.period}</span>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
                  {item.description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-16 border-t border-slate-200 pt-12">
          <h2 className="text-xl font-semibold">Contact</h2>
          <div className="mt-4 space-y-2 text-slate-600">
            {contacts.map((item) => (
              <p key={item.label}>
                <span className="font-medium text-slate-800">{item.label}: </span>
                {item.href ? (
                  <a
                    className="underline-offset-4 hover:underline"
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </p>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
