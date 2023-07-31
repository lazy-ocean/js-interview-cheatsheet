# Miscellaneous

## Hydration

Hydration is a technique to add interactivity to server-rendered HTML. It’s a technique in which client-side JavaScript converts a static HTML web page into a dynamic web page by attaching event handlers to the HTML elements.

## Optimistic UI updates

A UI rendering pattern, summarized in simulating results of the potential mutation and rendering it before receiving a response from the server/calculations completed. Once the end result is received, optimistic result is replaced with the actual result.
Example: edit comment, display it right away to the user while the request to the API/DB has been sent, instead of showing a loading state and waiting for the successful response and only updating state then.

## React Server Components (RSC)

- Easy, performant way to render non-interactive components, RSC are cacheable by default => flexing on progressive enhancement with server, initial load is much faster
- Full support in Next.js
- keep sensitive out of client (access tokens, keys) BUT need to be careful with the `use client` directive
- `use client` on parent propaganated to children. You can use client components in server components, but not the vice versa, BUT you can pass RSC to client components as children or any other props. Works because children are rendered independently, for the component they are perceived as "occupied slots"
- Excluded from JS bundle => moving some logic to RSC helps to keep large dependencies from client
- Run on client: allowing to fetch static content, read from the filesystem
- Run on server: access data without API.
- Data (props) passed from RSC to client components should be serializable (JSON string), so no functions, dates (new Date) etc
