import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json()

    return {
        props: {posts:data}
    }
}
export default function Test({posts}){
    return (
        <>
        <Head>
            <title>Blogs</title>
        </Head>
        <main>
            {posts.map(post =>(
                <Link  href={'/blogs/'+ post.id} key={post.id} >
                    <a className="blog-post">{post.title}</a>

                </Link>
            ))}
        </main>
        </>
    )
    
}