import React from "react"
import { TextField, MenuItem, Grid, InputAdornment, Button } from "@material-ui/core"
import { Link } from 'react-router-dom'

const units = ["Quilo", "Litro", "Unidade"]


class CreateListForm extends React.Component {
  state = {
    list : "",
    product: "",
    quantity: "",
    unit: "",
    price: "",
    showErrors: false
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = () => {
   const { list, product, quantity, unit, price } = this.state
   if(!list || !product || !quantity || !unit ) {
     this.setState({
       showErrors: true
     })
   } else {
     this.props.addProduct(
       { product, quantity, unit, price }, list
     )
     this.setState({
      list : "",
      product: "",
      quantity: "",
      unit: "",
      price: "",
      showErrors: false
     })
   }
  }


  render() {
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
                value={this.state.list}
                onChange={this.handleChange}
                variant="outlined"
                error={!this.state.list && this.state.showErrors}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                required
                label="Produto"
                name="product"
                className=""
                value={this.state.product}
                onChange={this.handleChange}
                variant="outlined"
                error={!this.state.product && this.state.showErrors}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                type="number"
                required
                label="Quantidade"
                name="quantity"
                className=""
                value={this.state.quantity}
                onChange={this.handleChange}
                variant="outlined"
                error={!this.state.quantity && this.state.showErrors}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select 
                required
                label="Unidade"
                name="unit"
                className=""
                value={this.state.unit}
                onChange={this.handleChange}
                variant="outlined"
                error={!this.state.unit && this.state.showErrors}
              >
              {units.map(options => (
                <MenuItem key={options} value={options}>{options}</MenuItem>
              ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label="Preço"
                name="price"
                className=""
                value={this.state.price}
                onChange={this.handleChange}
                variant="outlined"
                InputProps={{
                  startAdornment: <InputAdornment position="start">R$</InputAdornment>
                }}
              />
            </Grid>
            <Grid container style={{display: "flex", justifyContent: "space-between"}}>
              <Grid item xs={1}>
                <Button variant="outlined" color="secondary" onClick={this.handleSubmit}>ADICIONAR</Button>
              </Grid>
              <Grid item xs={1}>
                <Link to="/Item-Lista">
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
}

export default CreateListForm