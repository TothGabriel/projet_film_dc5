import React, { useEffect } from 'react';
import axios from 'axios';

const LogoutPage = () => {
  useEffect(() => {
    const logout = async () => {
      try {
        await axios.post('/api/auth/logout');
        localStorage.removeItem('token');
        // Rediriger ou mettre à jour l'état de l'application après la déconnexion
      } catch (error) {
        console.error('Logout failed', error);
      }
    };

    logout();
  }, []);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default LogoutPage;
