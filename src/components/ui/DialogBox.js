import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

export default function DialogBox({
  isOpen,
  onClose,
  onConfirm,
  title = "Are you sure?",
  message = "This action cannot be undone.",
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = "danger",
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
    >
      <p className="text-gray-700 mb-6">{message}</p>

      <div className="flex gap-3">
        <Button
          onClick={onClose}
          variant="secondary"
          fullWidth
        >
          {cancelText}
        </Button>
        <Button
          onClick={() => {
            onConfirm();
            onClose();
          }}
          variant={variant}
          fullWidth
        >
          {confirmText}
        </Button>
      </div>
    </Modal>
  );
}
