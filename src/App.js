import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form'

function App() {

  const [memberList, setMemberList] = useState([])
  console.log(memberList)
  const addNewMember = member => {
    setMemberList([ ...memberList, member])
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form addNewMember={addNewMember} />
      </header>
    </div>
  );
}

export default App;
