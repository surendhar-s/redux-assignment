import React from 'react';
import './App.css';
import DetailTile from './containers/detailContainer';
import FirstName from './containers/firstNameContainer';
import LastName from './containers/lastNameContainer';
import Score from './containers/scoreContainer';

function App() {
  return (
    <div className="App">
      <FirstName />
      <LastName />
      <Score />
      <hr />
      <DetailTile />
    </div>
  );
}

export default App;
