# Find my Aula

### Scopo del Progetto

Abbiamo riscontrato che una delle maggiori problematiche degli studenti, in particolare delle matricole, e più in generale di persone nuove nell’ambiente universitario di Trento, è la difficoltà di orientarsi all’interno delle strutture e trovare in breve tempo le aule dove devono recarsi. Inoltre è stata riscontrata anche una scarsa segnaletica interna per consentire di trovare velocemente le aule.
Pertanto abbiamo deciso per il nostro progetto di creare un’applicazione che sia in grado di aiutare gli studenti a trovare aule e altri spazi universitari (come aule studio) dell’Università degli Studi di Trento del polo Ferrari (inizialmente di Povo 1 poi in seguito abbiamo previsto anche l’implementazione della stessa applicazione per la struttura polo Ferrari Povo 2).

### Analisi dei Dati (raccolti tramite Google Form)

Abbiamo ricevuto in tutto 35 risposte al nostro sondaggio. Ne è risultato che un’applicazione per orientarsi all’interno dell’università sarebbe utile a più del 91% degli interrogati. In particolare abbiamo potuto constatare che gli studenti molto spesso cercano un’aula libera, quindi abbiamo deciso che questa funzione sarà il punto focale della nostra applicazione. 
https://docs.google.com/forms/d/1UOrfWsGJZnRa_tKZN-VHAI0kobZd1SDH9zdT3ncTdYw/edit?usp=sharing
https://docs.google.com/forms/d/1UOrfWsGJZnRa_tKZN-VHAI0kobZd1SDH9zdT3ncTdYw/edit#responses


### Features Principali


```markdown

“Trova aula”:
    che consenta di individuare e evidenziare sulla mappa una
    determinata aula data in input dall’utente;
    
“Trova aula libera”:
    che tramite un filtro sia in grado di trovare l’aula libera in
    una determinata fascia oraria. Le aule libere verranno segnale
    nella mappa con diversi colori in base se sono libere (verde),
    non sono libere (rosse) e se sono libere solo per un breve periodo (gialle);
    
“Trova lezione”:
    che consenta, dato il nome di un corso, di restituire l’orario
    con vista settimanale del singolo corso con le relative aule dove
    si svolge, e la possibilità di mostrare le aule sulla mappa;
    
“Trova orario”:
    che mostri per una determinata aula scelta dall’utente le ore
    di lezione previste per un giorno scelto dall’utente;
    
“Trova percorso”:
    che sia in grado di fornire le indicazioni per poter arrivare
    all’aula desiderata partendo da un’aula inizialmente scelta;
    
“Trova ufficio professore”:
    consente, dato il nome di un professore in input, di trovare
    il relativo ufficio;
    
“Trova laboratorio”:
    consente, dato il nome di un laboratorio in input, di trovare il
    relativo ufficio;

```


Abbiamo previsto di dividere il progetto in due release:

### Release 1:                                      
1. Implementazione delle mappe;
2. Funzione “Trova aula”;                                    
3. Funzione “Trova aula libera”;                             
4. Funzione “Trova lezione”;                                 
5. Funzione “Trova orario”;                                  
6. Funzione “Trova percorso” per il Polo A;
7. Funzione "Trova ufficio professore”;
8. Funzione “Trova laboratorio”.

### Release 2:
1. Bot Telegram;
2. Funzione “Trova percorso” per il Polo B.

### Componenti/Architetture
- API meteo
- Javascript
- Heroku
- Node.js

### Organizzazione del Team
La comunicazione informale nel team avviene tramite gruppo su Telegram, mentre quella formale avviene attraverso i servizi messi a disposizione da Github. Tipologia di team: COMPONENT TEAM. 
Inizialmente ci siamo trovati per una discussione preliminare per decidere le linee guida e requisiti per lo svolgimento del progetto. In seguito abbiamo organizzato riunioni settimanali per verificare il progresso del progetto e fare eventuali commit di gruppo. Una volta che i commit importanti erano stati fatti e l'applicazione aveva preso forma, ci siamo trovati solo per brevi incontri per fare il punto della situazione e per fare il tetsing e abbiamo fatto commit individuali per le modifiche marginali o ultime aggiunte. 
La suddivisione del lavoro è quella presente in waffle.

### Strategia di Branching
Come strategia di branching usiamo Master-Only strategy.

### User Stories:
Per definire l’importanza e la difficoltà delle varie user stories abbiamo fatto una sorta di planning poker a voce, e abbiamo poi riportato su waffle quanto stimato.

Link a Waffle:
https://waffle.io/FrancyFiore/Find-my-Aula

Link ad Heroku:
https://findmyaula.herokuapp.com

