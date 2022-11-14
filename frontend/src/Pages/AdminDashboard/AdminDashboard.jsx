import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import "./AdminDashboard.css";
import InitialFocus from "./JobUpdateModal";
import { BiBriefcase, BiRupee } from "react-icons/bi";
import axios from "axios";
// import {  TbCurrencyRupee} from "react-icons/Tb";

const AdminDashboard = () => {
  const [job, setJobs] = useState([]);
  const [users, setUsers] = useState([]);
  const {REACT_APP_MONGO_URL}=process.env
  const handleJobs = () => {
    return fetch(`${REACT_APP_MONGO_URL}/job`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUsers(null);
        setJobs(res);
      });
  };

  // // --------handle user------
  const handleUsers = (job) => {
    return fetch(`${REACT_APP_MONGO_URL}/registeredusers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setJobs(null);
        setUsers(res);
      });
  };

  // ----handle Delete--------


  const handleDelete= (id)=>{
        
    console.log(id)
    axios.delete(`${REACT_APP_MONGO_URL}/resgisteredusers/${id}`)
    .then(res=>{
       
      alert(res.data.msg)
      handleUsers()
      console.log("delete",res.data)
      console.log("delete success")
    })


  // ---------delete job------
  const handleDeletejob = (id) => {
    console.log(id);

    axios.delete(`http://localhost:8001/job/${id}`).then((res) => {
      alert(res.data.msg);
      handleJobs();
      console.log("delete", res.data);
      console.log("delete success");
    });
  };

  return (
    <>
      <div className="block">
        This page is not available for small screen size
      </div>
      <div className="admindashboard">
        <div className="adminsidebar">
          <div>
            <Button onClick={handleJobs} colorScheme={"blue"}>
              Jobs
            </Button>
            <Button onClick={handleUsers} colorScheme={"blue"}>
              users
            </Button>
          </div>
        </div>
        <div className="admindata" style={{ padding: "40px" }}>
          {job
            ? job.map((item) => (
                <div className="P_jobcard">
                  <div className="jobcard">
                    <b>
                      <h2
                        style={{
                          color: "black",
                          paddingLeft: "5px",
                        }}
                      >
                        {item.job_title}
                      </h2>
                    </b>
                    <p
                      style={{
                        color: "#404040",
                      }}
                    >
                      {item.company_name}
                    </p>
                    <div className="expsc">
                      <div>
                        <BiBriefcase />
                      </div>
                      <div>
                        <BiRupee />
                      </div>
                      <div>{item.city[0]}</div>
                    </div>
                    <div className="job_des">
                      <span title={item.job_description}>
                        {item.job_description}
                      </span>
                    </div>
                    <div>{item.job_title}</div>
                    <div>Post date: {item.post_date} . {item.category}</div>
                  </div>
                  <div className="R_jobcard">
                    <img src={item.url} alt="" />
                  </div>
                  <div className="del_up">
                    <div>
                      <Button
                        onClick={() => handleDeletejob(item._id)}
                        colorScheme={"red"}
                      >
                        Delete
                      </Button>
                    </div>
                    <div>
                      <InitialFocus />
                    </div>
                  </div>
                </div>
              ))
            : ""}

          {users
            ? users.map((user) => (
                <div className="userCard">
                  <div className="userRight">
                    <div>
                      <div>
                        <h2>Name: {user.name}</h2>
                      </div>
                      <div>
                        <h3>Email: {user.email}</h3>
                      </div>
                      <div>
                        <h3>Mobile: {user.mobile}</h3>
                      </div>
                      <div>User Id: {user._id}</div>
                    </div>
                    <div className="userImage">
                      <img
                        src="https://student.hfe.co.uk/ui/assets/images/publichome/user_avatar_1.png"
                        alt="userImage"
                      />
                    </div>
                  </div>
                  <div className="userLeft">
                    <Button
                      onClick={() => handleDeleteuser(user._id)}
                      colorScheme={"red"}
                    >
                      Delete user
                    </Button>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
