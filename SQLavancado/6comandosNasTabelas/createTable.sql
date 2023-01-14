CREATE TABLE aluno(
 	matricula INTEGER PRIMARY KEY AUTOINCREMENT,
 	nome TEXT,
 	cpf INTEGER UNIQUE,
 	responsavel TEXT
  );
    
 CREATE TABLE professor(
 	id_professor INTEGER PRIMARY KEY AUTOINCREMENT,
 	nome TEXT,
 	cpf INTEGER UNIQUE,
 	materia TEXT
 );
 
 CREATE TABLE aulas(
 	id_professor INTEGER,
   	-- id_aluno INTEGER,
   	matricula_aluno INTEGER,
   	FOREIGN KEY(id_professor) REFERENCES professor(id_professor),
   	-- FOREIGN KEY(id_aluno) REFERENCES aluno(matricula)
   	FOREIGN KEY(matricula_aluno) REFERENCES aluno(matricula)
 );
 
 