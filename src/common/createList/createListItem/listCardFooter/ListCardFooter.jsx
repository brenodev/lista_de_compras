import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import {connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Creators as ListActions } from "../../../../home/list/actions/list"

import "./ListCardFooter.css"

const ListCardFooter = (props) => {
  return (
    <div className="list-card-footer">
      <div className="list-card-footer-actions">
        <FontAwesomeIcon
        icon={faPen}
        color="#009688"
        size="sm"
        />
        <FontAwesomeIcon
        icon={faTrash}
        color="#834bff"
        size="sm"
        onClick={() => props.deleteProduct(props.item.id)}
        />
      </div>
      <p>Total: R$ {props.item.total}</p>
    </div>
  )
}

const mapStateToProps = state => ({
  list: state.list  
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ListActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListCardFooter)