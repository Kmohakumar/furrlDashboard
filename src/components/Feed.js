import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navbar from "./Navbar";
import Badges from "./Badges";
const accessToken = "0d76464f-bdfc-4271-a7f7-71ba8cc3136a";
// import InfoBar from "./InfoBar";
// const content1 = {
//   width: "10px",
//   paddingTop: "10px",
// };
const feed = {
  paddingTop: "100px",
};
const contentText = {
  textAlign: "left",
  color:"white"
};
const content2 = {
  width: "800px",
  marginLeft: "auto",
  marginRight: "auto",
  TextAlign: "left",
  padding: "10px",
  // display: "none",
  display: "flex",
  flexDirection: "column",
  // eslint-disable-next-line no-dupe-keys
  marginLeft: "30px",
  backgroundColor: "grey",
};

const ordersMap = {
  display: "flex",
  // gridTemplateColumns: " 200px 300px 100px 100px 200px 10px",
  padding: "10px",
  // rowgap: "20px"
  marginLeft: "auto",
  marginRight: "auto",
  // columngap:"10px",
};
const content = {
  justfyContent: "center",
  width: "300px",
  TextAlign: "center",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  // border: "1px solid rgba(0, 0, 0, 0.8)",
  // borderRight: "1px solid black",
  marginRight: "10px",
  padding: "10px",
  // eslint-disable-next-line no-dupe-keys
  textAlign: "center",
  // eslint-disable-next-line no-dupe-keys
  backgroundColor: "#D3D3D3",

  // marginTop: "100px",
  // position: "relative",
};
const orderStyle={
  marginTop: "-10px",
}
const headingStyle={
  marginTop:"-10px"
}

function Feed() {
  const [orderList, setOrderList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    (async () => {
      await axios
        .get("https://api.furrl.in/api/v1/recon/listOrderLinePushRequest", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setOrderList(res.data.orderLinePushRequestList);


        });
    })().catch((err) => console.log(err));
  }, [ ]);

  const sumOfA = orderList.reduce((acc, obj) => acc + obj.totalAmount, 0);
  console.log(sumOfA);
  const handleState = (orderID) => {
    setVisible(!visible);
    setId(orderID);
  };
  return (
    <div>
    <div style={feed}>
    <Navbar/>
    <Badges></Badges>
      <h4 style={headingStyle}>Total Revenue: &nbsp;&nbsp;{sumOfA}</h4>
      {orderList.map((orders) => (
        <div style={orderStyle}>
          <div style={ordersMap} key={orders.id}>
            <div style={content}>{new Date(orders.createdAt).toLocaleString()}</div>
            <div style={content}>{orders.orderId}</div>
            <div style={content}>{orders.orderLineId}</div>
            <div style={content}>{orders.brandName}</div>
            <div style={content}>{orders.totalAmount}</div>
            <div style={content}>{orders.name}</div>
            <button onClick={() => handleState(orders.orderLineId)}>
              <ExpandMoreIcon></ExpandMoreIcon>
            </button>
          </div>
          {visible && id === orders.orderLineId && (
            <div style={content2}>
              
              <div style={contentText}>
                <b>grossAmount&nbsp;&nbsp; </b>
                {orders.grossAmount}
              </div>
              <div style={contentText}>
                <b>email:&nbsp;&nbsp; </b>
                {orders.email}
              </div>
              <div style={contentText}>
                <b>Phone no: &nbsp;&nbsp;</b>
                {orders.phoneNo}
              </div>
              <div style={contentText}>
                <b>shopifyOrderNumber:&nbsp;&nbsp;</b>
                {orders.shopifyOrderNumber}
              </div>
              <div style={contentText}>
                <b>orderLinePushRequestId:&nbsp;&nbsp;</b>
                {orders.orderLinePushRequestId}
              </div>
              <div style={contentText}>
                <b>shopifyOrderId:&nbsp;&nbsp;</b>
                {orders.shopifyOrderId}
              </div>
              <div style={contentText}>
                <b>fulfilledStatus:&nbsp;&nbsp;</b>
                {orders.fulfilledStatus}
              </div>
              <div style={contentText}>
                <b>orderCancelledBy:&nbsp;&nbsp;</b>
                {orders.orderCancelledBy}
              </div>
              <div style={contentText}>
                <b>intransitTrackingLog:&nbsp;&nbsp;</b>
                {orders.intransitTrackingLog}
              </div>
              <div style={contentText}>
                <b>parentOrderId:&nbsp;&nbsp;</b>
                {orders.parentOrderId}
              </div>
              <div style={contentText}>
                <b>invoiceId:&nbsp;&nbsp;</b>
                {orders.invoiceId}
              </div>
              <div style={contentText}>
                <b>razorpayOrderId:&nbsp;&nbsp;</b>
                {orders.razorpayOrderId}
              </div>
              <div style={contentText}>
                <b>isCouponApplied:&nbsp;&nbsp;</b>
                {orders.isCouponApplied}
              </div>
              <div style={contentText}>
                <b>cancelRequestStatus:&nbsp;&nbsp;</b>
                {orders.cancelRequestStatus}
              </div>
              <div style={contentText}>
                <b>cancellationSource:&nbsp;&nbsp;</b>
                {orders.cancellationSource}
              </div>
              <div style={contentText}>
                <b>intransitTrackingLog:&nbsp;&nbsp;</b>
                {orders.intransitTrackingLog}
              </div>
              <div style={contentText}>
                <b>intransitTrackingLog:&nbsp;&nbsp;</b>
                {orders.intransitTrackingLog}
              </div>
              <div style={contentText}>
                <b>cancellationSource:&nbsp;&nbsp;</b>
                {orders.cancellationSource}
              </div>
              <div style={contentText}>
                <b>isApproved:&nbsp;&nbsp;</b>
                {orders.isApproved}
              </div>
            </div>
          )}
        </div>
      ))}
      
    </div>
    </div>
  );
}

export default Feed;
// { orderLinePushRequestId: "0d76464f", orderLineId: "71ba8cc3136a", orderId: "a7f7", brandName: "Flawsome", orderStatus: "skmlks", shopifyOrderId:"hello", shopifyOrderNumber:"sdfsfdf", productId: "a7f7", productVariantId: "andslaa", isCouponApplied: true, orderlinepushrequestid: "fldgM2fSqk1E6o0RK",orderlineid: "fldpVeIuMtLeZFZ7N", orderid: " fldNYscLYLuiw4Z5a", }
//   Object literal may only specify known properties, and '"orderLinePushRequestId"' does not exist in type);