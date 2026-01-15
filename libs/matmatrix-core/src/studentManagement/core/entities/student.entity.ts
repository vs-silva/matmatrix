import type {EmergencyContact} from "./emergency-contact.entity";

export interface Student {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  gender: string;
  emergencyInformation: EmergencyContact;
}