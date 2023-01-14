## Github com Time de Dev

<hr>
-  novo repositorio: > settings > colaboradores: add...
<hr>
- Branches: Aconselha-se a não usar direto a branch Main/Master, e sim criar branches para cada alteração/tarefa, trabalhos independentes sem afetar a branch do colega, ou a main/master.
  > git push origin 'branch'
<hr>
- merge: juntar por exemplo 'branch' na main/master ,( $master: git merge 'branch' ).
<hr>
- delete branch: / git branch -D 'nameBranch', (apaga localmente), para apagar do repositorio remoto ou faz pelo github, ou /$ git push origin --delete 'nameBranch' )
<hr>
- atualizando branches: repositorio na maquina/Local nao enxerga branches nao criadas por voce, /$ git fetch atualiza todas branches remoto ficam visiveis na maquina, /$ git fetch -p (avisa que branches deletadas do remoto, nao aparecam mais no local)
<hr>
- Code Review/Secutiry: Settings > Branches > select Branch > Require a pull request before merging, require approvals
<hr>
- Pull request (PR), pedido de enviar algo de uma branch para outra branch.
LGTM (Looks Good To Me).
<hr>
- Resolve Conflict, /$ git pull origin main/branch , git proporciona nao alterar linhas alteradas por outra pessoa com o  resolve merge,  /$ add, /$ Commit: Merge branch 'main'... , /$ git push origin main (error). /$ git checkout -b jakChanges (Cria branch nova a partir da que esta)
<hr>
- Pull Request, /$ git push origin jakChanges, 'cimpare & pull request', ou pull requests > new pull request > base: main (recebe conteudo) <- compare: jakChanges (able ok), *Create pull request...
Reviwers, Assignees (responsaveis)...
<hr>
- Colaborar projetos publicos que nao é colaborador, Fork, git clone o fork, git add, git commit -m 'resolve bug', git push origin main, (commit ta no rep forkado),  'Contribute' (Abrir pull request, base: main (Jose) 'across forks ' , <- compare: (main)(joao)).
<hr>
- Issues, questoes nao resolvidas/pendencia.
<hr>
 - Projects, Respositorio > projeto, > add Project > template: Board (Todo, in Progress, Done).
<hr>


