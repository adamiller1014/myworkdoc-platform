import { router } from "../trpc";
import { casesRouter } from "./routes/cases/cases";
import { employeesRouter } from "./routes/employees/employees";
import { formsRouter } from "./routes/forms/forms";
import { tasksRouter } from "./routes/tasks/tasks";

export const appRouter = router({

  cases: casesRouter,
  employees: employeesRouter,
  forms: formsRouter,
  tasks: tasksRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;