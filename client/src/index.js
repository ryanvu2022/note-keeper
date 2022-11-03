import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <App />
         <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>     
   </React.StrictMode>
);
