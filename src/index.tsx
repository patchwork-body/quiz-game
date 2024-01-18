import { html } from '@elysiajs/html';
import { Elysia } from 'elysia';
import { staticPlugin } from '@elysiajs/static';
import { login } from './routes/auth/login';
import { root } from './routes';
import { authApi } from './routes/api/v0/auth';

const app = new Elysia()
  .use(staticPlugin({ assets: 'public' }))
  .use(html())
  .group('/', root)
  .group('/auth/login', login)
  .group('/api/v0/auth', authApi)
  .listen(3000);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
