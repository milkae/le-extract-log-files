import React, { useState } from "react"

import Layout from "../components/layout"
import FileReader from "../components/fileReader"
import FileDownloader from "../components/fileDownloader"
import Options from "../components/options"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => {
  const [diffViewIsVisible, showDiffView] = useState(false)
  const [texts, setTexts] = useState({ toKeep: false, toRemove: false })
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

  const { toKeep, toRemove } = texts

  const removeLine = (line, index) => {
    setTexts({
      toKeep: [...toKeep.slice(0, index), "", ...toKeep.slice(index + 1)],
      toRemove: [
        ...toRemove.slice(0, index),
        line,
        ...toRemove.slice(index + 1),
      ],
    })
  }

  const keepLine = (line, index) => {
    setTexts({
      toRemove: [...toRemove.slice(0, index), "", ...toRemove.slice(index + 1)],
      toKeep: [...toKeep.slice(0, index), line, ...toKeep.slice(index + 1)],
    })
  }

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`landes éternelles`, `jeu de rôle`, `jdr`, `mmorpg`, `rpg`]}
      />
      <Options setOptions={setOptions} options={options} />
      <div className="index__content">
        <div className="index__content__load">
          <p>Chargez le fichier des logs à traiter :</p>
          <FileReader setTexts={setTexts} options={options} />
        </div>
        {toKeep && !!toKeep.length && (
          <>
            <FileDownloader text={toKeep} />
            <div className="index__content__preview">
              <h3>Prévisualisation du texte :</h3>
              <button onClick={() => showDiffView(!diffViewIsVisible)}>
                Vue différentielle
              </button>
              <div className="viewer">
                {diffViewIsVisible ? (
                  <>
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
                  </>
                ) : (
                  <div className="">
                    {toKeep.filter(Boolean).map((item, i) => (
                      <div className="" key={i}>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage
