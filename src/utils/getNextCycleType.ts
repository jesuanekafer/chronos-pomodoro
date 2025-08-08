import type { TaskModel } from '../models/TaskModel';

export function getNextCycleType(currentCycle: number): TaskModel['type'] {
  if (currentCycle % 8 === 0) return 'longBreakTime'; //então é multiplo de 8 definindo pausa longa
  if (currentCycle % 2 === 0) return 'shortBreakTime'; //numero par, definindo pausa curta
  return 'workTime'; //entao está no momento de atividade
}
