import React from 'react';

function LocationInfo({ location, error }) {
  return (
    <div className="p-4 text-center">
      {error ? (
        <div className="text-red-600">{error}</div>
      ) : location ? (
        <div>
          <h2 className="text-2xl font-bold">Location Information</h2>
          <p className="mt-4">Country: {location.country}</p>
          <p>State: {location.state}</p>
          <p>Place Name: {location.placeName}</p>
        </div>
      ) : null}
    </div>
  );
}

export default LocationInfo;
