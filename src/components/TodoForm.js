import React from "react";

function TodoForm(props) {
  const [input, setInput] = React.useState("");

  const inputRef = React.useRef(null);

  React.useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmits({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Изменить задачу"
            value={input}
            onChange={handleChange}
            // name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Изменить
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Добавить задачу"
            value={input}
            onChange={handleChange}
            // name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Добавить
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
