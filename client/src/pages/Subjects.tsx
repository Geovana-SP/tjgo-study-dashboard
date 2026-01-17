import DashboardLayout from "@/components/DashboardLayout";
import SubjectCard from "@/components/SubjectCard";
import { Card } from "@/components/ui/card";

/**
 * Subjects - Página de matérias com progresso
 * Design: Minimalismo Jurídico Contemporâneo
 */
export default function Subjects() {
  const subjects = [
    { name: "Língua Portuguesa", progress: 0, hoursStudied: 0, totalHours: 40, icon: "📝", color: "#dc2626" },
    { name: "História de Goiás", progress: 0, hoursStudied: 0, totalHours: 40, icon: "📜", color: "#f59e0b" },
    { name: "Geografia de Goiás", progress: 0, hoursStudied: 0, totalHours: 40, icon: "🗺️", color: "#10b981" },
    { name: "Legislação Institucional e Estadual", progress: 0, hoursStudied: 0, totalHours: 40, icon: "📋", color: "#6366f1" },
    { name: "Direito Constitucional", progress: 0, hoursStudied: 0, totalHours: 40, icon: "⚖️", color: "#2563eb" },
    { name: "Direito Administrativo", progress: 0, hoursStudied: 0, totalHours: 40, icon: "🏛️", color: "#059669" },
    { name: "Direito Civil", progress: 0, hoursStudied: 0, totalHours: 40, icon: "📖", color: "#8b5cf6" },
    { name: "Direito Processual Civil", progress: 0, hoursStudied: 0, totalHours: 40, icon: "📑", color: "#ec4899" },
    { name: "Direito Penal", progress: 0, hoursStudied: 0, totalHours: 40, icon: "⚔️", color: "#7c3aed" },
    { name: "Direito Processual Penal", progress: 0, hoursStudied: 0, totalHours: 40, icon: "🔍", color: "#ef4444" },
    { name: "Direito do Consumidor", progress: 0, hoursStudied: 0, totalHours: 40, icon: "🛒", color: "#14b8a6" },
    { name: "Juizados Especiais (Cíveis e Criminais)", progress: 0, hoursStudied: 0, totalHours: 40, icon: "⚡", color: "#f97316" },
    { name: "Redação Argumentativa", progress: 0, hoursStudied: 0, totalHours: 40, icon: "✍️", color: "#b8860b" },
    { name: "Estudo de Caso Jurídico", progress: 0, hoursStudied: 0, totalHours: 40, icon: "📊", color: "#9333ea" },
  ];

  const totalProgress = Math.round(
    subjects.reduce((acc, s) => acc + s.progress, 0) / subjects.length
  );

  return (
    <DashboardLayout>
      <section className="px-8 lg:px-16 py-12 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-primary mb-2">Matérias</h1>
          <p className="text-muted-foreground">Acompanhe seu progresso em cada disciplina do concurso TJGO</p>
        </div>
      </section>

      <section className="px-8 lg:px-16 py-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-2">Progresso Geral</p>
                <p className="text-5xl font-serif font-bold text-primary">{totalProgress}%</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground mb-2">Horas totais</p>
                <p className="text-4xl font-serif font-bold text-accent">
                  {subjects.reduce((acc, s) => acc + s.hoursStudied, 0)}h
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="px-8 lg:px-16 py-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, idx) => (
              <SubjectCard key={idx} {...subject} />
            ))}
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
