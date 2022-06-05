# Code-challenge-calculadora-tinta-JavaScript
Repositório contendo uma calculadora de tinta criada para um code challenge


O que foi desenvolvido?<br>
Uma aplicação web ou mobile que ajude o usuário a calcular a quantidade de tinta necessária para pintar uma sala.
Essa aplicação deve considerar que a sala é composta de 4 paredes e deve permitir que o usuário escolha qual a medida de cada parede e quantas janelas e portas possuem cada parede.
Com base na quantidade necessária o sistema deve apontar tamanhos de lata de tinta que o usuário deve comprar, sempre priorizando as latas maiores. Ex: se o usuário precisa de 19 litros, ele deve sugerir 1 lata de 18L + 2 latas de 0,5L

Regras de negócio

Nenhuma parede pode ter menos de 1 metro quadrado nem mais de 50 metros quadrados, mas podem possuir alturas e larguras diferentes
O total de área das portas e janelas deve ser no máximo 50% da área de parede
A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta
Cada janela possui as medidas: 2,00 x 1,20 mtos
Cada porta possui as medidas: 0,80 x 1,90
Cada litro de tinta é capaz de pintar 5 metros quadrados
Não considerar teto nem piso.
As variações de tamanho das latas de tinta são:

0,5 L<br>
2,5 L<br>
3,6 L<br>
18 L


Para rodar o projeto, siga as intruções abaixo:

REQUISITOS: NODE.JS, NPM E HTTP SERVER<br><br>

-PARA INSTALAR O NODE.JS/NPM, SEGUIR AS INSTRUÇÕES DO LINK: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm<br>
-APÓS INSTALAR O NODE.JS/NPM, BAIXAR OS ARQUIVOS DO PROJETO<br>
-APÓS BAIXAR OS ARQUIVOS DO PROJETO, ABRIR O TERMINAL DO VSCODE E INSERIR O SEGUINTE COMANDO PARA INSTALAÇÃO DO HTTP SERVER ATRAVÉS DO NPM -> "npm i -g http-server" (O parametro -g garante que a instalação seja global)<br>
-AO FINALIZAR A INSTALAÇÃO, RODAR O COMANDO "http-server ." PARA INICIAR A APLICAÇÃO<br>
-ASSIM QUE O COMANDO FOR EXECUTADO O TERMINAL IRÁ RETORNAR COM O ENDEREÇO PARA ACESSO DA APLICAÇÃO<br>
