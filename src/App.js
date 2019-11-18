import React from 'react';
import NavBar from './components/NavBar';
import ComplaintViewCard from './components/ComplaintCard';

const renderCards = () =>
  [
    {
      agent: 'RK',
      complaintText:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      medium: 'Twitter',
      mode: 'DM'
    },
    {
      agent: 'NC',
      complaintText:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      medium: 'Facebook',
      mode: 'DM'
    },
    {
      agent: 'SM',
      complaintText:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.t',
      medium: 'GMB',
      mode: 'Post'
    }
  ].map(x => (
    <>
      <br />

      <ComplaintViewCard {...x} />
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
