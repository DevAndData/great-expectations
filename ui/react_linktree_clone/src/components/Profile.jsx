import React from 'react';

function Profile({ imageUrl, name, description }) {
  return (
    <div className="profile">
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Profile;