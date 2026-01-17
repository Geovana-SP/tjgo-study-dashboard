import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

/**
 * BrazilClock - Relógio com data e hora de Brasília
 * Design: Minimalismo Jurídico Contemporâneo
 * - Atualiza em tempo real
 * - Formato: Dia da semana, DD de Mês de YYYY - HH:MM:SS
 */
export default function BrazilClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      // Usar Intl para formatar corretamente em Brasília
      const formatter = new Intl.DateTimeFormat("pt-BR", {
        timeZone: "America/Sao_Paulo",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      
      const now = new Date();
      const parts = formatter.formatToParts(now);
      
      let dayName = "";
      let day = "";
      let month = "";
      let year = "";
      let hours = "";
      let minutes = "";
      let seconds = "";
      
      parts.forEach((part) => {
        if (part.type === "weekday") dayName = part.value.charAt(0).toUpperCase() + part.value.slice(1);
        if (part.type === "day") day = part.value;
        if (part.type === "month") month = part.value;
        if (part.type === "year") year = part.value;
        if (part.type === "hour") hours = part.value;
        if (part.type === "minute") minutes = part.value;
        if (part.type === "second") seconds = part.value;
      });
      
      const formatted = `${dayName}, ${day} de ${month} de ${year} - ${hours}:${minutes}:${seconds}`;
      setTime(formatted);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-primary/5 rounded-md border border-primary/10">
      <Clock className="w-5 h-5 text-accent flex-shrink-0" />
      <span className="text-sm font-medium text-primary font-mono">{time || "Carregando..."}</span>
    </div>
  );
}
