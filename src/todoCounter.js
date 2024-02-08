import { createContext, useState } from "react";

const TodoCounter = createContext();

const TodoCounterContext = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <TodoCounter.Context value={{ count, setCount }}>
      {children}
    </TodoCounter.Context>
  );
};

export { TodoCounter, TodoCounterContext };
