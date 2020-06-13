import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
      <SEO title="Home" />
      <div style={{
          width: '100%',
          height: '100%'
        }}>
          <h1 style = {{ textAlign: 'center', marginBottom: 0}}>
            hey welcome to my site! I'm 
            <br></br>
            <br></br>
            <span style = {{fontSize: '5rem', 
                              color: '#389ACC' 
              
            }}>
              Nur•in
            </span>
          </h1>
          <h2 style = {{ textAlign: 'center', color: '#29658B'}}>
            /noor-in/
          </h2>

        </div>
    </Layout>
  )
  
  export default IndexPage