import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TeacherCoursesPage from "./pages/TeacherCoursesPage";
import TeacherCourseDetailPage from "./pages/TeacherCourseDetailPage";
import StudentFrontPage from "./pages/StudentFrontPage";
import TeacherYearsPage from "./pages/TeacherYearsPage";
import TeacherGroupsPage from "./pages/TeacherGroups.page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teacherYears" element={<TeacherYearsPage />} />
        <Route path="/teacherYears/:yearId/teacherCourses" element={<TeacherCoursesPage />} />
        <Route path="/teacherYears/:yearId/teacherCourses/:courseName" element={<TeacherCourseDetailPage />} />
        <Route path="/teacherYears/:yearId/teacherCourses/:courseName/" element={<TeacherGroupsPage />} />
        <Route path="/teacherCourses" element={<TeacherCoursesPage />} />
        <Route path="/teacherCourses/:courseName" element={<TeacherCourseDetailPage />} />
        <Route path="/studentCourses" element={<StudentFrontPage />} />
      </Routes>
    </Router>
  );
}

export default App;
