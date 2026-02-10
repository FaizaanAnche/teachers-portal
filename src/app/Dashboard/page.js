"use client";

import { useState } from "react";
import Header from "@/components/Header";
import StudentCard from "@/components/StudentCard";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import StudentForm from "@/components/StudentForm";
import DialogBox from "@/components/ui/DialogBox";

export default function DashboardPage() {
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

  // Modal states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleAddStudent = (studentData) => {
    const newStudent = {
      id: Date.now().toString(),
      ...studentData,
    };

    setStudents([...students, newStudent]);
    setIsAddModalOpen(false);
    console.log("Student added:", newStudent);
  };

  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setIsEditModalOpen(true);
  };

  const handleUpdateStudent = (studentData) => {
    setStudents(
      students.map((student) =>
        student.id === selectedStudent.id
          ? { ...student, ...studentData }
          : student,
      ),
    );
    setIsEditModalOpen(false);
    setSelectedStudent(null);
    console.log("Student updated:", studentData);
  };

  const handleDeleteClick = (studentId) => {
    const student = students.find((s) => s.id === studentId);
    setSelectedStudent(student);
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    setStudents(
      students.filter((student) => student.id !== selectedStudent.id),
    );
    setSelectedStudent(null);
    console.log("Student deleted:", selectedStudent);
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
              <p className="text-gray-600 mt-1">
                Manage your student roster ({students.length} students)
              </p>
            </div>
            <Button
              onClick={() => setIsAddModalOpen(true)}
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
                onEdit={handleEditClick}
                onDelete={handleDeleteClick}
              />
            ))}
          </div>

          {/* Empty State */}
          {students.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No students found</p>
              <p className="text-gray-400 mt-2">
                Click Add Student to get started
              </p>
            </div>
          )}
        </Container>
      </main>

      {/* Add Student Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Student"
      >
        <StudentForm
          onSubmit={handleAddStudent}
          onCancel={() => setIsAddModalOpen(false)}
        />
      </Modal>

      {/* Edit Student Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedStudent(null);
        }}
        title="Edit Student"
      >
        <StudentForm
          initialData={selectedStudent}
          onSubmit={handleUpdateStudent}
          onCancel={() => {
            setIsEditModalOpen(false);
            setSelectedStudent(null);
          }}
        />
      </Modal>

      {/* Delete Confirmation Dialog */}
      <DialogBox
        isOpen={isDeleteDialogOpen}
        onClose={() => {
          setIsDeleteDialogOpen(false);
          setSelectedStudent(null);
        }}
        onConfirm={handleConfirmDelete}
        title="Delete Student"
        message={`Are you sure you want to delete ${selectedStudent?.name}? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        variant="danger"
      />
    </div>
  );
}
