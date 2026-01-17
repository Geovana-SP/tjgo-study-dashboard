import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

/**
 * DashboardLayout - Componente de layout principal
 * Design: Minimalismo Jurídico Contemporâneo
 * - Sidebar vertical fixa com navegação
 * - Conteúdo principal com espaço generoso
 * - Paleta: Azul marinho + branco + ouro
 */
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo Principal */}
      <main className="flex-1 overflow-auto">
        <div className="min-h-screen">
          {children}
        </div>
      </main>
    </div>
  );
}
