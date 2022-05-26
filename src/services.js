export function corPrimaria(cor) {
    let a = "";
    if(cor == 'azul' || cor == 'amarelo' || cor == 'vermelho' ) 
    {
        a=true
    }
    else
    {
        a=false
    }
    return a;
}

export function ingresso( qtdInteiras,qtdMeias, diaSemana, nacionalidade) {
    if(nacionalidade.toLowerCase() == 'brasileira')
        return(qtdInteiras + qtdMeias) * 5;
    
    else if (diaSemana.toLowerCase() == 'quarta')
        return(qtdInteiras + qtdMeias) * 14.25;
    
    else
        return(qtdInteiras * 28.5) + (qtdMeias * 14.25);
}

export function frequenciaCaracter(texto,caractere) {
    let qtd = 0;
    for (let letra of texto) {
        if(letra == caractere)
            qtd++;
    }
    return qtd;
}

export function maiorNumero (numeros) {
    let maior = Number.MIN_VALUE;
    for (let item of numeros) {
        if(item > maior)
            maior = item;
    }
    return maior;
}