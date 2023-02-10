import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Table from 'react-bootstrap/Table';
export const UserList = () => {
  const [listOfUSer, setlistOfUSer] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setlistOfUSer(res.data))
      .catch((ero) =>(console.log(ero)));
  }, []);

  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Name</th>
        <th>username</th>
        <th>email</th>
        <th>phone</th>
      </tr>
    </thead>
    <tbody>
{listOfUSer.map((e)=><UserCard e={e}/>  )}
        
</tbody>
    </Table>
  );
};

