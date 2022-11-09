import { Routes, Route } from "react-router-dom";
import { AuthProvider, UserProvider } from "routes/AuthProvider";
import { authRouters, privateRouters } from "./routes/routes";
import "assets/styles/App.css";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<UserProvider />}>
          {authRouters.map((el, index) => {
            return el.children ? (
              <Route path={el.path} element={el.element} key={index}>
                {el.children.map((e) => (
                  <Route
                    index={e?.index}
                    path={e.path}
                    element={e.element}
                    key={index}
                  />
                ))}
              </Route>
            ) : (
              <Route path={el.path} element={el.element} key={index} />
            );
          })}
        </Route>
        <Route element={<AuthProvider />}>
          {privateRouters.map((el, index) => {
            return el.children ? (
              <Route path={el.path} element={el.element} key={index}>
                {el.children.map((e) => (
                  <Route
                    index={e?.index}
                    path={e.path}
                    element={e.element}
                    key={index}
                  />
                ))}
              </Route>
            ) : (
              <Route path={el.path} element={el.element} key={index} />
            );
          })}
        </Route>
      </Routes>
    </div>
  );
};
