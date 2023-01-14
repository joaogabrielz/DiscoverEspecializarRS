SELECT dept.descricao as "Setor", COUNT(func.id_departamento) as "Quantidade Funcionarios > 2"
FROM funcionarios as func
JOIN departamentos as dept
ON func.id_departamento = dept.id_dept
GROUP BY dept.id_dept
--WHERE count(func.id_departamento) >= 2 -- WHERE so analises com proprios campos, nao campos agrupados
HAVING count(func.id_departamento) >= 2;
--HAVING count(func.id_departamento) IN (2, 4);