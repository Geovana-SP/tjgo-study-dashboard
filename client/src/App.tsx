import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import Schedule from "./pages/Schedule";
import ProgressPage from "./pages/Progress";
import PomodoroPage from "./pages/Pomodoro";
import Notes from "./pages/Notes";
import Gamification from "./pages/Gamification";
import Links from "./pages/Links";

/**
 * App.tsx - Configuração de rotas e tema
 * Design: Minimalismo Jurídico Contemporâneo
 * - Tema claro com paleta azul marinho + ouro
 * - Tipografia: Cormorant Garamond (títulos) + Inter (corpo)
 * - Rotas: Home, Subjects, Schedule, Progress, Pomodoro, Notes, Gamification, Links
 */

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/subjects"} component={Subjects} />
      <Route path={"/schedule"} component={Schedule} />
      <Route path={"/progress"} component={ProgressPage} />
      <Route path={"/pomodoro"} component={PomodoroPage} />
      <Route path={"/notes"} component={Notes} />
      <Route path={"/gamification"} component={Gamification} />
      <Route path={"/links"} component={Links} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
