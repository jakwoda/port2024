/**
 * Prepends the Next.js basePath to asset URLs for static exports
 */
export function withBasePath(path: string): string {
  return `/port2024${path}`;
}