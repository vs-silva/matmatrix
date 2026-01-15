import type { Student } from '../../core/entities/student.entity';

export interface StudentManagementReaderDrivenPorts {
  get(id?: string): Promise<Student[] | Student | null>;
}