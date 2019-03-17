import React from "react"

const FileDownLoader = ({text}) => {
  const downloadTxtFile = () => {
    const element = document.createElement("a")
    const file = new Blob([text], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = "cleaned_chat_logs.txt"
    document.body.appendChild(element)
    element.click()
  }

  return (
    <div>
      <button onClick={downloadTxtFile}>
        Télécharger le résultat dans un fichier
      </button>
    </div>
  )
}

export default FileDownLoader
