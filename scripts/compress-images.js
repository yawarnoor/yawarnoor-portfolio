#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const CONFIG = {
  // Input and output directories
  inputDir: path.join(__dirname, '../public/experience'),
  backupDir: path.join(__dirname, '../public/experience-backup'),
  
  // Compression settings
  jpeg: {
    quality: 80,
    mozjpeg: true,
  },
  webp: {
    quality: 75,
    effort: 6,
  },
  png: {
    quality: 85,
    compressionLevel: 8,
  },
  
  // Max dimensions
  maxWidth: 1600,
  maxHeight: 1200,
  
  // File size thresholds (in bytes)
  minFileSizeToCompress: 50 * 1024, // 50KB
  targetMaxFileSize: 500 * 1024, // 500KB target
};

// Supported image extensions
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

/**
 * Get file size in a human-readable format
 */
function formatFileSize(bytes) {
  const sizes = ['B', 'KB', 'MB', 'GB'];
  if (bytes === 0) return '0 B';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Get all image files recursively
 */
function getImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getImageFiles(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (IMAGE_EXTENSIONS.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

/**
 * Create backup of original files
 */
function createBackup(filePath) {
  const relativePath = path.relative(CONFIG.inputDir, filePath);
  const backupPath = path.join(CONFIG.backupDir, relativePath);
  const backupDirPath = path.dirname(backupPath);
  
  // Ensure backup directory exists
  if (!fs.existsSync(backupDirPath)) {
    fs.mkdirSync(backupDirPath, { recursive: true });
  }
  
  // Copy original file to backup
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(filePath, backupPath);
    console.log(`✓ Backed up: ${relativePath}`);
  }
}

/**
 * Compress a single image
 */
async function compressImage(filePath) {
  try {
    const originalStats = fs.statSync(filePath);
    const originalSize = originalStats.size;
    
    // Skip if file is already small enough
    if (originalSize < CONFIG.minFileSizeToCompress) {
      console.log(`⏭ Skipping small file: ${path.relative(CONFIG.inputDir, filePath)} (${formatFileSize(originalSize)})`);
      return { skipped: true, originalSize, newSize: originalSize };
    }
    
    // Create backup first
    createBackup(filePath);
    
    const ext = path.extname(filePath).toLowerCase();
    const tempPath = filePath + '.tmp';
    
    let sharpInstance = sharp(filePath);
    
    // Get image metadata
    const metadata = await sharpInstance.metadata();
    
    // Resize if too large
    if (metadata.width > CONFIG.maxWidth || metadata.height > CONFIG.maxHeight) {
      sharpInstance = sharpInstance.resize({
        width: CONFIG.maxWidth,
        height: CONFIG.maxHeight,
        fit: 'inside',
        withoutEnlargement: true,
      });
    }
    
    // Apply compression based on format
    switch (ext) {
      case '.jpg':
      case '.jpeg':
        sharpInstance = sharpInstance.jpeg(CONFIG.jpeg);
        break;
      case '.png':
        sharpInstance = sharpInstance.png({
          quality: CONFIG.png.quality,
          compressionLevel: CONFIG.png.compressionLevel,
          adaptiveFiltering: true,
        });
        break;
      case '.webp':
        sharpInstance = sharpInstance.webp(CONFIG.webp);
        break;
    }
    
    // Save compressed image to temp file
    await sharpInstance.toFile(tempPath);
    
    const tempStats = fs.statSync(tempPath);
    const newSize = tempStats.size;
    
    // Only replace if compression actually reduced file size
    if (newSize < originalSize) {
      fs.renameSync(tempPath, filePath);
      const savings = originalSize - newSize;
      const savingsPercent = Math.round((savings / originalSize) * 100);
      
      console.log(`✓ Compressed: ${path.relative(CONFIG.inputDir, filePath)}`);
      console.log(`  ${formatFileSize(originalSize)} → ${formatFileSize(newSize)} (${savingsPercent}% reduction)`);
      
      return { compressed: true, originalSize, newSize, savings };
    } else {
      // Remove temp file and keep original
      fs.unlinkSync(tempPath);
      console.log(`⏭ No benefit: ${path.relative(CONFIG.inputDir, filePath)} (would increase size)`);
      return { skipped: true, originalSize, newSize: originalSize };
    }
    
  } catch (error) {
    console.error(`❌ Error compressing ${filePath}:`, error.message);
    return { error: true, originalSize: 0, newSize: 0 };
  }
}

/**
 * Main compression function
 */
async function compressImages() {
  console.log('🖼️  Image Compression Script Starting...\n');
  
  // Check if sharp is installed
  try {
    require('sharp');
  } catch (error) {
    console.error('❌ Sharp is not installed. Please run: npm install sharp');
    process.exit(1);
  }
  
  // Ensure input directory exists
  if (!fs.existsSync(CONFIG.inputDir)) {
    console.error(`❌ Input directory not found: ${CONFIG.inputDir}`);
    process.exit(1);
  }
  
  // Create backup directory
  if (!fs.existsSync(CONFIG.backupDir)) {
    fs.mkdirSync(CONFIG.backupDir, { recursive: true });
    console.log(`📁 Created backup directory: ${CONFIG.backupDir}\n`);
  }
  
  // Get all image files
  const imageFiles = getImageFiles(CONFIG.inputDir);
  console.log(`Found ${imageFiles.length} image files\n`);
  
  if (imageFiles.length === 0) {
    console.log('No image files found to compress.');
    return;
  }
  
  // Compress each image
  let totalOriginalSize = 0;
  let totalNewSize = 0;
  let compressedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;
  
  for (const filePath of imageFiles) {
    const result = await compressImage(filePath);
    
    if (result.compressed) {
      compressedCount++;
    } else if (result.skipped) {
      skippedCount++;
    } else if (result.error) {
      errorCount++;
    }
    
    totalOriginalSize += result.originalSize;
    totalNewSize += result.newSize;
  }
  
  // Summary
  console.log('\n📊 Compression Summary:');
  console.log('═'.repeat(50));
  console.log(`Files processed: ${imageFiles.length}`);
  console.log(`Compressed: ${compressedCount}`);
  console.log(`Skipped: ${skippedCount}`);
  console.log(`Errors: ${errorCount}`);
  console.log(`Total size before: ${formatFileSize(totalOriginalSize)}`);
  console.log(`Total size after: ${formatFileSize(totalNewSize)}`);
  
  if (totalOriginalSize > 0) {
    const totalSavings = totalOriginalSize - totalNewSize;
    const totalSavingsPercent = Math.round((totalSavings / totalOriginalSize) * 100);
    console.log(`Total savings: ${formatFileSize(totalSavings)} (${totalSavingsPercent}%)`);
  }
  
  console.log(`\n💾 Original files backed up to: ${CONFIG.backupDir}`);
  console.log('✅ Compression complete!');
}

// Run the script
if (require.main === module) {
  compressImages().catch(error => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });
}

module.exports = { compressImages, CONFIG };
