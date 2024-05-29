import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import classes from './App.module.css';
import Food from './Food';
import Booking from './Booking';
import Type from './Type';
import Category from './Category';

function App() {
  return (
    <div className={classes.mainContainer}>
      <Router>
        <Routes>

          <Route path="/food" element={<Food />} />
          <Route path='/category' element={<Category />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/type" element={<Type />} />
          
        </ Routes>

      </Router>
    </div>
  );
}

export default App;
