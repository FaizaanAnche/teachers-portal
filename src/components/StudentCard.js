import Card from "./ui/Card";
import Button from "./ui/Button";
import Badge from "./ui/Badge";

export default function StudentCard({ student, onEdit, onDelete }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            {student.name}
          </h3>
          <p className="text-gray-600 text-sm">{student.email}</p>
        </div>
        <Badge variant="blue">Grade: {student.grade}</Badge>
      </div>

      <p className="text-gray-700 mb-4">
        <span className="font-medium">Course:</span> {student.course}
      </p>

      <div className="flex gap-2">
        <Button
          onClick={() => onEdit(student)}
          variant="primary"
          fullWidth
        >
          Edit
        </Button>
        <Button
          onClick={() => onDelete(student.id)}
          variant="danger"
          fullWidth
        >
          Delete
        </Button>
      </div>
    </Card>
  );
}
