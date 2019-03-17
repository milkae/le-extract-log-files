import React, { useState, useEffect } from "react"

const FileInput = ({ setFilteredText, options }) => {
  const [text, setText] = useState("")

  useEffect(() => {
    filterFile()
  })

  let fileReader

  const testLine = line => {
    const date = "\\[\\d{2}:\\d{2}:\\d{2}\\]"
    const filters = {
      c2: checked => checked && "@ 2]:",
      c3: checked => checked && "@ 3]:",
      c1: checked => checked && "@ 1]:",
      local: checked => checked && `${date} [^\\[]`,
      peuple: checked => checked && "@ 1[1-8]]:",
      channels: liste => {
        const numbers = liste
          .split(";")
          .map(part => part.trim())
          .filter(number => Boolean(number) && !isNaN(number))
          .join("|")
        return numbers && `@ (${numbers})]:`
      },
    }

    const selecteFilters = Object.keys(options)
      .map(option => filters[option] && filters[option](options[option]))
      .filter(Boolean)

    const linesExcluded = [
      `${date} $`,
      `${date} Pour `,
      `${date} Fichiers `,
      `${date} Tu `,
      `${date} La `,
      `${date} Ton `,
      `${date} Le `,
      `${date} En `,
      `${date} Je `,
      `${date} Tes `,
      `${date} \\[MP`,
      `${date} Heure `,
      `${date} Jour `,
      `${date} Trop `,
      `${date} Ton `,
      `${date} Bien, `,
      `${date} Vers `,
      `${date} Un `,
      `${date} Une `,
      `${date} Impossible `,
      `${date} Cette `,
      `${date} Ca `,
      `${date} C'est `,
      `${date} Il `,
      `${date} Pas `,
      `${date} Nous `,
      `${date} Ile `,
      `${date} Vous `,
      `${date} Ne `,
      `${date} Rien `,
      `${date} #`,
      `${date} Utilise `,
      `${date} Continue, `,
      `${date} Ta `,
      `${date} Taille `,
      `${date} Bienvenue `,
      `${date} Kul'ack, `,
      `${date} Zone `,
      "Qu.te globale",
      "D.but du journal",
      "^Jour ",
      "^En ce jour",
      "^La ",
      "^Atey'Ech",
      "^L'Esprit ",
      "Hourly time-stamp",
      "a été notifié, maintenant attends qu'il veuille n.gocier avec toi$",
      "a abandonné la n.gociation.$",
      "vient de se connecter.$",
      "vient de se d.connecter.$",
    ]

    const namesMatch = line => {
      const names =
        options.names &&
        options.names
          .split(";")
          .map(part => part.trim())
          .filter(name => Boolean(name))
          .join("|")

      if (!names) {
        return true
      }

      const regex = new RegExp(`((${names}):)|((${names}) @)`)

      return regex.test(line)
    }

    const dateMatch = new RegExp(date)

    return (
      line &&
      dateMatch.test(line) &&
      namesMatch(line) &&
      linesExcluded.every(exclude => {
        const regex = new RegExp(exclude)
        return !regex.test(line)
      }) &&
      selecteFilters.some(filter => {
        const regex = new RegExp(filter)
        return regex.test(line)
      })
    )
  }

  const filterFile = () => {
    const lines = text.split(/[\r\n]+/g)
    const filteredLines = lines.filter(testLine)
    setFilteredText(filteredLines.join("\n"))
  }

  const handleFileRead = e => {
    const content = fileReader.result
    setText(content)
  }

  const handleFile = file => {
    fileReader = new FileReader()
    fileReader.onloadend = handleFileRead
    fileReader.readAsText(file, "ISO-8859-1")
  }

  return (
    <input
      type="file"
      id="file"
      className="input-file"
      accept=".txt"
      onChange={e => handleFile(e.target.files[0])}
    />
  )
}

export default FileInput
