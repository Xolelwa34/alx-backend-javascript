import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    const databaseFile = process.argv[2];

    try {
      const studentsByField = await readDatabase(databaseFile);
      const responseLines = ['This is the list of our students'];

      for (const [field, students] of Object.entries(studentsByField).sort()) {
        responseLines.push(
          `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`
        );
      }

      res.status(200).send(responseLines.join('\n'));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const databaseFile = process.argv[2];

    if (!['CS', 'SWE'].includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const studentsByField = await readDatabase(databaseFile);
      const students = studentsByField[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;<F12>
