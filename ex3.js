class Character {
    constructor(name, attackPower, intelligence, hitPoints) {
        this.name = name;
        this.attackPower = attackPower;
        this.intelligence = intelligence;
        this.hitPoints = hitPoints;
        this.level = 0;
    }

    // Método para subir de nivel
    levelUp() {
        this.level += 1;
    }

    // Método para recibir daño
    receiveDamage(damage) {
        this.hitPoints -= damage;
    }

    // Método para verificar si el personaje está vivo
    isAlive() {
        return this.hitPoints > 0;
    }

    // Método estático para comparar niveles de dos personajes
    // Si Character1 tiene más nivel que Character2: devolver un 1
    // Si sucede al revés: devolver un -1
    // Si ambos tienen el mismo nivel: dovolver un 0
    static compareLevels(character1, character2) {
        if (character1.level > character2.level) {
            return 1;
        } 
        if (character2.level > character1.level){
            return -1;
        }
        return 0;
    }
}

// Definición de la subclase Warrior
class Warrior extends Character {
    constructor(name, attackPower, intelligence, hitPoints) {
        // Sumar +1 a los puntos de vida antes de llamar al constructor de la clase base
        super(name, attackPower, intelligence, hitPoints + 1);
    }

    // Método exclusivo para el guerrero: strongAttack
    strongAttack() {
        // Calcula un número aleatorio entre 0 y attackPower y lo multiplica por 2
        const damage = Math.floor(Math.random() * this.attackPower) * 2;
        return damage;
    }
}

// Definición de la subclase Healer
class Healer extends Character {
    constructor(name, attackPower, intelligence, hitPoints) {
        // Sumar +1 a la inteligencia antes de llamar al constructor de la clase base
        super(name, attackPower, intelligence + 1, hitPoints);
    }

    // Método exclusivo para el curandero: heal
    heal() {
        // Calcula un número aleatorio entre 0 y intelligence y lo multiplica por 2
        const healing = Math.floor(Math.random() * this.intelligence) * 2;
        return healing;
    }
}

// Creación de un guerrero y un curandero
const warrior = new Warrior("Thor", 10, 5, 20);
const cleverWarrior = new Warrior("Hi-man", 11, 7, 20);
const healer = new Healer("Luna", 3, 8, 15);

// Los personajes suben de nivel
warrior.levelUp();
warrior.levelUp();
cleverWarrior.levelUp();
healer.levelUp();

// Comparamos dos personajes
const comparisonResult = Character.compareLevels(warrior, healer);
console.log(`Comparación de niveles: ${comparisonResult}`); // Debería devolver 1 porque Thor está en nivel 2 y Luna en nivel 1

// Luna sube de nivel
healer.levelUp();
const comparisonResult_2 = Character.compareLevels(warrior, healer);
console.log(`Comparación de niveles: ${comparisonResult_2}`); // Debería devolver 0 porque tienen el mismo nivel

// Luna sube de nivel de nuevo
healer.levelUp();
const comparisonResult_3 = Character.compareLevels(warrior, healer);
console.log(`Comparación de niveles: ${comparisonResult_3}`); // Debería devolver -1 porque Luna tiene más nivel que Thor

// BONUS: Usa el método sort y el método estático compareLevels para ordenar adecuadamente el array de personajes de menor a mayor level
let characters = [healer, cleverWarrior, warrior,];
console.log('Antes de aplicar el sort: ', characters.map(c => `${c.name} - level ${c.level}`)); // Los perosnajes estan desordenador por nivel
characters.sort((a, b) => Character.compareLevels(a, b));
console.log('Después de aplicar el sort: ', characters.map(c => `${c.name} - level ${c.level}`)); // Los perosnajes deberían estar oredenador de menor a mayor nivel