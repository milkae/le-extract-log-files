import React from "react"

import Layout from "../components/layout"
import FileReader from "../components/fileReader"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`landes éternelles`, `jeu de rôle`, `jdr`, `mmorpg`, `rpg`]} />
    <h2>Outil d'extraction des logs</h2>
    <FileReader />
  </Layout>
)

export default IndexPage
