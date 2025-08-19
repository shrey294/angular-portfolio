import { renderApplication } from '@angular/platform-server';

export default async function handler(request: Request): Promise<Response> {
  // @ts-ignore: Ignore missing types for the server bundle
  const { createApplication } = await import('./output/server/main.server.mjs');

  const app = await createApplication();

  const html = await renderApplication(app, {
    url: request.url
  });

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html'
    }
  });
}
