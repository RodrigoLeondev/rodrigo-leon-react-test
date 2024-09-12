import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import Users from "../Pages/Users";
import NotFound from "../Pages/NotFound";
import ProtectedRoute from "../Components/ProtectedRoute";
import ProductCreate from "../Pages/ProductCreate";

function AppRouter() {
  
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/404" element={<NotFound />} />

        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products/create"
          element={
            <ProtectedRoute>
              <ProductCreate open={true} onClose={() => {}}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;
