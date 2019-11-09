import React from "react"
import CustomCard from "../../customCard"
import { Checkbox, Typography } from "@material-ui/core"

const CreateListItem = props => {
  return (
    <div className="page-container">
      <div className="list-items-container">
        <CustomCard 
          link="#"
          containerClass="list-item"
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