// app/types/student.types.ts
export interface Student {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  nationality: string;
  status: "Active" | "Inactive";
  subscribed: "Yes" | "No";
  joinDate: string;
  classNumber?: string;
  avatar?: string;
}

export const initialStudents: Student[] = [
  { id: 1, fullName: "Md Forhad Alam", email: "forhad@potentialai.com", phoneNumber: "+82 01815790063", dateOfBirth: "2000-05-12", nationality: "S. Korea", status: "Active", subscribed: "Yes", joinDate: "2025-01-03", classNumber: "23-001", avatar: "M" },
  { id: 2, fullName: "Ayesha Siddika", email: "ayesha@potentialai.com", phoneNumber: "+82 01012345678", dateOfBirth: "1998-08-20", nationality: "S. Korea", status: "Active", subscribed: "No", joinDate: "2025-01-05", avatar: "A" },
  { id: 3, fullName: "Kim Ji-hoon", email: "jihoon@potentialai.com", phoneNumber: "+82 01098765432", dateOfBirth: "2001-03-15", nationality: "S. Korea", status: "Inactive", subscribed: "Yes", joinDate: "2025-01-10", avatar: "K" },
  { id: 4, fullName: "Park Min-ji", email: "minji@potentialai.com", phoneNumber: "+82 01055556666", dateOfBirth: "1999-11-30", nationality: "S. Korea", status: "Active", subscribed: "Yes", joinDate: "2025-01-12", avatar: "P" },
];