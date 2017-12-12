## Benvenuto in Find my Aula

### SCOPO DEL PROGETTO

Abbiamo riscontrato che una delle maggiori problematiche degli studenti, in particolare delle matricole, e più in generale di persone nuove nell’ambiente universitario di Trento, è la difficoltà di orientarsi all’interno delle strutture e trovare in breve tempo le aule dove devono recarsi. Inoltre è stata riscontrata anche una scarsa segnaletica interna per consentire di trovare velocemente le aule.
Pertanto abbiamo deciso per il nostro progetto di creare un’applicazione che sia in grado di aiutare gli studenti a trovare aule e altri spazi universitari (come aule studio) dell’Università degli Studi di Trento del polo Ferrari (Povo 1).
ANALISI DEI DATI RACCOLTI (tramite Google Form)
Abbiamo ricevuto in tutto 35 risposte al nostro sondaggio. Ne è risultato che un’applicazione per orientarsi all’interno dell’università sarebbe utile a più del 91% degli interrogati. In particolare abbiamo potuto constatare che gli studenti molto spesso cercano un’aula libera, quindi abbiamo deciso che questa funzione sarà il punto focale della nostra applicazione. 



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

Abbiamo previsto anche l’implementazione della stessa applicazione per la struttura polo Ferrari (Povo 2).

Abbiamo previsto di dividere il progetto in due release:

### Release 1:                                      
1. “Trova aula”;                                    
2. “Trova aula libera”;                             
3. “Trova lezione”;                                 
4. “Trova orario”;                                  
5. “Trova percorso”;
6. "Trova ufficio professore”;
7. “Trova laboratorio”;

### Release 2:
1. Bot Telegram

### Componenti/Architetture
- API meteo
- Javascript
- Heroku
- Node.js

### Organizzazione Team
La comunicazione informale nel team avviene tramite gruppo su Telegram, mentre quella formale avviene attraverso i servizi messi a disposizione da Github. Tipologia di team: FEATURE TEAM.

-Discussione iniziale sul progetto

-Requisiti

-Riunioni settimanali per verificare il progresso del progetto e fare eventuali commit.

### Strategia di Branching
Come strategia di branching usiamo Master-Only strategy

### User Stories:
Per definire l’importanza e la difficoltà delle varie user stories abbiamo fatto una sorta di planning poker a voce.

Link a Waffle:
https://waffle.io/FrancyFiore/Find-my-Aula

Link ad Heroku:
https://findmyaule.herokuapp.com

APIARY:
......
