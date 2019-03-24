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

  const removeLine = (line, index) => {
    setToKeep([...toKeep.slice(0, index), "", ...toKeep.slice(index + 1)])
    setToRemove([
      ...toRemove.slice(0, index),
      line,
      ...toRemove.slice(index + 1),
    ])
  }

  const keepLine = (line, index) => {
    setToRemove([...toRemove.slice(0, index), "", ...toRemove.slice(index + 1)])
    setToKeep([...toKeep.slice(0, index), line, ...toKeep.slice(index + 1)])
  }

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
                  <button onClick={() => removeLine(item, i)}>-</button>
                </div>
              ))}
            </div>
            <hr />
            <div className="viewer__window viewer__window--remove">
              {toRemove.map((item, i) => (
                <div className="viewer__window__line" key={i}>
                  <span>{i}</span>
                  <p>{item}</p>
                  <button onClick={() => keepLine(item, i)}>+</button>
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
