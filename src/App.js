import React from 'react';
import Paper from '@mui/material/Paper';

import Dashboard from './ScreensCustomer/Dashboard';
import Verification from './ScreensCustomer/Verification';
import Shop from './ScreensS/Shop';
import FirebaseCrud from './FirebaseCrud';

function App() {
  return (
    <Paper elevation={0} variant="outlined" style={{ margin: 15, padding: 5, borderRadius: 10, backgroundColor: "#e6f7ff" }}>
      <div className="App" style={{ margin: 10, padding: 20, borderRadius: 10, backgroundColor: "#e6f7ff" }}>
        {/* LOGIN SCREEN  */}
        {/* <Verification /> */}
        
        {/* DASHBOARD */}

        <Dashboard />
        {/* <FirebaseCrud /> */}
        {/* <Shop /> */}

      </div>
    </Paper>
  );
}

export default App;
