import { Button } from '~/components/button';
import { Input } from '~/components/input';

export const Root = () => {
  return (
    <html>
      <head>
        <title>Elysia</title>
        <link rel="stylesheet" href="/public/uno.min.css" />
        <script src="/public/htmx.min.js"></script>
      </head>

      <body class="flex flex-col justify-center items-center h-screen">
        <h1>Elysia</h1>
      </body>
    </html>
  );
};
