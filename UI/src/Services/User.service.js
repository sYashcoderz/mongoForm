import Axios from 'axios'
const API_BASE = "http://localhost:8080";

// export const GetData = () => {
//     fetch(API_BASE + "/user")
//         .then(res => res.json())
//         // .then(data => setTodo(data))
//         .catch(err => console.error("Error : ",err));
// }
export const GetData = () => {
    console.log("runn");
    Axios
        .get(API_BASE + `/user`)
        .then(response => {
          return response.data
        })
        .catch(error => {
          console.error('Failed to fetch states', error);
        });
}

export const AddUser = async (data) => {
  try {
      console.log("hurrr",data);
      const response = await Axios.post(API_BASE + '/adduser', data)
      if (response) {
        console.log(response)
          return response.data
      } else {
          return null
      }
  } catch (error) {
      return { error }
  }
}