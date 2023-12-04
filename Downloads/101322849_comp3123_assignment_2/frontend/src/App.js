import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import ViewEmployee from './components/viewEmployee';
import UpdateEmployee from './components/updateEmployee';
import DeleteEmployee from './components/deleteEmployee';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<EmployeeList />} />
        <Route exact path="/add-employee" element={<AddEmployee />} />
        <Route exact path="/view-employee" element={<ViewEmployee />} />
        <Route path="/update-employee" element={<UpdateEmployee />} />
        <Route path="/delete-employee" element={<DeleteEmployee />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
