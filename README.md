# AtividadeGabriel

Ambas regex utilizam uma validação especifica para validar cada campo.
No caso do nome a validação é feita por somente caracteres de A a Z tanto minusculo quanto maisculo e com o minimo de 3 carecteres e maximo de 100.
No caso do email aceita qualquer caractere pórem o carectere @ é obrigatorio para a validação do campo, caso não seja inserido retorna como false.
Já no campo de telefone ele utiliza primeiro a inserceção de dois números que fazem referência ao DDD e depois a inserceção de 5 digitos o (-) e depois a inserceção de mais 4 digitos.

Fazemos a comparação de todos os campos e através do console.log mostramos se o retorno será verdadeiro e válido ou se será falso e inválido. 
