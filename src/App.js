import React from 'react';
import Profile from './profile/Profile';

function App() {
  const handleName = (name) => alert(`Hello, my name is ${name}`);

  return (
    <div>
      <Profile
        fullName="yassine"
        profession="Designer"
        bio="this is soo ez."
        handleName={handleName}
      >
        <img src="112.jpg" alt="Profile" />
      </Profile>
    </div>
  );
}

export default App;
