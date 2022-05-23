import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Footer from './Pages/Shared/Footer';
import Purchase from './Pages/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyReviews from './Pages/Dashboard/MyReviews';
import Review from './Pages/Dashboard/Review';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/products/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path="about" element={<RequireAuth><About></About></RequireAuth>}></Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<RequireAuth><MyOrders></MyOrders></RequireAuth>}></Route>
          <Route path="reviews" element={<RequireAuth><MyReviews></MyReviews></RequireAuth>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="review" element={<Review></Review>}></Route>
        <Route path="signup" element={<Signup></Signup>}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="myportfolio" element={<MyPortfolio></MyPortfolio>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
