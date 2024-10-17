import axios from "axios";

export const getEmployeesService = async () => {
  try {
    const response = await axios.get("http://localhost:3000/employee");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const CreateEmployeeService = async (employee: any) => {
  const response = await axios.post("http://localhost:3000/employee", employee);
  return response.data;
};

export const getEmployeeByIdService = async (id: string) => {
  const response = await axios.get(`http://localhost:3000/employee/${id}`);
  return response.data;
};
