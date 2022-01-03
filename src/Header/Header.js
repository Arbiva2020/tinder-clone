import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className="header">
           <h2>Header</h2> 
           <IconButton>
           <PersonIcon fontSize="large" className="header_icon"/>
           </IconButton>

           <img
           className="header_logo"
           src="https://download.logo.wine/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.png"
           alt=""
           />
        </div>
    )
}

export default Header
