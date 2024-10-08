export default function getStudentIdsSum(students) {
  return students.reduce((stuID, student) => stuID + student.id, +0);
}
