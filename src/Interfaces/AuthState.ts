export default interface AuthState {
  isAuthenticated: boolean;
  userEmail: string;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  setEmail: (email: string) => void;
}
