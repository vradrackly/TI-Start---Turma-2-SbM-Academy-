function exercio12(str, id){    
    document.write(`Esta string "${str}" tem...: ${str.length} caractéres <br>`);
    document.write(`Esta string sera comvertida para maiúscula...: ${str.toUpperCase()} <br>`);
    document.write(`A terceira letra desta string é...: ${str[id].toUpperCase()} <br>`);
    document.write(`A terceira letra desta string sera trocada para 'X'...: ${(str.replace(str[id], 'X').toUpperCase())} <br>`);
}
exercio12(`Fernando Mazureki`, 2);