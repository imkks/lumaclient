import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import Login from './components/Login';
import Items from './components/Items';
import Loans from './components/Loans';
import ApplyLoan from './components/ApplyLoan';
import { AuthProvider } from './contexts/AuthContext';
import RequiredAuth from './components/RequiredAuth';

function App() {
  return (
    <div className="container">
      <header className="App-header">
       <h1>Loan Management Application</h1>
      </header>
      <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<RequiredAuth><Home/></RequiredAuth>}></Route>
        <Route path="/loan" element={<ApplyLoan/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/items" element={<Items/>}></Route>
        <Route path="/loans" element={<Loans/>}></Route>

      </Routes>
      </AuthProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
