import React from "react"
import {faShoppingBasket, faCheck} from "@fortawesome/free-solid-svg-icons"
import CustomCard from "../../common/customCard"
import ListFooter from "./listFooter/ListFooter"
import ListItem from "./listItem/ListItem"
import "./List.css"

const List = props => {
  return (
    <CustomCard 
        containerClass="list-container" 
        footer={ <ListFooter total={props.total}/> }
        link="/Item-Lista"
        >
        <div>
            <p className="title">{props.list}</p>
            <div className="list-card-body">
                <ListItem 
                  icon={faShoppingBasket} 
                  text={`${props.openedItems} Item(s) Na lista`} 
                /> 
                <ListItem 
                  icon={faCheck}  
                  text={`${props.closedItems} Item(s) Marcados(s)`}
                /> 
              </div>
            </div>
      </CustomCard>
  )
}

export default List