import { FC } from "react";
import { Outlet } from "react-router-dom";
import NavabrClient from "./components/navbar/NavbarClient";

interface ClientEntryProps {}

const ClientEntry: FC<ClientEntryProps> = () => {
  return (
    <>
      <NavabrClient />
      <Outlet />
    </>
  );
};

export default ClientEntry;
