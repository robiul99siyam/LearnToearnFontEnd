import { Link } from 'react-router-dom';
import useSWR from "swr";


const fetcher = async (...args) => {
    const res = await fetch(...args);
    const data = await res.json();
    return data;
}

const BlogPost = () => {
    const { data, error } = useSWR("https://robiulislam0580.pythonanywhere.com/blog/Blog/", fetcher)
    console.log(data)
    if (error) {
        return <p>404 page not found </p>
    }

    if (!data) {
        return <div className="card" style={{ width: '25rem', minHeight: '350px', margin: '10px', backgroundColor: '#f0f0f0' }}>
            <div className="card-img-top" style={{ width: '100%', height: '200px', backgroundColor: '#ddd' }}></div>
            <div className="card-body">
                <h3 className="card-title fw-bold" style={{ backgroundColor: '#ccc', height: '30px', width: '70%' }}></h3>
                <p className="card-text" style={{ backgroundColor: '#e0e0e0', height: '20px', width: '90%', margin: '10px 0' }}></p>
                <p className="card-text" style={{ backgroundColor: '#e0e0e0', height: '20px', width: '50%' }}></p>
            </div>
        </div>
    }

    return (
        <>

<h1 className='text-center fw-bolder mt-5 mb-3'>BLOG POST</h1>

            <div className='blog-product d-flex justify-content-center align-items-center flex-wrap gap-5 mt-5 mb-5'>
                {
                    data.map((item, index) => (

                        <Link style={{ textDecoration: "none" }} to={`/BlogDetails/${item.id}`} key={index}>
                            <div className="card" style={{ width: "25rem" }}>
                                <img src={item.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title fw-bold">{item.title}</h3>
                                    <p className="card-text">{item.description.slice(0, 200)}</p>
                                    <p className="card-text fw-bold">Read More <i class="bi bi-arrow-right"></i></p>

                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>


        </>
    );
}

export default BlogPost;
