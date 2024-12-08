
import { API_URL } from "./utils";


export const CreateTask = async(taskobj) => {
  const url = `${API_URL}/tasks`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskobj),
  };
  try {
    const result = await fetch(url, options);
    const data = await result.json();
    return data;
  } catch (err) {
    return err;
  }
};


export const GetAllTasks = async( ) => {
    const url = `${API_URL}/tasks`;
    console.log('url ',url);
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },

    };
    try {
      const result = await fetch(url, options);
      const data = await result.json();
      console.log('datas ', data)
      return data;
    } catch (err) {
      return err;
    }
  };
  

