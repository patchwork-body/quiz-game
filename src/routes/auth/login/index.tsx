import Elysia from 'elysia';
import { Button } from '~/components/button';
import { Input } from '~/components/input';
import { Layout } from '~/components/layout';
import { page } from '~/helpers/page';

export const login = (group: Elysia<'/auth/login'>) => {
  return group.get(
    '/',
    page(() => {
      return (
        <>
          <h1>Login</h1>

          <form hx-post="/api/v0/auth/login" method="post" class="flex flex-col gap-2 max-w-md mx-auto">
            <Input name="email" type="email" placeholder="Email" />
            <Input name="password" type="password" placeholder="Password" />
            <Button type="submit">Login</Button>
          </form>
        </>
      );
    }, Layout),
  );
};
