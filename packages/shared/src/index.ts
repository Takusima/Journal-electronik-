export type Role = "STUDENT" | "TEACHER" | "CURATOR" | "ADMIN";

export interface User {
  id: string;
  role: Role;
  firstName: string;
  lastName: string;
  groupId?: string;
}

export interface Grade {
  id: string;
  studentId: string;
  subjectId: string;
  teacherId: string;
  value: number | string;
  note?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Homework {
  id: string;
  groupId: string;
  subjectId: string;
  teacherId: string;
  title: string;
  description?: string;
  assignedAt: string;
  dueAt: string;
}

export interface ApiHealth {
  ok: boolean;
  service: string;
  version: string;
}