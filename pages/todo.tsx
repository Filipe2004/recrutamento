import { useTodo } from "@/lib/frontend/hooks";
import { Button, Title } from "@mantine/core";
import { useState } from "react";

export default function Todo() {
  const { todos, addTodo, removeTodo, changeTodo } = useTodo(["Todo #1", "Todo #2", "Todo 3"]);
  const [ valueTodo, setValueTodo ] = useState("");

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className=" h-fit w-2/3 rounded-lg border">
        <div className=" h-16 p-4 border-b flex flex-row items-center">
          <input
            type = "text"
            placeholder = "Add Todo"
            value = { valueTodo }
            onChange = {(e) => setValueTodo(e.target.value)}

          />
          <Button onClick={() => {
            addTodo(valueTodo);
            setValueTodo("");}}
          >Add new item</Button>
          {/*<Button> 
          <input type = text value = {}
          </Button>*/}

        </div>
        <div className=" h-96 p-4 flex flex-col gap-2 overflow-y-scroll">
          {todos.map((todo, index) => (
            <div
              key={index}
              className="w-full border rounded-lg flex flex-row items-center justify-between p-4"
            >
              <h2 className="text-xl font-semibold">{todo}</h2>
              <Button onClick={() => removeTodo(index)} bg="red">Delete</Button>
              <Button>
              <input 
                type = "text" 
                placeholder= "Change Todo"
                value = { todo } 
                onChange = {(e) => changeTodo(e.target.value, index)}
              /> 
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
