"use client";

import { useState } from "react";
import Header from "@/components/Header";
import StudentCard from "@/components/StudentCard";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Modal from "@/components/Modal";

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [students, setStudents] = useState([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      grade: "A",
      course: "Mathematics",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      grade: "B+",
      course: "Physics",
    },
    {
      id: "3",
      name: "Mike Johnson",
      email: "mike@example.com",
      grade: "A-",
      course: "Chemistry",
    },
    {
      id: "4",
      name: "Sarah Williams",
      email: "sarah@example.com",
      grade: "B",
      course: "Biology",
    },
  ]);

  const handleEdit = (student) => {
    console.log("Edit student:", student);
  };

  const handleDelete = (studentId) => {
    console.log("Delete student:", studentId);
  };

  const handleAddStudent = () => {
    setIsModalOpen(true);
    console.log("Add new student");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        <Container className="py-8">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Students</h2>
              <p className="text-gray-600 mt-1">Manage your student roster</p>
            </div>
            <Button
              onClick={handleAddStudent}
              variant="primary"
              size="large"
            >
              + Add Student
            </Button>
          </div>

          {/* Students Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>

          {/* Empty State */}
          {students.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No students found</p>
              <p className="text-gray-400 mt-2">
                Click &quot;Add Student&quot; to get started
              </p>
            </div>
          )}
        </Container>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Test Modal"
        >
          <p>The backdrop should now be semi-transparent!</p>
        </Modal>
      </main>
    </div>
  );
}
