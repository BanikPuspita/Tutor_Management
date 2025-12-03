/* app/components/tutor/TutorContext.tsx */
import { createContext, useContext, useState } from "react";

const TutorContext = createContext();

export function TutorProvider({ children }) {
  const [tutors, setTutors] = useState([
    {
      id: "1",
      name: "Md Forhad Alam",
      email: "forhad@potential.com",
      phone: "+820101112233",
      joinDate: "2023-10-01",
      status: "Active",
    },
    {
      id: "2",
      name: "Md Forhad Alam",
      email: "forhad@potential.com",
      phone: "+820101112233",
      joinDate: "2023-10-01",
      status: "Active",
    },
    {
      id: "3",
      name: "Md Forhad Alam",
      email: "forhad@potential.com",
      phone: "+820101112233",
      joinDate: "2023-10-01",
      status: "Active",
    },
    {
      id: "4",
      name: "Md Forhad Alam",
      email: "forhad@potential.com",
      phone: "+820101112233",
      joinDate: "2023-10-01",
      status: "Active",
    },
    {
      id: "5",
      name: "Md Forhad Alam",
      email: "forhad@potential.com",
      phone: "+820101112233",
      joinDate: "2023-10-01",
      status: "Active",
    },
  ]);

  return (
    <TutorContext.Provider value={{ tutors }}>
      {children}
    </TutorContext.Provider>
  );
}

export function useTutors() {
  return useContext(TutorContext);
}
