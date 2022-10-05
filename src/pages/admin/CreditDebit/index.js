
import AdminDrawer from "../../../components/Drawer/AdminDrawer";
import Header from "../../../components/Header";
import { CreditDebitForm } from "./CreditDebitForm";

export const CreditDebitAdmin = () => {
  return (
    <div className="grid h-100 grid-cols-6">
      <div className="col-span-6">
        <Header />
      </div>
      <div className="col-span-1 bg-green-50 mt-1 h-screen">
        <AdminDrawer />
      </div>
      <div className="col-span-5 ">
        <CreditDebitForm />
      </div>
    </div>
  );
};
