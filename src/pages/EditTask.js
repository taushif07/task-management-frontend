import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../NavAndFoot/Navbar';
import Footer from '../NavAndFoot/Footer';

const EditTask = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    // Fetch existing task details for editing
    axios.get(`https://appmctaskmanagementsettyl.onrender.com/todos/${id}`)
      .then((response) => {
        const taskData = response.data;
        setTitle(taskData.title);
        setDescription(taskData.description);
        setDueDate(taskData.dueDate);
        setStatus(taskData.status);
        setUser(taskData.user);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare the updated task data
    const updatedTask = {
      title,
      description,
      dueDate,
      status,
      user,
    };

    // Send the updated data to the server using Axios PATCH request
    axios.patch(`https://appmctaskmanagementsettyl.onrender.com/todos/${id}`, updatedTask)
      .then(() => {
        // Redirect back to the tasks list after successful update
        navigate('/tasks');
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };


  return (
    <div>
        {/* Form fields for editing task details */}
        {/* ... (similar to SubmitForm but with initial values from state) */}
        <Navbar />
        <div className="container formContainer mt-20">
     <div className="row d-flex justify-content-center">
       <div className="col-8 border formDiv">
          <h1 className="text-center  text-success text-decoration-underline">Create a Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="1"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="dueDate" className="form-label">Due Date</label>
          <input
            type="date"
            className="form-control"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select
            className="form-select"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="user" className="form-label">User</label>
          <select
            className="form-select"
            id="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          >
            <option value="">Select User</option>
            <option value="User 1">User 1</option>
            <option value="User 2">User 2</option>
            <option value="User 3">User 3</option>
          </select>
        </div>
        <div className="col-12 d-grid">
                  <button type="submit" className="btn btn-success" id="formBtn">Update Task</button>
                </div>
      </form>
    </div>
    </div>
    </div>
    <Footer />
    </div>
  );
};

export default EditTask;