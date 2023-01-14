SELECT dept.descricao as "Departamento", COUNT(func.id_departamento) as "Quantidade Funcionarios "
FROM funcionarios as func
JOIN departamentos as dept
ON func.id_departamento = dept.id_dept
--GROUP BY dept.id_dept -- ou 
GROUP BY func.id_departamento; -- igual de cima