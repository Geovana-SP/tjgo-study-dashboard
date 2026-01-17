# TJGO Study Dashboard - Design Brainstorm

## Ideia 1: Minimalismo Jurídico Contemporâneo
**Probabilidade: 0.08**

### Design Movement
Modernismo jurídico com influências de design suíço—precisão, hierarquia clara, e funcionalidade absoluta. Inspirado em interfaces de escritórios de advocacia premium e plataformas de legal tech.

### Core Principles
1. **Clareza Estrutural**: Cada elemento tem propósito específico; nada é decorativo
2. **Hierarquia Tipográfica Forte**: Contrastes dramáticos entre títulos em serif e corpo em sans-serif
3. **Espaço Negativo Generoso**: Respiração visual que evita saturação
4. **Paleta Restrita**: Azul profundo (confiança jurídica) + branco + cinza neutro + accent em ouro/bronze

### Color Philosophy
- **Azul Marinho Profundo** (#1a3a52): Autoridade, confiança, institucionalidade
- **Branco Puro** (#ffffff): Clareza, limpeza, espaço
- **Cinza Neutro** (#6b7280): Textos secundários, hierarquia
- **Ouro Envelhecido** (#b8860b): Accent para marcos importantes, conclusões

### Layout Paradigm
- **Sidebar Vertical Esquerda**: Navegação fixa com ícones + labels
- **Grid Assimétrico**: Blocos de estudo em tamanhos variados (2:1, 3:2)
- **Linha Divisória Vertical**: Separação sutil entre navegação e conteúdo
- **Cards com Bordas Sutis**: Sem sombras pesadas, apenas linhas 1px

### Signature Elements
1. **Numeração Jurídica**: Artigos/incisos como badges (ex: "Art. 5º") em ouro
2. **Linha Temporal Vertical**: Progresso da semana como uma linha contínua com checkpoints
3. **Tipografia em Serif**: Títulos em Cormorant ou Crimson Text para elegância

### Interaction Philosophy
- Transições suaves (300ms) em hover
- Mudança de cor de fundo em cards ao interagir (não sombra)
- Animação de preenchimento de progresso (como tinta preenchendo)

### Animation
- Fade-in suave ao carregar seções
- Slide horizontal para mudança de dia
- Preenchimento gradual de barras de progresso (2s)
- Hover: mudança de cor de fundo + leve elevação de opacidade

### Typography System
- **Títulos Principais**: Cormorant Garamond, 48px, bold, azul marinho
- **Subtítulos**: Cormorant Garamond, 24px, regular
- **Corpo**: Inter, 14px, regular, cinza
- **Labels**: Inter, 12px, uppercase, letter-spacing 0.1em

---

## Ideia 2: Gamificação Estratégica com Energia Visual
**Probabilidade: 0.07**

### Design Movement
Neomorfismo moderno combinado com gamification design—elementos que celebram progresso, com vibrações visuais que motivam sem ser infantil.

### Core Principles
1. **Feedback Visual Imediato**: Cada ação produz resposta visual clara
2. **Progressão Visível**: Barras, badges, níveis que crescem
3. **Cores Dinâmicas por Matéria**: Cada disciplina tem cor própria (Português = vermelho, Direito Constitucional = azul, etc)
4. **Profundidade Suave**: Neumorfismo com sombras internas/externas

### Color Philosophy
- **Português**: Vermelho Vibrante (#dc2626)
- **Direito Constitucional**: Azul Profundo (#2563eb)
- **Direito Administrativo**: Verde Esmeralda (#059669)
- **Direito Penal**: Roxo Profundo (#7c3aed)
- **Legislação TJGO**: Laranja Queimado (#ea580c)
- **Background**: Cinza Muito Claro (#f9fafb)

### Layout Paradigm
- **Dashboard Tipo Kanban**: Colunas por dia da semana
- **Cards Flutuantes**: Efeito neumórfico com bordas arredondadas (16px)
- **Grid Responsivo**: Adapta-se de 1 coluna (mobile) para 7 (desktop)
- **Floating Action Button**: Botão para adicionar nova sessão de estudo

### Signature Elements
1. **Badges de Conquista**: Ícones com efeito de brilho ao completar metas
2. **Contador de Streak**: "Dias consecutivos" com chama animada
3. **Gráfico Radial de Progresso**: Círculo que preenche conforme semana avança

### Interaction Philosophy
- Click em card = expansão com detalhes
- Drag-and-drop para reorganizar tarefas
- Animações celebratórias ao completar sessão (confete, sons opcionais)

### Animation
- Bounce suave ao carregar cards (spring physics)
- Pulse contínuo em badges de conquista
- Shake leve ao marcar como completo
- Confete ao atingir meta diária
- Transição de cores ao trocar entre dias

### Typography System
- **Títulos**: Poppins Bold, 32px, cor dinâmica por matéria
- **Subtítulos**: Poppins Medium, 18px
- **Corpo**: Poppins Regular, 14px
- **Labels**: Poppins SemiBold, 11px, uppercase

---

## Ideia 3: Minimalismo Poético com Gradientes Orgânicos
**Probabilidade: 0.09**

### Design Movement
Design contemplativo inspirado em meditação e produtividade consciente—cores suaves, transições fluidas, e uma sensação de calma durante o estudo intenso.

### Core Principles
1. **Paleta Monocromática Estendida**: Tons de um único espectro com variações sutis
2. **Gradientes Orgânicos**: Não lineares, com múltiplos pontos de cor
3. **Tipografia Generosa**: Espaçamento amplo entre linhas
4. **Microinterações Suaves**: Nada abrupto, tudo fluido

### Color Philosophy
- **Base**: Gradiente de Azul Claro → Índigo Suave (oklch(0.7 0.1 260) → oklch(0.5 0.15 250))
- **Accent**: Coral Suave (#f4a582)
- **Texto Primário**: Azul Muito Escuro (#1e3a5f)
- **Texto Secundário**: Azul Médio (#4a7ba7)
- **Background**: Gradiente sutil com ruído imperceptível

### Layout Paradigm
- **Asymmetric Masonry**: Blocos de tamanhos variados sem grid rígido
- **Curvas Orgânicas**: Dividers com SVG wavy em vez de linhas retas
- **Floating Cards**: Sobreposição leve, sem bordas definidas
- **Espaço Vertical Generoso**: Muita respiração entre seções

### Signature Elements
1. **Blobs Animados**: Formas orgânicas que pulsam suavemente no background
2. **Linha de Progresso Ondulada**: Em vez de reta, uma curva suave
3. **Ícones com Traços Finos**: Ilustrações minimalistas em vez de ícones sólidos

### Interaction Philosophy
- Hover = leve elevação + mudança de gradiente
- Click = expansão suave com blur do fundo
- Scroll = parallax suave nos gradientes de fundo

### Animation
- Fade-in suave (500ms) ao carregar
- Pulse suave contínuo nos blobs de fundo
- Transição de gradiente ao interagir (2s)
- Slide suave para mudança de seção
- Morphing de formas orgânicas no background

### Typography System
- **Títulos**: Playfair Display, 40px, azul escuro, line-height 1.3
- **Subtítulos**: Playfair Display, 20px, azul médio
- **Corpo**: Lora, 16px, azul escuro, line-height 1.8
- **Labels**: Lora Italic, 13px, azul médio

---

## Decisão Final

Escolhemos a **Ideia 1: Minimalismo Jurídico Contemporâneo** porque:

1. **Alinhamento com Contexto**: O design reflete a natureza jurídica do concurso (TJGO)
2. **Profissionalismo**: Transmite seriedade e confiança, motivando o candidato
3. **Funcionalidade Pura**: Cada elemento serve ao objetivo de estudar, sem distrações
4. **Escalabilidade**: Fácil adicionar novas funcionalidades mantendo a coerência
5. **Tipografia Estratégica**: Serif + Sans-serif cria hierarquia clara e memorável

### Implementação
- Paleta: Azul Marinho + Branco + Cinza + Ouro
- Tipografia: Cormorant Garamond (títulos) + Inter (corpo)
- Layout: Sidebar + Grid Assimétrico
- Animações: Transições suaves, preenchimento de progresso
- Componentes: Cards com bordas sutis, linha temporal vertical
