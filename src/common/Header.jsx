import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { Link} from "react-router-dom"

const Header = props => {
  return (
    <React.Fragment>
       <AppBar position="static" color="primary">
        <div className="header">
          <Link to="/">
          <FontAwesomeIcon icon={faHome} size="sm" />
          </Link>
          <p className="text-left">Lista de compras</p>
        </div>
      </AppBar>
    </React.Fragment>
  )
}
export default Header;