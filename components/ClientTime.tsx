"use client";

const ClientTime = ({ date }: { date: Date | number | string }) => {
  return <>{new Date(date).toLocaleTimeString("en-GB")}</>;
};

export default ClientTime;
