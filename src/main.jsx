import "./index.css";
import { StrictMode } from "react";
import router from "./Router/Router";
import { Toaster } from "react-hot-toast";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AosProvider from "@/Provider/AosProvider/AosProvider";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AosProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </AosProvider>
  </StrictMode>
);
