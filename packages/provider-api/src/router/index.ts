import { router } from "../trpc";
import { casesRouter } from "./routes/cases/cases";
import { companiesRouter } from "./routes/companies/companies";
import { employeesRouter } from "./routes/employees/employees";
import { formsRouter } from "./routes/forms/forms";
import { roomTypesRouter } from "./routes/rooms/roomTypes";

export const appRouter = router({

  cases: casesRouter,
  companies: companiesRouter,
  employees: employeesRouter,

  forms: formsRouter,
  roomTypes: roomTypesRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
