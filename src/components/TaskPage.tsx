import React, { useState } from 'react';
import { Container, Form, Button, Card, ListGroup } from 'react-bootstrap';

interface Task {
  title: string;
  priority: string;
  time: string;
}

const TaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [time, setTime] = useState('');

  const addTask = () => {
    setTasks([...tasks, { title, priority, time }]);
    setTitle('');
    setPriority('');
    setTime('');
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Agenda de Tareas</h2>
      <Card className="p-4 shadow-sm mb-4">
        <Form>
          <Form.Group controlId="taskTitle">
            <Form.Label>Tarea</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre de la tarea"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="taskPriority" className="mt-3">
            <Form.Label>Prioridad</Form.Label>
            <Form.Control
              as="select"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="">Seleccione la prioridad</option>
              <option value="Alta">Alta</option>
              <option value="Media">Media</option>
              <option value="Baja">Baja</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="taskTime" className="mt-3">
            <Form.Label>Hora</Form.Label>
            <Form.Control
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" className="w-100 mt-4" onClick={addTask}>
            Añadir Tarea
          </Button>
        </Form>
      </Card>

      <ListGroup>
        {tasks.map((task, index) => (
          <ListGroup.Item key={index}>
            <strong>{task.title}</strong> - Prioridad: {task.priority} - Hora: {task.time}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default TaskPage;
