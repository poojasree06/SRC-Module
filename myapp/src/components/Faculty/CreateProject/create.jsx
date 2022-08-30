import React, { useState, useEffect } from 'react'
import Sidebar from "../../Navbar/components/Sidebar";
import Nav from "../../Navbar/components/Nav";
import { Grid } from '@mui/material';
//import Button from '@mui/material';


export default function Create() {
    const [agencyCode, setagencyCode] = useState("0");
    const [agencyName, setagencyName] = useState("default");
    const [projectName, setProjectName] = useState("default");
    const [projectID, setProjectID] = useState("default");
    const [projectType, setprojectType] = useState("default")
    const [organizationType, setorganizationType] = useState("default")
    const [sanctionValue, setsanctionValue] = useState(0)
    const [startDate, setStartDate] = useState("0/0/0")
    const [endDate, setEndDate] = useState("0/0/0")
    const [descriptionBox, setDescriptionBox] = useState("default text")

    function onSubmit() { console.log("Submitted") }
    //console.alert("SubmittedValues: ", projectID, " ", projectName, " ", projectType, organizationType, agencyCode, agencyName, sanctionValue, startDate, endDate, descriptionBox)

    const postData = () => {
        console.log("Posted!")
        fetch("/created", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                projectName: projectName,
                projectID: projectID,
                projectType: projectType,
                agencyCode: agencyCode,
                agencyName: agencyName,
                organizationType: organizationType,
                sanctionValue: sanctionValue,
                startDate: startDate,
                endDate: endDate,
                descriptionBox: descriptionBox
            }),
        }).then((res) => {
            console.log("Res:", res);
        })
    }

    return (
        <div className="wrapper hover_collapse">
            <Nav user="User Name"></Nav>
            <Sidebar></Sidebar>
            <form className="createProjectforms" onSubmit={onSubmit} style={{ marginLeft: '100px', marginTop: '105px', marginRight: '50px', alignItems: 'center' }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <label>
                            Project Name{'\n'}
                            <input type="text" name="projectName" placeholder="Enter your project name" onChange={(event) => { setProjectName(event.target.value) }} />
                        </label>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <label>
                            Project ID{'\n'}
                            <input type="text" name="projectID" placeholder="Enter the project ID" onChange={(event) => { setProjectID(event.target.value) }} />
                        </label>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <label>
                            Project Type{'\n'}
                            <input type="text" name="projectType" placeholder="Enter your project Type" onChange={(event) => { setprojectType(event.target.value) }} />
                        </label>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <label>
                            Agency Code{'\n'}
                            <input type="text" name="agencyCode" placeholder="Enter your Agency Code" onChange={(event) => { setagencyCode(event.target.value) }} />
                        </label>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <label>
                            Agency Name{'\n'}
                            <input type="text" name="agencyName" placeholder="Enter your Agency Name" onChange={(event) => { setagencyName(event.target.value) }} />
                        </label>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <label>
                            Organization Type{'\n'}
                            <select name="organizationType" placeholder="Enter your organization Type" onChange={(event) => { setorganizationType(event.target.value) }} />
                        </label>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <label>
                            Sanction Value{'\n'}
                            <input type="text" name="sanctionValue" placeholder="Enter your Sanction value" onChange={(event) => { setsanctionValue(event.target.value) }} />
                        </label>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <label>
                            Start Date{'\n'}
                            <input type="date" name="startDate"  onChange={(event) => { setStartDate(event.target.value) }} />
                        </label>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <label>
                            End Date{'\n'}
                            <input type="date" name="endDate"  onChange={(event) => { setEndDate(event.target.value) }} />
                        </label>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <label>
                            Description{'\n'}
                            <input type="text" name="Description" placeholder="Brief description" onChange={(event) => { setDescriptionBox(event.target.value) }} />
                        </label>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="btnCreateProject">
                            <button type="button" onClick={postData} >Create</button>
                            {/* <button type="submit" onClick={getData}>GetData</button> */}
                        </div>
                    </Grid>
                </Grid>
            </form>

        </div >
    )
}
// comment