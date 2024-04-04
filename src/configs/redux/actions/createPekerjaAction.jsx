import axios from "axios";
const createWorker = (data) => async (dispatch) => {
  try {
    // ============ API Dummy ==============
    // const worker = await axios.post(`https://be-hiring-app-production.up.railway.app/api/v1/user/worker/create`, {
    //   JobDesc: data.JobDesc,
    //   JobType: data.JobType,
    //   CompanyName: data.CompanyName,
    //   Skill: data.Skill,
    //   UserId: Number(data.UserId),
    //   //   User: data.User,
    // });
    // alert("Create Worker successful");

    // ========API William==========
    const formData = new FormData();
    formData.append("JobDesc", data.JobDesc);
    formData.append("JobType", data.JobType);
    formData.append("CompanyName", data.CompanyName);
    formData.append("Skill", data.Skill);
    formData.append("UserId", data.UserId);
    const worker = await axios.post(`https://be-hiring-app-production.up.railway.app/api/v1/user/worker/create`, formData);

    console.log(worker);
    alert("Create worker success");
    const result = worker.data;
    dispatch({ type: "CREATE_WORKER", payload: result });
  } catch (err) {
    console.error(err.message);
    alert("crate Worker failed");
  }
};

export default createWorker;
