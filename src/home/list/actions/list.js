export const Types = {
  Add_PRODUCT: 'Add_PRODUCT'
}

export const Creators = {
  addProduct: (product, list) => ({
    type: Types.Add_PRODUCT,
    product,
    list
  })
}