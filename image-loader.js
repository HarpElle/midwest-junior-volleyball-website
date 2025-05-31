export default function imageLoader({ src, width, quality }) {
  // For static export with basePath, we need to prepend the basePath to image URLs
  const basePath = '/midwest-junior-volleyball-website'
  
  // If the src already starts with the basePath, don't add it again
  if (src.startsWith(basePath)) {
    return src
  }
  
  // If it's an absolute URL (external image), return as-is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src
  }
  
  // For local images, prepend the basePath
  return `${basePath}${src}`
} 