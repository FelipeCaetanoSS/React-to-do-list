import { useState } from "react";

function TodoForm({addTodo}) {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addTodo(value, category);
        setValue("");
        setCategory("");
    }
  return (
    <div className="todo-form">
        <h2>Criar Tarefa</h2>
        <form  onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Digite o Título" 
            value={value}
            onChange={(e)=>setValue(e.target.value)}>
            </input>
                
            <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="Trabalho">Trabalho</option>
                <option value="Estudos">Estudos</option>
                <option value="Pessoal">Pessoal</option>
            </select>
            <button type="submit">Criar Tarefa</button>

        </form>
    </div>
  );
}

export default TodoForm;
