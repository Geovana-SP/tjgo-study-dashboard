import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle2 } from "lucide-react";

/**
 * Schedule - Página de cronograma detalhado
 * Design: Minimalismo Jurídico Contemporâneo
 * - Visualização por dia da semana
 * - Horários específicos
 * - Status de conclusão
 */
export default function Schedule() {
  const schedule = [
    {
      day: "Segunda",
      date: "20 de janeiro",
      sessions: [
        { time: "05:00 - 08:00", subject: "Língua Portuguesa", type: "Teoria + Questões", completed: false },
        { time: "08:00 - 11:00", subject: "Direito Constitucional", type: "Estudo Dirigido", completed: false },
        { time: "19:00 - 20:00", subject: "Revisão do dia", type: "Questões de Português", completed: false },
      ],
    },
    {
      day: "Terça",
      date: "21 de janeiro",
      sessions: [
        { time: "05:00 - 08:00", subject: "Direito Administrativo", type: "Teoria + Questões", completed: false },
        { time: "08:00 - 11:00", subject: "Estudo para Pós", type: "Direito Médico", completed: false },
        { time: "19:00 - 20:30", subject: "Pós-Graduação", type: "Aula ao vivo", completed: false },
      ],
    },
    {
      day: "Quarta",
      date: "22 de janeiro",
      sessions: [
        { time: "05:00 - 08:00", subject: "Direito Penal", type: "Teoria + Questões", completed: false },
        { time: "08:00 - 11:00", subject: "Língua Portuguesa", type: "Foco em Gramática", completed: false },
        { time: "19:00 - 20:00", subject: "Revisão", type: "Direito Penal", completed: false },
      ],
    },
    {
      day: "Quinta",
      date: "23 de janeiro",
      sessions: [
        { time: "05:00 - 08:00", subject: "Direito Processual Civil/Penal", type: "Estudo Dirigido", completed: false },
        { time: "08:00 - 11:00", subject: "Estudo para Pós", type: "Direito Médico", completed: false },
        { time: "19:00 - 20:30", subject: "Pós-Graduação", type: "Aula ao vivo", completed: false },
      ],
    },
    {
      day: "Sexta",
      date: "24 de janeiro",
      sessions: [
        { time: "05:00 - 08:00", subject: "Legislação Específica", type: "TJGO - Lei 20.756/2020", completed: false },
        { time: "08:00 - 11:00", subject: "Direito Constitucional/Adm", type: "Revisão", completed: false },
        { time: "19:00 - 20:00", subject: "Revisão da Semana", type: "Consolidação", completed: false },
      ],
    },
    {
      day: "Sábado",
      date: "25 de janeiro",
      sessions: [
        { time: "05:00 - 09:00", subject: "Simulado Completo", type: "Português + Direito", completed: false },
        { time: "14:00 - 17:00", subject: "Revisão de Erros", type: "Análise Detalhada", completed: false },
        { time: "19:00 - 20:00", subject: "Jurisprudência", type: "STF/STJ", completed: false },
      ],
    },
    {
      day: "Domingo",
      date: "26 de janeiro",
      sessions: [
        { time: "05:00 - 08:00", subject: "Revisão Geral", type: "Flashcards/Mapas", completed: false },
        { time: "08:00 - 09:30", subject: "Missa", type: "Compromisso Religioso", completed: false },
        { time: "19:00 - 20:00", subject: "Planejamento", type: "Próxima Semana", completed: false },
      ],
    },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <section className="px-8 lg:px-16 py-12 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-primary mb-2">
            Cronograma Semanal
          </h1>
          <p className="text-muted-foreground">
            Seu plano de estudos personalizado baseado no edital anterior
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section className="px-8 lg:px-16 py-12 bg-card">
        <div className="max-w-6xl mx-auto space-y-6">
          {schedule.map((daySchedule, idx) => (
            <Card key={idx} className="overflow-hidden">
              {/* Day Header */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-4 border-b border-border">
                <h2 className="font-serif font-bold text-primary text-xl">
                  {daySchedule.day}
                </h2>
                <p className="text-sm text-muted-foreground">{daySchedule.date}</p>
              </div>

              {/* Sessions */}
              <div className="divide-y divide-border">
                {daySchedule.sessions.map((session, sidx) => (
                  <div
                    key={sidx}
                    className={`p-6 flex items-start justify-between hover:bg-primary/5 transition-colors ${
                      session.completed ? "opacity-60" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="flex-shrink-0 pt-1">
                        {session.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-accent" />
                        ) : (
                          <Clock className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-3 mb-1">
                          <p className="font-serif font-bold text-primary">
                            {session.subject}
                          </p>
                          <span className="text-xs font-medium text-accent">
                            {session.time}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {session.type}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant={session.completed ? "outline" : "default"}
                      size="sm"
                      className="flex-shrink-0"
                    >
                      {session.completed ? "Concluído" : "Marcar"}
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Notes */}
      <section className="px-8 lg:px-16 py-12 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 bg-accent/5 border-accent/20">
            <h3 className="font-serif font-bold text-primary mb-4">
              ✏️ Notas Importantes
            </h3>
            <ul className="space-y-3 text-sm text-foreground">
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Ajuste os horários conforme necessidade - este é um guia flexível</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Mantenha a constância: estudar das 05:00 às 11:00 exige disciplina, mas é o período de maior absorção</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Este cronograma foi baseado no edital de 2021. Quando o novo edital sair, reorganizaremos tudo</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Foque na Lei Estadual nº 20.756/2020 que rege os servidores de Goiás</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>
    </DashboardLayout>
  );
}
