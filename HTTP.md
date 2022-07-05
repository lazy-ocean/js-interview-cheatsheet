# HTTP

## HTTP

HTTP - hypertext transfer protocol - protocol for transmitting hypermedia documents (HTML). Mainly for communication between browsers and web-servers. Client-server modal (response-request), works by transmitting hypertext messages.
HTTP/2, now HTTP/3 is being enabled (the main difference is the network layer protocol -> TCP/IP to QUIC). Several handshakes vs one client-server, connection migration (QUIC has unique identifier for a connection, so LTE to WIFI keeps the same session)

Basically, request is being send to a server, then processed, then a response is being send back, both are just packets of text.

TCP/IP connection is established, connecting to the server's IP address on some port. Browsers automatically add the correct port so we don't have it in the URI.
Servers are required to support two HTTP methods: `GET`, which delivers a resource, and `HEAD`, which delivers just the headers.
Everything else is optional.

Methods:

- safe: `GET`, `HEAD`, only retrieve data
- idempotent: `GET`, `HEAD`, `PUT`, `DELETE`, `OPTIONS`, should have exactly the same result or side-effects when performed multiple times with the same body
- `POST`, `PATCH`: every request results in a separate action, even if with the same body

Request sends a method and response sends a status code (200 OK, 404 Not Found etc).

Headers can be sent in both requests and responses. E.g, in responses - what type of data the client can accept (`Accept`, `Content-Type`) or the user-agent.

---

## REST API

API is a set of definitions and protocols for building and integrating application software, establishing the content required from the consumer (the call, the request) and the content required by the producer (the response). It is a way of communicating with servers, a mediator between the users and web-service.  
REST = representational state transfer - a set of arcitectual rules on how the API should look like, not a standart per se.

- a client-server architecture is made up of clients, servers, resources with requests managed through HTTP. Neither client nor server care about inner interfaces and states so that allows both to be more flexible and scalable.
- stateless client-server communication, no client info is stored between requests and each request is separate. Server does not have to maintain, update or communicate that session state, client must include all info for the server, resending staate as necessary.
- data can be cached client-side to improve performance of client-server interactions
- uniform interface: sending resource in HTML, XML or JSON; user should have enough info on how to manipulate resources (modify, delete if has permission); each message should have enough info to interpret it; format of requests-response (body content, query-strings, request headers and resource name <=> body content, response codes, response headers)
- layering: a client cannot tell if she is connected directly to the end server or some intermediary along the way.
