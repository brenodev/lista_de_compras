import React from "react"
import CustomCard from "../../customCard"
import { Checkbox, Typography, Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import "./CreateListItem.css"
import ListCardFooter from "./listCardFooter/ListCardFooter"

import {connect } from "react-redux"
import { bindActionCreators } from "redux"

import { Creators as ListActions } from "../../../home/list/actions/list"
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons"

class CreateListItem extends React.Component {
  render () {

    return (
      <div className="page-container">
        <Link to="/Criar-Lista">
          <Button variant="outlined" color="primary">Voltar</Button>
        </Link>
        <div className="list-items-container">
        { this.props.list.items.map(item => 
          <CustomCard 
            item={item}
            key={item.id}
            link="#"
            image="data:image/jpeg;base64,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"
            containerClass="list-item"
            toggleProduct={this.props.toggleProduct}
            footer={<ListCardFooter deleteProduct={this.deleteProduct} item={item}/>}
          >
            <div>
              <div className="list-item-header">
                <Typography variant="subtitle1" component="h2">{item.product}</Typography>
                <Checkbox onClick={() => this.props.toggleProduct(item.id)} checked={item.checked}/>
              </div>
              <Typography component="p">{item.quantity} {item.unit}</Typography>
              <Typography component="p">R$ {item.price}</Typography>
            </div>
          </CustomCard>
        
        )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  list: state.list  
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ListActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateListItem)