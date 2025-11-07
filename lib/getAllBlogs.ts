import glob from "fast-glob";
import * as path from "path";

async function importBlog(blogFileNames: any) {
  // Use a relative path so Next/Webpack can resolve the dynamic import at build time.
  // `lib/getAllBlogs.ts` is sibling to `src`, so go up one level to reach `src/app/blog`.
  let { meta, default: component } = await import(
    `../src/app/blog/${blogFileNames}`
  );
  return {
    slug: blogFileNames.replace(/(\/content)?\.mdx$/, ""),
    ...meta,
    component,
  };
}

export async function getAllBlogs() {
  let blogFileNames = await glob(["*.mdx", "*/content.mdx"], {
    cwd: path.join(process.cwd(), "src/app/blog"),
  });

  let blogs = await Promise.all(blogFileNames.map(importBlog));

  return blogs.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}
