import React from 'react';


const Blogs = () => {

    return (
        <div className='detail'>

            <div className=" ">
                <h2 className='font-bold text-lg'>Difference between javascript and nodejs.</h2>
                <p className='text-justify p-4'>Javascript is a programming language that is used for writing scripts on the website. NodeJS is a Javascript runtime environment. Javascript can only be run in the browsers. Javascript is capable enough to add HTML and play with the DOM. Nodejs does not have capability to add HTML tags. Some of the javascript frameworks are RamdaJS, TypedJS, etc. Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. </p>
            </div>

            <div className="details">
                <h2 className='font-bold text-lg'>When should you use nodejs and when should you use mongodb ?</h2>
                <p>NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.</p>
            </div>


            <div className="details">
                <h2 className='font-bold text-lg'>Differences between sql and nosql databases.</h2>
                <p> sql : These databases have fixed or static or predefined schema. nosql: They have dynamic schema. sql : These databases are best suited for complex queries. nosql : These databases are not so good for complex queries. sql : Follows ACID property. nosql : 	Follows CAP(consistency, availability, partition tolerance)...</p>
            </div>

            <div className="details">
                <h2 className='font-bold text-lg'>What is the purpose of jwt and how does it work</h2>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.</p>
            </div>
        </div>
    );
};

export default Blogs;