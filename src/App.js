import React, { useEffect, useState } from "react";
import "./Style/list.css";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState([]);
  const [singleUser, setSingleUser] = useState([]);

  const getuser = async () => {
    const res = await axios(
      "https://602e7c2c4410730017c50b9d.mockapi.io/users"
    );
    if(res.statusText === "OK"){

      setUser(res.data);
    }
    else{
      alert("Server Error Can not get data")
    }
 
  };

  const handleSingleUser = async (id) => {
    console.log(id);
    const res = await axios(
      `https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`
    );
    // console.log(res.data);
    setSingleUser(res.data);
  };

  useEffect(() => {
    getuser();
  }, []);

  return (
    <>
 <div>
      <div className="container">
        <div className="row pt-4 pb-4" style={{marginLeft:"0px",marginRight:"0px"}}>
          <div className="col-md-6 mt-3 mb-3">
            <div>
              <button
                type="button"
                className="btn btn-lg btn-block d-flex mb-3 d-flex justify-content-center"
                id="userList"
              >
                USER LIST
              </button>

              <div id="box">
                {user.slice(10, 100).map((userData, index) => (
                  <button
                    type="button"
                    className="btn btn-block d-flex"
                    id="button"
                    onClick={() => handleSingleUser(userData.id)}
                    key={`${userData.id}-${index}`}
                  >
                    <img src={userData.avatar} alt="" id="img" />
                    <p className="textSize">
                      {userData.profile.firstName}{" "}
                      <span>{userData.profile.lastName}</span>
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
         
          <div className="col-md-6 mt-3 mb-3 ">

            <div>
              <button
                type="button"
                className="btn btn-lg btn-block d-flex mb-3 d-flex justify-content-center"
                id="userList"
              >
                USER DETAILS
              </button>
              {
                Object.keys(singleUser).length > 0 ? (
              <div>
                <div className="text-center">
                  {singleUser && singleUser.avatar ? (
                    <p>
                      <img
                        src={singleUser.avatar}
                        alt="userImg"
                        id="singleImg"
                      />
                    </p>
                  ) : (
                    <p className="rightText p-1">Loading...</p> 
                  )}
                </div>
                <div className="bodyInput">
                  <p className="text-center mt-2 text-light">
                    @Paxton68
                  </p>
                  <div
                    style={{
                      backgroundColor: "#DBDBDB",
                      border: "1px solid #6C6C6C",
                      borderRadius: "4px",
                    }}
                    className="mt-4"
                  >
                    {singleUser && singleUser.Bio ? (
                      <p className="rightTextBio p-1">
                        <p className="rightTextBio">{singleUser.Bio}</p>
                      </p>
                    ) : (
                      <p className="rightText p-1">Loading...</p>
                    )}
                  </div>
                  <label className="mt-4" style={{fontSize:"10px",marginBottom:"0rem",color:"white"}}>Full Name</label>
                  <div
                    style={{
                      backgroundColor: "#DBDBDB",
                      border: "1px solid #6C6C6C",
                      borderRadius: "4px",
                    }}
                  >
                    {singleUser && singleUser.profile ? (
                      <p className="rightText p-1">
                        {singleUser.profile.firstName}{" "}
                        <span className="rightText p-1">{singleUser.profile.lastName}</span>
                      </p>
                    ) : (
                      <p className="rightText p-1">Loading...</p> // or any other loading indicator
                    )}
                  </div>

                  <label style={{fontSize:"10px",marginBottom:"0rem",color:"white"}}>Job Title</label>
                  <div
                    style={{
                      backgroundColor: "#DBDBDB",
                      border: "1px solid #6C6C6C",
                      borderRadius: "4px",
                    }}
                  >
                    {singleUser && singleUser.jobTitle ? (
                      <p className="rightText p-1">
                        <p className="rightText p-1">{singleUser.jobTitle} </p>
                      </p>
                    ) : (
                      <p className="rightText p-1">Loading...</p> // or any other loading indicator
                    )}
                  </div>

                  <label style={{fontSize:"10px",marginBottom:"0rem",color:"white"}}>Email</label>
                  <div
                    style={{
                      backgroundColor: "#DBDBDB",
                      border: "1px solid #6C6C6C",
                      borderRadius: "4px",
                    }}
                  >
                    {singleUser && singleUser.profile ? (
                      <p className="rightText p-1">
                        <p className="rightText p-1">{singleUser.profile.email} </p>
                      </p>
                    ) : (
                      <p className="rightText p-1"  >Loading...</p> // or any other loading indicator
                    )}
                  </div>
                </div>
              </div>
                ): (
                  <h3 className="text-center mt-5" style={{color:"#07042c",fontWeight:900,fontFamily:"Montserrat"}}>Select User To get USER DETAILS !!</h3>
                )
                
                
              }
            </div>
          </div>
        </div>
      </div>
  </div>   
    </>
  );
};

export default App;
