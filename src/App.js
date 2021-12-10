/* eslint-disable */
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
    return (
        <> < BrowserRouter > <Routes>

            <Route path='/' element={<Navbar/>}/>
        </Routes>
    </BrowserRouter>
</>
    );
}

export default App;
