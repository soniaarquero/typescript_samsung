import { Address } from "./address";
import { Mail } from "./mail";
import { Person } from "./person";
import { Phone } from "./phone";

let personas: Person[] = [];

personas.push(new Person(
    "Sofia",
    "Rodriguez Peña",
    34,
    "8879974T",
    "03/11/1988",
    "azul",
    "mujer",
    new Address(
        "Calle Aravaca",
        5,
        6,
        "B",
        28909,
        "Getafe",
        "Madrid"
    ),
    new Mail(
        "Trabajo",
        "srodriguez@gmail.es"
    ),
    new Phone(
        "Trabajo",
        633003300
    ),
    "Solo disponible por las tardes"
));

personas.push(new Person(
    "Diego",
    "Miguel Luna",
    25,
    "3588744A",
    "30/11/1997",
    "rojo",
    "hombre",
    new Address(
        "Calle Cáceres",
        3,
        5,
        "Derecha",
        29005,
        "Lugo",
        "Lugo"
    ),
    new Mail(
        "Personal",
        "diegomluna@hotmail.com"
    ),
    new Phone(
        "Casa",
        984896520
    ),
    ""
));

personas.push(new Person(
    "Roberto",
    "Iglesias Montero",
    54,
    "87759667D",
    "13/12/1969",
    "negro",
    "hombre",
    new Address(
        "Avenida de América",
        159,
        4,
        "A",
        28024,
        "Madrid",
        "Madrid"
    ),
    new Mail(
        "Personal",
        "riglemon@hotmail.com"
    ),
    new Phone(
        "Personal",
        687666999
    ),
    "Insistir en la llamada"
));

let personaFiltrada: Person = personas.filter(a => a.dni == "87759667D")[0];

let nuevaDireccion: Address = new Address("Calle Antigua", 3, 0, "0", 37001, "Salamanca", "Salamanca");

personaFiltrada.direcciones.pop();
personaFiltrada.direcciones.push(nuevaDireccion);

let nuevoMail: Mail = new Mail("Trabajo","riglemon@aytosalamanca.org");

personaFiltrada.mails.pop();
personaFiltrada.mails.push(nuevoMail);

let nuevoTelefono: Phone = new Phone("Trabajo", 600987234);

personaFiltrada.telefonos.pop();
personaFiltrada.telefonos.push(nuevoTelefono);

for(let i = 0; i < personas.length; i++) {
    console.log(personas[i]);
}
