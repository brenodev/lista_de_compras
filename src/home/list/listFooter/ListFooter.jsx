import React from "react"

const ListFooter = props => {
  return (
    <div className="list-footer">
      <p>08/10/2019</p>
      <p>{props.total}</p>
    </div>
  )
}

export default ListFooter