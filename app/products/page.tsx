import React  from "react";
import Image from 'next/image'
import Link from 'next/link';
import styles from './Products.module.css'; 
interface product {
  id:number;
  name:string;
}

const productsPage = async () => {

  const res = await fetch('https://657ace59394ca9e4af12b4a4.mockapi.io/api/v1/products',  { cache: 'no-store' });
  const products = await res.json();

  return (

    <div className="content-wrapper container-fluid">
      <div className={"row"}>
        <div className={"col-4 card "+styles.productSummary}>
            <div className="card-img-overlay">
              <h1 className="card-title">Products</h1>
              <hr/>
              <p className="card-text">Dynamic orthoses unmatched in quality, fit, and function – created to your precise specifications and backed by a full (90-day) warranty. </p>
            </div>
        </div>
        <div className={"col-8 "+styles.columnTwo}>
              <Image
                src="/product_landing_page/masthead-8a.jpg" //+product.id+'.png'}
                width={1012}
                height={400}
                alt="State Creation"
            />
        </div>
      </div>

      <div className="row">
          <div className={"col-6 card "+styles.customorthosisCard}>
              <div className="card-body">
                <h1 className="card-title">
                  <Link href="/products/ProductListing?productType=Custom Orthoses">
                        Custom Orthoses &#8594;
                  </Link>
                  </h1>
                <span className="card-text has-subhead">Dynamic Ankle Foot Orthoses & Other Custom Devices</span>
              </div>
              <Image
                src="/product_landing_page/teaser-custom-img.png" //+product.id+'.png'}
                width={266}
                height={200}
                alt="State Creation"
            />

          </div>
          <div className={"col-6 card "+styles.fastFitCard}>
              <div className="card-body">
                <h1 className="card-title">
                  <Link href="/products/ProductListing">
                      Fast Fit® Solutions &#8594;
                  </Link>
                  </h1>
                <span className="card-text has-subhead">Shoe Inserts & JumpStart® Orthoses</span>
              </div>
              <Image
                src="/product_landing_page/teaser-fast-fit-img.png" //+product.id+'.png'}
                width={266}
                height={200}
                alt="State Creation"
            />
          </div>
      </div>
    </div>
    /**<div className="content-wrapper">
      <div className="container">
        <h1>Custom DAFO®</h1>
        {
          products.map(product =>
          <div className="row" key={product.id}>
            <div className="col">
              <div className={"card text-center"}>
                <Image
                className={styles.imgeCenterAllignment}
                src="/products/dafo4_softy.png" //+product.id+'.png'}
                width={136}
                height={12}
                alt="State Creation"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <a href="#" className="btn btn-warning">ORDER FORM</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-center">
                <Image
                className={styles.imgeCenterAllignment}
                src="/products/dafo4_softy.png" //+product.id+'.png'}
                width={136}
                height={12}
                alt="State Creation"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <a href="#" className="btn btn-warning">ORDER FORM</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-center">
                <Image
                className={styles.imgeCenterAllignment}
                src="/products/dafo4_softy.png" //+product.id+'.png'}
                width={136}
                height={12}
                style={{
                  justifyContent: "center",
                }}
                alt="State Creation"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <a href="#" className="btn btn-warning">ORDER FORM</a>
                </div>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>*/
  
  )
}

export default productsPage;