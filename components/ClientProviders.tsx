"use client";

import {SessionProvider} from "next-auth/react";

function ClientProviders({children}: {children: React.ReactNode}) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default ClientProviders;
