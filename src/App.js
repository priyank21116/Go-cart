import React from 'react';
import Paper from '@mui/material/Paper';


import Dashboard from './Screens/Dashboard';
function App() {
  return (
    <Paper elevation={6} variant="outlined"  style={{ margin: 15, padding: 5, borderRadius: 10, backgroundColor: "#e6f7ff" }}>
    <div className="App" style={{ margin: 10, padding: 20, borderRadius: 10, backgroundColor: "#e6f7ff" }}>
      {/* LOGIN SCREEN  */}

      {/* DASHBOARD */}
      
        <Dashboard />
      
    </div>
    </Paper>
  );
}

export default App;
