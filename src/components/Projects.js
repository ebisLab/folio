import React from 'react';
// import { useParams, useRouteMatch} from "react-router-dom";
// import axios from 'axios';
import {Link} from 'react-router-dom'
// import Post from './Post'
// import {mock} from '../mock'



const Projects = ({data}) =>{
    

    // const [data, setData] = useState([]);
   
    // useEffect((e) => {
    //     setData(mock)
    // }, [data])
    // const info = data.find(item => item.id === Number(params.data));

    return(
        <div>
        <h1>
            This is the projects
        </h1>
        {/* <Link to="/post/:id">Post</Link> */}
        
        <div style={{display: 'table-caption', margin: '20px'}}>
{data.map(item=>(
    <Link key={item.id} data={data} to={`/post/${item.id}`}>
<div style={{padding: '20px'}}>{item.title}</div>
</Link>
    ))}
        </div>

        </div>
    )
}

export default Projects