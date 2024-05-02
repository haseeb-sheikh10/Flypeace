import { FC } from "react";
import { Outlet } from "react-router-dom";

interface AdminEntryProps {}

const AdminEntry: FC<AdminEntryProps> = () => {
  return (
    <>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default AdminEntry;
