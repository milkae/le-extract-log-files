import React from "react"

const Options = ({ setOptions, options }) => {
  const handleChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value
    const name = e.target.name
    setOptions({
      ...options,
      [name]: value,
    })
  }

  return (
    <form>
      <fieldset>
        <legend>Canaux sélectionnés :</legend>
        <ul>
          <li>
            <input
              type="checkbox"
              name="c2"
              checked={options.c2}
              onChange={handleChange}
            />
            <label htmlFor="c2">C2</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="local"
              checked={options.local}
              onChange={handleChange}
            />
            <label htmlFor="local">Local</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="peuple"
              checked={options.peuple}
              onChange={handleChange}
            />
            <label htmlFor="local">Peuple</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="c3"
              checked={options.c3}
              onChange={handleChange}
            />
            <label htmlFor="c3">C3</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="c1"
              checked={options.c1}
              onChange={handleChange}
            />
            <label htmlFor="c1">C1</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="c4"
              checked={options.c4}
              onChange={handleChange}
            />
            <label htmlFor="c4">C4</label>
          </li>
          <li>
            <input
              type="text"
              name="perso"
              placeholder="Ex: 2;13"
              value={options.perso}
              onChange={handleChange}
            />
            <label htmlFor="perso">
              Canaux personnalisé (Séparer leurs numéros à l'aide de
              point-virgule)
            </label>
          </li>
        </ul>
      </fieldset>
    </form>
  )
}

export default Options
