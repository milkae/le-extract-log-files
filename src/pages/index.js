import React, { useState } from "react"

import Layout from "../components/layout"
import FileReader from "../components/fileReader"
import SEO from "../components/seo"

const IndexPage = () => {
  const [text, setText] = useState("")
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`landes éternelles`, `jeu de rôle`, `jdr`, `mmorpg`, `rpg`]}
      />
      <h2>Outil d'extraction des logs</h2>
      <FileReader setText={setText} />
      <div>
        {text.split("\n").map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
