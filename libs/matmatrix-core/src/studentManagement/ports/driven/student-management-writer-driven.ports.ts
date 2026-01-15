import type { Student } from '../../core/entities/student.entity';

export interface StudentManagementWriterDrivenPorts {
  write(student: Student): Promise<void>;
  erase(studentId: string): Promise<void>;
}