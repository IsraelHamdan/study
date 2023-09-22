# **Insertion sort**

É baseado na ordenação que fazemos ao receber cartas de baralho: 
  * Pego de carta em carta no cava(morto) do baralho e ordeno à medida que coloco na mão 
  * arrUnorded = [13, 2, 1, 3, 8, 5]
  * Exemplo: 
    * Puxo a primeira carta: 13 
    * Puxo a segunda carta: 2 
    * Verifico se a segunda carta é menor do que a primeira
      * Se sim, troco de posição 
    * Puxo a terceira carta: 1
    * Verifico se ela é menor do que a carta anterior  
      * Se sim troco elas de posição 
    * Faço a mesma verificação até a carta que peguei se ela for menor, chegar na primeira posição
      * Nosso array está assim: [1, 2, 13]
    * Puxo a quarta carta: 3 
      * Verifico se ela é menor que o ultimo elemento do array, se sim, troco de posição 
      * Nosso array está assim: [1, 2, 3, 13]
    * Puxo a quinta carta: 8
      * Verifico se ela é menor que o ultimo elemento do array, se sim, troco de posição 
      * 8 < 13 ? arrUnorded = [1, 2, 3, 8, 13]
      * Verifico novamente, nesse caso não tem elementos para que o 8 passe na frente
    * Puxo a sexta carta: 5
      * 5 < 13 ? arrUnorded = [1, 2, 3, 8, 5, 13]
      * 5 < 8 ? arrUndorded = [1, 2, 3, 5, 8, 13]
    * arrOrded = [...arrUnorded]
    * print(arrUnorded)
      * saída: [1, 2, 3, 5, 8, 13]
## *Mecânica*
  * Necessit de dois laços: 
    * Externo: Inicia na 2a posição do vetor e servirá:
      * para receber cada valor que vai ser reordenado por insersão no vetor 
      * caada valor recebido será chamado de atual 
    * Interno: Fará as comparações do atual com os demais valores já pré-ordenados 
      * As comparações serão feitas dos ultimos para os primeiros valores
      * Se o valor atual for menor que o do último é deslocado para uma posição para frente, para criar um espaço para o atual entrar
    * Fora do laço interno o atual ocupará a posição que foi deixada 


## *Exemplo teoricio:*
  * v = [ 13, 2, 1, 3, 8, 5]
  * #### 1a iteração
    * atual = 2 
      * 13 > 2 ? => v = [ 2, 13]
        * O 13 troca de lugar com o 2
    * #### 2a iteração
    * atual = 1 
      * 13 > 1 ? => v = [1, 2, 13]
    * #### 3a iteração
    * atual = 3
      * 13 > 3 ? => v = [1, 2, 3, 13]
    * #### 4a iteração 
      * atual = 8
      * 13 > 8 ? => v = [1, 2, 3, 8, 13]
    * #### 5a interação
      * atual = 5
      * 13 > 5 ? => v = [1, 2, 3, 8, 5, 13]
      * 8 > 5 ? => v = [1, 2, 3, 5, 8, 13]