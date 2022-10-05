
import AdminDrawer from "../../../components/Drawer/AdminDrawer";
import UserDrawer from "../../../components/Drawer/UserDrawer";
import Header from "../../../components/Header";
import { MainContent } from "./MainContent";

export const AdminPage = () => {
  return (
    <div className="grid h-100 grid-cols-6">
      <div className="col-span-6">
        <Header />
      </div>
      <div className="col-span-1 bg-green-50 mt-1 h-screen">
        <AdminDrawer />
      </div>
      <div className="col-span-5 ">
        <MainContent />
      </div>
    </div>
  );
};
