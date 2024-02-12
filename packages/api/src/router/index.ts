import { router } from "../trpc";
import { casesRouter } from "./routes/cases/cases";
import { companiesRouter } from "./routes/companies/companies";

export const appRouter = router({

  cases: casesRouter,
  companies: companiesRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
