class Calculatrice {
    add(a, b) {
        return a + b;
    }

    sub(a, b) {
        return a - b;
    }

    mul(a, b) {
        return a * b;
    }

    div(a, b) {
        if (b === 0) {
            throw new Error("Division par zéro non autorisée");
        }
        return a / b;
    }
}

class Test {
    constructor() {
        this.calculatrice = new Calculatrice();
    }

    runTests() {
        console.log("Test de la méthode add:");
        console.log(this.calculatrice.add(10, 5));  

        console.log("Test de la méthode sub:");
        console.log(this.calculatrice.sub(10, 5));  

        console.log("Test de la méthode mul:");
        console.log(this.calculatrice.mul(10, 5)); 

        console.log("Test de la méthode div:");
        console.log(this.calculatrice.div(10, 5));

        try {
            console.log("Test de la méthode div avec division par zéro:");
            console.log(this.calculatrice.div(10, 0));
        } catch (error) {
            console.error(error.message); 
        }
    }
}

const test = new Test();
test.runTests();
