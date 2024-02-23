import { router } from "../trpc";
import { addressesRouter } from "./routes/addresses/addresses";
import { authRouter } from "./routes/auth/authRouter";
import { caseFormsRouter } from "./routes/case-forms/caseForm";
import { casesRouter } from "./routes/cases/cases";
import { companiesRouter } from "./routes/companies/companies";
import { departmentsRouter } from "./routes/departments/departments";
import { employeesRouter } from "./routes/employees/employees";
import { fileUploadsRouter } from "./routes/file_uploads/fileUploads";
import { formsRouter } from "./routes/forms/forms";
import { roomTypesRouter } from "./routes/rooms/roomTypes";

export const appRouter = router({

  cases: casesRouter,
  companies: companiesRouter,
  employees: employeesRouter,

  //Setting Routers
  departments: departmentsRouter,

  forms: formsRouter,
  roomTypes: roomTypesRouter,
  fileUploads: fileUploadsRouter,
  addresses: addressesRouter,

  auth: authRouter,
  caseForms: caseFormsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
