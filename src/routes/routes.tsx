import AppLayout from "components/layouts/AppLayout";
import { RegisterLayout } from "components/layouts/RegisterLayout";
import { ResetLayout } from "components/layouts/ResetLayout";
import { LoginPage } from "modules/auth/login/LoginPage";
import { RegisterCompletePage } from "modules/auth/registration/RegisterCompletePage";
import { RegisterEmailPage } from "modules/auth/registration/RegisterEmailPage";
import { RegisterPage } from "modules/auth/registration/RegisterPage";
import { TermsConditionsPage } from "modules/auth/registration/TermsConditionsPage";
import { ResetCompletePage } from "modules/auth/resetPassword/ResetCompletePage";
import { ResetEmailPage } from "modules/auth/resetPassword/ResetEmailPage";
import { ResetPage } from "modules/auth/resetPassword/ResetPage";
import { AutomazioniPage } from "modules/automazioni/AutomazioniPage";
import { DatabasePage } from "modules/database/DatabasePage";
import { MacroFasiPage } from "modules/macroFasi/MacroFasi";
import { ModelliPage } from "modules/modelli/ModelliPage";
import { NotFoundPage } from "modules/NotFoundPage";
import { ProcessPage } from "modules/process/processCommon/ProcessPage";
import { ProcessItemPage } from "modules/process/processItem/ProcessItemPage";
import { SupportoPage } from "modules/supporto/SupportoPage";
import { TeamPage } from "modules/team/TeamPage";
import { VenditoriPage } from "modules/venditori/VenditoriPage";

interface IRoute {
  path: string;
  element: JSX.Element;
  children?: IRoute[];
  index?: boolean;
}

export const authRouters: IRoute[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterLayout />,
    children: [
      {
        path: "/register",
        index: true,
        element: <RegisterPage />,
      },
      {
        path: "email-sent",
        element: <RegisterEmailPage />,
      },
      {
        path: "complete",
        element: <RegisterCompletePage />,
      },
    ],
  },
  {
    path: "/reset",
    element: <ResetLayout />,
    children: [
      {
        path: "/reset",
        index: true,
        element: <ResetPage />,
      },
      {
        path: "email-sent",
        element: <ResetEmailPage />,
      },
      {
        path: "complete",
        element: <ResetCompletePage />,
      },
    ],
  },
  {
    path: "/terms",
    element: <TermsConditionsPage />,
  },
];

export const privateRouters: IRoute[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <ProcessPage />,
      },
      {
        path: "processi",
        element: <ProcessPage />,
      },
      {
        path: "processi/process1",
        element: <ProcessItemPage />,
      },
      {
        path: "team",
        element: <TeamPage />,
      },
      {
        path: "modelli",
        element: <ModelliPage />,
      },
      {
        path: "database",
        element: <DatabasePage />,
      },
      {
        path: "macroFasi",
        element: <MacroFasiPage />,
      },
      {
        path: "automazioni",
        element: <AutomazioniPage />,
      },
      {
        path: "venditori",
        element: <VenditoriPage />,
      },
      {
        path: "supporto",
        element: <SupportoPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];
