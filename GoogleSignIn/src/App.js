import logo from './logo.svg';
import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route,useNavigate} from 'react-router-dom';  
import jwt_decode from 'jwt-decode';
import './App.css';

import Home from './Page/Home';
import Login from './Page/Login';

function App() {

  // const navigate = useNavigate();
 


  return (
		<div className='App'>
			
			<Router>
				<Routes>
          <Route
            path='/'
            element={<Login/>}
          />
					<Route
						path='/home'
						element={<Home/>}
						
					/>
				</Routes>
			</Router>
		</div>
  );
}

export default App;
