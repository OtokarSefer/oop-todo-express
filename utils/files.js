import fs from 'node:fs/promises'

class FileManager {

    async FileManager(filename, data){
        try {
            data = JSON.stringify(data, null, 2)
            await fs.writeFile(filename, data)
        } catch(error){
            console.log('write error => ', error)
        }
    }

    async readFile(filename){
        try {
            const fileCount = await fs.readFile(filename, 'utf8')
            const fileData = JSON.parse(fileContent)
            return fileData
        } catch(error){
            console.error('read error =>', error)
            return null
        }
    }
}