import { Link } from "react-router-dom";


function UserCard({e}) {
  return (
    
       
        <tr>
          <td>{e.name}</td>
          <td>{e.username}</td>
          <td>{e.email}</td>
          <td>{e.phone}</td>
          <Link to={`/${e.id}`}>
          <td><button style={{color:"green"}}>See Details</button></td>
          </Link>
        </tr>
   
  );
}

export default UserCard;