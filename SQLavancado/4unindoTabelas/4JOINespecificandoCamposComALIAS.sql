SELECT func.nome as "Nome Funcionario", func.cpf, dept.descricao as "Departamento"
FROM funcionarios as func
JOIN departamentos as dept
ON func.id_departamento = dept.id_dept;

-- usando alias evitar erros digitacao e maximizando tempo, personalizando

