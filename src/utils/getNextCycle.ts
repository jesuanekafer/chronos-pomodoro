export function getNextCycle(currentCycle: number) {
  return currentCycle === 0 || currentCycle === 8 ? 1 : currentCycle + 1;
}

/*
0 -> 1
1 -> 2
3 -> 4
. 
. 
.
8 -> 1

1.Trabalho (Pomodoro 1)
2.Pausa Curta
3.Trabalho (Pomodoro 2)
4.Pausa Curta
5.Trabalho (Pomodoro 3)
6.Pausa Curta
7.Trabalho (Pomodoro 4)1
9.Pausa Longa (e o ciclo recomeça)
*/
