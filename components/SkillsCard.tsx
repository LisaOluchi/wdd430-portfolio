interface SkillsCardProps {
  title: string;
  skills: string[];
}

export default function SkillsCard({ title, skills }: SkillsCardProps) {
  return (
    <section className="p-4 border-l-4 border-[#F1B2DC] bg-gray-50 rounded">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="px-3 py-1 rounded-full bg-[#F1B2DC] text-gray-900 text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
