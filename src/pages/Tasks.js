import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../NavAndFoot/Footer';
import "../styles/Home.css"
import Navbar from '../NavAndFoot/Navbar';
import { Link } from 'react-router-dom';





function Tasks() {
    const [tasks,setTasks] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState('');

    useEffect(() => {
        axios.get(`https://appmctaskmanagementsettyl.onrender.com/todos`).then((res) => {
            let data = res.data;
            console.log(data)
            setTasks(data);
        })
    },[]);

    const filteredTasks = selectedStatus
    ? tasks.filter((task) => task.status === selectedStatus)
    : tasks;
    
function TodoCard({ data, index }) {
  const { _id, title,dueDate, description, status, user } = data;
  const id = index+1;

  const handleDeleteClick = () => {
    handleDelete(_id);
  };

  return (
      <tr key={_id}>
          <th>{id}</th>
          <td>{title}</td>
          <td>{description}</td>
          <td>{status}</td>
          <td>{dueDate}</td>
          <td>{user}</td>
          <td><Link to={`/edit/${_id}`}><buton type="button" className="btn btn-primary" >Edit</buton></Link></td>
          <td><buton type="button" className="btn btn-danger" name={_id} onClick={handleDeleteClick}>Delete</buton></td>
      </tr>
  );
}

    const handleDelete = (taskId) => {
      axios.delete(`/${taskId}`)
          .then(() => {
              // Refresh the task list after successful deletion
              // You can either re-fetch the data from the server or filter the deleted task out of the current state.
              // For simplicity, let's assume you re-fetch the data.
              axios.get(`https://appmctaskmanagementsettyl.onrender.com/todos`)
                  .then((res) => setTasks(res.data))
                  .catch((error) => console.error(error));
          })
          .catch((error) => console.error(error));
  };

  return (
    <div>
        <Navbar />
        <div className='col-2'></div>
          <div className="col-8 table-responsive showData">
          <div>
                    <label>
                        Filter by Status:
                        <select
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </label>
                </div>
            <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                    <th scope='col'>Due-Date</th>
                    <th scope="col">User</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider" id="tableBody" >
                  {/* <!-- all the data will be append through js by using local Storage --> */}
                  {filteredTasks.map((data,index) => (
                        <TodoCard data={data} index={index} />
                    ))}
                </tbody>
              </table>
          </div>
          <div className='col-2'></div>
          <Footer />
    </div>
  )
}

export default Tasks