
SELECT * FROM funcionarios
LEFT OUTER JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept;


-- JOIN normal ignora os dados que sao nulos nas tableas 'A ESQUERDA'
-- por exemplo josefina que nao tem departamento.
-- para isso usa-se LEFT OUTER JOIN
-- ele mostra todo conteudo mesmo nao tendo o relacionemnto do 'ON'

-- SELECT * FROM departamentos
-- LEFT OUTER JOIN funcionarios, pega funcionarios q tem departamento null

-- SELECT * FROM funcionarios
-- LEFT OUTER JOIN departamentos mostra , pega departamento que nao tem funcionarios null



