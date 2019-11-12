import React from "react"
import "./Home.css"
import NewList from "./newList/NewList"
import List from "./list/List"
import { getListTotal, getOpenedItems, getClosedItems  } from "../home/list/reducer/list"

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
            openedItems={props.openedItems}
            closedItems={props.closedItems}
          />
      }
    </div>
  )
}
const mapStateToProps = state => ({
  list: state.list,
  total: getListTotal(state),
  openedItems: getOpenedItems(state),
  closedItems: getClosedItems(state)
});

export default connect(mapStateToProps, null)(Home);