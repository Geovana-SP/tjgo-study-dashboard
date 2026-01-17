import DashboardLayout from "@/components/DashboardLayout";
import PomodoroTimer from "@/components/PomodoroTimer";
import { Card } from "@/components/ui/card";

/**
 * Pomodoro - Página de técnica Pomodoro
 * Design: Minimalismo Jurídico Contemporâneo
 * - Timer de 25 minutos de estudo
 * - Pausa de 5 minutos
 * - Dicas e benefícios
 */
export default function PomodoroPage() {
  return (
    <DashboardLayout>
      {/* Header */}
      <section className="px-8 lg:px-16 py-12 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-primary mb-2">
            Técnica Pomodoro
          </h1>
          <p className="text-muted-foreground">
            Mantenha o foco com sessões de 25 minutos de estudo intenso
          </p>
        </div>
      </section>

      {/* Timer */}
      <section className="px-8 lg:px-16 py-12 bg-card">
        <div className="max-w-2xl mx-auto">
          <PomodoroTimer />
        </div>
      </section>

      {/* Benefits */}
      <section className="px-8 lg:px-16 py-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">
            Benefícios da Técnica Pomodoro
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 border-l-4 border-l-accent">
              <h3 className="font-serif font-bold text-primary mb-3">
                ✓ Aumenta a Concentração
              </h3>
              <p className="text-sm text-muted-foreground">
                Sessões curtas e focadas melhoram sua capacidade de concentração e reduzem distrações durante o estudo.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-accent">
              <h3 className="font-serif font-bold text-primary mb-3">
                ✓ Reduz a Fadiga Mental
              </h3>
              <p className="text-sm text-muted-foreground">
                Pausas regulares permitem que seu cérebro descanse e se recupere, mantendo a produtividade ao longo do dia.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-accent">
              <h3 className="font-serif font-bold text-primary mb-3">
                ✓ Melhora a Retenção
              </h3>
              <p className="text-sm text-muted-foreground">
                Estudar em blocos focados ajuda na consolidação da memória e na melhor retenção do conteúdo.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-accent">
              <h3 className="font-serif font-bold text-primary mb-3">
                ✓ Aumenta a Motivação
              </h3>
              <p className="text-sm text-muted-foreground">
                Ver o progresso em pequenos passos mantém você motivado e evita o sentimento de sobrecarga.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="px-8 lg:px-16 py-12 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">
            Como Usar
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Escolha uma Matéria",
                description: "Decida qual matéria você vai estudar nesta sessão",
              },
              {
                step: "2",
                title: "Inicie o Timer",
                description: "Clique em 'Iniciar' para começar uma sessão de 25 minutos",
              },
              {
                step: "3",
                title: "Estude com Foco",
                description: "Dedique-se completamente ao estudo sem distrações",
              },
              {
                step: "4",
                title: "Faça uma Pausa",
                description: "Quando o timer terminar, faça uma pausa de 5 minutos",
              },
              {
                step: "5",
                title: "Repita",
                description: "Após 4 pomodoros, faça uma pausa maior de 15-30 minutos",
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="font-serif font-bold text-accent">
                      {item.step}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="px-8 lg:px-16 py-12 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Dicas Importantes
          </h2>
          <ul className="space-y-3 text-primary-foreground/90">
            <li>
              ✓ Desligue notificações e coloque seu celular no silencioso durante os 25 minutos
            </li>
            <li>
              ✓ Tenha água e um lanche leve à mão para não interromper a sessão
            </li>
            <li>
              ✓ Registre suas anotações durante a pausa, não durante o pomodoro
            </li>
            <li>
              ✓ Após 4 pomodoros consecutivos, faça uma pausa maior de 15-30 minutos
            </li>
          </ul>
        </div>
      </section>
    </DashboardLayout>
  );
}
