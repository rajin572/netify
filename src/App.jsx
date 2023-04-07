import { Toaster, toast } from "react-hot-toast";
import "./App.css";
import Article from "./components/Article";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [bookMark, SetBookMark] = useState([]);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const updateBookMark = (newsData) => {
    const a = bookMark.filter((data) => {
      if (data.id === newsData.id) {
        toast.error("You have allready added this in bookmark");
      } else {
        return data;
      }
    });

    const newBookMark = [...a, newsData];

    SetBookMark(newBookMark);
  };
  console.log(bookMark);

  return (
    <div className="App">
      <Navbar />
      <div className="grid w-10/12 mx-auto md:grid-cols-6 gap-2 items-start">
        <div className="md:col-span-4 col-span-1 justify-self-start">
          {data.map((data) => (
            <Article
              data={data}
              key={data.id}
              updateBookMark={updateBookMark}
              bookMark={bookMark}
              setTimer={setTimer}
              timer={timer}
            />
          ))}
        </div>
        <Sidebar bookMark={bookMark} timer={timer} />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
