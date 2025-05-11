/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

namespace Subjects {
  // create and export a constant cpp for Cpp Subjects
  export const cpp: Cpp = new Cpp();
  // create and export a constant java for Java Subjects
  export const java: Java = new Java();
  // create and export a constant react for React Subjects
  export const react: React = new React();

  // create and export one Teacher object cTeacher with experienceTeachingC = 10
  export const cTeacher: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
  };

  // For Cpp subject
  console.log('C++');
  cpp.setTeacher(cTeacher);
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  // For Java subject
  console.log('Java');
  java.setTeacher(cTeacher);
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());

  // For React subject
  console.log('React');
  react.setTeacher(cTeacher);
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());
}