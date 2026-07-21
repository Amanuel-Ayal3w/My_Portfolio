import { FaTelegram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";

interface ConnectProps {
  description?: string;
}

export function Connect({
  description = "If you want to get in touch about something or just to say hi, feel free to reach out on social media or send me an email.",
}: ConnectProps) {
  const { personalInfo } = portfolioData;

  return (
    <section id="connect" className="border-t border-border pt-10 scroll-mt-8">
      <h2 className="text-sm font-medium text-foreground mb-2">Let&apos;s Connect</h2>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
          className="hover:text-foreground hover:-translate-y-0.5 transition-all"
        >
          <FaGithub className="w-7 h-7" />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          className="hover:text-foreground hover:-translate-y-0.5 transition-all"
        >
          <FaLinkedin className="w-7 h-7" />
        </a>
        <a
          href={personalInfo.telegram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          title="Telegram"
          className="hover:text-foreground hover:-translate-y-0.5 transition-all"
        >
          <FaTelegram className="w-7 h-7" />
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          aria-label={`Email ${personalInfo.email}`}
          title={personalInfo.email}
          className="hover:text-foreground hover:-translate-y-0.5 transition-all"
        >
          <FaEnvelope className="w-7 h-7" />
        </a>
      </div>
    </section>
  );
}
