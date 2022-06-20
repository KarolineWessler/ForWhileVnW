
//1 - Criar um loop que conte de 1 até 10 usando FOR

for (var i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("\n");

//2 - Criar um loop que conte de 10 até 1 usando WHILE

var i = 10;

    while (i >= 1) {
        console.log(i);
        i--;
    }

    
console.log("\n");
//3 - Criar um loop que conte todos os números ímpares de 1 até 100


for (var i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

console.log("\n");

//4- Criar um loop que conte todos os números pares de 0 a 100

for (var i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
