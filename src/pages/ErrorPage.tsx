import React from "react";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export type ErrorTypePorps = {
  message: string;
  status: number;
};

const ErrorPage = () => {
  const errorMessage = useRouteError() as ErrorTypePorps;
  console.log(errorMessage);
  return (
    <div>
      <MainNavigation />
      <main id="error-content">
        <h1>{`${errorMessage.message} - (${errorMessage.status})`}</h1>
      </main>
    </div>
  );
};

export default ErrorPage;
