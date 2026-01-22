import {describe, expect, it} from 'vitest';
import type { StudentManagementServiceDriverPort } from '../ports/driver/student-management-service-driver.port';
import { StudentManagementService } from '../student-management.service';

describe('StudentManagementService tests', () => {

  const service: StudentManagementServiceDriverPort = StudentManagementService();

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(service).toBeInstanceOf(Object);
  });

});