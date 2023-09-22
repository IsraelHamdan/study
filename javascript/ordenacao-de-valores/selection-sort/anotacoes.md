**Selection Sort**

*Mecanismo do selection sort* 
  1. Necessita de dois laços: 
       * O laço externo serve para controlar a posição inicial e atual
         * A primeira posição é sempre considerada a menor 
       * O interno faz as comparações od atual menor com as outras posições.
         * Caso ele encontre um menor, guardará sua posição
       * Fora do laço interno será realizada a troca caso necessario 
  2. Exemplo teorico: 
    * i = 0 (Variável de controle)
    * menor = i  
    * Array = [13, 2, 1, 3, 8, 5]
     * Primeira troca: [1, 2, 13...]
       * i = 1, menor = 1
       * O que acontece é que ele percorre o array e ve se tiver algum elemento menor ele já troca logo de cara 
     * Segunda troca: [1, 2, 13, 8, 5]
       * i = 2, menor = 2
       * Agora o nosso menor elemento é um, então a verificação começa a partir do 2
    .
    .
    . Array ordenado: Array = [1, 2, 3, 5, 8, 13]

