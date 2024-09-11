import React, { useState } from 'react';
import useAuthStore from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
// import './Users.module.scss';

const Users: React.FC = () => {
  const [newEmail, setNewEmail] = useState<string>('');
  const { userEmail, setEmail } = useAuthStore((state) => ({
    userEmail: state.userEmail,
    setEmail: state.setEmail,
  }));
  const navigate = useNavigate();

  const handleEmailChange = () => {
    if (newEmail) {
      setEmail(newEmail);
      navigate('/products'); 
    }
  };

  return (
    <div className="usersContainer">
      <h2>Editar correo electrónico</h2>
      <p>Correo actual: {userEmail}</p>
      <input
        type="email"
        placeholder="Nuevo correo"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <button onClick={handleEmailChange}>Actualizar correo</button>
    </div>
  );
};

export default Users;
