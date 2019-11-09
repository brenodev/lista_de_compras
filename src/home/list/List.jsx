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
        footer={ <ListFooter/> }>
        <div>
            <p className="title">Mês</p>
            <div className="list-card-body">
                <ListItem icon={faShoppingBasket} text="1 Item(s) Restante"/> 
                <ListItem icon={faCheck}  text="1 Item(s) Restante"/> 
              </div>
            </div>
      </CustomCard>
  )
}

export default List