class Main {
    constructor() {
        this.pacientes = [];
    }

    addPaciente(paciente) {
        this.pacientes.push(paciente);
    }

    addMedicamentoPaciente(idPaciente, codigoMedicamento, nome, tipo) {
        let paciente = this.pacientes.find(paciente => paciente.id === idPaciente);
        if (paciente) {
            paciente.inserirMedicamentoPrescrito(new Medicamento(codigoMedicamento, nome, tipo));
        }
    }

    transferirMedicamento(idPacienteOrigem, idPacienteDestino, codigoMedicamento) {
        let pacienteOrigem = this.pacientes.find(paciente => paciente.id === idPacienteOrigem);
        let pacienteDestino = this.pacientes.find(paciente => paciente.id === idPacienteDestino);
        if (pacienteOrigem && pacienteDestino) {
            let medicamento = pacienteOrigem.getMedicamentoPrescrito(codigoMedicamento);
            if (medicamento) {
                pacienteOrigem.removerMedicamentoPrescritoByCodigo(codigoMedicamento);
                pacienteDestino.inserirMedicamentoPrescrito(medicamento);
            }
        }
    }

    mostrarTodosOsPacientes() {
        this.pacientes.forEach(paciente => console.log(paciente.imprimirCompleto()));
    }
}

let main = new Main();
main.addPaciente(new Paciente(1, "João Rodrigues"));
main.addMedicamentoPaciente(1, 1, "Paracetamol", "Analgésico");
main.addMedicamentoPaciente(1, 2, "Amoxicilina", "Antibiótico");
main.mostrarTodosOsPacientes();
main.addPaciente(new Paciente(2, "Arthur Teberges"));
main.transferirMedicamento(1, 2, 1);
main.mostrarTodosOsPacientes();