import React from "react";

export default function LessonViewer({ lesson }) {
  return (
    <div className="Lesson-Viewer">
      <h4>{lesson.title}</h4>
      <p>{lesson.content}</p>
    </div>
  );
}
