import React, { useState } from "react"

import Layout from "../components/layout"
import FileReader from "../components/fileReader"
import FileDownloader from "../components/fileDownloader"
import Options from "../components/options"

import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => {
  const [toKeep, setToKeep] = useState("")
  const [toRemove, setToRemove] = useState("")
  const [options, setOptions] = useState({
    c2: true,
    c3: false,
    c1: false,
    c4: false,
    mp: false,
    hrp: false,
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
        <FileReader
          setToKeep={setToKeep}
          setToRemove={setToRemove}
          options={options}
        />
      </p>
      <Options setOptions={setOptions} options={options} />
      {toKeep && (
        <div>
          <FileDownloader text={toKeep} />
          <h3 style={{ marginTop: "1rem" }}>Prévisualisation du texte :</h3>
          <div className="viewer">
            <div className="viewer__window viewer__window--keep">
              {toKeep.map((item, i) => (
                <div className="viewer__window__line" key={i}>
                  <span>{i}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="viewer__window viewer__window--remove">
              {toRemove.map((item, i) => (
                <div className="viewer__window__line" key={i}>
                  <span>{i}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default IndexPage
