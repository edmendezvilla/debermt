"use strict";

class Refrigerador {
    constructor(marca, capacidad, temperaturaActual) {
        this.marca = marca;
        this.capacidad = capacidad;
        this.temperaturaActual = temperaturaActual;
        this.alimentos = []; // Array para almacenar alimentos en el refrigerador
    }

    ajustarTemperatura(nuevaTemperatura) {
        this.temperaturaActual = nuevaTemperatura;
      alert(`La temperatura del refrigerador se ajustó a ${nuevaTemperatura} grados Celsius.`);
    }

    agregarAlimento(alimento) {
        this.alimentos.push(alimento);
        alert(`Se agregó ${alimento} al refrigerador.`);
    }

    mostrarContenido() {
        alert(`Refrigerador ${this.marca}, Capacidad: ${this.capacidad} litros, Temperatura: ${this.temperaturaActual} grados Celsius.`);
     alert("Contenido:");
        this.alimentos.forEach((alimento, index) => {
            alert(`${index + 1}. ${alimento}`);
        });
    }
}

// Ejemplo de uso
const miRefrigerador = new Refrigerador("Samsung", 500, 4);
miRefrigerador.agregarAlimento("Leche");
miRefrigerador.agregarAlimento("Frutas");
miRefrigerador.agregarAlimento("Verduras");
miRefrigerador.mostrarContenido();
miRefrigerador.ajustarTemperatura(3);
miRefrigerador.mostrarContenido();
