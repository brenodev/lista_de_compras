import React from "react"
import "./Home.css"
import NewList from "./newList/NewList"
import List from "./list/List"

const Home = props => {
  return (
    <div className="page-container">
      <NewList/>
      <List/>
    </div>
  )
}
export default Home;