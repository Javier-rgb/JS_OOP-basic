// Literal Object
const natalia = {
    name: "Natalia",
    age: 20,
    approvedCourses: ["HTML & CCS definitive course", "HTML & CCS practical course",],
    courseApproved(course){
        this.approvedCourses.push(course);
    },
};

// natalia.approvedCourses.push("Responsive Design");

// Prototype Object

function Student(name, age, approvedCourses){
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;

    // this.courseApproved = function(course){
    //     this.approvedCourses.push(course);
    // }
}

Student.prototype.courseApproved = function(course){
    this.approvedCourses.push(course);
}

const juanita = new Student("Juana", 15, ["Video Games introduction course",
                            "Character creation course"],);

