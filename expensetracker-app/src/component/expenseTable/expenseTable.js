import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'




function ExpenseTable() {
    const [expense, setExpense] = useState([]);
    const url = "http://localhost:3000/expense";

    useEffect(() => {
        (() => {
            fetch(url)
                .then(res => res.json())
                .then(
                    data => setExpense(data),
                    error => console.log(error.message)
                );
        })();
    }, []);

    const addExpense = expense => {
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(expense),
        })
            .then(res => res.json())
            .then(
                data => setExpense(prevState => [...prevState, data]),
                error => console.log(error.message)
            );
    };

    const styles = {
        tableHeading: {
            backgroundColor: "black",
            color: "white",
        },
        date: {
            backgroundColor: "darkgoldenrod",
            color: "black",
        },
        productPurchased: {
            backgroundColor: "aqua",
            color: "black",
        },
        price: {
            backgroundColor: "blueviolet",
            color: "black",
        },
        payee: {
            backgroundColor: "cyan",
            color: "black",
        },
        pay: {
            backgroundColor: "red",
            color: "black",
        },
        get: {
            backgroundColor: "#90EE90",
            color: "black",
        },
        total: {
            backgroundColor: "green",
            color: "black",
        },
        p1: {
            backgroundColor: "cyan",
            color: "black",
        },
        p2: {
            backgroundColor: "cyan",
            color: "black",
        }


    }

    const getTotalExpense = () => {
        let sum = 0;

        expense.forEach(element => {
            sum += element.price;
        });
        // console.log(sum);
        return sum;
    }

    const getPerson1total = () => {
        let sum = 0;

        expense.forEach(element => {
            if(element.payee==="Rahul"){
                sum += element.price;
            }
            
        });
        // console.log(sum);
        return sum;
    }

    const getPerson2total = () => {
        let sum = 0;

        expense.forEach(element => {
            if(element.payee==="Ravi"){
                sum += element.price;
            }
            
        });
        // console.log(sum);
        return sum;
    }

    const displaySummary = ()=>{
        const p1=getPerson1total();
        const p2 =getPerson2total();

        if(p1>p2){
            return(<tr style={styles.pay}>
                <td>You Pay Rahul</td>
                <td>{p1-p2}</td>
            </tr>)
        }else{
            return(
                <tr style={styles.get}>
                                    <td>You Get from Rahul</td>
                                    <td>{p2-p1}</td>
                                </tr>
            )
        }
    }

    return (
        <>
            <Container className="mt-4">
                <Row>
                    <Col md={9}>
                        <Table bordered hover>

                            <thead style={styles.tableHeading} className="tableHeading">
                                <tr>
                                    <th>Date</th>
                                    <th>Product Purchased</th>
                                    <th>Price </th>
                                    <th>Payee </th>
                                </tr>
                            </thead>
                            <tbody>
                                {expense.map((expenses, index) => {

                                    return (
                                        <tr key={expenses.id}>
                                            <td style={styles.date} className="date">{expenses.date}</td>
                                            <td className="product-purchased" style={styles.productPurchased}>{expenses.product}</td>
                                            <td className="price" style={styles.price}>{expenses.price}</td>
                                            <td className="payee" style={styles.payee}>{expenses.payee}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>

                        </Table>

                    </Col>
                    <Col>
                        <Link to="/add" state={{ expenses: expense, url: url }}><Button style={{ backgroundColor: "#90EE90", color: "black" }}>Add</Button>{' '}</Link>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <Table bordered>
                            <tbody>
                                <tr>
                                    <td style={styles.productPurchased}>Total :</td>

                                    <td style={styles.total}>{getTotalExpense()}</td>
                                </tr>
                                <tr>
                                    <td style={styles.productPurchased}>Rahul Paid :</td>
                                    <td style={styles.p1}>{getPerson1total()}</td>
                                </tr>
                                <tr>
                                    <td style={styles.productPurchased}>Ravi Paid:</td>
                                    <td style={styles.p2}>{getPerson2total()}</td>
                                </tr>
                                {displaySummary()}
                                {/* <tr style={styles.pay}>
                                    <td>You Pay</td>
                                    <td>1678</td>
                                </tr> */}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ExpenseTable;