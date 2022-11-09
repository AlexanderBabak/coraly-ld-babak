import AppLayout from "components/layouts/AppLayout";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./modules/auth/login/LoginPage";
import { RegisterPage } from "modules/auth/registration/RegisterPage";
import { RegisterEmailPage } from "modules/auth/registration/RegisterEmailPage";
import { RegisterCompletePage } from "modules/auth/registration/RegisterCompletePage";
import { ResetPage } from "modules/auth/resetPassword/ResetPage";
import { ResetEmailPage } from "modules/auth/resetPassword/ResetEmailPage";
import { ResetCompletePage } from "modules/auth/resetPassword/ResetCompletePage";
import { NotFoundPage } from "modules/NotFoundPage";
import { TermsConditionsPage } from "modules/auth/registration/TermsConditionsPage";
import { AuthProvider, UserProvider } from "routes/AuthProvider";
import { RegisterLayout } from "components/layouts/RegisterLayout";
import { ResetLayout } from "components/layouts/ResetLayout";
import { ProcessPage } from "modules/process/processCommon/ProcessPage";
import { TeamPage } from "modules/team/TeamPage";
import { ProcessItemPage } from "modules/process/processItem/ProcessItemPage";
import { ModelliPage } from "modules/modelli/ModelliPage";
import { DatabasePage } from "modules/database/DatabasePage";
import { MacroFasiPage } from "modules/macroFasi/MacroFasi";
import { AutomazioniPage } from "modules/automazioni/AutomazioniPage";
import { VenditoriPage } from "modules/venditori/VenditoriPage";
import { SupportoPage } from "modules/supporto/SupportoPage";
import "assets/styles/App.css";

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<UserProvider />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterLayout />}>
            <Route index element={<RegisterPage />} />
            <Route path="email-sent" element={<RegisterEmailPage />} />
            <Route path="complete" element={<RegisterCompletePage />} />
          </Route>
          <Route path="/reset" element={<ResetLayout />}>
            <Route index element={<ResetPage />} />
            <Route path="email-sent" element={<ResetEmailPage />} />
            <Route path="complete" element={<ResetCompletePage />} />
          </Route>
          <Route path="/terms" element={<TermsConditionsPage />} />
        </Route>
        <Route element={<AuthProvider />}>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<ProcessPage />} />
            <Route path="processi" element={<ProcessPage />} />
            <Route path="processi/process1" element={<ProcessItemPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="modelli" element={<ModelliPage />} />
            <Route path="database" element={<DatabasePage />} />
            <Route path="macroFasi" element={<MacroFasiPage />} />
            <Route path="automazioni" element={<AutomazioniPage />} />
            <Route path="venditori" element={<VenditoriPage />} />
            <Route path="supporto" element={<SupportoPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
