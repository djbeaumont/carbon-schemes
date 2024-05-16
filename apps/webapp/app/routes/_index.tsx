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

      <table border={1}>
        <thead>
          <th>ID</th>
          <th>URL</th>
          <th>Status</th>
          <th>Country</th>
        </thead>
        <tbody>
          {projects?.map((project) => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>
                <a href={project.url} rel="noreferrer nofollow">
                  {project.url}
                </a>
              </td>
              <td>{project.status}</td>
              <td>{project.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
