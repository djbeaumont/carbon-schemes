import type { MetaFunction } from '@remix-run/node';
import { useProjects } from '~/hooks/useProjects';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix SPA' },
    { name: 'description', content: 'Welcome to Remix (SPA Mode)!' },
  ];
};

export default function Index() {
  const { data: projects } = useProjects();
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Welcome to Carbon Schemes!</h1>

      <h2>Projects</h2>
      <ul>
        {projects?.map((project) => <li key={project.id}>{project.id}</li>)}
      </ul>
    </div>
  );
}
