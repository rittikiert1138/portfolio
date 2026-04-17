export default function Home() {
  const skills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Prisma",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "AWS",
    "Tailwind CSS"
  ];

  const experiences = [
    {
      role: "Fullstack Developer",
      company: "Thailife Insurance (Bangkok, TH)",
      period: "April 2022 - Present",
      description:
        "Develop and maintain scalable full-stack applications with React.js, Node.js, and TypeScript. Optimize PostgreSQL/MySQL performance and deploy containerized services to AWS ECS.",
    },
    {
      role: "Fullstack Developer",
      company: "Degito (Bangkok, TH)",
      period: "Nov 2018 - Mar 2022",
      description:
        "Built responsive web applications from UI/UX wireframes, handled full project lifecycle delivery, and collaborated across teams to continuously improve application quality.",
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
      value: "github.com/rittikiert1138",
      href: "https://github.com/rittikiert1138",
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
            focus on scalability, code quality.
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
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
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
