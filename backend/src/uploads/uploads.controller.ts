import { Controller, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import type { Request } from 'express';

@Controller('uploads')
export class UploadsController {
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename(_: unknown, file: { originalname: string }, cb: (err: any, filename: string) => void) {
          const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}${extname(file.originalname)}`;
          cb(null, filename);
        },
      }),
      fileFilter(_: unknown, file: { mimetype?: string }, cb: (err: any, acceptFile: boolean) => void) {
        if (!file.mimetype || !file.mimetype.match(/\/\b(jpe?g|png|webp|gif)$/i)) {
          return cb(new Error('Only image files are allowed'), false);
        }
        cb(null, true);
      },
      limits: { fileSize: 5 * 1024 * 1024 },
    }),
  )
  uploadFile(@UploadedFile() file: any, @Req() req: Request) {
    const host = req.get('host');
    const protocol = req.protocol;
    return { url: `${protocol}://${host}/uploads/${file?.filename}` };
  }
}
