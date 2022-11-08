import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation } from 'react-router-dom';
import {useNavigate} from "react-router-dom";



export default function AddExpense(props) {
    const navigate = useNavigate();
    const location = useLocation()
    const { url } = location.state
    const {expenses } = location.state
    const [expense, setExpense] = useState(...expenses);
    const [payee, setPayee] = useState();
    const [product, setProduct] = useState();
    const [price, setPrice ]= useState();
    const [date, setDate] = useState();

    // const url="http://localhost:3000/expense";
    const addExpense = (event) => {
        event.preventDefault();
        const newdata ={date, price, payee, product}
        console.log(newdata);
        fetch(url, {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(newdata),
        })
          .then(res => res.json())
          .then(
            data => setExpense(prevState => [...prevState, data]),
            error => console.log(error.message)
          );

          navigate("/")


      };
      const handleClose=()=> {
          navigate("/")
      }

    return (

        
        <Container style={{ textAlign: "left", marginTop: "40px",}}>
            <Row style={{display:"flex",justifyContent:"center" }}>
                <Col xs={6}>
                    <div style={{backgroundColor:"#e3eaa7",borderRadius:"5px",marginBottom:"8px"}}>
                        <h3 style={{textAlign:"center",paddingTop:"10px"}}>Add New Item</h3>
                        <p style={{color:"red",paddingLeft:"8px",margin:"auto"}}>Read the below instructions before proceeding:</p>
                        <p style={{padding:"0 8px 8px"}}>Make sure you fill all the fields where * is provided </p>
                    </div>
                    <Form className="mt-10 mb-3" onSubmit={addExpense}>
                        <div style={{border:"solid #87bdd8", borderRadius:"6px",marginBottom:"5px"}}>
                        <Form.Group className="mb-3 mt-2">
                        <Form.Label style={{paddingLeft:"5px",marginLeft:"5px"}}>Name <span style={{color:"red"}}>*</span></Form.Label>
                        <Form.Select aria-label="Name" name="payee" onChange={(e)=>{setPayee(e.target.value)}} style={{width:"50%",margin:" 0 5px 8px "}}>
                            <option>Choose</option>
                            <option value="Rahul">Rahul</option>
                            <option value="Ravi">Ravi</option>
                            
                        </Form.Select>
                        </Form.Group>
                        </div>
                       <div style={{border:"solid #87bdd8", borderRadius:"6px",marginBottom:"5px"}}>
                        <Form.Group className="mb-3 mt-2">
                            <Form.Label style={{paddingLeft:"5px",marginLeft:"5px"}}>Product Purchased<span style={{color:"red"}}>*</span></Form.Label>
                            <Form.Control style={{outline:"0",borderWidth:"0 0 1px",borderRadius:"0px",width:"50%",margin:" 0 5px 8px "}} type="text" placeholder="Enter Product Purchased"  name="product" onChange={(e)=>{setProduct(e.target.value)}}/>
                        </Form.Group>
                        </div>
                        <div style={{border:"solid #87bdd8", borderRadius:"6px",marginBottom:"5px"}}>
                        <Form.Group className="mb-3 mt-2">
                            <Form.Label style={{paddingLeft:"5px",marginLeft:"5px"}}>Price<span style={{color:"red"}}>*</span></Form.Label>
                            <Form.Control style={{outline:"0",borderWidth:"0 0 1px",borderRadius:"0px",width:"50%",margin:" 0 5px 8px "}} type="text" placeholder="price" name="price" onChange={(e)=>{setPrice(parseInt(e.target.value))}} />
                        </Form.Group>
                        </div>
                        <div style={{border:"solid #87bdd8", borderRadius:"6px",marginBottom:"5px"}}>
                        <Form.Group className="mb-3 mt-2">
                            <Form.Label style={{paddingLeft:"5px",marginLeft:"5px"}}>Date<span style={{color:"red"}}>*</span></Form.Label>
                            <Form.Control style={{outline:"0",borderWidth:"0 0 1px",borderRadius:"0px",width:"50%",margin:" 0 5px 8px "}} type="date" placeholder="Date"  name="date" onChange={(e)=>{setDate(e.target.value)}}/>
                        </Form.Group>
                        </div>
                        <div style={{display:"flex",justifyContent:"right",marginTop:"10px"}}>
                        <Button disabled={payee && product && price && date ? false : true} class="btn btn-secondary btn-md" type="submit" style={{backgroundColor:"#e3eaa7",color:"black"}}> 
                            Submit
                        </Button>
                        <Button class="btn btn-secondary btn-md" style={{backgroundColor:"#e3eaa7",color:"black",marginLeft:"20px"}} onClick={handleClose}> 
                            Close
                        </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
}