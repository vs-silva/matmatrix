import type { Student } from './core/entities/student.entity';
import type {StudentManagementDriverPorts} from "./ports/driver/student-management-driver.ports";
import type { StudentManagementReaderDrivenPorts } from './ports/driven/student-management-reader-driven.ports';
import type { StudentManagementWriterDrivenPorts } from './ports/driven/student-management-writer-driven.ports';

export function StudentManagementService(reader: StudentManagementReaderDrivenPorts, writer: StudentManagementWriterDrivenPorts): StudentManagementDriverPorts {

  if(!reader) {
    throw new Error('Reader is required');
  }

  if(!writer) {
    throw new Error('Writer is required');
  }

  async function createStudent(student: Student): Promise<Student> {

    return student;
  }

  async function getStudent(studentId: string): Promise<Student | null> {
    return null;
  }

  async function updateStudent(studentId: string, updatedStudent: Partial<Student>): Promise<Student | null> {
    return null;
  }

  async function deleteStudent(studentId: string): Promise<boolean> {
    return true;
  }

  return {
    createStudent,
    getStudent,
    updateStudent,
    deleteStudent
  };
}