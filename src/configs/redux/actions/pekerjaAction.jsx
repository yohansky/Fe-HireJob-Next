import axios from "axios";

const getWorker = () => async (dispatch) => {
  try {
    // const pekerja = await axios.get(`https://template-dummby-json.vercel.app/pekerja`);
    const worker = await axios.get(`https://be-hiring-app-production.up.railway.app/api/v1/user/worker/data`);
    const result = worker.data.data;
    console.log(result);
    dispatch({ type: "GET_ALL_WORKER", payload: result });
  } catch (err) {
    console.log(err.message);
  }
};

export default getWorker;
