import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../router";
import { LOGIN_URL, VACANCIES_URL } from "../services/constants/URLs";

const AppRouter = () => {
  const { auth, setAuth } = useContext(AuthContext);

  // *delete later*
  useEffect(() => {
    setAuth({ username: "zot", password: "zot1234" })
  }, [])

  function renderAuth() {
    if (
      auth.username === null ||
      auth.username === undefined ||
      auth.password === null ||
      auth.password === undefined
    )
      return false;
    return true;
  }

  return renderAuth() ? (
    <Routes>
      {privateRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="/*" element={<Navigate to={VACANCIES_URL} replace />}></Route>
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="/*" element={<Navigate to={LOGIN_URL} replace />}></Route>
    </Routes>
  );
};

export default AppRouter;
