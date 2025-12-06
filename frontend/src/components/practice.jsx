import React from 'react'


async function getPosts(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/`);
    if(!res.ok) throw new Error("Error fetching posts");

}