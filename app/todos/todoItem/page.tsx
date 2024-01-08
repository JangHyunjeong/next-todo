interface TodoItemType {
  todoItem: string;
}

export default function TodoItem({ todoItem }: TodoItemType) {
  return (
    <>
      <div className="todo-item">
        <label htmlFor=""></label>
        <input type="checkbox" />

        <span className="text">{todoItem}</span>

        {/* 수정모드일때
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="수정모드"
        ></textarea> */}

        <div className="modify-area">
          <button type="button" className="btn-edit">
            수정
          </button>
          <button type="button" className="btn-del">
            삭제
          </button>
        </div>

        {/* 수정모드일때
        <div className="modify-area">
          <button type="button" className="btn-edit">
            완료
          </button>
          <button type="button" className="btn-del">
            취소
      </button>
        </div>*/}
      </div>
    </>
  );
}
