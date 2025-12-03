import { createContext, useContext, useState } from "react";

const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([
    {
      id: "1",
      name: "Md Forhad Alam",
      email: "forhad@potential.com",
      phone: "+820181579003",
      joinDate: "2023-10-01",
      nationality: "S. Korea",
      subscribed: "Yes",
      status: "Active",
    },
    {
      id: "2",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+820181234567",
      joinDate: "2023-10-01",
      nationality: "S. Korea",
      subscribed: "Yes",
      status: "Active",
    },
    {
      id: "3",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+820181234568",
      joinDate: "2023-10-01",
      nationality: "S. Korea",
      subscribed: "Yes",
      status: "Inactive",
    },
    {
      id: "4",
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      phone: "+820181234569",
      joinDate: "2023-10-01",
      nationality: "S. Korea",
      subscribed: "No",
      status: "Active",
    },
    {
      id: "5",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "+820181234570",
      joinDate: "2023-10-01",
      nationality: "S. Korea",
      subscribed: "Yes",
      status: "Inactive",
    },
    {
      id: "6",
      name: "Alice Brown",
      email: "alice.brown@example.com",
      phone: "+820181234571",
      joinDate: "2023-10-01",
      nationality: "S. Korea",
      subscribed: "No",
      status: "Active",
    },
    {
      id: "7",
      name: "Bob White",
      email: "bob.white@example.com",
      phone: "+820181234572",
      joinDate: "2023-10-01",
      nationality: "S. Korea",
      subscribed: "Yes",
      status: "Active",
    },
  ]);

  const updateStudent = (id, updatedData) => {
    setStudents(prev =>
      prev.map(s => (s.id === id ? { ...s, ...updatedData } : s))
    );
  };


   // DELETE STUDENT
  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };
  

  return (
    <StudentContext.Provider value={{ students, updateStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudents() {
  return useContext(StudentContext);
}
