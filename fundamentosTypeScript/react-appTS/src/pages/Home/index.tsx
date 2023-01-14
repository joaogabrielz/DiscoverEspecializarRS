import './style.css';
import React, { useState, useEffect } from 'react';
import { Card, CardProps } from '../../components/Card';

type ProfileResponse = {
  name: string,
  avatar_url: string
}

type User = {
  name: string,
  avatar: string,
}

export function Home() {

  // [0] Estado, lugar onde fica amazenado, 
  // [1] funcao que atualiza esse estado

  // IMUTABILIDADE: Principio dos estados React / da Progamação Funcional
  // conteudo nao deve ser alterado e sim substituido, mais performatico
  // por isso nao atualiza estado diretamente, e sim atraves de uma funcao que o muda

  // HOOKS -> useState, useEffect, sao funcoes, que permite conectar estados e ciclo de vida
  // do react, Funcionais, nao mais POO
  // 


  const [studentName, setStudentName] = useState('...');
  const [students, setStudents] = useState<CardProps[]>([]);
  const [user, setUser] = useState<User>({} as User);

  function handleAddStudent() {
    const newStudent = {
        name: studentName,
        time: new Date().toLocaleTimeString("pt-br", {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
    };
    setStudentName('');
    setStudents(prevState => [...prevState, newStudent]);
    changeGithubUser(studentName);
  }

  async function changeGithubUser(user: string) {
    const response = await fetch(`https://api.github.com/users/${user}`)
    const data = await response.json() as ProfileResponse;
    setUser({
      name: data.name,
      avatar: data.avatar_url,
    })
  }


  useEffect(() => {
   
  // corpo useEffect, fica acoes ou aquilo que quer q execute, 
  // executado assim q interface é renderizada, automaticamente

    // fetch('https://api.github.com/users/joaogabrielz')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setUser({
    //       name: data.name,
    //       avatar: data.avatar_url,
    //     })
    //   })
    //   .catch((e) => console.error(e));

    // use effect nao aceita async atras dele 'async useEffect' -x
    //  ASYNC AWAIT
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/joaogabrielz')
      const data = await response.json();
      console.log("Dados => ", data);
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })

    }
    fetchData(); // ou IIFE

  }, []); 
  // padrao executa 1vez
  // [] vazio é executado uma vez
  // [students] se houver coisas vai ser executado toda vez q o estado for mudado..
  // [students, studentName] vai ser executado se algum estado mudar.

  return (
    <div className='container'>
      <header>
        <h1>Lista de Presença</h1>
        <div>
            <strong>{ user.name }</strong>
            <img src={ user.avatar } alt="foto perfil github" />
        </div>
      </header>
      <h6>Adicionando: {studentName}</h6>
      <input 
        id='inputName'
        type="text" 
        placeholder='Digite o nome...' 
        onChange={e =>  setStudentName(e.target.value)}
      />
      <button 
        type='button' 
        onClick={ handleAddStudent }>
        Adicionar
      </button>
      {
        students
        .map((student, index) => (
          <Card 
            key={index}
            name={student.name} 
            time={student.time} 
          />
        ))
      }
      
    </div>
  )
}

// <> Fragment </> 
// export default Home
