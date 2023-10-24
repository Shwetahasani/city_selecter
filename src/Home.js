import { useState, useEffect } from 'react';
import { States } from './components/States.js';
import './styles.css';
import axios from 'axios';
import { Cities } from './components/Cities.js';
import { Link } from 'react-router-dom';

export default function Home({
  selectedState,
  selectedCity,
  setSelectedState,
  setSelectedCity,
}) {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loadingCity, setLoadingCity] = useState(false);
  const [loadingState, setLoadingState] = useState(false);

  async function getStates() {
    try {
      setLoadingState(true);
      const res = await axios.get(
        'https://www.universal-tutorial.com/api/states/India',
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJhc21pdHNocml2YXN0YXZhOEBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJMd1VCa1dlNEtZRjdMNlQ5Nm4yOGs0UTVRZFdPLVZpY0RmaWsya21PMlZaSG5nN2V5S21SRGtfLTU0amx1R2FVY1dRIn0sImV4cCI6MTY5ODIzODIzN30.3XCg1D6337vJ26EJ-XZ9Z81kjs6Gous_zCkZ_fj1Mds',
          },
        }
      );
      setStates(res.data);
      setSelectedState('Madhya Pradesh');
      setLoadingState(false);
    } catch (error) {
      setLoadingState(false);
      console.error({ error });
    }
  }

  async function getCities() {
    setLoadingCity(true);
    let state = selectedState;
    try {
      if (!state) {
        console.log({ states });
        state = states?.[0];
      }
      const res = await axios.get(
        `https://www.universal-tutorial.com/api/cities/${state}`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJhc21pdHNocml2YXN0YXZhOEBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJMd1VCa1dlNEtZRjdMNlQ5Nm4yOGs0UTVRZFdPLVZpY0RmaWsya21PMlZaSG5nN2V5S21SRGtfLTU0amx1R2FVY1dRIn0sImV4cCI6MTY5ODIzODIzN30.3XCg1D6337vJ26EJ-XZ9Z81kjs6Gous_zCkZ_fj1Mds',
          },
        }
      );

      setCities(res.data);
      setSelectedCity('Jabalpur');
      setLoadingCity(false);
    } catch (error) {
      console.error({ error });
      setLoadingCity(false);
    }
  }

  useEffect(() => {
    getStates();
  }, []);

  useEffect(() => {
    getCities();
  }, [selectedState]);

  return (
    <div className='App'>
      {!loadingState && (
        <States
          states={states}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
        />
      )}
      {!loadingCity && (
        <Cities
          cities={cities}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
      )}
      {loadingCity && <div>Loading...</div>}

      <Link to={'/result'}>Submit</Link>
    </div>
  );
}
