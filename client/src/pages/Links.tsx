import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, ExternalLink, Trash2, Link as LinkIcon } from "lucide-react";
import { useState } from "react";

interface StudyLink {
  id: string;
  title: string;
  url: string;
  category: string;
}

export default function Links() {
  const [links, setLinks] = useState<StudyLink[]>([
    {
      id: "1",
      title: "QConcursos - Questões TJGO",
      url: "https://www.qconcursos.com",
      category: "Geral / Outros",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newLink, setNewLink] = useState({ title: "", url: "", category: "Geral / Outros" });

  const handleAddLink = () => {
    if (newLink.title && newLink.url) {
      const link: StudyLink = {
        id: String(Date.now()),
        ...newLink,
      };
      setLinks([...links, link]);
      setNewLink({ title: "", url: "", category: "Geral / Outros" });
      setShowForm(false);
    }
  };

  const handleDeleteLink = (id: string) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  const categories = Array.from(new Set(links.map((link) => link.category)));

  return (
    <DashboardLayout>
      <section className="px-8 lg:px-16 py-12 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-serif font-bold text-primary mb-2">
              Meus Links
            </h1>
            <p className="text-muted-foreground">
              Centralize seus acessos a questões, videoaulas e materiais externos
            </p>
          </div>
          <Button className="gap-2" onClick={() => setShowForm(!showForm)}>
            <Plus className="w-4 h-4" />
            Adicionar Link
          </Button>
        </div>
      </section>

      {showForm && (
        <section className="px-8 lg:px-16 py-8 bg-card border-b border-border">
          <div className="max-w-6xl mx-auto">
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Título</label>
                  <input
                    type="text"
                    value={newLink.title}
                    onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md bg-background"
                    placeholder="Ex: QConcursos"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">URL</label>
                  <input
                    type="text"
                    value={newLink.url}
                    onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md bg-background"
                    placeholder="https://..."
                  />
                </div>
                <div className="flex items-end gap-2">
                  <Button onClick={handleAddLink} className="flex-1">Salvar</Button>
                  <Button variant="outline" onClick={() => setShowForm(false)}>Cancelar</Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      <section className="px-8 lg:px-16 py-12 bg-background">
        <div className="max-w-6xl mx-auto space-y-8">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-2xl font-serif font-bold text-primary mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-accent rounded-full"></span>
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {links
                  .filter((link) => link.category === category)
                  .map((link) => (
                    <Card key={link.id} className="p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="w-8 h-8 bg-primary/5 rounded flex items-center justify-center flex-shrink-0">
                            <LinkIcon className="w-4 h-4 text-primary" />
                          </div>
                          <div className="overflow-hidden">
                            <h3 className="font-medium text-sm truncate">{link.title}</h3>
                            <p className="text-xs text-muted-foreground truncate">{link.url}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:bg-primary/5 rounded-full text-primary transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                          <button
                            onClick={() => handleDeleteLink(link.id)}
                            className="p-2 hover:bg-destructive/5 rounded-full text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
}
