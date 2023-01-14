-- conta quantos departamentos encontrou:

SELECT COUNT(id_departamento) FROM funcionarios; -- 9


-- junta departamentos iguais e conta quantos de cada departamento:

SELECT id_departamento, COUNT(id_departamento) 
FROM funcionarios
GROUP BY id_departamento;
