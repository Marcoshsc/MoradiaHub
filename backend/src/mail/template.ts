import * as path from 'path'
import * as fs from 'fs'
import * as handlebars from 'handlebars'

export const getTemplate = (name: string, replacements: unknown): string => {
  const filePath = path.join(__dirname, `../../templates/${name}.html`)
  const source = fs.readFileSync(filePath, 'utf-8').toString()
  const template = handlebars.compile(source)
  const htmlToSend = template(replacements)
  return htmlToSend
}
