import axios from "axios";

const deleteWorker = (id) => async (dispatch) => {
  try {
    const worker = await axios.delete(`https://be-hiring-app-production.up.railway.app/api/v1/user/worker/delete/${id}`);
    console.log(worker);
    alert("delete success");
    // const result = worker.data;
    //payload dari result ganti ke id
    dispatch({ type: "DELETE_WORKER", payload: id });
  } catch (err) {
    console.log(err.message);
    alert("delete failed");
  }
};

export default deleteWorker;
