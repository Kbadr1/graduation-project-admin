import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import "./styles/App.scss";
import SignIn from "./pages/signIn/SignIn";
import Home from "./pages/home/Home";
import AuthContextProvider from "./contexts/AuthContext";
import Navbar from "./components/navbar/Navbar";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import Orders from "./pages/orders/Orders";
import AddProduct from "./pages/addProduct/AddProduct";
import EditProduct from "./pages/editProduct/EditProduct";
import Categories from "./pages/categories/Categories";
import AddCategory from "./pages/addCategory/AddCategory";
import EditCategory from "./pages/editCategory/EditCategory";
import Brands from "./pages/brands/Brands";
import AddBrand from "./pages/addBrands/AddBrand";
import EditBrand from "./pages/editBrand/EditBrand";
import ProtectedRoute from "./components/protected/Protected.route";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <Navbar />
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <Route path="/sign-in" component={SignIn} />
            <ProtectedRoute path="/products" component={Products} />
            <ProtectedRoute path="/add-product" component={AddProduct} />
            <ProtectedRoute
              path="/edit-product/:product_id"
              component={EditProduct}
            />
            <ProtectedRoute path="/users" component={Users} />
            <ProtectedRoute path="/orders" component={Orders} />
            <ProtectedRoute path="/categories" component={Categories} />
            <ProtectedRoute path="/add-category" component={AddCategory} />
            <ProtectedRoute
              path="/edit-category/:category_id"
              component={EditCategory}
            />
            <ProtectedRoute path="/brands" component={Brands} />
            <ProtectedRoute path="/add-brand" component={AddBrand} />
            <ProtectedRoute
              path="/edit-brand/:brand_id"
              component={EditBrand}
            />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
