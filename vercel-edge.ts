import { createApplication } from './dist/app-porfolio/server/app/index.mjs';
import { runServer } from '@angular/ssr';

export default async function handler(request: Request): Promise<Response> {
  const app = await createApplication();
  return runServer(app, request);
}
