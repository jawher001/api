

function UserCard({e}) {
  return (
    
       
        <tr>
          <td>{e.name}</td>
          <td>{e.username}</td>
          <td>{e.email}</td>
          <td>{e.phone}</td>
          {/* <td><button style={{color:"green"}}>See Details</button></td> */}
        </tr>
   
  );
}

export default UserCard;