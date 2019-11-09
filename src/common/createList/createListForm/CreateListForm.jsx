import React from "react"
import { TextField, MenuItem, Grid, InputAdornment, Button } from "@material-ui/core"
import { Link } from 'react-router-dom'

const units = ["Quilo", "Litro", "Unidade"]
const CreateListForm = props => {
  return (
    <React.Fragment>
      <form className="form-container">
        <Grid container>
          <Grid item xs={12}>
            <TextField 
              required
              label="Lista"
              name="list"
              className=""
              value={''}
              onChange={() => {} }
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              required
              label="Produto"
              name="product"
              className=""
              value={''}
              onChange={() => {} }
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              required
              label="Quantidade"
              name="quantity"
              className=""
              value={''}
              onChange={() => {} }
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select 
              required
              label="Unidade"
              name="unity"
              className=""
              value={''}
              onChange={() => {} }
              variant="outlined"
            >
            {units.map(options => (
              <MenuItem key={options} value={options}>{options}</MenuItem>
            ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField 
              required
              label="Preço"
              name="price"
              className=""
              value={''}
              onChange={() => {} }
              variant="outlined"
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
            />
          </Grid>
          <Grid container style={{display: "flex", justifyContent: "space-between"}}>
            <Grid item xs={5}>
              <Button variant="outlined" color="secondary">ADICIONAR</Button>
            </Grid>
            <Grid item xs={5}>
              <Link to="/Item-List">
                <Button variant="outlined" color="primary">
                  Ver Lista
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  )
}

export default CreateListForm