SELECT * FROM funcionarios 
JOIN departamentos
ON departamentos.id_dept = funcionarios.id_departamento;

-- Todos campos da tabela funcionario e todos campos da tabela departamentos
-- JOIN serve para trazer conteudo de 2 tabelas que possuem relacionamento
