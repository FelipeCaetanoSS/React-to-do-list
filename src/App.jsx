import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Search from "./components/Search.jsx";
import TodoForm from "./components/TodoForm";
import Filter from "./components/FIlter.jsx";
import Footer from "./components/Footer.jsx";
import { ApiTextTranslated } from "./Services/ApiServices.js";

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "criar funcionalidade x no sistema",
            category: "Trabalho",
            isCompleted: false,
        },
        {
            id: 2,
            text: "Ir pra academia",
            category: "Pessoal",
            isCompleted: false,
        },
        {
            id: 3,
            text: "Estudar React",
            category: "Estudos",
            isCompleted: false,
        },
    ]);

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [sort, setSort] = useState("Asc");

    const addTodo = (text, category) => {
        const newTodos = [
            ...todos,
            {
                id: Math.floor(Math.random() * 10000),
                text,
                category,
                isCompleted: false,
            },
        ];
        setTodos(newTodos);
    };

    const removeTodo = (id) => {
        const newTodos = [...todos];
        const filter = newTodos.filter((todo) =>
            todo.id !== id ? todo : null,
        );
        setTodos(filter);
    };

    const completeTodo = (id) => {
        const newTodos = [...todos];
        newTodos.map((todo) =>
            todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo,
        );
        setTodos(newTodos);
    };

    return (
        <div>
            <div className="app">
                <div>
                    <button onClick={async () => await ApiTextTranslated}>
                        teste api
                    </button>
                </div>
                <h1>Lista de tarefas</h1>
                <Search search={search} setSearch={setSearch} />
                <Filter
                    filter={filter}
                    setFilter={setFilter}
                    setSort={setSort}
                />
                <div className="todo-list">
                    {todos
                        .filter((todo) =>
                            filter === "All"
                                ? true
                                : filter === "Completed"
                                  ? todo.isCompleted
                                  : !todo.isCompleted,
                        )
                        .filter((todo) =>
                            todo.text
                                .toLocaleLowerCase()
                                .includes(search.toLocaleLowerCase()),
                        )
                        .sort((a, b) =>
                            sort === "Asc"
                                ? a.text.localeCompare(b.text)
                                : b.text.localeCompare(a.text),
                        )
                        .map((todo) => (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                removeTodo={removeTodo}
                                completeTodo={completeTodo}
                            />
                        ))}
                </div>
                <TodoForm addTodo={addTodo} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
