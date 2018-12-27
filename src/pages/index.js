import React from 'react'
import { Link, graphql } from 'gatsby'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <h2>Index</h2>
    <List>
      {data.allMarkdownRemark.edges.map(post => (
        <ListItem>
            <ListItemText>
              <ExpansionPanel>
                <ExpansionPanelSummary>
                  {post.node.frontmatter.title}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Link key={post.node.id}
                    to={post.node.frontmatter.path}>
                    {post.node.frontmatter.subtitle}
                  </Link>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </ListItemText>
        </ListItem>
      ))}
    </List>
  </Layout>
)

export const pageQuery = graphql`
         query IndexQuery {
            allMarkdownRemark(limit: 1000, filter: { frontmatter: { published: { eq: true } } }, sort: { fields: [frontmatter___date], order: ASC }) {
             edges {
               node {
                 id
                 frontmatter {
                   title
                   path
                   published
                   date
                   subtitle
                 }
               }
             }
           }
         }
       `
export default IndexPage
