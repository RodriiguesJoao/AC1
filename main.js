class Main {
    constructor() {
        this.pacientes = [];
    }

    addPaciente(paciente) {
        this.pacientes.push(paciente);
    }

    addMedicamentoPaciente(idPaciente, codigoMedicamento, nome, tipo) {
        const paciente = this.pacientes.find(p => p.id === idPaciente);
        if (paciente) {
            paciente.medicamentosPrescritos.push({ codigo: codigoMedicamento, nome: nome, tipo: tipo });
        } else {
            console.log("Paciente não encontrado.");
        }
    }

    transferirMedicamento(idPacienteOrigem, idPacienteDestino, codigoMedicamento) {
        const pacienteOrigem = this.pacientes.find(p => p.id === idPacienteOrigem);
        const pacienteDestino = this.pacientes.find(p => p.id === idPacienteDestino);
        if (pacienteOrigem && pacienteDestino) {
            const index = pacienteOrigem.medicamentosPrescritos.findIndex(m => m.codigo === codigoMedicamento);
            if (index !== -1) {
                const medicamento = pacienteOrigem.medicamentosPrescritos.splice(index, 1)[0];
                pacienteDestino.medicamentosPrescritos.push(medicamento);
            } else {
                console.log("Medicamento não encontrado para transferência.");
            }
        } else {
            console.log("Paciente de origem ou destino não encontrado.");
        }
    }

    mostrarTodosOsPacientes() {
        this.pacientes.forEach(p => {
            console.log(Paciente: ${p.nome});
            console.log("Medicamentos Prescritos:");
            p.medicamentosPrescritos.forEach(m => {
                console.log(Código: ${m.codigo}, Nome: ${m.nome}, Tipo: ${m.tipo});
            });
        });
    }
}