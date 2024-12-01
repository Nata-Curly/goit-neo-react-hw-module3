import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { RiContactsBookFill } from "react-icons/ri";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import Notification from "./components/Notification/Notification";
import "./App.css";

const initialContacts = () => {
  return JSON.parse(localStorage.getItem("contacts")) ?? [];
};

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>
        Phonebook
        <RiContactsBookFill />
      </h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onSearch={setFilter} />
      {visibleContacts.length ? (
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      ) : (
        <Notification message={"No contacts"} />
      )}
    </div>
  );
}

export default App;
