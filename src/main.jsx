import "./index.css";
import { StrictMode } from "react";
import router from "@/Router/Router";
import { Toaster } from "react-hot-toast";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AosProvider from "@/Provider/AosProvider/AosProvider";
import AuthProvider from "@/Provider/AuthProvider/AuthProvider";
import UseSiteSettings from "@/components/UseSiteSettings/UseSiteSettings";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AosProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
          <Toaster />
          <UseSiteSettings />
        </AuthProvider>
      </QueryClientProvider>
    </AosProvider>
  </StrictMode>
);
