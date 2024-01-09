import { NewTodoType } from "../type";
interface TodoFormType {
  newTodo: NewTodoType;
  getNewTodo: (value: string) => void;
  addTodo: () => void;
}

export default function TodoForm({
  newTodo,
  getNewTodo,
  addTodo,
}: TodoFormType) {
  return (
    <>
      <form>
        <input
          type="text"
          value={newTodo.content}
          onChange={(e) => {
            getNewTodo(e.target.value);
          }}
        />
        <button type="button" onClick={addTodo}>
          완료
        </button>
      </form>
    </>
  );
}
