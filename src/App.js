import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Result } from './components/Result';
import Home from './Home';

export default function App() {
  const [selectedState, setSelectedState] = useState('Madhya Pradesh');
  const [selectedCity, setSelectedCity] = useState('Jabalpur');

  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              selectedState={selectedState}
              selectedCity={selectedCity}
              setSelectedState={setSelectedState}
              setSelectedCity={setSelectedCity}
            />
          }
        />
        <Route
          path='/result'
          element={
            <Result
              selectedCityName={selectedCity}
              selectedStateName={selectedState}
            />
          }
        />
      </Routes>
    </div>
  );
}
