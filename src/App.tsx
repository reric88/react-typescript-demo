import { useEffect, useState } from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Login } from "./components/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loginCheck, setLoginCheck] = useState(false)
  const [username, setUsername] = useState('')
  const [randName, setRandName] = useState("");
  const [fullRandName, setFullRandName] = useState({
    first: "",
    last: "",
  });
  const [nameList, setNameList] = useState([
    {
      first: "",
      last: "",
    },
  ]);
  const [messageNum, setMessageNum] = useState(0);
  const [pageStatus, setPageStatus] = useState("loading");
  const [pageReason, setPageReason] = useState<
    "loading" | "success" | "failure" | "fatal"
  >("loading");

  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const firstNames = [
    "Eric",
    "Vishwas",
    "John",
    "Bruce",
    "Jason",
    "Sam",
    "Andy",
    "Luke",
    "Clark",
    "Lois",
    "Leia",
    "Ben",
    "Kevin",
    "Chad",
    "Brad",
    "Larry",
    "Brenda",
    "Lane",
    "Trisha",
    "Sarah",
    "Sal",
  ];

  const lastNames = [
    "Collard",
    "Sapupu",
    "Jacobs",
    "Wayne",
    "Smith",
    "Cook",
    "Perry",
    "Fields",
    "Skywalker",
    "Kent",
    "Baldor",
    "Priss",
    "Stevens",
    "Sanders",
    "Jackson",
    "Stiles",
    "Harrison",
    "Garry",
    "Bland",
    "Pride",
    "Mavik",
  ];

  useEffect(() => {
    if (loggedIn && !loginCheck){
    let results = ["success", "failure", "fatal"];
    setTimeout(() => {
      const randomStatus = results[Math.floor(Math.random() * 3)];
      setPageStatus(randomStatus);
      setPageReason(
        randomStatus as "loading" | "success" | "failure" | "fatal"
      );
    }, 3000);

    const messageAmt = Math.floor(Math.random() * 11);

    const randomName = () => {
      let first = firstNames[Math.floor(Math.random() * 21)];
      setRandName(first);
    };

    const randomNameObject = () => {
      const names = {
        first: "",
        last: "",
      };
      let first = firstNames[Math.floor(Math.random() * 21)];
      let last = lastNames[Math.floor(Math.random() * 21)];
      names.first = first;
      names.last = last;
      setFullRandName(names);
    };

    const personNameList = () => {
      const names = {
        first: "",
        last: "",
      };
      let first = firstNames[Math.floor(Math.random() * 21)];
      let last = lastNames[Math.floor(Math.random() * 21)];
      names.first = first;
      names.last = last;
      return names;
    };

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
    ];

    setMessageNum(messageAmt);
    randomName();
    randomNameObject();
    personNameList();
    setNameList(namesList);
    setLoginCheck(true)
  }
  }, [loggedIn]);

 const handleLogin = () => {
  setLoggedIn(true)
 }

  return (
    <div className="App">
      {!loggedIn ? 
      <Login login={loggedIn} onLogin={handleLogin} /> 
      : 
      <>
      <Greet name={randName} messageCount={messageNum} isLoggedIn={loggedIn} />
      <Status status={pageStatus} reason={pageReason} isLoggedIn={loggedIn} />
      <Person name={personName} randomName={fullRandName} />
      <PersonList names={nameList} />
      </>
      }
      
    </div>
  );
}

export default App;
