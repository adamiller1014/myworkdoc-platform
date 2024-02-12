import { appRouter, createContext } from "@myworkdoc/api";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { NextRequest } from "next/server";




/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a HTTP request (e.g. when you make requests from Client Components).
 */
const createLocalContext = async (req: NextRequest) => {
  return createContext({ req });
};

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => createLocalContext(req)
  });

export { handler as GET, handler as POST };
