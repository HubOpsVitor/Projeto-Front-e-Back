import { RowDataPacket, ResultSetHeader } from "mysql2";
import pool from "../database";

// Interface da tabela alunos
export interface Aluno extends RowDataPacket {
    id: number;
    nomealunos: string;
    cpf: string;
    idade: number;
    telefone: string;
}

// SELECT - Buscar todos
export async function getAllalunos(): Promise<Aluno[]> {
    const [rows] = await pool.query<Aluno[]>("SELECT * FROM alunos");
    return rows;
}

// INSERT - Criar novo aluno
export async function createalunos(data: Omit<Aluno, 'id'>): Promise<ResultSetHeader> {
    try {
        const [result] = await pool.execute<ResultSetHeader>(
            'INSERT INTO alunos (nomealunos, telefone, cpf, idade) VALUES (?, ?, ?, ?)',
            [data.nomealunos, data.telefone, data.cpf, data.idade]
        );
        return result;
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        throw error;
    }
}

// UPDATE - Atualizar aluno
export async function updatealunos(id: number, data: Omit<Aluno, 'id'>): Promise<ResultSetHeader> {
    try {
        const [result] = await pool.execute<ResultSetHeader>(
            'UPDATE alunos SET nomealunos = ?, cpf = ?, idade = ?, telefone = ? WHERE id = ?',
            [data.nomealunos, data.cpf, data.idade, data.telefone, id]
        );
        return result;
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        throw error;
    }
}

// DELETE - Deletar aluno
export async function deletealunos(id: number): Promise<ResultSetHeader> {
    try {
        const [result] = await pool.execute<ResultSetHeader>(
            'DELETE FROM alunos WHERE id = ?',
            [id]
        );
        return result;
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        throw error;
    }
}
