import path from 'path'

const filePath='./data/example.txt'

const dirName= path.dirname(filePath)
console.log('Directorio base: ', dirName);

const baseName = path.basename(filePath,'.txt')
console.log('Nombre del archivo: ',baseName);

const extname=path.extname(filePath,'txt')
console.log('Extension del archivo', extname);

const newPath= path.join('/user', 'docs', 'newFile.txt');
console.log('Nueva ruta: ', newPath);