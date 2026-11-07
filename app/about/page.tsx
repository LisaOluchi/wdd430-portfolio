import SkillsCard from '@/components/SkillsCard';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-8">
        This about page shares more information about my skills, technical expertise and knowledge in various areas of software development, which I am truly passionate about.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <SkillsCard
          title="Languages"
          skills={['Python', 'JavaScript', 'Java', 'SQL', 'HTML', 'CSS', 'C', 'TypeScript']}
        />
        <SkillsCard
          title="Frontend"
          skills={['React', 'Next.js', 'Vue', 'Tailwind CSS', 'DOM Manipulation', 'API Integration', 'Responsive Design', 'UI/UX principles']}
        />
        <SkillsCard
          title="Backend / CS"
          skills={['Node.js', 'Express', 'REST API design', 'Server-side rendered web applications', 'MongoDB', 'Relational databases (SQL)', 'OAuth authentication', 'Swagger API documentation', 'OOP', 'Data Structures (Linked Lists, Stacks, Queues)', 'Algorithms', 'Async Programming']}
        />
        <SkillsCard
          title="Software Testing"
          skills={['Test cases', 'Bug reporting', 'Software testing standards and techniques']}
        />
        <SkillsCard
          title="Cybersecurity"
          skills={['Networking fundamentals', 'Risk Analysis', 'Digital Forensics', 'Security Auditing']}
        />
        <SkillsCard
          title="Tools / Frameworks"
          skills={['Git & GitHub (version control)', 'VS Code', 'Canva', 'Excel', 'AI tools (Prompt Engineering)']}
        />
        <SkillsCard
          title="Soft Skills"
          skills={['Problem-solving', 'Critical Thinking', 'Communication', 'Teamwork', 'Adaptability', 'Time Management', 'Research & Information Analysis', 'Presentation & Documentation']}
        />
        <SkillsCard
          title="Other Certs / Projects"
          skills={['CS50 Harvard', 'Codewise Academy: Cybersecurity Analyst Bootcamp', 'Certified Transcriber', '3D Printing', 'HexSoftwares Calculator App', 'Web-based apps']}
        />
      </div>
      <p className="text-lg text-gray-700 mt-8">
        I am always learning, and I look forward to growing as a developer, taking on new challenges, and building software that is useful to others. Thank you for visiting my portfolio.
      </p>
    </main>
  );
}

