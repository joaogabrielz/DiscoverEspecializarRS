SELECT * FROM funcionarios 
LIMIT 4 OFFSET 2; 

SELECT * FROM funcionarios 
LIMIT 4 OFFSET 4;

-- OFFSET no limit quando ele deve ignorar
-- exemplo OFFSET 2, vai ignorar os 2 primeiros.