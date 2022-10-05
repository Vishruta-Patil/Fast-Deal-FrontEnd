
import UserDrawer from "../../../components/Drawer/UserDrawer";
import Header from "../../../components/Header";
import { TransferForm } from "./TransferForm";

export const UserTransfer = () => {
  
  return (
    <div className="grid h-100 grid-cols-6">
      <div className="col-span-6">
        <Header />
      </div>
      <div className="col-span-1 bg-green-50 h-screen mt-1">
        <UserDrawer />
      </div>
      <div className="col-span-5">
        <TransferForm />
      </div>
    </div>
  );
};
