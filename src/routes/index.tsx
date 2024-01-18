import Elysia from 'elysia';
import { Button } from '~/components/button';
import { Layout } from '~/components/layout';
import { page } from '~/helpers/page';

export const root = (group: Elysia<'/'>) => {
  return group.get(
    '/',
    page((context) => {
      return (
        <>
          <div>Your main page</div>

          <Button hx-post="/api/v0/auth/logout" hx-trigger="click">
            Logout
          </Button>
        </>
      );
    }, Layout),
  );
};
