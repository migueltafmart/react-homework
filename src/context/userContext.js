import React from 'react';
const userContext = React.createContext({user:{name:"", age:"", email:"", url:""}, userName:""});

export {
    userContext
} ;