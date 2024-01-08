interface TodoFormType {
  newTodo: String;
  getNewTodo: (value: string) => void;
}

export default function TodoForm({ newTodo, getNewTodo }: TodoFormType) {
  return (
    <>
      <form>
        <input type="text" />
        <button type="submit">완료</button>
      </form>
    </>
  );
}
