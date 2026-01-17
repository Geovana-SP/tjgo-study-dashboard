import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Edit2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface Note {
  id: string;
  subject: string;
  title: string;
  content: string;
  date: string;
}

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: "1",
      subject: "Língua Portuguesa",
      title: "Regência Verbal",
      content: "Lembrar: 'Assistir' (presenciar) é transitivo indireto. Ex: Assistimos ao filme.",
      date: "17/01/2025",
    },
  ]);

  const [newNote, setNewNote] = useState({ subject: "", title: "", content: "" });
  const [showForm, setShowForm] = useState(false);
  const [expandedSubjects, setExpandedSubjects] = useState<Set<string>>(new Set());

  const subjects = [
    "Língua Portuguesa", "História de Goiás", "Geografia de Goiás", "Legislação Institucional e Estadual",
    "Direito Constitucional", "Direito Administrativo", "Direito Civil", "Direito Processual Civil",
    "Direito Penal", "Direito Processual Penal", "Direito do Consumidor", "Juizados Especiais (Cíveis e Criminais)",
    "Redação Argumentativa", "Estudo de Caso Jurídico"
  ];

  const handleAddNote = () => {
    if (newNote.subject && newNote.title && newNote.content) {
      const note: Note = {
        id: String(Date.now()),
        ...newNote,
        date: new Date().toLocaleDateString("pt-BR"),
      };
      setNotes([note, ...notes]);
      setNewNote({ subject: "", title: "", content: "" });
      setShowForm(false);
      setExpandedSubjects(new Set(expandedSubjects).add(newNote.subject));
    }
  };

  const toggleSubject = (subject: string) => {
    const newExpanded = new Set(expandedSubjects);
    if (newExpanded.has(subject)) newExpanded.delete(subject);
    else newExpanded.add(subject);
    setExpandedSubjects(newExpanded);
  };

  return (
    <DashboardLayout>
      <section className="px-8 lg:px-16 py-12 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-serif font-bold text-primary mb-2">Anotações</h1>
            <p className="text-muted-foreground">Registre insights e resumos de cada matéria</p>
          </div>
          <Button className="gap-2" onClick={() => setShowForm(!showForm)}>
            <Plus className="w-4 h-4" /> Nova Anotação
          </Button>
        </div>
      </section>

      {showForm && (
        <section className="px-8 lg:px-16 py-8 bg-card border-b border-border">
          <div className="max-w-6xl mx-auto">
            <Card className="p-6 space-y-4">
              <select
                value={newNote.subject}
                onChange={(e) => setNewNote({ ...newNote, subject: e.target.value })}
                className="w-full px-3 py-2 border rounded-md bg-background"
              >
                <option value="">Selecione uma matéria</option>
                {subjects.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <input
                type="text"
                value={newNote.title}
                onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                placeholder="Título"
                className="w-full px-3 py-2 border rounded-md bg-background"
              />
              <textarea
                value={newNote.content}
                onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                placeholder="Conteúdo"
                rows={4}
                className="w-full px-3 py-2 border rounded-md bg-background"
              />
              <div className="flex gap-3">
                <Button onClick={handleAddNote}>Salvar</Button>
                <Button variant="outline" onClick={() => setShowForm(false)}>Cancelar</Button>
              </div>
            </Card>
          </div>
        </section>
      )}

      <section className="px-8 lg:px-16 py-12 bg-background">
        <div className="max-w-6xl mx-auto space-y-4">
          {subjects.map((subject) => {
            const subjectNotes = notes.filter(n => n.subject === subject);
            const isExpanded = expandedSubjects.has(subject);
            return (
              <Card key={subject} className="overflow-hidden">
                <button
                  onClick={() => toggleSubject(subject)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-serif font-bold text-primary">{subject}</h2>
                    {subjectNotes.length > 0 && (
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                        {subjectNotes.length}
                      </span>
                    )}
                  </div>
                  {isExpanded ? <ChevronUp /> : <ChevronDown />}
                </button>
                {isExpanded && (
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {subjectNotes.length === 0 ? (
                      <p className="text-muted-foreground text-center py-4 col-span-full">Nenhuma anotação.</p>
                    ) : (
                      subjectNotes.map(note => (
                        <Card key={note.id} className="p-6 border-l-4 border-l-accent">
                          <div className="flex justify-between mb-2">
                            <h3 className="font-serif font-bold text-primary">{note.title}</h3>
                            <button onClick={() => setNotes(notes.filter(n => n.id !== note.id))}>
                              <Trash2 className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                            </button>
                          </div>
                          <p className="text-sm mb-3">{note.content}</p>
                          <p className="text-xs text-muted-foreground">{note.date}</p>
                        </Card>
                      ))
                    )}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </section>
    </DashboardLayout>
  );
}
