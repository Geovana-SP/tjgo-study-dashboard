import DashboardLayout from "@/components/DashboardLayout";
import BrazilClock from "@/components/BrazilClock";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, BookMarked } from "lucide-react";

/**
 * Home - Página principal do dashboard
 * Design: Minimalismo Jurídico Contemporâneo
 * - Hero section com background gerado
 * - Cronograma semanal em cards
 * - Estatísticas de progresso
 * - Relógio com data/hora de Brasília
 */
export default function Home() {
  const weekDays = [
    { day: "Segunda", subjects: ["Português", "Dir. Constitucional"], sessions: 2 },
    { day: "Terça", subjects: ["Dir. Administrativo", "Pós-Graduação"], sessions: 2 },
    { day: "Quarta", subjects: ["Dir. Penal", "Português"], sessions: 2 },
    { day: "Quinta", subjects: ["Dir. Processual", "Pós-Graduação"], sessions: 2 },
    { day: "Sexta", subjects: ["Legislação TJGO", "Dir. Const/Adm"], sessions: 2 },
    { day: "Sábado", subjects: ["Simulado Completo", "Jurisprudência"], sessions: 2 },
    { day: "Domingo", subjects: ["Revisão Geral", "Planejamento"], sessions: 2 },
  ];

  return (
    <DashboardLayout>
      {/* Relógio de Brasília */}
      <section className="px-8 lg:px-16 py-6 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto">
          <BrazilClock />
        </div>
      </section>

      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-background.png')",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center px-8 lg:px-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-4">
              Sua Jornada para o TJGO
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl">
              Cronograma personalizado para o cargo de Analista Judiciário. Foco em Português, Direito Constitucional e Legislação Específica.
            </p>
            <div className="flex gap-4">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Começar Sessão
              </Button>
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Ver Cronograma Completo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-8 lg:px-16 py-12 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 border-l-4 border-l-accent">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Progresso Geral</p>
                <p className="text-3xl font-serif font-bold text-primary mt-2">0%</p>
              </div>
              <CheckCircle2 className="w-8 h-8 text-accent" />
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-accent">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Horas Estudadas</p>
                <p className="text-3xl font-serif font-bold text-primary mt-2">0h</p>
              </div>
              <Clock className="w-8 h-8 text-accent" />
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-accent">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Status</p>
                <p className="text-3xl font-serif font-bold text-primary mt-2">Pronto</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Info Banner */}
      <section className="px-8 lg:px-16 py-8 bg-primary/5 border-y border-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-3">
            <div className="text-2xl">📋</div>
            <div>
              <p className="font-serif font-bold text-primary mb-1">Edital em Construção</p>
              <p className="text-sm text-muted-foreground">
                Este cronograma foi baseado no edital anterior de 2021. Quando o novo edital de 2026 for publicado, reorganizaremos todas as matérias e prioridades conforme necessário.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="px-8 lg:px-16 py-12 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-serif font-bold text-primary mb-2">
              Cronograma da Semana
            </h2>
            <p className="text-muted-foreground">
              Seu plano de estudos personalizado respeitando sua rotina e compromissos
            </p>
          </div>

          {/* Schedule Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {weekDays.map((item, idx) => (
              <Card
                key={idx}
                className="p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-primary"
              >
                <h3 className="font-serif font-bold text-primary text-lg mb-4">
                  {item.day}
                </h3>
                <div className="space-y-2 mb-4">
                  {item.subjects.map((subject, sidx) => (
                    <div
                      key={sidx}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <BookMarked className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    {item.sessions} sessões de estudo
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 lg:px-16 py-16 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Pronto para começar?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Acesse seu cronograma completo, acompanhe seu progresso e receba recomendações personalizadas para sua preparação.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-base">
            Acessar Dashboard Completo
          </Button>
        </div>
      </section>
    </DashboardLayout>
  );
}
