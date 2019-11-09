import React from "react" 
import { TextField, MenuItem, Grid, InputAdornment } from "@material-ui/core"

const units = ["Quilo", "Litro", "Unidade"]

const CreateList = props => {
  return (
    <div className="page-container">
      <form className="form-container">
        <Grid container>
          <Grid item xs={2}>
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
          <Grid item xs={2}>
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
          <Grid item xs={2}>
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
          <Grid item xs={2}>
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
          <Grid item xs={2}>
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
        </Grid>
      </form>
    </div>
  )
}
export default CreateList