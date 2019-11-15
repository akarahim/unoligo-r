import React from 'react';
import NavBar from './components/NavBar';
import ComplaintViewCard from './components/ComplaintCard';

const renderCards = () =>
  ['1', '2', '3'].map(x => (
    <>
      <br />
      <ComplaintViewCard />
    </>
  ));
function App() {
  return (
    <>
      <NavBar />
      {renderCards()}
    </>
  );
}
export default App;
