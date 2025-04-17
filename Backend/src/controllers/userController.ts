import { Request, Response } from "express";
import { getAllalunos, createalunos, updatealunos, deletealunos } from "../models/userModel";
import { Aluno } from "../models/userModel"; // <- Interface renomeada

export async function getAlunos(req: Request, res: Response): Promise<void> {
    try {
        const alunos = await getAllalunos();
        res.status(200).json(alunos);
    }
    catch (error) {
        res.status(500).json(`Erro ao listar os usuários -> ${error}`);
    }
}

export async function create(req: Request, res: Response): Promise<void> {
    try {
        const novoAluno: Omit<Aluno, "id"> = req.body;
        const rs = await createalunos(novoAluno);
        res.status(201).json(`Cadastro realizado -> ${rs}`);
    }
    catch (err) {
        res.status(500).json(`Erro ao tentar cadastrar ${err}`);
        console.log("REQ BODY:", req.body);

        
    }
}

export async function update(req: Request, res: Response): Promise<void> {
    try {
        const dadosAtualizados: Omit<Aluno, "id"> = req.body;
        const rs = await updatealunos(parseInt(req.params.id), dadosAtualizados);
        res.status(201).json(`Atualizado -> ${rs}`);
    }
    catch (err) {
        res.status(500).json(`Erro ao tentar atualizar ${err}`);
    }
}

export async function deleta(req: Request, res: Response): Promise<void> {
    try {
        const rs = await deletealunos(parseInt(req.params.id));
        res.status(201).json(`Deletado -> ${rs}`);
    }
    catch (err) {
        res.status(500).json(`Erro ao tentar deletar ${err}`);
    }
}
