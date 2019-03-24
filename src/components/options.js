import React, { useState } from "react"
import "./options.css"

const Options = ({ setOptions, options }) => {
  const [values, setValues] = useState(options)
  const [expanded, setExpanded] = useState(false)

  const handleChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value
    const name = e.target.name
    setValues({
      ...values,
      [name]: value,
    })
  }

  return (
    <div className="options">
      {!expanded ? (
        <button onClick={() => setExpanded(true)}>
          Personnaliser les filtres
        </button>
      ) : (
        <button onClick={() => setExpanded(false)}>x</button>
      )}
      {expanded && (
        <form
          className="options__form"
          onSubmit={e => {
            e.preventDefault()
            setOptions(values)
            setExpanded(false)
          }}
        >
          <div className="options__form__content">
            <fieldset>
              <legend>Canaux sélectionnés :</legend>
              <input
                type="checkbox"
                id="c2"
                name="c2"
                checked={values.c2}
                onChange={handleChange}
              />
              <label htmlFor="c2">C2</label>

              <input
                type="checkbox"
                id="local"
                name="local"
                checked={values.local}
                onChange={handleChange}
              />
              <label htmlFor="local">Local</label>

              <input
                type="checkbox"
                id="peuple"
                name="peuple"
                checked={values.peuple}
                onChange={handleChange}
              />
              <label htmlFor="local">Peuple</label>

              <input
                type="checkbox"
                id="c3"
                name="c3"
                checked={values.c3}
                onChange={handleChange}
              />
              <label htmlFor="c3">C3</label>

              <input
                type="checkbox"
                id="c1"
                name="c1"
                checked={values.c1}
                onChange={handleChange}
              />
              <label htmlFor="c1">C1</label>

              <input
                type="checkbox"
                id="c4"
                name="c4"
                checked={values.c4}
                onChange={handleChange}
              />
              <label htmlFor="c4">C4</label>
              <div>
                <label htmlFor="channels">
                  Canaux personnalisé
                  <span>
                    (Séparer leurs numéros à l'aide de points-virgules)
                  </span>
                </label>
                <input
                  type="text"
                  id="channels"
                  name="channels"
                  placeholder="Ex: 2;13"
                  value={values.channels}
                  onChange={handleChange}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>Autres filtres :</legend>
              <label htmlFor="names">
                Filtrer par noms de personnages
                <span>(Les séparer à l'aide de points-virgules)</span>
              </label>
              <div>
                <input
                  type="text"
                  id="names"
                  name="names"
                  value={values.names}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  id="mp"
                  name="mp"
                  checked={values.mp}
                  onChange={handleChange}
                />
                <label htmlFor="mp">Garder les MPs</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="hrp"
                  name="hrp"
                  checked={values.hrp}
                  onChange={handleChange}
                />
                <label htmlFor="hrp">Filtrer les messages HRP (beta)</label>
              </div>
            </fieldset>
          </div>

          <button style={{ margin: "auto", display: "block" }} type="submit">
            Mettre à jour les filtres
          </button>
        </form>
      )}
    </div>
  )
}

export default Options
