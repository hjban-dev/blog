import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Layout/seo"


const IndexPage: React.FC<PageProps> = () => {
  const pageTitle = "Home Page3 d"
  return (
    <Layout pageTitle={pageTitle}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page 1" />

export default IndexPage
