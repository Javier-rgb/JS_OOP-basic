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