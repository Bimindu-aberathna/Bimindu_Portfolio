import { ThemeToggle } from "./components/theme_toggle/theme_toggle";
import WhatsApp_contact from "./components/theme_toggle/WhatsApp_Contact";
import { portfolioData } from "./data/portfolio";

export default function Home() {
  
  return (
    <div className="bg-background text-foreground">
     <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-xl">
  <nav className="mx-auto flex h-16 w-full max-w-6xl items-center px-4 md:px-6">
    
    <div className="flex flex-1 items-center gap-5 overflow-x-auto text-sm text-muted pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <a href="#about" className="whitespace-nowrap transition-colors hover:text-red-500">
        About
      </a>
      <a href="#skills" className="whitespace-nowrap transition-colors hover:text-red-500">
        Skills
      </a>
      <a href="#projects" className="whitespace-nowrap font-medium transition-colors hover:text-red-500">
        Projects
      </a>
      <a href="#experience" className="whitespace-nowrap transition-colors hover:text-red-500">
        Experience
      </a>
      <a href="#contact" className="whitespace-nowrap transition-colors hover:text-red-500">
        Contact
      </a>
    </div>

    <div className="flex-shrink-0 flex items-center pl-2">
      <ThemeToggle />
    </div>
    
  </nav>
</header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-16 md:py-20">
        <section className="grid gap-8 md:grid-cols-3 md:items-end">
          <div className="md:col-span-1 space-y-6">
             <div className="flex gap-3">
            <a
            target="_blank"
              href="https://drive.google.com/file/d/1wDJMjxpfavvs2bcvUbCkZ6BB1tkbSnJ0/view?usp=sharing"
              className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground transition-colors hover:border-accent hover:bg-accent/10"
            >
              CV <i className="ph ph-file-arrow-down"></i>
            </a>
          </div>
           </div>
          <div className="md:col-span-2 space-y-5 text-right">
            {/* <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
              {portfolioData.role} · {portfolioData.location}
            </p> */}
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              {portfolioData.firstName}
              <span className="not-italic font-semibold text-black [-webkit-text-stroke:1.5px_white] [paint-order:stroke_fill]"> {portfolioData.lastName}</span>
            </h1>
            <p className=" text-xl text-muted/90 text-right">
              Bachelor of Science Honours in Management and Information Technology
            </p>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
              Department of Industrial Management<br/>Faculty of Science<br/>University of Kelaniya<br/>📍 Kelaniya, Sri Lanka
            </p>
          </div>
          
        </section>
        <section className="grid gap-8 md:grid-cols-3 md:items-end">
          <div className="md:col-span-2 space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
              {portfolioData.role} · {portfolioData.location}
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              {portfolioData.headline}
            </h1>
            <p className="max-w-2xl text-lg text-muted/90">
              {portfolioData.shortBio}
            </p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground transition-colors hover:border-accent hover:bg-accent/10"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
            >
              Contact Me
            </a>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="max-w-3xl text-muted/90">{portfolioData.shortBio}</p>
        </section>

        <section id="skills" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {portfolioData.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-card px-3 py-1 text-sm text-card-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {portfolioData.projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-[0_0_0_1px_rgba(34,48,74,0.2)]"
              >
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-muted/90">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={`${project.title}-${item}`}
                      className="rounded-md border border-border bg-background/40 px-2 py-1 text-xs text-card-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4 text-sm">
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-muted underline decoration-border underline-offset-4 transition-colors hover:text-accent"
                    >
                      Code
                    </a>
                  ) : null}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-muted underline decoration-border underline-offset-4 transition-colors hover:text-accent"
                    >
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <div className="space-y-4">
            {portfolioData.experience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <p className="text-sm text-muted">{item.period}</p>
                <h3 className="mt-1 text-lg font-semibold">
                  {item.role} · {item.company}
                </h3>
                <p className="mt-2 text-sm text-muted/90">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 space-y-4 pb-8">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="text-muted/90">
            Open to collaborations and new opportunities. Reach out anytime.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href={`mailto:${portfolioData.email}`}
              className="rounded-full border border-border bg-card px-4 py-2 text-card-foreground transition-colors hover:border-red-500 hover:bg-red-500/10"
            >
              {portfolioData.email}
            </a>
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-card px-4 py-2 text-card-foreground transition-colors hover:border-red-500 hover:bg-red-500/10"
            >
              GitHub
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-card px-4 py-2 text-card-foreground transition-colors hover:border-red-500 hover:bg-red-500/10"
            >
              LinkedIn
            </a>
            <a 
              href={`tel:${portfolioData.phone.replace(/\s+/g, '')}`}
              className="rounded-full border border-border bg-card px-4 py-2 text-card-foreground transition-colors hover:border-red-500 hover:bg-red-500/10"
            >
              Tel: {portfolioData.phone}
            </a>
          </div>
        </section>
      </main>
      <WhatsApp_contact />
    </div>
  );
}
