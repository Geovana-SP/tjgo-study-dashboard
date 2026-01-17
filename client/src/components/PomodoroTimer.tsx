import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";

/**
 * PomodoroTimer - Temporizador Pomodoro para sessões de estudo
 * Design: Minimalismo Jurídico Contemporâneo
 * - 25 minutos de estudo + 5 minutos de pausa
 * - Controles de play/pause/reset
 * - Indicador visual de progresso
 */
export default function PomodoroTimer() {
  const [workTime] = useState(25 * 60); // 25 minutos em segundos
  const [breakTime] = useState(5 * 60); // 5 minutos em segundos
  const [timeLeft, setTimeLeft] = useState(workTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      // Alternar entre sessão de trabalho e pausa
      setIsWorkSession(!isWorkSession);
      setTimeLeft(isWorkSession ? breakTime : workTime);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, isWorkSession, workTime, breakTime]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const progress = ((isWorkSession ? workTime - timeLeft : breakTime - timeLeft) / (isWorkSession ? workTime : breakTime)) * 100;

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(workTime);
    setIsWorkSession(true);
  };

  return (
    <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
      <div className="text-center">
        <p className="text-sm font-medium text-muted-foreground mb-2">
          {isWorkSession ? "Sessão de Estudo" : "Pausa"}
        </p>
        <p className="text-6xl font-serif font-bold text-primary mb-6 font-mono">
          {formatTime(timeLeft)}
        </p>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-border rounded-full overflow-hidden mb-6">
          <div
            className={`h-full transition-all duration-300 ${
              isWorkSession ? "bg-accent" : "bg-primary"
            }`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3">
          <Button
            size="sm"
            className="gap-2"
            onClick={() => setIsRunning(!isRunning)}
          >
            {isRunning ? (
              <>
                <Pause className="w-4 h-4" />
                Pausar
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                Iniciar
              </>
            )}
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="gap-2"
            onClick={handleReset}
          >
            <RotateCcw className="w-4 h-4" />
            Resetar
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-4">
          Dica: Use Pomodoro para manter o foco durante 25 minutos de estudo intenso
        </p>
      </div>
    </Card>
  );
}
