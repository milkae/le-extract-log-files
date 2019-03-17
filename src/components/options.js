import React, { useState } from "react"

const Options = ({ setOptions, options }) => {
  const [values, setValues] = useState(options)

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
    <form
      onSubmit={e => {
        e.preventDefault()
        setOptions(values)
      }}
    >
      <fieldset>
        <legend>Canaux sélectionnés :</legend>
        <ul>
          <li>
            <input
              type="checkbox"
              name="c2"
              checked={values.c2}
              onChange={handleChange}
            />
            <label htmlFor="c2">C2</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="local"
              checked={values.local}
              onChange={handleChange}
            />
            <label htmlFor="local">Local</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="peuple"
              checked={values.peuple}
              onChange={handleChange}
            />
            <label htmlFor="local">Peuple</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="c3"
              checked={values.c3}
              onChange={handleChange}
            />
            <label htmlFor="c3">C3</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="c1"
              checked={values.c1}
              onChange={handleChange}
            />
            <label htmlFor="c1">C1</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="c4"
              checked={values.c4}
              onChange={handleChange}
            />
            <label htmlFor="c4">C4</label>
          </li>
          <li>
            <input
              type="text"
              name="perso"
              placeholder="Ex: 2;13"
              value={values.perso}
              onChange={handleChange}
            />
            <label htmlFor="perso">
              Canaux personnalisé (Séparer leurs numéros à l'aide de
              points-virgules)
            </label>
          </li>
        </ul>
      </fieldset>
      <button type="submit">Mettre à jour les filtres</button>
    </form>
  )
}

export default Options
