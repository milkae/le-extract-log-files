import React, { useState } from "react"

import Layout from "../components/layout"
import FileReader from "../components/fileReader"
import FileDownloader from "../components/fileDownloader"

import SEO from "../components/seo"

const IndexPage = () => {
  const [text, setText] = useState("")
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`landes éternelles`, `jeu de rôle`, `jdr`, `mmorpg`, `rpg`]}
      />
      <p>
        Chargez le fichier des logs à traiter : <FileReader setText={setText} />
      </p>
      {text && (
        <div>
          <FileDownloader text={text} />
          <h3 style={{ marginTop: "1rem" }}>Prévisualisation du texte :</h3>
          {text.split("\n").map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </div>
      )}
    </Layout>
  )
}

export default IndexPage
