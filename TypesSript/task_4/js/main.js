/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
var Subjects;
(function (Subjects) {
    // create and export a constant cpp for Cpp Subjects
    Subjects.cpp = new Subjects.Cpp();
    // create and export a constant java for Java Subjects
    Subjects.java = new Subjects.Java();
    // create and export a constant react for React Subjects
    Subjects.react = new Subjects.React();
    // create and export one Teacher object cTeacher with experienceTeachingC = 10
    Subjects.cTeacher = {
        firstName: 'John',
        lastName: 'Doe',
        experienceTeachingC: 10,
    };
    // For Cpp subject
    console.log('C++');
    Subjects.cpp.setTeacher(Subjects.cTeacher);
    console.log(Subjects.cpp.getRequirements());
    console.log(Subjects.cpp.getAvailableTeacher());
    // For Java subject
    console.log('Java');
    Subjects.java.setTeacher(Subjects.cTeacher);
    console.log(Subjects.java.getRequirements());
    console.log(Subjects.java.getAvailableTeacher());
    // For React subject
    console.log('React');
    Subjects.react.setTeacher(Subjects.cTeacher);
    console.log(Subjects.react.getRequirements());
    console.log(Subjects.react.getAvailableTeacher());
})(Subjects || (Subjects = {}));
