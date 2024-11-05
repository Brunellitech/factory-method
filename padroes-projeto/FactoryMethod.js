class Usuario {
    constructor(nome) {
        this.nome = nome;
    }
    obterPermissoes() {}  
}class Cliente extends Usuario {
    obterPermissoes() {
        return "Acesso para comprar e visualizar produtos";
    }
}
class Administrador extends Usuario {
    obterPermissoes() {
        return "Acesso completo para gerenciar o sistema";
    }
}
class FabricaDeUsuarios {
    criarUsuario(tipo, nome) {
        if (tipo === "cliente") return new Cliente(nome);  // Cria um Cliente
        if (tipo === "administrador") return new Administrador(nome);  // Cria um Administrador
        throw new Error("Tipo de usuário inválido");  // Gera um erro para tipos inválidos
    }
}

const fabrica = new FabricaDeUsuarios();
const cliente = fabrica.criarUsuario("cliente", "João");  
const administrador = fabrica.criarUsuario("administrador", "Alice");  

console.log(cliente.obterPermissoes()); 
console.log(administrador.obterPermissoes()); 
