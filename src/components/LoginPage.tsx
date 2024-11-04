import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Form } from 'react-bootstrap';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard'); // Redirige al Dashboard
  };

  return (
    <div className="d-flex vh-100 align-items-center justify-content-center" style={{ backgroundColor: '#f5f8fa' }}>
      <Card style={{ width: '100%', maxWidth: '400px', padding: '20px', borderRadius: '10px', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)' }}>
        <Card.Body>
          <h3 className="text-center mb-4" style={{ color: '#007bff', fontWeight: 'bold' }}>Iniciar Sesión</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu correo" required />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingresa tu contraseña" required />
            </Form.Group>

            <Button type="button" onClick={handleLogin} className="w-100" style={{ backgroundColor: '#007bff', borderColor: '#007bff', fontWeight: 'bold' }}>
              Iniciar Sesión
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginPage;
