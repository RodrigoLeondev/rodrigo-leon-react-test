import { create } from 'zustand';
import AuthState from '../Interfaces/AuthState'

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  userEmail: '',
  
  login: (email: string, password: string): boolean => {
    if (email === 'usuario@dominio.com' && password === 'Password1@') {
      set({ isAuthenticated: true, userEmail: email });
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', email);
      return true;
    } else {
      alert('Credenciales incorrectas');
      return false;
    }
  },

  logout: () => {
    set({ isAuthenticated: false, userEmail: '' });
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
  },

  setEmail: (email: string) => {
    set({ userEmail: email });
    localStorage.setItem('userEmail', email);
  },
}));

export default useAuthStore;
