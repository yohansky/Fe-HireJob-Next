import getPekerja from "@/configs/redux/actions/pekerjaAction";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Test = () => {
  // const [post, setPost] = useState([]);
  const dispatch = useDispatch();
  const { pekerja } = useSelector((state) => state.pekerja);
  console.log(pekerja);

  useEffect(() => {
    dispatch(getPekerja());
  }, []);
  return <div>{JSON.stringify(pekerja)}</div>;
};

export default Test;
