import { BookOpen, Calendar, BarChart3, Home, Clock, FileText, Trophy, Link as LinkIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useLocation } from "wouter";

/**
 * Sidebar - Navegação principal
 * Design: Minimalismo Jurídico Contemporâneo
 * - Ícones + labels para cada seção
 * - Espaço generoso entre elementos
 * - Linha divisória sutil
 */
export default function Sidebar() {
  const [location] = useLocation();

  const navItems = [
    { icon: Home, label: "Início", href: "/" },
    { icon: Calendar, label: "Cronograma", href: "/schedule" },
    { icon: BookOpen, label: "Matérias", href: "/subjects" },
    { icon: BarChart3, label: "Progresso", href: "/progress" },
    { icon: Clock, label: "Pomodoro", href: "/pomodoro" },
    { icon: FileText, label: "Anotações", href: "/notes" },
    { icon: Trophy, label: "Gamificação", href: "/gamification" },
    { icon: LinkIcon, label: "Meus Links", href: "/links" },
  ];

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Header */}
      <div className="p-8 border-b border-sidebar-border">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
            <span className="text-primary-foreground font-serif text-lg font-bold">⚖</span>
          </div>
          <h1 className="font-serif text-xl font-bold text-primary">TJGO</h1>
        </div>
        <p className="text-sm text-muted-foreground">Analista Judiciário</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors duration-300 group ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-sidebar-foreground hover:bg-sidebar-accent"
              }`}
            >
              <Icon
                className={`w-5 h-5 flex-shrink-0 ${
                  isActive ? "text-accent" : "text-primary group-hover:text-accent"
                }`}
              />
              <span className="text-sm font-medium">{item.label}</span>
            </a>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-sidebar-border space-y-3">
        <div className="text-xs text-muted-foreground space-y-1">
          <p className="font-semibold text-foreground">Progresso Geral</p>
          <p>0%</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-center gap-2"
        >
          Sair
        </Button>
      </div>
    </aside>
  );
}
