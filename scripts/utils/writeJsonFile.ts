import { writeFileSync } from 'fs'

export function writeJsonFile(file: string, data: any) {
  writeFileSync(file, JSON.stringify(data, null, 2) + '\n')
}
