import React from 'react'
import "./Todo.css"
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({ todo, index, markTodo, removeTodo }) 
{
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>DONE</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>REMOVE</Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) 
{
  const [value, setValue] = React.useState("");

  const handleSubmit=(e)=>
  {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form>
      <Form.Label><b></b></Form.Label>
      <Form.Control type="text" className="input1" value={value} onChange={e => setValue(e.target.value)} placeholder="Add notes or books to Read" />
    </Form>
    <Button variant="primary mb-31" type="submit">
      ADD
    </Button>
  </Form>
  );
}

function Todo1() {
  const [todos, setTodos] = React.useState([
    {
      text: "Think and Grow rich",
      isDone: false
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="apppp">
      <div className="container1">
        <h1 className="text-center mb-41">NOTES</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo1