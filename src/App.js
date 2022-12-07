import './App.css';
import Modal from './components/Modal';
import {useState} from 'react'
function App() {
  const [showModal,setshowModal]=useState(false)
    const closeBtn= ()=>{
      setshowModal(false)
    }
  return (
    <div className="App">
      <button onClick={()=>setshowModal(true)}>Show Modal</button>
     { showModal && <Modal closebtn={closeBtn}>
      <h1>this is modal by react</h1>
      <p>made by DevMilad</p>
        
      </Modal>  }
    </div>
  );
}

export default App;
