import { React, useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import { GiLipstick } from 'react-icons/gi';
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";

const CheeksDetailPage = () => {

    const navigate = useNavigate();
    const SignOut = () => {
        navigate(`/`);
    }
    const GoHome = () => {
        navigate(`/Home`);
    }
    const AboutUs = () => {
        navigate(`/About/Us`);
    }

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush");
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }

            return() => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return(
            <>
            <div style={{display: "flex", justifyContent: "center", marginTop: "200px"}}>
            <BarLoader
            color="#F47181"
            />
            </div>
            </>
        )
    }

    const ShowProducts = () => {
        return ( 
        <>
        {filter.map((product) => {
            return(
                <>
                <div className="products" style={{display: "flex", justifyContent: "center"}} key={product.id}>
                    <div className="cardDetail" style={{}}>
                    <img src={product.api_featured_image} alt={product.title} style={{height: "100%", width: "100%", borderRadius: 10}}/>
                    <h5 style={{color: "black"}}>{product.id}</h5>
                    <h3 style={{color: "#5A5D60"}}>{product.brand}</h3>
                    <h4 style={{color: "#5A5D60"}}>{product.name}</h4>
                    <p>${product.price}</p>
                    <h5 style={{color: "#5A5D60"}}>Category: {product.category}</h5>
                    <button className="checkDetail btn btn-primary" style={{marginBottom: "20px"}}>Check Detail</button>
                    <button className="deleteProduct btn btn-danger" style={{marginBottom: "20px"}}>Delete Product</button>
                    </div>
                </div>
                </>
                    )
                })}
            </>
        );
    };

    return (
            <div className="navbar" style={{display: "flex", flexDirection: "column", height: "100%"}}>
            <ul>
                <li style={{color: "#F47181", fontSize: "30px"}}><strong>BEAUTY</strong><span>OU</span><GiLipstick /></li>
                    <input type="text" placeholder="Search..." style={{width: "250px", height:35, borderRadius: 3, fontSize: "15px" ,backgroundColor: "#E1E7EC", border: "none", textAlign: "left", paddingLeft: "10px"}}/>
                    <li onClick={GoHome} style={{color: "#7D8D9C", fontSize: "15px"}}>Home</li>
                <li className="" onClick={SignOut} style={{color: "#7D8D9C", fontSize: "15px", marginRight: "50px"}}>Sign Out</li>
            </ul>
            <br></br>
        <div className="addReview">
            <label className="product">
                <input
                    type="text"
                    placeholder="Brand Product"
                    style={{width: "15%", height:25, borderRadius: 5, border: "none" ,marginBottom: 10, backgroundColor: "FFFFFF", borderColor: "#7D8D9C", marginTop: 50, marginLeft: 10, textAlign: "center"}}
                    />
                    </label>

                    <label className="id">
                    <input
                    type="text"
                    placeholder="ID"
                    style={{width: "10%", height:25, borderRadius: 5, border: "none" ,marginBottom: 10, backgroundColor: "FFFFFF", borderColor: "#7D8D9C", marginTop: 20, marginLeft: 10, textAlign: "center"}}
                        />
                    </label>
        
            <label className="review" style={{width: "15%", height:30, borderRadius: 5, marginBottom: 10, backgroundColor: "FFFFFF", borderColor: "#7D8D9C", marginTop: 20, marginLeft: 10}}>
                <input
                    type="text"
                    placeholder="Review"
                    style={{width: "25%", height:25, borderRadius: 5, border: "none" ,marginBottom: 10, backgroundColor: "FFFFFF", borderColor: "#7D8D9C", marginTop: 20, marginLeft: 10, textAlign: "center"}}
                        />
                    </label>
                    <Button style={{color: "white",backgroundColor: "#2562D9", borderRadius: 5, width: "10%", border: "none", height: 30, marginTop: 20, marginLeft: 10, textAlign: "center"}}>Add Review</Button>
                    <div className="updateReview">
                        <label className="product">
                    <input
                        type="text"
                        placeholder="Brand Product"
                        style={{width: "15%", height:25, borderRadius: 5, border: "none" ,marginBottom: 10, backgroundColor: "FFFFFF", borderColor: "#7D8D9C", marginTop: 20, marginLeft: 10, textAlign: "center"}}
                        />
                    </label>

                    <label className="id">
                    <input
                    type="text"
                    placeholder="ID"
                    style={{width: "10%", height:25, borderRadius: 5, border: "none" ,marginBottom: 10, backgroundColor: "FFFFFF", borderColor: "#7D8D9C", marginTop: 20, marginLeft: 10, textAlign: "center"}}
                        />
                    </label>
    
                    <label className="review" style={{width: "15%", height:30, borderRadius: 5, marginBottom: 10, backgroundColor: "FFFFFF", borderColor: "#7D8D9C", marginTop: 20, marginLeft: 10}}>
                    <input
                        type="text"
                        placeholder="Review"
                        style={{width: "25%", height:25, borderRadius: 5, border: "none" ,marginBottom: 10, backgroundColor: "FFFFFF", borderColor: "#7D8D9C", marginTop: 20, marginLeft: 10, textAlign: "center"}}
                        />
                    </label>
                    <Button style={{color: "white",backgroundColor: "#2562D9", borderRadius: 5, width: "10%", border: "none", height: 30, marginTop: 20, marginLeft: 10, textAlign: "center"}}>Update Review</Button>
                    </div>
        </div>

        <div className="loading">
            {loading ? <Loading/> : <ShowProducts/>}
            </div>

        <footer onClick={AboutUs}>
            <strong>ABOUT US</strong>
        </footer>
    </div>

    )
}

export default CheeksDetailPage;

