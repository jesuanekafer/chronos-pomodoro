import { useContext } from 'react';
import { TaskContext } from './TaskContext';

export function useTaskContext() {
  return useContext(TaskContext);
  //O valor retornado por useContext(TaskContext) é o valor atual do contexto,
  //ou seja, o estado e as funções que foram fornecidas pelo <TaskContext.Provider>.
}
