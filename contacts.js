import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("db", "contacts.json");

export const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};
export const getContactById = async (id) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === id);
  return result || null;
};
// export const removeContact = async (contactId) => {};
// export const addContact = async (name, email, phone) => {};
