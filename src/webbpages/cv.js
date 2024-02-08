import React from "react";
import Data from "../components/cv.json";

const CV = () => {
    //this will get the data in the JSON file with diffrent arrays
    const DisplayExp = Data.experiance.map(
        (info)=> {
            return (
                <tr>
                    <td>{info.titel}</td>
                    <td>{info.companyName}</td>
                    <td>{info.date}</td>
                </tr>
            )
        }
    )

    const DisplayCourse = Data.course.map((info)=>{
        return (
            <tr >
            <td>{info.courseName}</td>
            <td>{info.schoolName}</td>
            <td>{info.courseDate}</td>
        </tr>
        )
    }
    )

    const DisplayOther = Data.other.map((info)=>{
        return (
            <tr>
            <td>{info.otherInfo1} - {info.otherInfo2} - {info.otherInfo3}</td>
        </tr>
        )
    }
    )
    return(
        <div className="cv-content"> 
            <body>
            <table>
                <thead>
                    <tr>
                    <th colSpan={3}>Erfarenheter</th>
                    </tr>
                    <tbody>
                    {DisplayExp}
                    </tbody>
                </thead>
                <thead>
                    <tr>
                    <th colSpan={3}>Utbildning</th>
                    </tr>
                    <tbody>
                    {DisplayCourse}
                    </tbody>
                </thead>
                <thead>
                    <tr>
                    <th>Annat</th>
                    </tr>
                    <tbody>
                    {DisplayOther}
                    </tbody>
                </thead>
            </table>
            <footer>
        <p>
            &copy; Fredrik Nellbeck 2024
        </p>
    </footer>
    </body>
        </div>
    )
}

export default CV;