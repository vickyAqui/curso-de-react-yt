import { useState } from "react";
import Input from "./Input.jsx";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o titúlo da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          // verificar se tudo está preenchido
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o Titúlo e a Descrição da Tarefa");
          }

          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
