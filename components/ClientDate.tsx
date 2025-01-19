"use client";

const ClientDate = ({ date }: { date: Date | number | string }) => {
  return <>{new Date(date).toLocaleDateString("en-GB")}</>;
};

export default ClientDate;
