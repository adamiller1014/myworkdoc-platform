import { prisma } from "@myworkdoc/db";
import { type inferAsyncReturnType } from "@trpc/server";

import { currentUser, getAuth } from "@clerk/nextjs/server";
import type {
  SignedInAuthObject,
  SignedOutAuthObject,
} from "@clerk/nextjs/api";
import { RequestLike } from "@clerk/nextjs/dist/types/server/types";

type PanelType = "Admin" | "Provider" | "End User";

/**
 * Replace this with an object if you want to pass things to createContextInner
 */
type AuthContextProps = {
  auth: SignedInAuthObject | SignedOutAuthObject;
};

/** Use this helper for:
 *  - testing, where we dont have to Mock Next.js' req/res
 *  - trpc's `createSSGHelpers` where we don't have req/res
 * @see https://beta.create.t3.gg/en/usage/trpc#-servertrpccontextts
 */
export const createContextInner = async ({ auth }: AuthContextProps) => {

  // Inject Profile into context if user is signed in
  const user = await currentUser();

  const emailAddress = user?.emailAddresses[0]?.emailAddress;
  if (!emailAddress) {
    throw new Error("No email address found");
  }

  const profile = await prisma.profiles.findFirst({
    where: {
      email: emailAddress,
    },
    include: {
      profile_type: true,
    }
  });

  if (!profile) {
    throw new Error("Profile not found");
  }

  let panelType: PanelType;

  if (profile.profile_type?.type === 'Admin') {
    panelType = 'Admin';
  } else if (profile.profile_type?.type === 'Provider') {
    panelType = 'Provider';
  } else {
    panelType = 'End User';
  }


  return {
    panelType,
    auth,
    user,
    profile,
    db: prisma,
  };
};

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async (opts: { req: RequestLike; }) => {
  return await createContextInner({ auth: getAuth(opts.req) });
};

export type Context = inferAsyncReturnType<typeof createContext>;
