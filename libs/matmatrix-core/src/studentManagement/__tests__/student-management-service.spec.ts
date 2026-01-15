import {describe, expect, it} from "vitest";

import type { StudentManagementDriverPorts } from '../ports/driver/student-management-driver.ports';
import type { StudentManagementReaderDrivenPorts } from '../ports/driven/student-management-reader-driven.ports';
import type { StudentManagementWriterDrivenPorts } from '../ports/driven/student-management-writer-driven.ports';
import { StudentManagementService } from '../student-management.service';


describe("Student Management Service Tests", () => {

  const fakeReader: StudentManagementReaderDrivenPorts = {
    get: () => Promise.resolve(null)
  };

  const fakeWriter: StudentManagementWriterDrivenPorts = {
    write: () => Promise.resolve(),
    erase: () => Promise.resolve()
  };

  const studentManagementService: StudentManagementDriverPorts = StudentManagementService(
    fakeReader,
    fakeWriter
  );

  it('StudentManagementService should be defined', () => {
    expect(studentManagementService).toBeDefined();
    expect(studentManagementService).toBeInstanceOf(Object);
  });

  it('StudentManagementService should have expected methods', () => {
    expect(studentManagementService).toHaveProperty('createStudent');
    expect(studentManagementService).toHaveProperty('getStudent');
    expect(studentManagementService).toHaveProperty('updateStudent');
    expect(studentManagementService).toHaveProperty('deleteStudent');
  });
});