class Sujeito {
    constructor() {
        this.observadores = [];  
    }
    adicionarObservador(observador) {  
        this.observadores.push(observador);
    }
    removerObservador(observador) {  
        this.observadores = this.observadores.filter(obs => obs !== observador);
    }
    notificarObservadores(dados) {  
        this.observadores.forEach(observador => observador.atualizar(dados));
    }
}
class Observador {
    atualizar(dados) {  
        console.log(`Observador atualizado com os dados: ${dados}`);
    }
}
const sujeito = new Sujeito();
const observador1 = new Observador();
const observador2 = new Observador();

sujeito.adicionarObservador(observador1);  
sujeito.adicionarObservador(observador2);  

sujeito.notificarObservadores("Novos dados disponíveis");  
