import { Routes, Route } from "react-router-dom";
import { AuthProvider, UserProvider } from "routes/AuthProvider";
import { authRouters, privateRouters } from "./routes/routes";
import "assets/styles/App.css";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<UserProvider />}>
          {authRouters.map((el) => {
            return el.children ? (
              <Route path={el.path} element={el.element}>
                {el.children.map((e) => (
                  <Route index={e?.index} path={e.path} element={e.element} />
                ))}
              </Route>
            ) : (
              <Route path={el.path} element={el.element} />
            );
          })}
        </Route>
        <Route element={<AuthProvider />}>
          {privateRouters.map((el) => {
            return el.children ? (
              <Route path={el.path} element={el.element}>
                {el.children.map((e) => (
                  <Route index={e?.index} path={e.path} element={e.element} />
                ))}
              </Route>
            ) : (
              <Route path={el.path} element={el.element} />
            );
          })}
        </Route>
      </Routes>
    </div>
  );
};
