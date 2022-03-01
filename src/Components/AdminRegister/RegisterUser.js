import React, { useRef,useState,useEffect } from 'react'
import { Container , Form, Card, FloatingLabel, Button } from 'react-bootstrap';
import axios from 'axios'
const RegisterUser = () => {
const [userdata, setuserdata] = useState({});
const name = useRef();
const email = useRef();
const password = useRef();
const role = useRef();
const user = () => {
  setuserdata({
      name: name.current.value,
      password:password.current.value,
      role: role.current.value,
      email: email.current.value,
      test : true
    
    })
    // console.log(userdata);
    // setuserdata(userdata)
    senddata();

   
}

useEffect(() => {}, []);

  const senddata = async () => {
    console.log(userdata);
    try {
      console.log("write here to send data to backend");
      const response = await axios.post("http://localhost:5500/register",userdata);
      console.log(response);
      // const data = response.json();
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  };



// const senddata = async() => {
//   console.log(setdata);
//   try {
//     console.log("write here to send data to backend");
//     const response = await axios.post("http://localhost:5005/register");
//     console.log(response);
//     const data = response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };
//   const {name, email, password, role, test}= data;
//     const res = await fetch('http://localhost:5005/register',{
//         method : "POST",
//         headers : {
//             "Content-Type" : "application/json"
//         },
//         body:JSON.stringify({name, email, password, role, test})
// })
//     console.log(res);
// }

  return <Container className='card mt-5 p-5 box' >
  <Form method='"POST' >
  <h4>Registration form</h4>
  
  <Card.Body>
  
    <FloatingLabel id="input-email" controlId="floatingInput" label='Enter name'  className="mt-3 mb-4" >
      <Form.Control   type="text" placeholder="enter name" ref={name} />
    </FloatingLabel>
    <FloatingLabel  id="input-email"controlId="floatingInput" label='Enter email' className=" mb-4" >
      <Form.Control  type="email" placeholder="enter email" ref={email} />
    </FloatingLabel>

    <FloatingLabel id="input-email"controlId="floatingInput" label='Enter password' className="mb-4" >
      <Form.Control   type="password" placeholder="enter password" ref={password} />
    </FloatingLabel>

    <FloatingLabel id="input-email" controlId="floatingSelect" label=" selects role" className="mb-4">
      <Form.Select   aria-label="Floating label select example" ref={role}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </Form.Select>
    </FloatingLabel>
    <div className="d-flex justify-content-center">
      <Button  variant="outline-success" className="mt-2" onClick={() => user()} >  {" "} Register{" "} </Button>
    </div>
    
  </Card.Body>
 
</Form>


       
  </Container>
 
};

export default RegisterUser




























// import React from 'react'
// import { Container, Row, Col, Form , Button } from 'react-bootstrap'

// const RegisterUser = () => {
//   return  (
//       <><Container>
//           <Row>
//           <Col>
//           <h1>Register User</h1>
//           </Col>
//           </Row>
//        </Container>
      
      
      
//       <div>
//               <form>
//                   <div class="Register">
//                       <div class="form-row">
//                           <div class="form-group col-md-6">
//                               <label for="inputEmail4">Enter Full Name</label>
//                               <input type="email" class="form-control" id="inputEmail4" />
//                           </div>
//                           <div class="form-group col-md-6">
//                               <label for="inputPassword4">Enter Email</label>
//                               <input type="password" class="form-control" id="inputPassword4" />
//                           </div>
//                           <div class="form-group col-md-6">
//                               <label for="inputPassword4">Enter Password</label>
//                               <input type="password" class="form-control" id="inputPassword4" />
//                           </div>
//                       </div>
//                       {/* <div class="form-group">
//       <label for="inputpassword4">Enter Password</label>
//       <input type="password" class="form-control" id="inputpassword4" placeholder=""/>
//     </div> */}

//                       <div class="form-row">
//                           <div class="form-group col-md-6">
//                               <label for="inputCity"></label>
//                               <input type="text" class="form-control" id="inputCity" />
//                           </div>
//                           <div class="form-group col-md-4">
//                               <label for="inputState">Role</label>
//                               <select id="inputState" class="form-control">
//                                   <option selected>Choose...</option>
//                                   <option>Role 1</option>
//                                   <option>Role 2</option>
//                                   <option>Role 3</option>
//                               </select>
//                           </div>
//                           <div class="form-group col-md-2">
//                               {/* <label for="inputZip"></label>
//     <input type="text" class="form-control" id="inputZip"/> */}
//                           </div>
//                       </div>
//                       <div class="form-group">
//                           <div class="form-check">
//                               {/* <input class="form-check-input" type="checkbox" id="gridCheck"/>
//     <label class="form-check-label" for="gridCheck">
//       Check me out
//     </label> */}
//                           </div>
//                       </div>
//                       <button type="submit" class="btn btn-primary">Register</button>
//                   </div>
//               </form>

//           </div></>

//   )
// }


// export default RegisterUser