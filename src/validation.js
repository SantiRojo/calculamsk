async function validate(acreditationNumber) {

  await fetch('https://apimocha.com/nominamsk/nomina')
          .then(response => response.json())
          .then(data => {
            let usuario = data.find(el => (el.legajo === acreditationNumber));
            
            if( usuario ) {
              console.log(`Te damos la bienvenida ${usuario.nombre}`);
            } else {
              console.log('No tenes permiso para acceder');
            };
          });

};