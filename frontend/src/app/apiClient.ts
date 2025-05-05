import { Table, User } from "../interfaces/interfaces";

const API_URL = 'http://localhost:3000/api';

export const fetchTableData = async (): Promise<Table> => {
  const response = await fetch(`${API_URL}/tableData`);
  return response.json();
};

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
};