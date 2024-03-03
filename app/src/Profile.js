import React from 'react';

const Profile = () => {
  const Profile = {

    justifyContent: 'space-between', // Align items with space-between
    fontFamily: 'Avant Garde, Avantgarde, Century Gothic, CenturyGothic, AppleGothic, sans-serif',
    fontWeight: "bold",
    borderRadius: '5px',
    color:'white',
    padding: '10px', // Added padding for better spacing
  };
  return (
    <div style={Profile}>
      <div>Name: brian</div>
      <div>Email: brian@example.com</div>
    </div>
  );
};

export default Profile;