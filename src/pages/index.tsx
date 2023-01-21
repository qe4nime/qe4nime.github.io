import React from "react"
import { Link } from "gatsby"
import { Box, Heading, Paragraph } from "grommet"

import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
import { SEO } from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading>Hi people</Heading>
    <Paragraph>Welcome to your new Gatsby site.</Paragraph>
    <Paragraph>Now go build something great.</Paragraph>
    <Box width={{ max: "300px" }} pad="small">
      <StaticImage
	  	alt="An oil painting of a musician playing guitar"
		src="../images/musician.png"
	  />
    </Box>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage