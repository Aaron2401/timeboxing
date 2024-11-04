import React, { useState } from 'react';
import { Container, Table, Form, Button, Card, Row, Col } from 'react-bootstrap';

interface Task {
  title: string;
  description: string;
  priority: string;
  time: string;
}

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [time, setTime] = useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = { title, description, priority, time };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
    setPriority('');
    setTime('');
  };

  return (
    <Container className="dashboard-container mt-5">
      <Card className="dashboard-card p-4 shadow-lg">
        <h2 className="text-center mb-4 dashboard-title">Agenda Estudiantil</h2>
        <Form onSubmit={handleAddTask} className="task-form">
          <Row>
            <Col md={6}>
              <Form.Group controlId="taskTitle" className="mb-3">
                <Form.Label>Título de la Tarea</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el título de la tarea"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="taskTime" className="mb-3">
                <Form.Label>Horario</Form.Label>
                <Form.Control
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="taskPriority" className="mb-3">
                <Form.Label>Prioridad</Form.Label>
                <Form.Control
                  as="select"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  required
                >
                  <option value="">Seleccione Prioridad</option>
                  <option value="Alta">Alta</option>
                  <option value="Media">Media</option>
                  <option value="Baja">Baja</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="taskDescription" className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Descripción de la tarea"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit" className="w-100 add-task-button">
            Agregar Tarea
          </Button>
        </Form>

        <Table striped bordered hover responsive className="task-table mt-4">
          <thead className="table-header">
            <tr>
              <th>Título</th>
              <th>Descripción</th>
              <th>Prioridad</th>
              <th>Horario</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.priority}</td>
                <td>{task.time}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};

export default Dashboard;
