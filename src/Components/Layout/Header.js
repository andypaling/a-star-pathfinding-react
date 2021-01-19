import React from 'react';
import {  Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

function Header(props) {
   return (
       <AppBar position="static" color="secondary">
           <h2 className="mt-4">A* Search Algorithm</h2>
           <h5 style={{marginBottom: 17}}>A graph traversal and pathfinding algorithm</h5>
           <div className="hr-links" />
           <div className="links">
               <Typography>
                   <Link to="/"><button className="appbar-btn">Home</button></Link>
                   <Link to="/report-bug"><button className="appbar-btn">Report A Bug</button></Link>
               </Typography>
           </div>
       </AppBar>
   )
}


export default Header;
