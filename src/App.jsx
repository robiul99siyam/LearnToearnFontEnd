import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './data/Index'; 
import Contact from './pages/Contact';

function App() {
    return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />

				{/* Add more routes here if needed */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
