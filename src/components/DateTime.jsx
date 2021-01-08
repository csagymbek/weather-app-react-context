import React from "react";

export const DateTime = () => {
  const date = new Date();
  return (
    <div className="date-time">{`${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`}</div>
  );
};
