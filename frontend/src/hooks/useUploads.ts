import { useMutation } from '@tanstack/react-query';
import { uploadProductImage } from '@/hooks/api/uploads';

export function useUploadProductImage() {
  return useMutation({
    mutationFn: (file: File) => uploadProductImage(file),
  });
}
