import { generateAgencyCode } from './Modules/backendModules.js'
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import lodash from 'lodash';
import cors from 'cors';

const _ = { lodash }
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static("public"));
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["POST", "GET", "PUT", "HEAD", "OPTIONS"],
    })
);

mongoose.connect("mongodb://localhost:27017/SRC", { useNewUrlParser: true }, () => { console.log("connected to database") });


//SCHEMAS
const projectsSchema = new mongoose.Schema({
    projectCode: String,
    projectName: String,
    projectType: String,
    agencyCode: String,
    agencyName: String,
    approval: Boolean,
    resourceApproval: Boolean,
    fundApproval: Boolean,
    closed: Boolean,
    facultyID: String,
    organizationType: String,
    staff: [mongoose.Types.ObjectId],
    sanctionFund: Number,
    startDate: Date,
    endDate: Date,
    status: Number,
    description: String,
    sanctionLetter: String,//shld be file
    announcements: [{

    }]
})

const Project = mongoose.model("Project", projectsSchema)

const facultySchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
    },
    password: String,
    userCode: String,
    principalInvestigatorCode: String,
    details: {
        Department: String,
        Designation: String,
        Email: String,
        ContactNumber: String,
        DateOfJoining: Date,
        Qualifications: String,
        DoB: Date,
        Address: String,
    },
    projects: [mongoose.Types.ObjectId]

});
const Faculty = mongoose.model('Faculty', facultySchema);

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
    },
    password: String,
    projects: {
        approve: [projectsSchema],
    },
    faculty: [mongoose.Types.ObjectId],
    staff: [mongoose.Types.ObjectId],
    recruitment: {
        project: mongoose.Types.ObjectId,
        numberOfStaff: Number,
        salary: Number,
        startDate: Date,
        endDate: Date,
        reasonForRecruitment: String,
        approve: Boolean,
    },
})

const Admin = mongoose.model('Admin', adminSchema);

const staffSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
    },
    password: String,
    staffCode: String,
    details: {
        Department: String,
        Designation: String,
        Email: String,
        ContactNumber: String,
        DateOfJoining: Date,
        Qualifications: String,
        DoB: Date,
        Address: String,
    },
    projects: [{
        projectID: String,
        Salary: Number,
        StartDate: Date,
        EndDate: Date,
    }]
})

const announcementSchema = new mongoose.Schema({
    projectID: String,
    project: mongoose.Types.ObjectId,
    qualifications: String,
    startDate: Date,
    endDate: Date,
    salary: Number,
    FacultyName: String,
    description: String,
})

const Announcement = mongoose.model('Announcement', announcementSchema);

//retrieving data from mongodb
app.post("/pending", async (req, res, next) => {

    var pendingProjects = await Project.find({})
    console.log("Pending Projects:\n" + pendingProjects)
    try {


        return res.status(200).json({
            success: true,
            count: pendingProjects.length,
            data: pendingProjects,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }

})

app.post("/created", (req, res) => {
    console.log("Recieved?");
    //console.log("Body:", req.body);
    res.send("request sent")
    //console.log(result)
    var newProject = new Project({
        projectCode: req.body.projectID,
        projectName: req.body.projectName,
        projectType: req.body.projectType,
        agencyCode: String(generateAgencyCode("User")),
        agencyName: req.body.agencyName,
        organizationType: req.body.organizationType,
        approval: false,
        resourceApproval: false,
        fundApproval: false,
        closed: false,
        facultyID: "ID",
        staff: [],
        sanctionFund: req.body.sanctionValue,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        status: 0,
        description: req.body.descriptionBox
    });

    console.log(newProject)
    newProject.save()

});

//save details of Recruitment request
app.post("/saveRecruitment", (req, res) => {
    console.log("saving Recruitment?")
})

let port = 3001;
// if (port == null || port == "") {
//     port = 3001;
// }
app.listen(port, function () {
    console.log("Server started on port 3001");
});