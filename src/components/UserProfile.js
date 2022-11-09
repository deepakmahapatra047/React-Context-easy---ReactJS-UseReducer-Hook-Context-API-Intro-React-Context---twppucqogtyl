import { useContext } from 'react'
import React from 'react'
import { UserContext } from "./App"

const UserProfile = () => {
    const value = useContext(UserContext);

    return (
        <>
            <h1 id='name'>{value.name}</h1>
            <h1 id='age'>{value.age}</h1>
        </>
    )
}

export { UserProfile }