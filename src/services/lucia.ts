// lucia.ts
import { lucia } from 'lucia';
import { libsql } from '@lucia-auth/adapter-sqlite';

import { client } from '~/services/db';
import { elysia } from 'lucia/middleware';

export const auth = lucia({
  adapter: libsql(client, {
    key: 'keys',
    session: 'sessions',
    user: 'users',
  }),

  getUserAttributes: (user) => ({
    email: user.email,
  }),

  sessionCookie: {
    name: 'auth_session',
    options: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    },
  },

  middleware: elysia(),
  env: process.env.NODE_ENV === 'production' ? 'PROD' : 'DEV',
});

export type Auth = typeof auth;
