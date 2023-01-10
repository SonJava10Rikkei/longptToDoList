import "./App.css";
import NewTask from "./components/NewTask";
import { useState } from "react";
import ListTaks from "./components/Task";

function App() {
  const [listTaks, setListTaks] = useState([
    { id: 1, title: "hit the gym", status: false },
    { id: 2, title: "pay bills", status: false },
    // { id: 3, title: "meet geogre", status: false },
    // { id: 4, title: "buy egg", status: false },
    // { id: 5, title: "read a book", status: false },
    // { id: 6, title: "organize office", status: false },
  ]);
  const handelAdd = (NewTask) => {
    setListTaks([
      ...listTaks,
      { title: NewTask, status: false, id: listTaks.length + 1 },
    ]);
  };
  function handleChangeStatus(item) {
    console.log(11112, item);
    setListTaks(() => {
      const newListTaks = listTaks.map((element) => {
        if (element.id == item.id) {
          return item;
        }
        return element;
      });
      return newListTaks;
    });
  }
  // function handelEdit(){
  //     setListTaks()=>{
  //         const editItem = listTaks
  //     }
  // }
  const handleAppProps = (id) => {
    const newData = listTaks.filter((element) => element.id !== id)
    newData.forEach((data, index) => data.id = index + 1);
    setListTaks(newData)
  }
  return (
    <div className="App">
      <NewTask handelAdd={handelAdd}></NewTask>
      <div className="info">
        <ListTaks
          listTaskProps={listTaks}
          onChangeStatus={handleChangeStatus}
          handleAppProps={handleAppProps}
        />
      </div>
    </div>
  );
}

export default App;