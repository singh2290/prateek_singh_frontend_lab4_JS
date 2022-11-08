import { render } from "@testing-library/react";
import React from "react";
import ExpenseTable from "./expenseTable/expenseTable";



export default function ExpenseTracker(){
        const headingstyle={
            color: "#90EE90",
            backgroundColor: "black"
        };

    return(
        <>
        <h3 className="heading" style={headingstyle}>Expense Tracker</h3>
        <ExpenseTable/>
        </>
    )
}