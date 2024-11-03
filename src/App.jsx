import { useEffect, useState } from "react";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Availablebtn from "./components/availablebtn/Availablebtn";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Newslatter from "./components/newslater/Newslatter";

const App = () => {
  // banner btn amount 
  const [amount, setAmount] = useState(0)
  const handelClimebtn = (id) => {
    toast.success(`Congratulations!!! ${id}  added successfully!`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    setAmount(amount + id)

  }
  // available players button color desing and functionality 
  const [active, setActive] = useState({
    isActice: 'available',
    select: true,
  })

  const handelColor = status => {
    if (active.isActice == status) {
      setActive({
        isActice: 'available',
        select: true,
      })

    }
    else {
      setActive({
        isActice: 'available',
        select: false,
      })
    }
  }


  // show all available palyers 
  const [availablePlayers, setAvailablePlayers] = useState([])
  useEffect(() => {
    fetch('players.json')
      .then(res => res.json())
      .then(data => setAvailablePlayers(data))
  }, [])


  // handel choice players button 
  const [selectPlayer, setSelectPlayer] = useState([])
  const handelChoicePlayers = (player , name , price) => {
    const newPlayers = availablePlayers.find(players => players.id == player.id);
    const existPlayer = selectPlayer.find(players=> players.id == player.id);
    if(existPlayer){
      return toast.warn(`${name} Player already exists`, {
        position: "top-center",
        autoClose: 1300,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
       
        });
    }else if(selectPlayer.length > 5){
      return toast.warn('You can not add more player', {
        position: "top-center",
        autoClose: 1300,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
       
        });
    }else if(amount <price){
      return toast.warn('You do not have suffecient ballance', {
        position: "top-center",
        autoClose: 1300,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
       
        });
    }
    else{
      setAmount(amount - price)
      toast.success(` ${name}  added successfully!`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      setSelectPlayer([...selectPlayer, newPlayers])
    }

  }

  // delete selected player button 
  const [removeplayer , setRemoveplayer] = useState([])
  const deleteSelectedPlayer = (id , name , price) => {
    const removingPlayer = selectPlayer.find(player => player.id == id);
    const remainingPlayers = selectPlayer.filter(player => player.id !== id);
    setRemoveplayer([ ...removeplayer ,removingPlayer])
    setSelectPlayer(remainingPlayers)
    setAmount(amount + price)
    toast.success(` ${name} Delete successfully`, {
      position: "top-center",
      autoClose: 1300,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
     
      });
  }





  return (
    <div className="max-w-7xl mx-auto">
      <Header amount={amount}></Header>
      <ToastContainer></ToastContainer>
      <Banner handelClimebtn={handelClimebtn}></Banner>
      <main>
        <Availablebtn
          active={active}
          handelColor={handelColor}
          availablePlayers={availablePlayers}
          handelChoicePlayers={handelChoicePlayers}
          selectPlayer={selectPlayer}
          deleteSelectedPlayer={deleteSelectedPlayer}
        ></Availablebtn>
        <Newslatter></Newslatter>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;