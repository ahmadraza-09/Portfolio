import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage';
import MiniProjectsPage from './pages/mini-projects-page';
import CalculatorPage from './mini-projects/pages/calculatorpage';

function App() {
  return (
    <div className='bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/mini-projects' element={<MiniProjectsPage />} />

          {/* Mini Projects Pages */}
          <Route path='/mini-projects/calculator' element={<CalculatorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
