import React from "react"
import "./Home.css"
import NewList from "./newList/NewList"
import List from "./list/List"
import { getListTotal } from "../home/list/reducer/list"

import { connect } from "react-redux"

const Home = props => {
  return (
    <div className="page-container">
      <NewList/>
      {
        props.list.items.length > 0 && 
          <List 
            list={props.list.list}
            total={props.total}
          />
      }
    </div>
  )
}
const mapStateToProps = state => ({
  list: state.list,
  total: getListTotal(state),
});

export default connect(mapStateToProps, null)(Home);