import axios from "axios";

const getPekerja = () => async (dispatch) => {
  try {
    const pekerja = await axios.get(`https://template-dummby-json.vercel.app/pekerja`);
    const result = pekerja.data;
    console.log(result);
    dispatch({ type: "GET_ALL_PEKERJA", payload: result });
  } catch (err) {
    console.log(err.message);
  }
};

export default getPekerja;
