import fs from 'fs'

//lee un archivo de manera asincrona
fs.readFile('./data/example.txt', 'utf8',(err, data)=>{
    if(err) throw err;        
    console.log('contenido del archivo:', data);
});

//escribir un nuevo archivo
fs.writeFile('./data/newfile.txt', 'contenido nuevo', err=>{
    if (err) throw err;
    console.log('archivo creado y escrito');
}
);

//renombra un archivo
fs.rename('./data/newfile.txt', './data/renamedfile.txt', err=>{
    if (err) throw err;
    console.log('Archivo renombrado');
})
