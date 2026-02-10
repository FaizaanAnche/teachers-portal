"use client";

import { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";

export default function StudentForm({
  onSubmit,
  onCancel,
  initialData = null,
}) {
  // If initialData exists, we're editing. Otherwise, we're creating.
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    email: initialData?.email || "",
    grade: initialData?.grade || "",
    course: initialData?.course || "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    grade: false,
    course: false,
  });

  // Update a single field
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "",
      grade: formData.grade.trim() === "",
      course: formData.course.trim() === "",
    };

    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some((error) => error === true);

    if (!hasErrors) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Student Name"
        type="text"
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
        placeholder="John Doe"
        isEmpty={errors.name}
      />

      <Input
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        placeholder="john@example.com"
        isEmpty={errors.email}
      />

      <Input
        label="Grade"
        type="text"
        value={formData.grade}
        onChange={(e) => handleChange("grade", e.target.value)}
        placeholder="A, B+, C-, etc."
        isEmpty={errors.grade}
      />

      <Input
        label="Course"
        type="text"
        value={formData.course}
        onChange={(e) => handleChange("course", e.target.value)}
        placeholder="Mathematics, Physics, etc."
        isEmpty={errors.course}
      />

      <div className="flex gap-3 mt-6">
        <Button
          type="button"
          variant="secondary"
          fullWidth
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="primary"
          fullWidth
        >
          {initialData ? "Update Student" : "Add Student"}
        </Button>
      </div>
    </form>
  );
}
