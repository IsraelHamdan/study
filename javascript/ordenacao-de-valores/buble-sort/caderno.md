Neste mecanismo, os elementos com maiores chaves do conjunto vão subindo para o topo, este sendo representado pelas ultimas posições do vetor

- Iteração sobre um conjunto de dados várias vezes
  \*Comparação de dados de dois em dois
  - se a parte maior estiver à esquerda, troca de posição com o da sua direita

\*\* Complexidade:

- Melhor caso: O(n)
  - Quando todos os dados já estão ordenados
- Pior caso: O(n^2)
  - Quando todas as comprações precisam ser feitas

Sempre temos que considerar o pior caso!

\*\* Exemplo:
cartas = [13, 5, 2, 1, 3, 8]

- 1a iteração: 13 > elemento à direita ? Troca de posição
  13 > 5 ? -> troca
  13 > 2 ? -> troca
  13 > 1 ? -> troca
  13 > 3 ? -> troca
  13 > 8 ? -> troca
  cartas = [5, 2, 1, 3, 8, 13]
- 2a iteração: 5 > elemento à direita ? Troca de posição
  5 > 2 ? -> troca
  5 > 1 ? -> troca
  5 > 3 ? -> troca  
  5 > 8 ? -> Não troca
  cartas = [2, 1, 3, 5, 8, 13]
- 3a iteração: 2 > elemento à direita ? Troca de posição

  cartas = [1, 2, 3, 5, 8, 13]

O mecanismo vai percorrer todo o array para poder ordenar todos os elmentos, até ele ter certeza, por isso, esse algoritimo pode ter uma alta complexidade, dependendo do tamanho do array e da forma com que os elementos foram colocados nele.

\*\* Mecânica do ordenador

Deve-se usar dois laços para implementação:

- O externo: para controlar o limite de posição final a ser percorrida, pois em cada volta do laço o maor vai pro final e já fica ordenado
- O interno: faz as comparações dos elementos em pares
  - Se o primeiro de cada par for maior que o seundo, acontece a troca de elementos
