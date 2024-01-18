export type LayoutProps = {
  children?: JSX.Element;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <head>
        <title>Elysia</title>
        <link rel="stylesheet" href="/public/uno.min.css" />
        <script src="/public/htmx.min.js"></script>
      </head>

      <body class="flex flex-col justify-center items-center h-screen">{children}</body>
    </html>
  );
};
