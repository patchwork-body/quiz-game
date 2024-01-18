/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import('~/services/lucia').Auth;
  type DatabaseUserAttributes = {
    email: string;
  };
  type DatabaseSessionAttributes = object;
}
