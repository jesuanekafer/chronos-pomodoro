import type { TaskModel } from './TaskModel';

//aqui estou tipando
export type TaskStateModel = {
  //para o que eu preciso disso para armazenar
  tasks: TaskModel[]; //histórico, MainForm
  secondsRemaining: number; //CountDown, Histórico, MainForm, Button
  formattedSecondsRemaining: string; //Título, CountDown
  activeTask: TaskModel | null; //CountDown, Histórico, MainForm, Button
  currentCycle: number; // Home
  config: {
    workTime: number; //MainForm
    shortBreakTime: number; //MainForm
    longBreakTime: number; //MainForm
  };
};
