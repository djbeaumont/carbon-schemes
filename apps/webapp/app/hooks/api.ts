const BASE_PATH = 'http://localhost:3000';

export async function api(path: string) {
  // TODO - handle errors
  // TODO - add authz token
  const response = await fetch(BASE_PATH + path, {
    mode: 'cors',
  });
  return await response.json();
}
