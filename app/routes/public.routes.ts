
// app/routes/public.routes.ts
import { index, route } from "@react-router/dev/routes";

export const publicRoutes = [
  index("components/pages/Dashboard.tsx"),

  route("tutors", "components/pages/Tutors.tsx", [
  index("components/tutor/TutorList.tsx"), // Default child route
]),

  route("schedule", "components/pages/Schedule.tsx"),

  route("students", "components/pages/Students.tsx", [
    index("components/student/StudentList.tsx"),
    route(":id", "components/student/StudentDetails.tsx"),
    route(":id/details", "components/student/UpdatedStudentDetails.tsx"),
  ]),

  route("classes", "components/pages/Classes.tsx", [
  index("components/class/ClassList.tsx"),
  route("create", "components/class/CreateClass.tsx"), 
]),

  route("books", "components/pages/Books.tsx"),
  route("payments", "components/pages/Payments.tsx"),
  route("forum", "components/pages/Forum.tsx"),
  route("subscription", "components/pages/Subscription.tsx"),
  route("promotion", "components/pages/Promotion.tsx"),
  route("settings", "components/pages/Settings.tsx"),
];
