import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [todoList, settodoList] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/todos");
      settodoList(response.data.todos);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <div className="container mt-4" style={{marginLeft:'80px'}}>
        <h1 className="text-center mb-4">To-Do List</h1>
        <div className="row">
          {todoList.map((val) => {
            return (
              <div className="col-md-4 mb-4" key={val.id}>
                <div className="card shadow" style={{ width: "100%" }}>
                  <div className="card-body">
                    <h5 className="card-title">ID: {val.id}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Todo: {val.todo}</h6>
                    <p
                      className={`card-text ${
                        val.completed ? "text-success" : "text-danger"
                      }`}
                    >
                      Completed: {val.completed ? "Yes" : "No"}
                    </p>
                    <p className="card-text">User ID: {val.userId}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
