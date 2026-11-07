import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'MoodWave',
    description:
      'A mood-based web app that suggests music and motivational quotes based on how you are feeling. Users can pick from 8 moods, preview tracks, and save favorites.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Vite', 'REST APIs', 'localStorage'],
    link: 'https://github.com/LisaOluchi/wdd330-final-project',
  },
  {
    title: 'TYPE A Notes',
    description:
      'An interactive, terminal-based note-taking app built to learn TypeScript. Users can create, edit, delete, and organize notes into nested folders, and simulate saving and loading.',
    technologies: ['TypeScript', 'Node.js', 'readline', 'tsx'],
    link: 'https://github.com/LisaOluchi/notes-typescript',
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I am a software engineering student learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
