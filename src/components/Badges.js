import React from 'react'

const navbar={
    display:"flex",
    justifyContent: "space-between",
    backgroundColor: '#6C58CE',
    height: "40px",
    position: "fixed",
    // position:"absolute",
    marginBottom: "-30px",
    marginTop: "-50px",
    width: "100%"
}
const contents={
    textAlign: "center",
    width: "270px",
    marginRight: "70px" ,
    color:"white",
    padding: "5px",
    // eslint-disable-next-line no-dupe-keys
    marginRight:"10px"
    
}

function Badges() {
  return (
    <div style={navbar}>
    <div style={contents}>created at</div>
    <div style={contents}>Order Id</div>
    <div style={contents}>order Line Id</div>
    <div style={contents}>brand name</div>
    <div style={contents}>Price</div>
    <div style={contents}>name</div>
    </div>
  )
}

export default Badges