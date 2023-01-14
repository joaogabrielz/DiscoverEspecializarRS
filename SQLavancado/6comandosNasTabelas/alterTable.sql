ALTER TABLE aluno RENAME TO alunos;

ALTER TABLE professor RENAME TO professores;



-- ALTERAR NOME SEM PERDER INTEGER E CHAVE ESTRANGEIRA da coluna
-- ALTER TABLE aulas RENAME COLUMN id_aluno TO matricula_aluno; 
-- esta perdendo chave estrangeira no SQLLITE


