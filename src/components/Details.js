import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
    const [det, setdet] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setdet(response.data));
  }, []);
  return <div>
    <p>{det.name}</p>
  </div>;
};
