import { React, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiLipstick } from 'react-icons/gi';
import { BarLoader } from "react-spinners";
import "./LipsDetailPage.css";

const LipsDetailPage = () => {

    const navigate= useNavigate();
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
            const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_category=lipstick&product_type=lipstick");
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
                        color="#F47181"/>
                        </div>
                    </>
                        );
                    };

            const filterProduct = (brandName) => {
                const updatedList = data.filter((e)=>e.brand === brandName);
                setFilter(updatedList);
            }

            const ShowProducts = () => {
                return ( 
                    <>
                    <div className="button d-flex justify-content-center mb-5 pb-5">
                        <button onClick={() => filterProduct("colourpop")} className="btn btn-outline-secondary btn-sm">colourpop</button>
                        <button onClick={() => filterProduct("boosh")} className="btn btn-outline-secondary btn-sm">boosh</button>
                        <button onClick={() => filterProduct("nyx")} className="btn btn-outline-secondary btn-sm">nyx</button>
                        <button onClick={() => filterProduct("clinique")} className="btn btn-outline-secondary btn-sm">clinique</button>
                        <button onClick={() => filterProduct("dior")} className="btn btn-outline-secondary btn-sm">dior</button>
                        <button onClick={() => filterProduct("smashbox")} className="btn btn-outline-secondary btn-sm">smashbox</button>
                        <button onClick={() => filterProduct("benefit")} className="btn btn-outline-secondary btn-sm">benefit</button>
                        <button onClick={() => filterProduct("revlon")} className="btn btn-outline-secondary btn-sm">revlon</button>
                        <button onClick={() => filterProduct("maybelline")} className="btn btn-outline-secondary btn-sm">maybelline</button>
                    </div>

                    {filter.map((product) => {
                        return(
                    <>
                        <div className="col-md-3 mb-4">
                            <div class="card h-100 text-center p-4" key={product.id}>
                                <img src={product.api_featured_image} className="card-img-top" alt={product.title}/>
                                <p style={{color: "black"}}>{product.id}</p>
                                <div className="card-body">
                                    <div className="card-title mb-0 lead fw-bold">
                                        <h5 style={{color: "black"}}>{product.brand}</h5>
                                        <h4 className="card-text" style={{color: "#5A5D60"}}>{product.name}</h4>
                                        <p>${product.price}</p>
                                        <h5 style={{color: "#5A5D60"}}>Category: {product.category}</h5>
                                        <NavLink to={`/Detail/${product.id}`} className="btn btn-primary" style={{marginBottom: "20px"}}>Check Detail</NavLink>
                                        <a href="#" className="btn btn-danger" style={{marginBottom: "20px"}}>Delete Product</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })};
        </>
    );
};

    return (
        <div className="nav" style={{display: "flex", flexDirection: "column", height: "100%"}}>
            <ul>
                <li style={{color: "#F47181", fontSize: "30px"}}><strong>BEAUTY</strong><span>OU</span><GiLipstick /></li>
                <li onClick={GoHome} style={{color: "#7D8D9C", fontSize: "15px"}}>Home</li>
                <li className="" onClick={SignOut} style={{color: "#7D8D9C", fontSize: "15px", marginRight: "50px"}}>Sign Out</li>
            </ul>
    
    <div className="addReview">
        <form className="row g-3" style={{padding: 35}}>
            <div className="col-auto" style={{marginTop: 80}}>
                <label for="inputId" className="visually-hidden">ID</label>
                <input type="text" className="form-control" id="inputId" placeholder="ID Product"/>
                </div>
                
                <div className="col-auto" style={{marginTop: 80}}>
                    <label for="inputPassword" className="visually-hidden">Name product</label>
                    <input type="text" className="form-control" id="inputPassword" placeholder="Name product"/>
                    </div>
                    
                    <div className="col-auto" style={{marginTop: 80}}>
                        <button type="submit" className="btn btn-primary mb-3">Search Product</button>
                        </div>
                </form>
            </div>
            <hr style={{marginBottom: 15}}/>
            
            <div className="loading">
                {loading ? <Loading/> : <ShowProducts/>}
                    </div>
                        <footer onClick={AboutUs}><strong>ABOUT US</strong></footer>
                            </div>
                        );
                    };

export default LipsDetailPage;