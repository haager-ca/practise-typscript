let anzahlDerBaeume: number = 5;
const pflanzDauerInMinuten: number = 10;
const faulheitsdauer: number = 200;
const zulaessigeArbeitsZeit: number = 500;

function pflanzeBaeume(anzahlNeuerBaeume: number, nameDesFoersters: string): number {
    console.log("Der Förster " + nameDesFoersters + " hat " + anzahlNeuerBaeume + " Bäume gepflanzt");
    anzahlDerBaeume += anzahlNeuerBaeume;
    console.log("Wir haben nun " + anzahlDerBaeume + " Bäume in unserem Wald!");
    return pflanzDauerInMinuten * anzahlNeuerBaeume;
}

function pflanzeBaeumeUndZeigeDauer(anzahlNeuerBaeume: number, nameDesFoersters: string): void {
    let dauer = pflanzeBaeume(anzahlNeuerBaeume, nameDesFoersters);
    console.log("Das hat " + dauer + " Minuten gedauert");
    if (dauer > faulheitsdauer || dauer > zulaessigeArbeitsZeit) {
        console.log(nameDesFoersters + " hat entweder zu viel oder zu wenig gearbeitet.");

    } else {
        console.log(nameDesFoersters + " hat gut gearbeitet");

    }

}


pflanzeBaeumeUndZeigeDauer(15, "Jan");
pflanzeBaeumeUndZeigeDauer(30, "Caius");
pflanzeBaeumeUndZeigeDauer(40, "Tobias");
pflanzeBaeumeUndZeigeDauer(1000, "Max");
pflanzeBaeumeUndZeigeDauer(0, "Christian");
