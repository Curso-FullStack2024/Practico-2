import { EventEmitter} from 'events';

//crea una instancia
const emisor=new EventEmitter()

//define el evento personalizado
emisor.on('saludo',(nombre)=>{
    console.log(`Hola, ${nombre} `);
});

//emite el evento 'saludo' y pasa como parametro 'Mundo'
emisor.emit('saludo','Mundo')