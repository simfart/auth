import "./App.scss";
import { FC } from "react";
import { RoutesProvider } from "./routes/RoutesProvider";
import { QueryClientProvider } from "./routes/QueryClientProvider";
import { BrowserRouter } from "react-router-dom";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider>
        <RoutesProvider />
      </QueryClientProvider>
    </BrowserRouter>
  );
};
