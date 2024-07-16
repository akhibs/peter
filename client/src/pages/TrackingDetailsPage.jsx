import React from "react";
import { useLocation } from "react-router-dom";

export default function TrackingDetailsPage(props) {
  const { state } = useLocation();
  console.log(state);
  return <div>TrackingDetailsPage</div>;
}
