
import { useEffect, useState } from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const [pageStatus, setPageStatus] = useState('loading')
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }
  const firstNames = ['Eric', 'Vishwas', 'John', 'Bruce', 'Jason', 'Sam', 'Andy', 'Luke', 'Clark', 'Lois', 'Leia', 'Ben', 'Kevin', 'Chad', 'Brad', 'Larry', 'Brenda', 'Lane', 'Trisha', 'Sarah', 'Sal']
  const lastNames = ['Collard', 'Sapupu', 'Jacobs', 'Wayne', 'Smith', 'Cook', 'Perry', 'Fields', 'Skywalker', 'Kent', 'Baldor', 'Priss', 'Stevens', 'Sanders', 'Jackson', 'Stiles', 'Harrison', 'Garry', 'Bland', 'Pride', 'Mavik']
  const messageCount = Math.floor(Math.random() * 11)


  const randomName = () =>{
    const names = {
      first: '',
      last: '',
    };
    let first = firstNames[Math.floor(Math.random() * 21)]
    return first
  }

  const randomNameObject = () =>{
    const names = {
      first: '',
      last: '',
    };
    let first = firstNames[Math.floor(Math.random() * 21)]
    let last = lastNames[Math.floor(Math.random() * 21)] 
    names.first = first;
    names.last = last;
    return names
  }

  const personNameList = () => {
    const names = {
      first: '',
      last: '',
    };
    let first = firstNames[Math.floor(Math.random() * 21)]
    let last = lastNames[Math.floor(Math.random() * 21)] 
    names.first = first;
    names.last = last;
    return names;
  }

  let namesList = [
    {
      first: personNameList().first,
      last: personNameList().last,
    },
    {
      first: personNameList().first,
      last: personNameList().last,
    },
    {
      first: personNameList().first,
      last: personNameList().last,
    },

  ]

useEffect(()=>{
  let results = ['success', 'failure', 'fatal']
  setTimeout(() => {
    const randomStatus = results[Math.floor(Math.random() * 3)]
    setPageStatus(randomStatus)
  }, 3000);

}, [])

  return (
  <div className="App">
    <Greet name={randomName()} messageCount={messageCount} isLoggedIn={false} />
    <Status status={pageStatus} />
    <Person name={personName} randomName={randomNameObject()}/>
    <PersonList names={namesList} />
    </div>
)
}

export default App;
