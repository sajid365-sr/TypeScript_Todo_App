import React, { useReducer, useRef } from "react";
import "./styles.css";
import { TodoReducer } from "./TestReducer";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // const [state, dispatch] = useReducer(TodoReducer, []);

  return (
    <div>
      <form
        className="input"
        onSubmit={(e) => {
          if (todo.length !== 0) {
            handleAdd(e);
            inputRef.current?.blur();
          }
        }}
      >
        <input
          ref={inputRef}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="input_box"
          type="input"
          placeholder="Enter a task"
        />
        <button className="input_submit" type="submit">
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
