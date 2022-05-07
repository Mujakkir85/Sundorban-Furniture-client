import React from 'react';

const Blogs = () => {
    return (
        <>
            <div>
                <h2>(1)Difference between javascript and nodejs</h2>
                <h3>Javascript</h3>
                1.Javascript is a programming language that is used for writing scripts on the website. 2.	Javascript can only be run in the browsers. 3.It is basically used on the client-side.
                4.Javascript is capable enough to add HTML and play with the DOM.
                5.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                6.Javascript is used in frontend development.
                <h3>nodejs</h3>
                1.NodeJS is a Javascript runtime environment.2.We can run Javascript outside the browser with the help of NodeJS.3.It is mostly used on the server-side.4. Nodejs does not have capability to add HTML tags.5. V8 is the Javascript engine inside of node.js that parses and runs Javascript.6.Nodejs is used in server-side development.
            </div>

            <div>
                <h2>(2) Differences between sql and nosql databases.</h2>
                <h3>SQL</h3>
                1.RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
                2.These databases have fixed or static or predefined schema
                3.These databases are not suited for hierarchical data storage.
                4.These databases are best suited for complex queries
                <h3>No SQL</h3>
                1.Non-relational or distributed database system.
                2.They have dynamic schema
                3.These databases are best suited for hierarchical data storage
                4.These databases are not so good for complex queries
            </div>

            <div>
                <h2>(3)What is the purpose of jwt and how does it work</h2>
                <p>JSON Web Token (JWT) is an open standard for securely transmitting information between parties as JSON object.

                    It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

                    The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                    JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn’t have to completely rely on a datastore(database) to save session information.</p>
            </div>
        </>
    );
};

export default Blogs;