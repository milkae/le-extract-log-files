import React from "react"

const FileDownLoader = ({ text }) => {
  const downloadTxtFile = () => {
    const element = document.createElement("a")
    const file = new Blob([text.filter(Boolean).join("\r\n")], {
      type: "text/plain",
    })
    element.href = URL.createObjectURL(file)
    element.download = "cleaned_chat_logs.txt"
    document.body.appendChild(element)
    element.click()
  }

  return (
    <div>
      <button
        style={{
          backgroundColor: "hsl(224, 53%, 44%)",
          borderColor: "hsl(234, 23%, 50%)",
          color: "#fff",
          padding: "0.5rem 1rem",
        }}
        onClick={downloadTxtFile}
      >
        Télécharger les logs filtrés
      </button>
    </div>
  )
}

export default FileDownLoader
