import type {Student} from "../../core/entities/student.entity";

export interface StudentManagementDriverPorts {
  createStudent: (student: Student) => Promise<Student>;
  getStudent: (studentId: string) => Promise<Student | null>;
  updateStudent: (studentId: string, updatedStudent: Partial<Student>) => Promise<Student | null>;
  deleteStudent: (studentId: string) => Promise<boolean>;
}