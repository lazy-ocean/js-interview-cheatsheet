# Web

## How browser requests a page

1. **DNS lookup**

The first step in requesting a page is converting a domain to an IP address.
When you request a page, a request goes to one of the world's root servers to return an IP.

To make process faster, this is usually cached, so first your browser cache checked, then operating system cache, then router, then provider's cache. Only then it goes to the root servers.

2. **Browser sends request**

After the DNS lookup, HTTP (HTTPS, HTTP/2) `GET` request is sent to the appropriate server. It might be not only from browser but also from search engine mechanisms or anything else that could send a request.

3. **Server responds**
   After request, server must respond with something: might be an error (404, 500), redirection (302-301), ideally it is `200 OK` and a requested info, in this case, an **HTML file**.

## How browser renders a page

1. **Parse the HTML**

HTML converts intro a DOM

> DOM (Document Object Model) is the data representation of the objects that compose a structure and a content of the web-page
> First, HTML is breaking up on start-end tags: `html`, `head`, `link`, `script`, `body`, `header`, `div`, `p` and so on. That constructs the DOM tree. 2. **Fetch external resourses**

When parser comes across CSS, JS or other external resource, it goes to fetch it.

- CSS loading is not preventing page from further parsing but blocks the rendering till it has been loaded and parsed.
- JS blocking everything till the JS file is loaded and parsed.

3. **Parse the CSS**

Similar to DOM, CSSOM is built - it is a map of all CSS selectors and properties in a form of a tree.

Unlike DOM, CSS rules can overwrite each other on various stages, that's why the rendering stops till the whole CSSOM from all sources (like different Sass files) is ready.

4. **Execute the JS**
   Depending on browser engine, it is difficult to say definitely how JS will be parsed, compiled and executed.

Then events are loaded: first `document.DOMContentLoaded`, which is a great practice to add, then everything else: sync, async, images. Only then `window.load`.

5. **DOM and CSSOM merge to a tree**

**Render tree** is made out of DOM and CSSOM. `display: none` nodes are excludes, as well as tags with no visual info (`<head>` and such)

6. **Calculate layout and paint**

Based on CSS properties for every DOM-node, calculations are made on where exactly every element should be displayed. That layout is pixel-painted, so now we have a full page!
