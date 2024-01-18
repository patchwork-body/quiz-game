import Elysia, { t } from 'elysia';
import { auth } from '~/services/lucia';

export const authApi = (group: Elysia<'/api/v0/auth'>) => {
  return group
    .post(
      '/login',
      async (context) => {
        const { email, password } = context.body;
        const key = await auth.useKey('email', email, password);

        const session = await auth.createSession({
          userId: key.userId,
          attributes: {},
        });

        const authRequest = auth.handleRequest(context);
        authRequest.setSession(session);
        context.set.headers['HX-Redirect'] = '/';
      },
      {
        body: t.Object({
          email: t.String(),
          password: t.String(),
        }),
      },
    )
    .post('/logout', async (context) => {
      const authRequest = auth.handleRequest(context);
      const session = await authRequest.validate();

      if (!session) {
        return;
      }

      await auth.invalidateSession(session?.sessionId);
      context.set.headers['HX-Redirect'] = '/auth/login';
      return;
    });
};
