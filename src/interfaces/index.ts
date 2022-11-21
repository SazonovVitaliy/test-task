export interface ITodo {
  id: number;
  type: string;
  description: string;
  timeToDo: number;
}

export interface ITodos {
  todos: ITodo[];
}
