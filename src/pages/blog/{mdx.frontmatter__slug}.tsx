import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'
import Seo from '../../components/Layout/seo'

interface Props{
  data: {
    mdx: {
      frontmatter: {
        title: string
        date: string
        hero_image_alt: string
        hero_image_credit_link: string
        hero_image_credit_text: string
        hero_image: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData
          }
        }
      }
    }
  }
  children: React.ReactNode
}


const BlogPost: React.FC<Props> = ({ data, children }) => {
  console.log(data);
  
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {image && <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />}
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({ data }: Props) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost
