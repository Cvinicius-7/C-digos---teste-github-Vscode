/*
Recrie o algoritmo de cálculo de média das notas, mas, desta vez, calcule a média ponderada, sabendo que a primeira nota possui peso 1, a segunda nota possui peso 2 e a terceira nota possui peso 3.
Sabendo que a média MP é calculada como

MP = 		N1 * P1 + N2 * P2 + N3 * P3
	       _____________________________
	
			(P1 + P2 + P3)

Onde N são as notas e, P, de seus respectivos pesos.

*/

let nota1 = parseInt(prompt('Digite a primeira nota entre 0 e 10'));
let nota2 = parseInt(prompt('Digite a segunda nota entre 0 e 10'));
let nota3 = parseInt(prompt('Digite a terceira nota entre 0 e 10'));