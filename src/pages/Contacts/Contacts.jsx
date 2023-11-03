import AddContactForm from "../../components/Form/AddContactForm";
import ContactsTable from "../../components/Table/ContactsTable";
import Overview from "../Overview/Overview";

const Contacts = () => {
  return (
    <div>
      <div>
        <Overview />
        <h1 className="py-5 px-5 text-xl font-bold">New Contacts</h1>
        <AddContactForm />
        <div className="overflow-x-scroll pt-8">
          <ContactsTable />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
