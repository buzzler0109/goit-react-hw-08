import SearchBox from "../search_box/SearchBox";
import ContactForm from "../contact_form/ContactForm";
import ContactList from "../contact_list/ContactList";

import "./App.css";

const App = () => {
  return (
    <div className="wrapper container form-body">
      <h1 className="form-title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
