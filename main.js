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


// Classes

class StudentC {
    constructor({name, age, approvedCourses = [], email}){
        this.name = name;
        this.age = age;
        this. approvedCourses = approvedCourses;
        this.email = email;
    }

    courseApproved(course){
        this.approvedCourses.push(course);
    }
}

const miguel = new StudentC({email: "miguel.hd@hotmail.com", name: "Miguel", age: 28, approvedCourses: ["Business Data Analysis", 
                            "Principles of Data vizualization for BI"]});
