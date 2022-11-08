import logo from './logo.svg';
import './App.css';
// import './expenseTable.css';
import ExpenseTracker from './component/expenseTracker';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddExpense from './component/addExpense';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExpenseTracker/>}/>
        <Route path="/add" element={<AddExpense />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
