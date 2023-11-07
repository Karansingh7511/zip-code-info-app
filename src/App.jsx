// App.js
import React, { useState, useEffect } from 'react';
import UserInput from './UserInput';
import LocationInfo from './LocationInfo';
import axios from 'axios';

function App() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchLocationInfo = async (postalCode) => {
    setLoading(true);
    setError(null);

    const apiUrl = `http://api.zippopotam.us/IN/${postalCode}`; // Use the Zip Code Galore API

    try {
      const response = await axios.get(apiUrl);
      setLocation(response.data);
      console.log('Data fetched successfully');
    } catch (error) {
      setError('Failed to fetch location information. Please try again.');
      console.error('API request failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100">
      <UserInput onSearch={fetchLocationInfo} loading={loading} />
      <LocationInfo location={location} error={error} />
    </div>
  );
}

export default App;
