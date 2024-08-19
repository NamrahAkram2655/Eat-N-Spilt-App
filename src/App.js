import { useState } from 'react';
import './App.css';
import Friend from './Components/Friend/Friend';
import FriendForm from './Components/FriendForm/FriendForm';
import SplitForm from './Components/SplitForm/SplitForm';

function App() {

  const dummydata = [
    {
      id: 1,
      name: "Sarah",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29uJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      num: -7,
    },
    {
      id: 2,
      name: "Salar",
      image: "https://images.unsplash.com/photo-1441123100240-f9f3f77ed41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbiUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      num: 88,
    },
    {
      id: 3,
      name: "Asad",
      image: "https://media.istockphoto.com/id/1303539316/photo/one-beautiful-woman-looking-at-the-camera-in-profile.webp?b=1&s=170667a&w=0&k=20&c=S1e128IEUVOrxy8UWGkda-2m259v_hmdbcln0mDI2dU=",
      num: 0,
    },
    {
      id: 4,
      name: "Murtasim",
      image: "https://media.istockphoto.com/id/1360028830/photo/young-woman-smiling-and-gesturing-to-copy-space.webp?b=1&s=170667a&w=0&k=20&c=8VACUUbspahcaLaZDDUTGBj7QjKYUZLvbj8THmHBGFI=",
      num: 100,
    },
  ];

  const [todo, setTodo] = useState(dummydata);
  const [add, setadd] = useState(false);
  const [splitAdd, setSplitAdd] = useState(false);

  const [selected, setSelected] = useState(false);

  const addHandler = () => {
    if (add === false) {
      setadd(true);
    }
    else {
      setadd(false);
    }
  }


  const splitFormHandler = () => {
    if (splitAdd === false) {
      setSplitAdd(true);
    }
    else {
      setSplitAdd(false);
    }
  }

  const [balance, setBalance] = useState("");

  const setSelectedData = (item) => {
    //setSelected(item); wo close ni ho raha tha form that's why use below code
    setSelected((frnd) => frnd.id === item.id ? false : item);
    //agr dono ki id equal means close pr click hua to form band ho jayai 
  }

  const setTodoList = (item) => {
    setTodo([...todo, item]);
  }

  const BalanceChanges = (value) => {
    // Update the balance of the selected friend
    const updatedTodo = todo.map((friend) => {
      if (friend.id === selected.id) {
        return { ...friend, num: friend.num + value };
      }
      return friend;
    });
    setTodo(updatedTodo);
  }


  return (
    <div>
      <div className='eatsplit'>

        <Friend dummydata={todo} setadd={setadd} add={add} splitFormHandler={splitFormHandler} setSelectedData={setSelectedData} setBalance={setBalance} selected={selected} />

        {selected && <SplitForm selected={selected} balance={balance} BalanceChanges={BalanceChanges} />}

      </div>

      <button className='add' onClick={addHandler} >Add friend</button>

      {add && <FriendForm setTodoList={setTodoList} setadd={setadd} />}


    </div>

  );
}

export default App;
