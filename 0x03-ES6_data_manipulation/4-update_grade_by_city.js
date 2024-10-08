export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const theStudents = student;
    theStudents.grade = 'N/A';
    for (const grade of newGrades) {
      if (theStudents.id === grade.studentId) {
        theStudents.grade = grade.grade;
      }
    }
    return theStudents;
  });
}
