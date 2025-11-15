import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TeacherAddCard from "../components/TeacherAddCard";

function TeacherCourseDetailPage() {
  const { courseName } = useParams();
  const navigate = useNavigate();

  return (
    <TeacherAddCard
      courseName={courseName}
      navigateBack={() => navigate("/teacher")}
    />
  );
}

export default TeacherCourseDetailPage;
