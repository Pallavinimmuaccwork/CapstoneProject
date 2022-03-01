import React, { useState,useEffect } from 'react'



const AdminHomePage = () => {

  const [sampledata, setsampledata] = useState({});

useEffect(() => {
  data()
}, []);

  const data = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')


    // , {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(data)
    // })


    // console.log(res);
    const sample = await res.json()
    console.log(sample);
    setsampledata(sample)
  }


  return (
    <div><h2>AdminHomePage</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Serial no</th>
            <th scope="col">Sample Date</th>
            <th scope="col">Patient Home</th>
            <th scope="col">Sample</th>
            <th scope="col">Haemnology</th>
            <th scope="col">Thyroid Profile</th>
            <th scope="col">Glucometry</th>
          </tr>
        </thead>
        <tbody>

          
  {/* {sampledata && sampledata.map((env,inx)=>{
    console.log(env)
    return env
  })} */}

        </tbody>
      </table>
    </div>
  )
}

export default AdminHomePage
