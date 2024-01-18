export const page = <T extends (...args: any) => any>(
  handler: T,
  Layout: (props: { children?: JSX.Element }) => JSX.Element,
) => {
  return (context: Parameters<T>) => {
    if (!context.headers['HX-Request']) {
      return <Layout>{handler(context)}</Layout>;
    }

    return handler(context);
  };
};
