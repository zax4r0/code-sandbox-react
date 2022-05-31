import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./lib/routes";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, idx) => (
          <Route
            path={route.path}
            element={<route.element />}
            key={idx}
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}
