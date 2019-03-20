import React, { useState, useEffect } from "react"
import serverMessages from "../utils/serverMessages"

const FileInput = ({ setFilteredText, options }) => {
  const [text, setText] = useState("")

  useEffect(() => {
    filterFile()
  })

  let fileReader

  const testLine = line => {
    const date = "\\[\\d{2}:\\d{2}:\\d{2}\\]"
    const filters = {
      c2: checked => checked && `^\\d{1,2} ${date} \\[\\w+ @ 2\\]:`,
      c3: checked => checked && `^\\d{1,2} ${date} \\[\\w+ @ 2\\]:`,
      c1: checked => checked && `^\\d{1,2} ${date} \\[\\w+ @ 2\\]:`,
      local: checked => checked && `^\\d{1,2} ${date} [^\\[]`,
      peuple: checked => checked && `^\\d{1,2} ${date} \\[\\w+ @ 1[1-8]\\]:`,
      channels: liste => {
        const numbers = liste
          .split(";")
          .map(part => part.trim())
          .filter(number => Boolean(number) && !isNaN(number))
          .join("|")
        return numbers && `@ (${numbers})]:`
      },
      mp: checked => checked && `${date} \\[MP`,
    }

    const selecteFilters = Object.keys(options)
      .map(option => filters[option] && filters[option](options[option]))
      .filter(Boolean)

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

    let toExclude = serverMessages
    if (options.hrp) {
      toExclude = [
        ...toExclude,
        `${date} ([\\w+ @ \\d+]: )?((\\(.+\\))|((\\(?.+\\)))|(\\(.+\\)?))`,
      ]
    }

    return (
      line &&
      dateMatch.test(line) &&
      namesMatch(line) &&
      toExclude.every(exclude => {
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
    setFilteredText(filteredLines.join("\r\n"))
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
