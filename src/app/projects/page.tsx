export const metadata = {
  alternates: { canonical: 'https://portfolio.cinlodev.com/projects' },
  openGraph: { url: 'https://portfolio.cinlodev.com/projects' },
};

import ProjectsIndexClient from './ProjectsIndexClient';

export default function ProjectsPage() {
  return <ProjectsIndexClient />;
}
