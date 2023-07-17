import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as d3 from 'd3';
import { Link } from 'react-router-dom';
import Tasks from './Tasks';
import Navbar from '../NavAndFoot/Navbar';
import Footer from '../NavAndFoot/Footer';

const Admin = () => {
  const [tasks, setTasks] = useState([]);
  //const [tasks,setTasks] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('');

  useEffect(() => {
      axios.get(`https://appmctaskmanagementsettyl.onrender.com/todos`).then((res) => {
          let data = res.data;
          console.log(data)
          setTasks(data);
      })
  },[]);

  const handleChangeFilter = (e) => {
    setSelectedStatus(e.target.value);
  };

  const filteredTasks = selectedStatus
  ? tasks.filter((task) => task.status === selectedStatus)
  : tasks;
  
function TodoCard({ data, index }) {
const { _id, title, dueDate, description, status, user } = data;
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
        <td><Link to={`/admin/${_id}`}><buton type="button" className="btn btn-primary" >Edit</buton></Link></td>
        <td><buton type="button" className="btn btn-danger" name={_id} onClick={handleDeleteClick}>Delete</buton></td>
    </tr>
);
}

  const handleDelete = (taskId) => {
    axios.delete(`https://appmctaskmanagementsettyl.onrender.com/todos/${taskId}`)
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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`https://appmctaskmanagementsettyl.onrender.com/todos`)
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    if (tasks.length > 0) {
      renderBarChart();
    }
  }, [tasks,selectedStatus, filteredTasks]);

  const renderBarChart = () => {

    const dataByStatus = d3.rollups(
      filteredTasks,
      v => v.length,
      d => d.status
    );

    const width = 600;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 50, left: 50 };

    const svg = d3.select('#bar-chart')
      .attr('width', width)
      .attr('height', height);

    const xScale = d3.scaleBand()
      .domain(dataByStatus.map(d => d[0]))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataByStatus, d => d[1])])
      .range([height - margin.bottom, margin.top]);

    svg.selectAll('rect')
      .data(dataByStatus)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d[0]))
      .attr('y', d => yScale(d[1]))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - margin.bottom - yScale(d[1]))
      .attr('fill', 'steelblue');

    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));

    svg.append('text')
      .attr('x', width / 2)
      .attr('y', height - 10)
      .attr('text-anchor', 'middle')
      .text('Status');

    svg.append('text')
      .attr('x', -height / 2)
      .attr('y', 10)
      .attr('text-anchor', 'middle')
      .attr('transform', 'rotate(-90)')
      .text('Number of Tasks');
  };

  return (
    <div>
      <Navbar />
      <svg id="bar-chart"></svg>
          <div className="col-8 table-responsive showData">
          <div>
                    <label>
                        Filter by Status:
                        <select
                            value={selectedStatus}
                            onChange={handleChangeFilter}
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
                  {filteredTasks.map((data,index) => (
                        <TodoCard data={data} index={index} />
                    ))}
                </tbody>
              </table>
          </div>
          <Footer />
    </div>
  );
};

export default Admin;