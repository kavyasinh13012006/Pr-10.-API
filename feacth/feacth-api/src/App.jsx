import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [products, setproducts] = useState([]);
  const fetachProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const deta = await response.json();
      setproducts(deta.products);
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetachProducts();
  }, []);


  return (
    <>
      <div className="container mt-4" align='center'>
        <div className="row">
          {
            products.map((val, index) => {
              return (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card" style={{ width: '19rem' }}>
                    <img src={val.images[0]} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Title:- {val.title}</h5>
                      <p className="card-title">description:- {val.description}</p>
                      <h6 className="card-text">category:- {val.category}</h6>
                      <h6 className="card-text">price:- {val.price}</h6>
                      <h6 className="card-text">discountPercentage:- {val.discountPercentage}</h6>
                      <h6 className="card-text">rating:- {val.rating}</h6>
                      <h6 className="card-text">stock:- {val.stock}</h6>
                      <ul>
                        {
                          val.tags?.map((t, idx) => {
                            return (
                              <li key={idx}>tags:- {t}</li>
                            )
                          })
                        }
                      </ul>
                      <h6 className="card-text">brand:- {val.brand}</h6>
                      <h6 className="card-text">sku:- {val.sku}</h6>
                      <h6 className="card-text">weight:- {val.weight}</h6>
                      <h5>dimensions:-</h5>
                      <ul>
                        <li className="card-text">height:- {val.dimensions?.height}</li>
                        <li className="card-text">depth:- {val.dimensions?.depth}</li>
                        <li className="card-text">width:- {val.dimensions?.width}</li>
                      </ul>
                      <h6 className="card-text">warrantyInformation:- {val.warrantyInformation}</h6>
                      <h6 className="card-text">shippingInformation:- {val.shippingInformation}</h6>
                      <h6 className="card-text">availabilityStatus:- {val.availabilityStatus}</h6>
                      <h6>reviews :-</h6>
                      {
                        val.reviews?.map((r, idx) => {
                          return (
                            <ul key={idx}>
                              <li>rating:- {r.rating}</li>
                              <li>comment:- {r.comment}</li>
                              <li>date:- {r.date}</li>
                              <li>reviewerName:- {r.reviewerName}</li>
                              <li>reviewerEmail:- {r.reviewerEmail}</li>
                            </ul>
                          )
                        })
                      }
                      <h6 className="card-text">returnPolicy:- {val.returnPolicy}</h6>
                      <h6 className="card-text">minimumOrderQuantity:- {val.minimumOrderQuantity}</h6>
                      <h5>meta:-</h5>
                      <ul>
                        <li><h6>createdAt:-</h6> {val.meta?.createdAt}</li>
                        <li><h6>updatedAt:-</h6> {val.meta?.updatedAt}</li>
                        <li><h6>barcode:-</h6> {val.meta?.barcode}</li>
                        <li><h6>qrCode:-</h6> <img src={val.meta?.qrCode} className="card-img-top" alt="..." /></li>
                      </ul>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
