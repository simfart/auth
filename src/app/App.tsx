import "./App.scss";
import { FC } from "react";
import { RoutesProvider } from "./routes/RoutesProvider";
import { QueryClientProvider } from "./routes/queryClientProvider";

export const App: FC = () => {
  return (
    <QueryClientProvider>
      <RoutesProvider />
    </QueryClientProvider>
  );
};
