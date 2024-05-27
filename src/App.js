//import "./App.css";
import {useState, useEffect} from 'react';
import { ethers }from 'ethers';
import abi from "./contracts/healthme.json";


import { Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Verification1 from "./pages/Verification1";
import Verification2  from "./pages/verification2";
import Dashboard from "./pages/Dashboard";
import SearchPatient from "./pages/SearchPatient";
import Contact from "./pages/Contact";
import Upload_T from "./pages/Upload_T";
import Verify_T from "./pages/Verify_T";
import Docs_T from "./pages/Docs_T";
import LabFileUpload from "./pages/FileUpload";
import Testpage from "./pages/test";
import Testpage2 from "./pages/test2";
import Notification from "./pages/Notification";
import FileUpload from "./pages/FileUpload";
import AboutUs from './pages/AboutUs';

function App() {
  

  const [ state, setState ] = useState({
    provider:null,
    signer:null,
    conract:null
  });
  
  useEffect(() =>{
    const connectWallet = async() =>{
      const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const contractAbi = abi.abi;
      try{
        const { ethereum } = window;

        if ( ethereum ){
          const account = await ethereum.request({method: "eth_requestAccounts",})
        }
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);
        setState({provider, signer, contract})
      }
      catch(error){
        console.log(error)
      }
    };
    connectWallet();
  }, []);
  console.log(state);

  /* const { user, setUser, isLoading } = useFindUser(); */
  

  return (

    <Routes>
      <Route path="/Upload" element={<Upload_T state={state}/>}/>
      <Route path="/Docs" element={<Docs_T state={state}/>}/>
      <Route path="/Verify" element={<Verify_T state={state}/>}/>

      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />                            
      <Route path="/Register" element={<Register/>} />
      <Route path="/Verification1" element={<Verification1/>} />
      <Route path="/Verification2" element={<Verification2/>} />
      <Route path="/SearchPatient" element={<SearchPatient/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/LabVerify" element={<LabFileUpload/>}/>
      <Route path="/test" element={<Testpage/>}/>
      <Route path="/test2" element={<Testpage2/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/Notification" element={<Notification/>} />
      <Route path="/FileUpload" element={<FileUpload/>} />

      {/* <Route path="/Upload" element={<V/>} /> */}
    </Routes>

  );
}

export default App;

   
    
    
    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a> */}
          {/* <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul> */}
      
      
        {/* <div>
          <div>
          <div className="card" >
  <div className="">
    <h5 className="card-title"><b>Health_Me</b></h5>
    <h6 className="card-subtitle mb-2 text-muted">A secure and reliable medical document application</h6>
    <p className="card-text">This application will help Labs to gain trust of their customers and help share documents...</p>
  </div>
</div>
          </div>
          <div className='outsidePic'>
      <img src="main_img2.png" className="main_img" alt=""></img>
      </div>
      </div> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
      