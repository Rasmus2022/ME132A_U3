"use strict"

let courses = DATABASE.courses;





function getCourse(id) {
    let course = DATABASE.courses[id];
    let div = document.createElement("div");
    div.classList = "container";
    div.innerHTML = `
    <header>
        <u>
        ${course.title} (total Credits: ${course.totalCredits})
        </u>
    </header>
   
    <div>
        <div id="teachersWrapper">
            <div class="teacherBlock">
                <h3> Course Responsible</h3>
                <div id="teachersResp">
                    ${findResponsible(course)}
                </div>
            </div>
            <div class="teacherBlock">
                <h3>Teachers</h3>
                <div id="teachers">
                    ${findTeachers(course)}
                </div>
            </div>
        </div>
        <br>
        <h3>Students</h3>
        <div id="students">
            ${findStudents(course)} 
        </div>
        <br>
        <div id="border"></div>
    </div>`;
    return div;
}


function getCourses (courses) {
    let coursesElement = document.getElementById("courses");
    coursesElement.innerHTML = '';
    for (let course of courses) {
        let courseElement = getCourse(course.courseId);
        coursesElement.appendChild(courseElement);
    }
}


function findEntity(entities, idField, targetId) {
    let entity = entities.find(entity => entity[idField] === targetId);
    return entity ? `<h4>${entity.firstName} ${entity.lastName} (${entity.post})</h4>` : '';
}


function findResponsible(course) {
   return findEntity(DATABASE.teachers, 'teacherId', course.courseResponsible);
}


function findTeachers(course) {
    return course.teachers.map(teacherId => findEntity(DATABASE.teachers, 'teacherId', teacherId)).join('');
} 


function findStudents(course) {
    return DATABASE.students
        .flatMap(student => student.courses
            .filter(c => c.courseId === course.courseId)
            .map(c => `
                <div class="${c.passedCredits === course.totalCredits ? 'done' : 'notdone'}">
                    <h4>${student.firstName} ${student.lastName} (${c.passedCredits} credits)</h4>
                    <p>${c.started.semester} ${c.started.year}</p>
                </div>`))
        .join('');
}


function courseSearch() {
    return document.getElementById("coursesSearchField").value.toLowerCase();
}


function searchCourse() {
    let searchValue = courseSearch();
    if (searchValue === "") {
        document.getElementById("courses").innerHTML = "";
        return;
    }

    let filteredCourses = courses.filter(course => course.title.toLowerCase().includes(searchValue));
    filteredCourses.sort((a, b) => a.title.localeCompare(b.title));
    getCourses(filteredCourses);
}


let input = document.getElementById("coursesSearchField");
input.addEventListener("keyup", searchCourse);


function submit () {
    let searchValue = courseSearch();
    let filteredCourses = courses.filter(course => course.title.toLowerCase().includes(searchValue));
    getCourses(filteredCourses);
}


input.addEventListener("submit", submit);

