# MatMatrix

MatMatrix is a specialized, enterprise-grade management ecosystem designed for Brazilian Jiu-Jitsu (BJJ) academies. It moves beyond simple record-keeping, providing a robust platform to manage the complex lifecycles of students, belt promotions, and academy operations through a highly resilient and scalable architecture.

## Purpose
The primary goal of MatMatrix is to solve the administrative "friction" in martial arts schools—specifically managing student progress and ensuring business health—while maintaining a software architecture that is modular enough to help your school grow from a single “garage mat” to a global franchise.

### Features ( Freemium )
- **Student Management Service** ( under development)
- **Class Attendance Tracking Service** ( soon )
- **Promotion And Belt Tracking Service** ( soon )
- **Products and Inventories Management Service** ( soon )

### Features ( Premium-only )
- **Analytics & Reporting Service** ( soon )
- **Document Management Service** ( soon )
- **Instructor & Staff Contracts Management Service** ( soon )
- **Security & Access Control (QR/RFID Check-in) Service** ( soon )
- **Payment Processing Service** ( soon )
- **Membership & Billing Management Service** ( soon )

***

# Architecture

## 🥋 MatMatrix: The Core Domain 
###  The central orchestration engine of the MatMatrix ecosystem
### 🎯 Overview
This houses the pure business rules, entities, and use cases that power the MatMatrix Brazilian Jiu-Jitsu management system. By using Hexagonal Architecture (Ports & Adapters), we ensure that the "intellectual property" of the module. The logic and use case's lifecycles are completely isolated from external dependencies like UI frameworks or specific databases.

## MatMatrix: The Data Service
### The Persistence Layer
A decoupled Data Access Service responsible for state management and persistence logic. It exposes a standardized mechanism to serve data to the business logic tier, ensuring the core domain remains agnostic of the database technology.

## MatMatrix: Portal
### The Administrative Frontend
A high-fidelity administrative dashboard built with Vue 3 and the Composition API. This repository serves as the primary 'Driving Adapter' for the system, translating complex gym operations—such as student check-ins and curriculum management—into an intuitive, reactive user experience. It communicates with the Business Logic API via a contract-first REST implementation, focusing on modularity and clean state management.

### 📚 Key Architectural Features
- **Hexagonal Architecture**: Isolates domain logic from UI and persistence layers.
- **Testability**: Facilitates TDD by keeping business rules pure and testable.
- **Resilience**: Ensures the core remains robust against infrastructure changes.

#### Tech Stack
- **Language**: Javascript and Typescript
- **Runtime**: Node.js
- **Test Framework**: Vitest