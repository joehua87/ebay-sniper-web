import documents from './documents.json'

export function getDocument(name: keyof typeof documents) {
  return documents[name]
}
