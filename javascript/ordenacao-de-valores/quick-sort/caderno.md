# Quick Sort 

  ## Como funciona?
    * Ultiliza a recursão para realizar a ordenação
      * "dividir e conquistar "
      * Quebra do problema original em problemas menores 
    * Processo recursivo: escolhe um dos elementos aleatoriamente, que chamamos de pivô 
      * Pivô: Será um marco para dividir os elementos maiores e mnores que ele 
        * Os elementos que forem menores que ele ficarão à sua esquerda 
        * Os elementos que forem maiores que ee ficarão à sa direita 
  ### Passos: 
    * 1o passo: particionar 
      * Particionar o vetor em suas partes, a partir de um pivô, os maiores à direita e os menores à esquerda 
    * 2o passo: Recursão
      * Ordenar cada parte recursivamente, ultilizando o proprio quicksort
      * A medida que o algoritmo avança, o array vai sendo ordenado
    * 3o passo: Recombinação
      * Gera um vetor ordenad de forma dinâmica 
  ### Exemplo
    array = [2, 9, 7, 1, 3, 5,8, 4]
    *Quem será o pivô?*
      * Vamos escolher recursivamente a última posição do vetor desordenado com pivô, ou seja, 4 
    * menores = [2, 3, 1]  4  maiores = [9, 7, 8, 5]
    * Este é o resultado da primeira chamada do algoritimo, que gera, a divisão inicial entre os elementos do vetor, isto irá se repetir, várias vezes até que o vetor esteja ordenado

   arr1 = [2, 1, 3] => [2, 1] => arr1 = [1, 2, 3, 4]
   arr2 = [9, 7, 5, 8] => [7, 5] 8 [9] => [5, 7] 8 [9] => [1, 2, 3, 4, 5, 7, 8, 9]
  ## Mecânica 
    * Algoritimo principal: 
      * Chama o algoritmo secundário e faz a recursão nas sub-partes do vetor 
    * Algoritmo secundário (particionar): 
      * Particiona o vetor a partir de um pivô e retorna o próprio pivô 
      Como funciona?
        * 1o laço: 
          * variável de controle (i) para definir a posição do valores menores que o pivô
          * variável de controle (j) para comparações do elemento da posição j com o pivô (última posição)
            * Controla o laço: 
              * Se a posição em j é < que o pivô, então 
                * a variável i é incrementada
                * e o valor em i é trocado com o valor de j 
      * v = [2, 9, 7, 1, 3, 5, 8, 4]
        * i = -1 ; j = 0
        * inicio: i j     
        * ![image](https://github.com/IsraelHamdan/study/assets/108038524/68f72362-a0d2-4096-be4b-0602555c63d3)
