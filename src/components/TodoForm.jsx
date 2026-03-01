import { useState } from "react";

function TodoForm({addTodo}) {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("teste");
        if(value == "" || category == ""){
            alert("Preencha os campos");
            return;
        } 
        addTodo(value, category);
        setValue("");
        setCategory("");
    }
  return (
    <div className="todo-form">
        <h2>Criar Tarefa</h2>
        <form  onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Digite o título para a tarefa" 
            value={value}
            onChange={(e)=>setValue(e.target.value)}>
            </input>

            <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="" disabled>Selecione uma categoria</option>
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
