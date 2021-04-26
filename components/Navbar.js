import Link from 'next/link'
export default function Navbar(){
    return(
        <nav style={{display:'flex',justifyContent:'space-between'}}>
            <div className="logo">BlogPosts</div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/blogs/test"><a>Blogs Listing</a></Link>
        </nav>
    )
}