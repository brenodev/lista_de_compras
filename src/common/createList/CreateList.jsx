import React from "react"
import "./CreateList.css"
import CreateListForm from "./createListForm/CreateListForm"
import {connect } from "react-redux"
import { bindActionCreators } from "redux"

import { Creators as ListActions } from "../../home/list/actions/list"

class CreateList extends React.Component {
  addProduct = (product, list) => {
    this.props.addProduct(product, list)
  } 
  render () {
    return (
      <div className="page-container">
        <CreateListForm addProduct={this.addProduct}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  list: state.list  
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ListActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateList)