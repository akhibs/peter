import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("update-package");
        }}
        style={{ margin: "10vw" }}
      >
        Update Package Location
      </button>
      <button
        onClick={() => {
          navigate("add-new-package");
        }}
        style={{ margin: "10vw" }}
      >
        Add new Package
      </button>
    </div>
  );
}
