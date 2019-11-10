import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "./common/Header"
import Home from "./home/Home"
import CreateList from "./common/createList/CreateList"
import CreateListItem from "./common/createList/createListItem"


const Routes = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Criar-Lista" component={CreateList}/>
          <Route path="/Item-Lista" component={CreateListItem} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
}

export default Routes