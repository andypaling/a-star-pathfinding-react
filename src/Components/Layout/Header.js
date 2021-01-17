import React from 'react';
import AppBar from '@material-ui/core/AppBar';


function Header(props) {
   return (
       <AppBar position="static" color="secondary">
           <h2 className="mt-4">A* Search Algorithm</h2>
           <h5 className="mb-4">A graph traversal and pathfinding algorithm</h5>
       </AppBar>
   )
}


export default Header;
