New route = new folder + page.tsx under app/. app/contact/page.tsx → /contact, app/blog/page.tsx → /blog, app/blog/first-post/page.tsx → /blog/first-post, and so on. The folder nesting is the URL structure — nothing to register anywhere else. 
layout.tsx = the stuff that doesn't change between pages. Nav bar, footer, global providers — anything that should stay on screen while {children} swaps out underneath it as you navigate.
Two small wrinkles worth knowing as you build more pages out:

You can drop a layout.tsx inside a subfolder too (e.g. app/blog/layout.tsx) — it only wraps routes under that folder, layering on top of the root layout. Useful later if, say, blog posts need their own sidebar that other pages don't.
The folder name is what shows in the URL, so app/about/page.tsx is /about — rename the folder to change the URL, not the file.