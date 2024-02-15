'use Client';
import React  from "react";
import Image from 'next/image'
import styles from './Products.module.css'; 
import { Client } from "@vercel/postgres";

interface product {
  id:number;
  name:string;
}

const productsPage = async () => {

  const res = await fetch('https://657ace59394ca9e4af12b4a4.mockapi.io/api/v1/products',  { cache: 'no-store' });
  const products = await res.json();

  return (
    <div className="content-wrapper">
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
                </div>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  
  )
}

export default productsPage;