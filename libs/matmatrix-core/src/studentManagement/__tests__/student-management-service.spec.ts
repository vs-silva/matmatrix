import {describe, expect, it, vi} from "vitest";

import { StudentManagementDriverPorts } from '../ports/driver/student-management-driver.ports';
import { StudentManagementService } from '../student-management.service';

describe("Student Management Service Tests", () => {

  const studentManagementService: StudentManagementDriverPorts = StudentManagementService();

  it('StudentManagementService should be function', () => {
    expect(studentManagementService).toBeDefined();
    expect(studentManagementService).toBeInstanceOf(Object);
  });
});