import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

/**
 * Gamification - Página de sistema de badges e pontos
 * Design: Minimalismo Jurídico Contemporâneo
 * - Badges de conquistas
 * - Pontos por atividades
 * - Desafios semanais
 * - Ranking de consistência
 */
export default function Gamification() {
  const badges = [
    {
      id: 1,
      icon: "🔥",
      name: "Iniciante",
      description: "Complete sua primeira sessão de estudo",
      unlocked: false,
      progress: 0,
    },
    {
      id: 2,
      icon: "⭐",
      name: "Consistente",
      description: "Estude 7 dias consecutivos",
      unlocked: false,
      progress: 0,
    },
    {
      id: 3,
      icon: "🎯",
      name: "Meta Alcançada",
      description: "Atinja 40 horas de estudo em uma semana",
      unlocked: false,
      progress: 0,
    },
    {
      id: 4,
      icon: "📚",
      name: "Conhecedor",
      description: "Complete todas as matérias com 50% de progresso",
      unlocked: false,
      progress: 25,
    },
    {
      id: 5,
      icon: "🏆",
      name: "Campeão",
      description: "Atinja 100% de progresso em uma matéria",
      unlocked: false,
      progress: 0,
    },
    {
      id: 6,
      icon: "💎",
      name: "Mestre do TJGO",
      description: "Complete 100% de todas as matérias",
      unlocked: false,
      progress: 0,
    },
  ];

  const weeklyChallenge = {
    title: "Desafio da Semana",
    description: "Estude Português por 10 horas",
    reward: 500,
    progress: 0,
    target: 10,
  };

  const points = {
    total: 0,
    thisWeek: 0,
    breakdown: [
      { activity: "Sessão de 25 minutos", points: 25 },
      { activity: "Anotação criada", points: 50 },
      { activity: "Simulado completo", points: 200 },
      { activity: "Dia consistente", points: 100 },
    ],
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <section className="px-8 lg:px-16 py-12 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-primary mb-2">
            Gamificação
          </h1>
          <p className="text-muted-foreground">
            Desbloqueie badges, acumule pontos e mantenha-se motivado
          </p>
        </div>
      </section>

      {/* Points Section */}
      <section className="px-8 lg:px-16 py-12 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 border-l-4 border-l-accent text-center">
              <p className="text-sm text-muted-foreground mb-2">Pontos Totais</p>
              <p className="text-4xl font-serif font-bold text-primary">
                {points.total}
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-accent text-center">
              <p className="text-sm text-muted-foreground mb-2">Esta Semana</p>
              <p className="text-4xl font-serif font-bold text-accent">
                {points.thisWeek}
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-accent text-center">
              <p className="text-sm text-muted-foreground mb-2">Badges</p>
              <p className="text-4xl font-serif font-bold text-primary">
                0/6
              </p>
            </Card>
          </div>

          {/* Points Breakdown */}
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="font-serif font-bold text-primary mb-4">
              Como Ganhar Pontos
            </h3>
            <div className="space-y-2">
              {points.breakdown.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-sm">
                  <span className="text-foreground">{item.activity}</span>
                  <span className="font-bold text-accent">+{item.points} pts</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Weekly Challenge */}
      <section className="px-8 lg:px-16 py-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">
            Desafio da Semana
          </h2>
          <Card className="p-8 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-serif font-bold text-primary text-xl mb-2">
                  {weeklyChallenge.title}
                </h3>
                <p className="text-muted-foreground">
                  {weeklyChallenge.description}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground mb-1">Recompensa</p>
                <p className="text-2xl font-bold text-accent">
                  +{weeklyChallenge.reward} pts
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-foreground">Progresso</span>
                <span className="font-bold text-primary">
                  {weeklyChallenge.progress} / {weeklyChallenge.target}h
                </span>
              </div>
              <Progress
                value={(weeklyChallenge.progress / weeklyChallenge.target) * 100}
                className="h-3"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Badges */}
      <section className="px-8 lg:px-16 py-12 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">
            Badges Disponíveis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {badges.map((badge) => (
              <Card
                key={badge.id}
                className={`p-6 text-center transition-opacity ${
                  badge.unlocked ? "" : "opacity-60"
                }`}
              >
                <p className="text-5xl mb-3">{badge.icon}</p>
                <h3 className="font-serif font-bold text-primary mb-1">
                  {badge.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  {badge.description}
                </p>

                {badge.progress > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Progresso</span>
                      <span className="font-bold text-primary">
                        {badge.progress}%
                      </span>
                    </div>
                    <Progress value={badge.progress} className="h-2" />
                  </div>
                )}

                {badge.unlocked && (
                  <div className="mt-3 px-3 py-1 bg-accent/20 rounded text-xs font-bold text-accent">
                    ✓ Desbloqueado
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Motivation */}
      <section className="px-8 lg:px-16 py-12 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Mantenha-se Motivado
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Cada sessão de estudo, cada anotação, cada dia consistente traz você mais perto da aprovação. 
            Acumule pontos, desbloqueie badges e celebre suas conquistas na jornada para o TJGO!
          </p>
        </div>
      </section>
    </DashboardLayout>
  );
}
