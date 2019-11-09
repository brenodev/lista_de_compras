import React from "react"
import { Card, CardActionArea, CardContent, CardActions, Divider } from '@material-ui/core';
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./CustomCard.css"
const CustomCard = props => {
  return (
    <div className={props.containerClass}>
      <Link to={props.link}>
        <Card className="card">
          <CardActionArea className="card-action-area">
            <CardContent className="card-content">
              {props.children}
            </CardContent>
          </CardActionArea>
          {props.footer && (
            <React.Fragment>
              <Divider/>
              <CardActions className="card-footer">
                {props.footer}
              </CardActions>
            </React.Fragment>
          )}
        </Card>
      </Link>
      </div>
  )
}

CustomCard.propTypes = {
  containerClass: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  footer: PropTypes.element,
  link: PropTypes.string.isRequired
}

export default CustomCard