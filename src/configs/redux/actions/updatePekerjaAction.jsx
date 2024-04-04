import axios from "axios";

const updatePekerja = (data, id) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("JobDesc", data.JobDesc);
    formData.append("JobType", data.JobType);
    formData.append("CompanyName", data.CompanyName);
    formData.append("Skill", data.Skill);

    const worker = await axios.put(`https://be-hiring-app-production.up.railway.app/api/v1/user/worker/update/${id}`, formData);

    console.log(worker);
    alert("update worker success");
    const result = worker.data;
    dispatch({ type: "UPDATE_WORKER", payload: result });
  } catch (err) {
    console.log(err.message);
    alert("update worker failed");
  }
};

export default updatePekerja;
