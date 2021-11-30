class Student{
    constructor({
        name,
        userName,
        email,
        twitter = undefined, 
        instagram = undefined, 
        facebook = undefined, 
        approvedCourses = [], 
        learningPaths = {}
    }){
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.socialMedia = {
            twitter, instagram, facebook
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

class leaningPath {
    constructor({name, courses}){
        this.name = name;
        this.courses = courses;
    }
}

webDev = new leaningPath({
    name: "Web Development", 
    courses: ["Basic HTML & CCS", "Practical HTML & CSS", "Basic JS", "Intermediate JS", 
              "OOP in JS", "ECMASCRIPT", "Design systems"
             ]
});

javier = new Student({name: "Javier Gamez", userName: "jgamez", 
                      email: "javier.gamez@platzi.com", learningPaths: webDev});