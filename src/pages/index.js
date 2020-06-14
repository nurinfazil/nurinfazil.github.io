import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
      <SEO title="Home" />
      <div style={{
          display: 'flex',
          flexDirection: 'column'
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
          <h2 style = {{ textAlign: 'center', color: '#29658B', marginBottom: '1rem'}}>
            /noor-in/
          </h2>
          <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', alignSelf: 'center'}}>
            <h3 style = {{textAlign: 'center', margin: 0}}>(1) third-year computer engineering student at the university of toronto </h3>
            <h3 style = {{textAlign: 'center', margin: 0}}>(2) passionate about creating cool things while learning cool stuff </h3>
            <h3 style = {{textAlign: 'center', margin: 0}}>(3) interests in web development and software development </h3>
          </div>
          

        </div>
    </Layout>
  )
  
  export default IndexPage