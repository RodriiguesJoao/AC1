class Paciente {
    #id;
    #nome;
    #medicamentosPrescritos;

    constructor(id, nome) {
        #this.#id = id;
        #this.#nome = nome;
        #this.#medicamentosPrescritos = [];
    }

    getId() {
        return this.#id;
    }

    inserirMedicamentoPrescrito(medicamento) {
        this.#medicamentosPrescritos.push(medicamento);
    }

    removerMedicamentoPrescritoByCodigo(codigo) {
        this.#medicamentosPrescritos = this.#medicamentosPrescritos.filter(medicamento => medicamento.getCodigo() !== codigo);
    }

    getMedicamentoPrescrito(codigo) {
        return this.#medicamentosPrescritos.find(medicamento => medicamento.getCodigo() === codigo);
    }

    imprimir() {
        return `ID: 
        {this.#id}, Nome: ${this.#nome}`;
    }

    imprimirCompleto() {
        let output = Paciente: ${this.imprimir()}\n;
        output += "Medicamentos Prescritos:\n";
        this.#medicamentosPrescritos.forEach(medicamento => {
            output += ${medicamento.imprimir()}\n;
        });
        return output;
    }
}