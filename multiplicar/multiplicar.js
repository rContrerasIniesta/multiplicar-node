const fs = require('fs');
const colors = require('colors');

module.exports.crearArchivo = (base, limite) => {
    return new Promise( (resolve, reject) =>{
        
        if(!Number(base)){
            reject('Error necesitamos un numero');
        }else{
            let data = '';
            for(let i=1; i<=limite; i++ ){
               data +=`${i} * ${base} = ${i*base} \n`;
            }
            
            fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
                if (err) reject(err);
                else resolve(`tabla-${base}.txt`);
              });
        }
        
    });
}

module.exports.listarArchivo = (base, limite) => {
    return new Promise( (resolve, reject) =>{
        
        if(!Number(base)){
            reject('Error necesitamos un numero');
        }else{
            let data = '';
            for(let i=1; i<=limite; i++ ){
               data +=`${i} * ${base} = ${i*base} \n`;
            }
            
            resolve(data);
        }
        
    });
}


