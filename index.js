import * as contactsService from "./contacts.js";
import { Command } from "commander";
const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

const argv = program.opts();

program.parse(process.argv);

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      console.table(allContacts);
    case "get":
      const getContact = await contactsService.getContactById(id);
      return console.log(getContact);
    case "add":
      const newContact = await contactsService.addContact(name, email, phone);
      return console.log(newContact);
    case "del":
      const deleteContact = await contactsService.removeContact(id);
      return console.log(deleteContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
