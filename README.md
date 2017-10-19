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
5. “Trova percorso”.

### Release 2:
1. "Trova ufficio professore”;
2.  “Trova laboratorio”;
3. Implementazione del bot anche per la struttura di Povo 2;
4. Bot Telegram

### Componenti/Architetture
- API.ia
- Javascript
- Heroku
- MongoDb
- Node.js

### Organizzazione Team
La comunicazione informale nel team avviene tramite gruppo su Telegram, mentre quella formale avviene attraverso i servizi messi a disposizione da Github. Tipologia di team: FEATURE TEAM.

### Strategia di Branching
Come strategia di branching usiamo la Gitflow Workflow.

### User Stories:

1 - Aula libera:
    Come utente voglio trovare un’aula libera così da poter avere uno spazio alternativo alla biblioteca dove poter studiare e confrontarmi anche con i miei compagni.
    Partendo dalla pagina principale, quando sceglierò l’opzione “Trova aula libera” e avrò inserito uno slot di tempo, mi sarà mostrata una lista delle aule libere in quella determinata fascia temporale.
###    Importanza :5
###    Priorità: 5



2 - Aula:
    Come utente voglio sapere dove si trova l’aula che sto cercando in modo tale da non perdere tempo inutilmente vagando per l’università ed arrivare puntuale ad ogni lezione.
    Partendo dalla pagina principale, quando scriverò il nome dell’aula nell’apposito slot di testo e darò l’invio, mi sarà mostrata una mappa dell’edificio con l’aula che ho scelto evidenziata.
###    Importanza :3
###    Priorità: 2
    
3 - Lezione:
    Come utente voglio sapere in che aula si svolge una determinata lezione in modo tale da non dover sfogliare gli orari di tutte le aule per poter trovare l’aula della lezione che cerco.
    Partendo dalla pagina principale, quando scriverò il nome della lezione che desidero seguire nell’apposito slot di testo e darò l’invio, mi sarà mostrata l’aula dove tale lezione si svolge e evidenziata sulla mappa dell’edificio.
###    Importanza :2
###    Priorità: 3    

4 - Orario:
    Come utente voglio trovare l’orario di una determinata aula per sapere quali lezioni si svolgeranno in una determinata giornata.
    Partendo dalla pagina principale, quando scriverò il nome dell’aula nell’apposito slot di testo e la data del giorno di cui sono interessato e darò l’invio, mi sarà mostrato l’elenco delle lezioni in quell’aula della giornata scelta.	
###    Importanza :2
###    Priorità: 3  

5 - Ufficio professore:
    Come utente voglio sapere dove si trova l'ufficio di un determinato professore in modo tale da non perdere tempo, non girare tutti i corridoi e arrivare in anticipo all'appuntamento.
    Partendo dalla pagina iniziale, quando scriverò nell'apposita casella il cognome del prof mi sarà fornito il numero dell'ufficio e la mappa con evidenziata la stanza.
###    Importanza :2
###    Priorità: 5    
    
6 - Laboratorio:
    Come utente voglio poter trovare la locazione di un determinato laboratorio e che mi mostri la mappa in modo tale da raggiungere con facilità il laboratorio in cui ho la lezione.
    Partendo dalla pagina iniziale, quando scriverò il nome del laboratorio, mi sarà mostrata la mappa di dove è posizionato.
###    Importanza :2
###    Priorità: 2

Per definire l’importanza e la difficoltà delle varie user stories abbiamo fatto una sorta di planning poker a voce.
https://waffle.io/FrancyFiore/Find-my-Aula
