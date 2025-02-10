import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="dev-gabriel-ui">
      <RouterProvider router={routes} />;
    </ThemeProvider>
  );
}
