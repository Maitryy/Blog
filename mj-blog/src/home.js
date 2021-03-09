// import { logDOM } from '@testing-library/react';
// import { useState, useEffect} from 'react';
import BlogList from './blogList'
import useFetch from './usefetch'

const Home = () => {
    //we'll empty it because we'll use json server 
    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    //   ]);
    
    //   const [name, setName] = useState('mario');
      const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    //   const handleDelete = (id) => {
    //       const newBlogs = blogs.filter((blog) => {
    //           return blog.id !== id
    //       })
    //       setBlogs(newBlogs);
    //   }
      //this function fires on every render
    //   useEffect(() => {
    //       console.log('use effect ran');
    //       console.log(name);
    //   }, [name]); 
   
      // dependency array which is the 2 argument of the useEffect function helps us to decide on which renders to fire it and not on all renders 
    return ( 
        <div className="home">
        { error && <div>{error} </div> }
        {isPending && <div> Loading.... </div>}
        {/* passing props in BlogList */}
        {/* we need to display only when we've data but we get null error after using json because blogs props that we pass is initially null and is filled asynchronously afterwards to tackle it we use.. conditional operation.  Smart...hehe */}
           {/* <BlogList blogs={blogs} handleDelete={handleDelete}/> */}
           {blogs && <BlogList blogs={blogs} />}
           {/* <button onClick = {() => {setName('luigi')}}>Change Name</button>
                <p>{name}</p> */}
        </div>
     );
}
 
export default Home;