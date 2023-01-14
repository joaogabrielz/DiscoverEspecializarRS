SELECT * FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept
WHERE funcionarios.id_departamento = 2;
-- WHERE departamentos.id_dept = 2;

-- clausula WHERE para selecionar a partir de um requisitom no caso depart. de ti


