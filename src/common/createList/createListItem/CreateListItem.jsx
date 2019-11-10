import React from "react"
import CustomCard from "../../customCard"
import { Checkbox, Typography, Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import "./CreateListItem.css"
import ListCardFooter from "./listCardFooter/ListCardFooter"

const CreateListItem = props => {
  return (
    <div className="page-container">
      <Link to="/Criar-Lista">
        <Button variant="outlined" color="primary">Voltar</Button>
      </Link>
      <div className="list-items-container">
        <CustomCard 
          link="#"
          containerClass="list-item"
          footer={<ListCardFooter />}
        >
          <div>
            <div className="list-item-header">
              <Typography variant="subtitle1" component="h2">Café</Typography>
              <Checkbox />
            </div>
            <Typography component="p">1 unidade</Typography>
            <Typography component="p">R$ 10.00</Typography>
          </div>
        </CustomCard>
      </div>
    </div>
  )
}

export default CreateListItem