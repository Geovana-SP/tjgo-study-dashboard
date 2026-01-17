import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Award, Flame } from "lucide-react";

/**
 * Progress - Página de rastreamento de progresso
 * Design: Minimalismo Jurídico Contemporâneo
 * - Visualização de progresso geral
 * - Estatísticas por matéria
 * - Histórico de estudos
 */
export default function ProgressPage() {
  const weeklyStats = [
    { week: "Semana 1", hours: 0, completed: 0 },
    { week: "Semana 2", hours: 0, completed: 0 },
    { week: "Semana 3", hours: 0, completed: 0 },
    { week: "Semana 4", hours: 0, completed: 0 },
  ];

  const subjectProgress = [
    { name: "Português", progress: 0, target: 40 },
    { name: "Dir. Constitucional", progress: 0, target: 40 },
    { name: "Dir. Administrativo", progress: 0, target: 40 },
    { name: "Dir. Penal", progress: 0, target: 40 },
    { name: "Dir. Processual", progress: 0, target: 40 },
    { name: "Legislação TJGO", progress: 0, target: 40 },
  ];

  const achievements = [
    { icon: "🔥", label: "7 Dias Consecutivos", description: "Estude 7 dias seguidos para desbloquear" },
    { icon: "⭐", label: "Primeira Sessão", description: "Complete sua primeira sessão de estudo" },
    { icon: "🎯", label: "Meta Semanal", description: "Atinja 40 horas de estudo na semana" },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <section className="px-8 lg:px-16 py-12 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-primary mb-2">
            Seu Progresso
          </h1>
          <p className="text-muted-foreground">
            Acompanhe sua evolução na preparação para o concurso
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="px-8 lg:px-16 py-12 bg-card">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 border-l-4 border-l-accent">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Total de Horas</p>
                <p className="text-3xl font-serif font-bold text-primary mt-2">0h</p>
                <p className="text-xs text-muted-foreground mt-2">de 480h planejadas</p>
              </div>
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-accent">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Progresso Geral</p>
                <p className="text-3xl font-serif font-bold text-primary mt-2">0%</p>
                <p className="text-xs text-muted-foreground mt-2">Comece agora!</p>
              </div>
              <Award className="w-8 h-8 text-accent" />
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-accent">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Sequência</p>
                <p className="text-3xl font-serif font-bold text-primary mt-2">0 dias</p>
                <p className="text-xs text-muted-foreground mt-2">Comece sua jornada!</p>
              </div>
              <Flame className="w-8 h-8 text-accent" />
            </div>
          </Card>
        </div>
      </section>

      {/* Subject Progress */}
      <section className="px-8 lg:px-16 py-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">
            Progresso por Matéria
          </h2>
          <div className="space-y-4">
            {subjectProgress.map((subject, idx) => (
              <Card key={idx} className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-serif font-bold text-primary">
                    {subject.name}
                  </span>
                  <span className="text-sm font-bold text-accent">
                    {subject.progress}h / {subject.target}h
                  </span>
                </div>
                <Progress
                  value={(subject.progress / subject.target) * 100}
                  className="h-2"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Stats */}
      <section className="px-8 lg:px-16 py-12 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">
            Histórico Semanal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {weeklyStats.map((week, idx) => (
              <Card key={idx} className="p-4 text-center">
                <p className="font-serif font-bold text-primary mb-3">
                  {week.week}
                </p>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-muted-foreground">Horas</p>
                    <p className="text-2xl font-serif font-bold text-primary">
                      {week.hours}h
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Sessões</p>
                    <p className="text-2xl font-serif font-bold text-accent">
                      {week.completed}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="px-8 lg:px-16 py-12 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">
            Conquistas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, idx) => (
              <Card key={idx} className="p-6 text-center border-t-4 border-t-accent opacity-50">
                <p className="text-4xl mb-3">{achievement.icon}</p>
                <h3 className="font-serif font-bold text-primary mb-2">
                  {achievement.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="px-8 lg:px-16 py-12 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Comece Sua Jornada
          </h2>
          <div className="space-y-3 text-primary-foreground/90">
            <p>
              ✓ Você está pronto para começar! Acesse o cronograma e inicie sua primeira sessão de estudo.
            </p>
            <p>
              ✓ Mantenha a consistência diária - este é o segredo para aprovação em concursos.
            </p>
            <p>
              ✓ Quando o novo edital de 2026 sair, reorganizaremos todas as matérias conforme necessário.
            </p>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
