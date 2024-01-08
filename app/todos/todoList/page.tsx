import TodoItem from "@/app/todos/todoItem/page";

interface TodoArrayType {
  todoArray: string[];
}

export default function TodoList({ todoArray }: TodoArrayType) {
  return (
    <>
      <h2>투두 리스트</h2>

      {todoArray.map((item, idx) => {
        return <TodoItem todoItem={item} key={idx} />;
      })}

      {/* <TodoItem /> */}
    </>
  );
}
