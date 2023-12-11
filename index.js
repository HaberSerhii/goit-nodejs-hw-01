import * as contactsService from "./contacts.js";

const invokeAction = async ({ action, id }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      console.log(allContacts);
    case "getById":
      const getContact = await contactsService.getContactById(id);
      return console.log(getContact);
  }
};

invokeAction({ action: "list" });
invokeAction({ action: "getById", id: "wqqewqe" });
