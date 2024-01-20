import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <div>
      <form className="input" onSubmit={handleAdd}>
        <input
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
