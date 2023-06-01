"use strict"

let students = DATABASE.students;


function getStudent(id) {
    let div = document.createElement("div");
    let student = DATABASE.students[id];
    div.classList = "container";
    div.innerHTML = `
    <header id="studentName">${student.firstName} ${student.lastName} (Total Credits: ${sumCredits(student)})</header>
    <div>
        <div id="course">
            <h4 id="courseTitle">Courses: </h4>
            <div id="courses">
            ${getCourses(student)}
            </div>
        </div>
    </div>`;
    return div;
}


function sumCredits(student) {
    let creditSum = 0;
    for (let course of student.courses) {
        creditSum += course.passedCredits;
    }
    return creditSum;
}


function getStudents(students) {
    let studentsElement = document.getElementById("results");
    studentsElement.innerHTML = ""; // clear previous students
    for (let student of students) {
        let studentElement = getStudent(student.studentID);
        studentsElement.appendChild(studentElement);
    }  
}


function getCourses(student){
    let courseInfo = DATABASE.courses;

    let courseBox = student.courses.map(course => {
        let courseDetails = courseInfo[course.courseId];
        let div = document.createElement("div");
        let status = course.passedCredits == courseDetails.totalCredits ? "done" : "notdone";
        div.innerHTML = `
        <div class="${status}">
            <h3>${courseDetails.title}</h3>
            <p>${course.started.semester} ${course.started.year} (${course.passedCredits} of ${courseDetails.totalCredits} credits)</p>
        </div>`;
        return div.outerHTML;
    });
    
    return courseBox.join("");
}


let input = document.getElementById("studentSearchField");
input.addEventListener("keyup", studentLastName);


function studentLastName() {
    let searchValue = input.value.toLowerCase();
    if (searchValue == "") {
        document.getElementById("results").innerHTML = "";
        return;  // If search field is empty, do not display any students
    }
    let studentsArray = students.filter(student => 
        student.lastName.toLowerCase().includes(searchValue)
    );
    
    let sortedStudents = studentsArray.sort((a, b) => a.lastName.localeCompare(b.lastName));
    getStudents(sortedStudents);
}


