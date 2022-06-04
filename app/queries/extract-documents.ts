import fs from 'fs'
import path from 'path'
import glob from 'fast-glob'

const defaultAlias = { '~': path.dirname(__dirname) }

export function extractFragments(input: string, alias = defaultAlias) {
  let output = input
  const deep = 100
  let iter = 0
  while (iter <= deep) {
    const tmp = /#import "(.*)"/.exec(output)
    if (!tmp) {
      return output
    }
    let fragmentFile = tmp[1]
    Object.entries<string>(alias).forEach(([from, to]) => {
      fragmentFile = fragmentFile.replace(from, to)
    })
    const fragmentContent = fs.readFileSync(fragmentFile, 'utf-8')
    output = output.replace(`#import "${tmp[1]}"`, fragmentContent)
    iter += 1
  }
  throw new Error(`Cannot resolve after ${deep} recursive`)
}

const files = glob.sync(`${__dirname}/{queries,mutations}/**/*.gql`)

const documents = files.reduce(
  (acc: Record<string, string>, filePath: string) => {
    const name = filePath
      .replace(__dirname, '')
      .replace(/^\/queries\//, '')
      .replace(/^\/mutations\//, '')
      .replace(/\.gql$/, '')
    const document = fs.readFileSync(filePath, 'utf-8')
    return {
      ...acc,
      [name]: extractFragments(document),
    }
  },
  {},
)

fs.writeFileSync(
  path.join(__dirname, 'documents.json'),
  JSON.stringify(documents, null, 2),
)
