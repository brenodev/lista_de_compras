import React from "react"
import { Card, CardActionArea, CardContent } from '@material-ui/core';

import "./Home.css"

const Home = props => {
  return (
    <div className="page-container">
    <div className="new-list-container">
      <Card className="card">
        <CardActionArea className="card-action-area">
          <CardContent className="card-content">
            <div>
              <p className="title">Adicionar novas listas</p>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
    </div>
  )
}
export default Home;