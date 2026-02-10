import Container from "./ui/Container";
import Button from "./ui/Button";

export default function Header() {
  const handleLogout = () => {
    console.log("Logout clicked");
    // Later: Clear session and redirect to login
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <Container className="py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Teacher Portal</h1>
        <Button
          variant="outline"
          size="small"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Container>
    </header>
  );
}
