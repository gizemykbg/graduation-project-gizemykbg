import React, { useState } from "react";

import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";

export const RejectButton = (row) => {
  const [rejectButton, setRejectButton] = useState({ value: "Pending" });
  const handleClick = async () => {
    const rejected = {
      value: rejectButton.value === "pending" ? "rejected" : "pending",
    };
    setRejectButton(rejected);
  };
  return (
    <Button
      key={row.id}
      id={row.id}
      onClick={handleClick}
      value={rejectButton.value}
    >
      {rejectButton.value}
    </Button>
  );
};
export const ResolveButton = (row) => {
  const [resolveButton, setResolveButton] = useState({ value: "Pending" });
  const handleClick = async () => {
    const resolved = {
      value: resolveButton.value === "pending" ? "resolved" : "pending",
    };
    setResolveButton(resolved);
  };
  return (
    <Button
      key={row.id}
      id={row.id}
      onClick={handleClick}
      value={resolveButton.value}
    >
      {resolveButton.value}
    </Button>
  );
};
