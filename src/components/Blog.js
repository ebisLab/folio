import React from 'react'
import {blog} from '../mock'

export default function Blog() {

    const hello= blog.map(item=>(item.id2)).sort()
    console.log('hello',hello)
    return (
        <div style={{textAlign:"left", margin: "0 20%"}}>
            {console.log('data', blog)}
            {blog.sort((a,b)=>b.id2-a.id2).map(item=> (<div style={{margin:"10%"}}>
                <h2>{item.title}</h2>
                <h4>{new Date(item.id2).toLocaleDateString("en-US")}</h4>
                <p>{item.content}</p>
         </div>))}        
        </div>
    )
}
