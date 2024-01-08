import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Courses from './Components/Courses/Courses';
import Homepage from './Components/Home/Homepage';
import RingLoader from 'react-spinners/RingLoader';
import Sidebar from './Components/Sidemenu/Sidebar';
import AllRoutes from './Components/Allroutes';
// import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Simulating content loading by setting loading to false after 5 seconds
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div style={{ display: 'flex', backgroundColor:"black", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <RingLoader color="#36d7b7" loading={loading} size={100} />
        </div>
      ) : (
        <div>
          <Navbar />
          {/* <Homepage />
          <Courses /> */}
          <AllRoutes/>
        </div>
      )}
    </div>
  );
}

export default App;
