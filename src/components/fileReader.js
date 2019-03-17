import React from "react"

const FileInput = ({ setText }) => {
  let fileReader
  const testLine = line => {
    const date = "\\[\\d{2}:\\d{2}:\\d{2}\\]"
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
      `${date} #Mg `,
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
      "@ 1]:",
      "@ 3]:",
      "Hourly time-stamp",
      "a été notifié, maintenant attends qu'il veuille n.gocier avec toi$",
      "a abandonné la n.gociation.$",
      "vient de se connecter.$",
      "vient de se d.connecter.$",
    ]

    return (
      line &&
      linesExcluded.every(exclude => {
        const dateMatch = new RegExp(date)
        const regex = new RegExp(exclude)
        return dateMatch.test(line) && !regex.test(line)
      })
    )
  }

  const handleFileRead = e => {
    const content = fileReader.result
    const lines = content.split(/[\r\n]+/g)
    const filteredLines = lines.filter(testLine)
    setText(filteredLines.join("\n"))
  }

  const handleFile = file => {
    fileReader = new FileReader()
    fileReader.onloadend = handleFileRead
    fileReader.readAsText(file)
  }

  return (
    <div>
      <input
        type="file"
        id="file"
        className="input-file"
        accept=".txt"
        onChange={e => handleFile(e.target.files[0])}
      />
    </div>
  )
}

export default FileInput
