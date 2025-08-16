# Image Compression Script

This script compresses images in the `public/experience` directory while maintaining good visual quality.

## Usage

```bash
npm run compress-images
```

## What it does

- **Compresses** all JPEG, PNG, and WebP images in `public/experience/`
- **Creates backups** of original files in `public/experience-backup/`
- **Maintains quality** using optimized compression settings
- **Resizes** images larger than 1600x1200px
- **Skips** files smaller than 50KB (already optimized)

## Compression Settings

- **JPEG**: 80% quality with mozjpeg
- **WebP**: 75% quality with effort level 6
- **PNG**: 85% quality with compression level 8
- **Max dimensions**: 1600x1200px

## Results

The script typically achieves:
- **90-98% file size reduction** for large images
- **Maintains visual quality** at reasonable compression ratios
- **Safe operation** with automatic backups

## Recovery

If you need to restore original images:

```bash
cp -r public/experience-backup/* public/experience/
```

## Dependencies

- **Sharp**: High-performance image processing library
- Automatically installed when running `npm install`
