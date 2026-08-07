"use client";

import { Button } from "./Button";

interface ModalProps {
  open: boolean;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onClose: () => void;
  onConfirm: () => void;
}

export function Modal({
  open,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onClose,
  onConfirm,
}: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6">
      <div className="w-full max-w-md rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
        <div className="mb-5">
          <h2 className="text-xl font-semibold text-[#023337]">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-[#6A717F]">{description}</p>
        </div>
        <div className="grid gap-3 sm:flex sm:justify-end">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-[#566B79] transition hover:bg-gray-50"
            onClick={onClose}
          >
            {cancelLabel}
          </button>
          <Button variant="primary" className="w-full sm:w-auto" onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
