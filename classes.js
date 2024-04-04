class Medicamento {
    constructor(codigo, nome, tipo) {
        this.codigo = codigo;
        this.nome = nome;
        this.tipo = tipo;
    }

    get codigo() {
        return this.codigo;
    }

    imprimir() {
        return `Código: ${this.codigo}, Nome: ${this.nome}, Tipo: ${this.tipo}`;
    }
}

class Paciente {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        this.medicamentosPrescritos = [];
    }

    get id() {
        return this.id;
    }

    inserirMedicamentoPrescrito(medicamento) {
        this.medicamentosPrescritos.push(medicamento);
    }

    removerMedicamentoPrescritoByCodigo(codigo) {
        this.medicamentosPrescritos = this.medicamentosPrescritos.filter(medicamento => medicamento.codigo !== codigo);
    }

    getMedicamentoPrescrito(codigo) {
        return this.medicamentosPrescritos.find(medicamento => medicamento.codigo === codigo);
    }

    imprimir() {
        return `ID: ${this.id}, Nome: ${this.nome}`;
    }

    imprimirCompleto() {
        let medicamentos = this.medicamentosPrescritos.map(medicamento => medicamento.imprimir()).join("\n");
        return `Paciente: ${this.imprimir()}\nMedicamentos:\n${medicamentos}`;
    }
}