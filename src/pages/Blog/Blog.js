import React from "react";

const Blog = () => {
  return (
    <blockquote className="my-10">
      <h2 className=" text-3xl font-semibold">
        Difference between SQL and NoSQL
      </h2>
      <ul>
        <li>
          <p>
            SQL databases defines and manipulates data based structured query
            language (SQL). Seeing from a side this language is extremely
            powerful. SQL is one of the most versatile and widely-used options
            available which makes it a safe choice especially for great complex
            queries. But from other side it can be restrictive. SQL requires you
            to use predefined schemas to determine the structure of your data
            before you work with it. Also all of your data must follow the same
            structure. This can require significant up-front preparation which
            means that a change in the structure would be both difficult and
            disruptive to your whole system. A NoSQL database has dynamic schema
            for unstructured data. Data is stored in many ways which means it
            can be document-oriented, column-oriented, graph-based or organized
            as a KeyValue store. This flexibility means that documents can be
            created without having defined structure first. Also each document
            can have its own unique structure. The syntax varies from
          </p>
        </li>
      </ul>
      <h2 className=" text-3xl font-semibold">
        What is JWT, and how does it work?
      </h2>
      <p>
        Not all signing algorithms are created equal though. For example, some
        signing algorithms use a secret value that is shared between the issuer
        and the party that verifies the JWT. Other algorithms use a public and
        private key. The private key is known only to the issuer, while the
        public key can be widely distributed. The public key can be used to
        verify the signature, but only the private key can be used to create the
        signature. This is more secure than a shared secret because the private
        key only needs to exist in one place. Because of this, the server does
        not need to keep a database with the information needed to identify the
        user. For developers, this is great news — the server that issues the
        JWT and the server that validates it do not have to be the same.
      </p>
      <h2 className=" text-3xl font-semibold">
        What is the difference between javascript and NodeJS?
      </h2>
      <p>
        NodeJS is a cross-platform and opensource Javascript runtime environment
        that allows the javascript to be run on the server-side. Nodejs allows
        Javascript code to run outside the browser. Nodejs comes with a lot of
        modules and mostly used in web development. <br />
        Javascript is a Scripting language. It is mostly abbreviated as JS. It
        can be said that Javascript is the updated version of the ECMA script.
        Javascript is a high-level programming language that uses the concept of
        Oops but it is based on prototype inheritance.{" "}
      </p>
      <h2 className=" text-3xl font-semibold">
        How does NodeJS handle multiple requests at the same time?
      </h2>
      <p>
        Three requests are sent to the node.js web server. Whichever request
        arrives fractionally before the other two will trigger the web server
        request handler and it will start executing. The other two requests go
        into the node.js event queue, waiting their turn. It's technically up to
        the internals of the node.js implementation whether a waiting request is
        queued at the incoming TCP level or whether it's queued inside of
        node.js (I don't actually know), but for the purposes of this
        discussion, all that matters is that the incoming event is queued and
        won't trigger until the first request stops running. That first request
        handler will execute until it hits an asynchronous operation (such as
        reading a file) and then has nothing else to do until the async
        operation completes. At that point, the async file I/O operation is
        initiated and that original request handler returns (it is done with
        what it can do at that moment). Since the first request (which is
        waiting for file I/O) has returned for now, the node.js engine can now
        pull the next event out of the event queue and start it. This will be
        the second request to arrive on the server. It will go through the same
        process at the first request and will run until it has nothing else to
        do (and is also waiting for file I/O). When the second requests returns
        back to the system (because it's waiting for file I/O), then the third
        request can start running. It will follow the same path as the previous
        two. When the third request is now also waiting for I/O and returns back
        to the system, node.js is then free to pull the next event out of the
        event queue. At this point, all three request handlers are "in flight"
        at the same time. Only one ever actually runs at once, but all are in
        process at once.
      </p>
    </blockquote>
  );
};

export default Blog;
