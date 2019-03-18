import React, { useState } from "react"

import Layout from "../components/layout"
import FileReader from "../components/fileReader"
import FileDownloader from "../components/fileDownloader"
import Options from "../components/options"

import SEO from "../components/seo"

const IndexPage = () => {
  const [text, setText] = useState("")
  const [options, setOptions] = useState({
    c2: true,
    c3: false,
    c1: false,
    c4: false,
    mp: false,
    local: true,
    peuple: true,
    channels: "",
    names: "",
  })

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`landes éternelles`, `jeu de rôle`, `jdr`, `mmorpg`, `rpg`]}
      />
      <p>
        Chargez le fichier des logs à traiter :{" "}
        <FileReader setFilteredText={setText} options={options} />
      </p>
      <Options setOptions={setOptions} options={options} />
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
