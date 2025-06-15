import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const dir = searchParams.get('dir');

    if (!dir) {
      return NextResponse.json({ error: 'Directory parameter is required' }, { status: 400 });
    }

    // Remove any leading slashes and ensure proper path format
    const cleanDir = dir.replace(/^\/+/, '');
    
    // Construct the full path to the directory
    const dirPath = path.join(process.cwd(), 'public', cleanDir);
    
    console.log('Looking for images in:', dirPath);

    // Check if directory exists
    if (!fs.existsSync(dirPath)) {
      console.error('Directory not found:', dirPath);
      return NextResponse.json({ error: 'Directory not found' }, { status: 404 });
    }

    // Read directory contents
    const files = fs.readdirSync(dirPath);
    console.log('Found files:', files);

    // Filter for image files
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      const isImage = ['.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(ext);
      console.log(`File ${file} is image: ${isImage}`);
      return isImage;
    });

    // Sort files to ensure consistent order
    imageFiles.sort();

    // Construct full image paths
    const images = imageFiles.map(file => `/${cleanDir}/${file}`);
    console.log('Returning images:', images);

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error fetching images:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 