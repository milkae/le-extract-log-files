import React from "react"

const FileInput = () => {
  let fileReader
  const testLine = line => {
    const date = '\\[\\d{2}:\\d{2}:\\d{2}\\]'
    const linesExcluded = [ `${date} Pour remercier les aventuriers`]
    return linesExcluded.every(exclude => {
        const regex = new RegExp(exclude)
        return !regex.test(line);
    })
  }

  const handleFileRead = e => {
    const content = fileReader.result
    const lines = content.split(/[\r\n]+/g)
    const filteredLines = lines.filter(testLine)
    console.log(filteredLines)
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
