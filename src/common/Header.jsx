import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link} from "react-router-dom"

const Header = props => {
  return (
    <React.Fragment>
       <AppBar position="static" color="primary">
        <div className="header">
          <Link to="/">
            <p className="text-left">Lista de compras</p>
          </Link>
        </div>
      </AppBar>
    </React.Fragment>
  )
}
export default Header;