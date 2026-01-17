import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SubjectCardProps {
  name: string;
  progress: number;
  hoursStudied: number;
  totalHours: number;
  icon: string;
  color: string;
}

/**
 * SubjectCard - Card individual para cada matéria
 * Design: Minimalismo Jurídico Contemporâneo
 * - Barra de progresso com cor dinâmica
 * - Informações de horas estudadas
 * - Ícone representativo
 */
export default function SubjectCard({
  name,
  progress,
  hoursStudied,
  totalHours,
  icon,
  color,
}: SubjectCardProps) {
  return (
    <Card className="p-6 hover:shadow-md transition-shadow duration-300 border-l-4" style={{ borderLeftColor: color }}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-serif font-bold text-primary text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {hoursStudied}h de {totalHours}h
          </p>
        </div>
        <span className="text-2xl">{icon}</span>
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-foreground">Progresso</span>
            <span className="text-xs font-bold text-primary">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="pt-3 border-t border-border">
          <button className="text-sm text-accent hover:text-accent/80 font-medium transition-colors">
            Estudar Agora →
          </button>
        </div>
      </div>
    </Card>
  );
}
