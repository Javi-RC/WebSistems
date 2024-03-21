import React from 'react';
import './App.css';
import CardList from './CardList.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

function App() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="App">
      <body className="App-header">


        <div class="alert alert-info m-4" role="alert" >
          A simple info alert—check it out!
        </div>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Names" icon={<AccountCircleIcon />} />
          <BottomNavigationAction label="Card List" icon={<FormatListBulletedIcon />} />
        </BottomNavigation>
        {value === 0 && (
          <div>
            <p>Made by: Gonzalo Torres Aparicio and Javier Rodriguez Castellano </p>
          </div>
        )}

        {value === 1 && (
          <div>
            <CardList />
          </div>
        )}
      </body>
    </div>
  );
}

export default App;
