---
title : Introduzione
notetype : unfeed
date : 01-02-2021
toc: true
---

# Introduzione

L'enfasi in "ingegneria del software" sta in entrambe le parole *ingegneria* e *software*. Un ingegnere è capace di costruire un prodotto di alta qualità usando componenti già pronti per l'uso e integrandoli in tempo e rispettando il budget. L'ingegnere si trova spesso ad affrontare problemi mal definiti e soluzioni parziali, e deve affidarsi a metodi empirici per valutare soluzioni. Ingegneri che lavorano in campi come costruzione di ponti o progettazione di velivoli hanno affrontato con successo tali sfide. Gli ingegneri del software non hanno avuto lo stesso esito positivo.  

Il problema di costruire e di consegnare un sistemi software complessi in tempo è stato attivamente studiato e investigato. Sono stati nominati tanti capri espiatori: dai clienti alla "giovanezza" della disciplina. Il problema però è il seguente: **Complessità e cambiamenti** (*Complexity and change*).  

I sistemi software *utili* sono complessi. Per rimanere utili questi devono evolvere a seconda delle necessità dell'utente finale.  

## Fallimenti nell'ingegneria del software

Consideriamo i seguenti esempi:  

* **Year 1900 bug**: nel 1992 una donna di 104 anni ha ricevuto una chiamata per frequentare l'asilo
* **Leap-year bug**: un supermercato è stato multato per aver tenuto carne per 1 giorno dopo la sua data di scadenza, il 29 febbraio 1988. Il programma per la stampa delle etichette non aveva considerato il 1988 come anno bisestile
* **Interface misuse**: A Londra, un treno ha lasciato la stazione senza il macchinista. Il macchinista aveva tenuto premuto il pulsante per l'avviamento del treno, affidandosi al fatto che il sistema avrebbe impedito la partenza mentre le porte erano aperte. L'operatore del treno aveva lasciato il treno per chiudere una porta che si era incastrata: quando la porta si era finalmente chiusa, il treno è subito partito.
* **Security**: Il CERT (*Computer Emergency Response Team*) al Software Engineering Institute assiste a incidenti di sicurezza, vulnerabilità e know-how sulla sicurezza. Il numero di incidenti sulla sicurezza riportati al CERT dagli USA è aumentato da 252 (nel 1990) a 21756 (nel 2000) per superare poi i 40.000 nel 2001.
* **Late and over budget**: Nel 1995, un bug nei sistema di bagagli automatizzato portava alla distruzione dei bagagli. Successivamente l'aeroporto ha impiegato un sistema prevalentemente manuale per i bagagli, con 16 mesi di ritardo e con un budget sforato per 3,2 miliardi di dollari.
* **On-time delivery**: dopo 18 mesi di sviluppo, un sistema di $200M è stato consegnato a una compagnia assicurativa. Tuttavia, il sistema non funzionava correttamente, e così sono stati spesi altri $60M per poter risolvere i problemi. Ci sono voluti 3 anni per risolvere questi problemi.
* **Unnecessary complexity**: l'aereo cargo C-17 ha sforato il budget di 500 milioni di dollari a causa di problemi col suo software per l'avionica. Il C-17 includeva 19 computer di bordo, 80 microprocessori e 6 diversi linguaggi di programmazione.  


Ognuno dei fallimenti descritti sopra risulta da un problema legato al software. In alcuni casi, gli sviluppatori non hanno previsto dei casi rari (una persona che vive più di 100 anni, anni bisestili che impattano in modo grave sulle date di scadenza). In altri casi, gli sviluppatori non hanno previsto un abuso del sistema da parte degli utenti (bloccare il pulsante con del nastro adesivo, sfruttare una falla di sistema). In altri casi ancora, i fallimenti di sistema sono il risultato di un fallimento nella gestione (consegna tardiva e fuori budget, consegna di un software non corretto, complessità inutile)  

## Cosa è l'ingegneria del software?

L'ingegneria del software è un'attività di **modellazione** (*modeling* activity). Gli ingegneri del software affrontano la complessità con la modellazione, focalizzandosi sempre solo sui dettagli rilevanti e ignorando tutto il resto.  
Nel corso dello sviluppo, gli ingegneri del software producono diversi *modelli* del sistema e del dominio applicativo.  

L'ingegneria del software è un'attività di **problem-solving**. I modelli sono usati per cercare una soluzione accettabile. La ricerca è guidata dalle sperimentazioni. Gli ingegneri del software non hanno risorse infinite e sono di fatto limitati dal budget e dalle deadline. Data la mancanza di una teoria *fondamentale*, occorre sperso affidarsi a metodi empirici per valutare i benefici di diverse alternative.  

L'ingegneria del software è una attività di **acquisizione delle conoscenze** (*knowledge acquisition activity*). Modellando il dominio applicativo e il dominio della soluzione, gli ingegneri del software collezionano dati, li organizzano in informazioni e li formalizzano in conoscenze. L'acquisizione delle conoscenze non è sequenziale, dato che anche un solo dato aggiunto può invalidare interi modelli.  

L'ingegneria del software è un'attività **guidata dalla logica** (*rationale driven* activity). Quando si acquisiscono conoscenze e si fanno decisioni sul sistema o sul dominio applicativo, gli ingegneri del software devono anche carpire il contesto nel quale queste decisioni sono state fatte e la logica che c'è dietro queste decisioni. Le ragioni sono quindi informazioni che vanno raccolte e che consentono agli ingegneri del software di capire le implicazioni di una proposta di modifica quando viene revisionata.  

### Modellazione

Con *scienze dell'artificiale* (*sciences of the artificial*) si indicano le scienze che descrivono i sistemi artificiali. L'informatica è la scienza che studia i sistemi informatici.  

Molti metodi applicabili nelle scienze naturali (es. biologia, chimica, fisica...) e umanistiche (sociologia, psicologia...) possono essere applicati anche alle cosiddette *scienze dell'artificiale*. Uno dei metodi fondamentali della scienza è la **modellazione**.  
Un modello è una rappresentazione astratta di un sistema che ci consente di rispondere a quesiti riguardanti tale sistema. I modelli sono utili quando si ha a che fare con sistemi troppo grandi, troppo piccoli, troppo complicati o troppo costosi per poterli provare "di persona".  
I modelli ci consentono anche di visualizzare e capire sistemi che non esistono più (si pensi al modello di un dinosauro ricavato mediante i fossili) o la cui esistenza è solo affermata (si pensi ai fisici con le particelle subatomiche).  

I modellatori di sistema hanno a che fare con due tipi di entità: il *sistema reale*, osservato in termini di un insieme di fenomeni, e il *modello del dominio applicativo*, rappresentato come un insieme di concetti interdipendenti.  

Gli ingegneri del software devono quindi capire l'ambiente in cui il sistema deve operare. Per un sistema di controllo del traffico dei treni, gli ingegneri del software devono conoscere le procedure di segnalazione dei treni. Per un sistema di scambio di azioni, occorre conoscere le regole della compravendita di azioni.  
Ma l'ingegnere software non ha bisogno di diventare un macchinista certificato o un agente di borsa; occorre semplicemente imparare i concetti del dominio applicativo che sono *rilevanti* al sistema. In altre parole, occorre costruire un **modello** del dominio applicativo.  

Oltre a capire l'ambiente, gli ingegneri del software devono anche capire il sistema che potrebbero sviluppare, in modo tale da poter valutare diverse soluzione e i trade-off.  
Molti sistemi sono troppo complessi per essere capiti, e molti sistemi sono troppo costosi per essere costruiti. Per questo motivo gli ingegneri del software descrivono gli aspetti importanti dei sistemi alternativi che studiando. In pratica, occorre costuire il *modello* del **dominio della soluzione**.  

Il metodi orientati agli oggetti (*object-oriented*) combinano l'attività di modellazione del dominio applicativo e quella di modellazione del dominio della soluzione in un'unità attività.  
Il dominio applicativo è modellato inizialmente come un insieme di oggetti e relazioni. Il modello è poi usato dal sistema per rappresentare concetti del mondo reale che deve manipolare.  

**Esempio**  Il sistema per il controllo del traffico dei treni include oggetti *Treno* che rappresentano i treni da monitorare.  

I concetti del dominio della soluzione sono anch'essi modellati come oggetti. L'idea alla base dei metodi orientati agli oggetti è che il modello del dominio della soluzione è una **trasformazione** del modello del dominio applicativo.


### Problem solving

L'ingegneria è una attività di *problem-solving*. Gli ingegneri cercano una soluzione appropriate, spesso mediante *trial and error*, valutando empiricamente le alternative, con risorse limitate e conoscenze incomplete.  

In una forma semplificata, il metodo ingegneristico include cinque step:  

1. Formulare il problema
2. Analizzare il problema
3. Cercare le soluzioni
4. Decidere la soluzione appropriata
5. Specificare la soluzione

Lo sviluppo di software orientato agli oggetti include tipicamente 6 attività di sviluppo: *raccolta dei requisiti*, *analisi*,*progettazione del sistema*, *progettazione degli oggetti*, *implementazione*, *testing*.  

Durante la *raccolta e l'analisi dei requisiti*, gli ingegneri software formulano il problema col committente e costruiscono il modello del dominio applicativo. La raccolta e l'analisi dei requisiti costituiscono gli step 1 e 2 del metodo ingegneristico.  

Durante la *progettazione del sistema*, gli ingegneri software analizzano il problema, lo decompongono in pezzi più piccoli e selezionano strategie generali per progettare il sistema.  
Durante la fase della *progettazione degli oggetti*, vengono scelte soluzioni particolari per ogni "pezzo" del problema decomposto precedentemente. La progettazione del sistema e quella degli oggetti producono il modello del dominio della soluzione e corrispondono agli step 3 e 4 del metodo ingegneristico.  

Durante l'implementazione, gli ingegneri software realizzano il sistema traducendo il dominio della soluzione in una rappresentazione eseguibile. L'*implementazione* corrisponde allo step 5.  

Lo sviluppo software include anche attività il cui scopo è quello di valutare l'adeguatezza dei rispettivi modelli:  

* Durante la revisione delle analisi dei requisiti, il modello del dominio applicativo è validato rispetto alla realtà del committente
* Durante la revisione della progettazione, il modello del dominio della soluzione è validato rispetto agli obiettivi del progetto
* Durante la fase di testing, il sistema viene validato rispetto al modello del dominio della soluzione

### Acquisizione delle conoscenze  

L'acquisizione delle conoscenze è un processo **non lineare**. L'aggiunta di nuovi pezzi di informazione potrebbe invalidare tutte le conoscenze acquisite per comprendere un sistema.  
Anche se avessimo già documentato già documentato le conoscenze acquisite, occorre essere preparati mentalmente a dover eventualmente ricominciare da capo. Questo ha importanti implicazioni sull'insieme di attività e interazioni da definire per lo sviluppo.  
Nel *modello sequenziale a cascata* tutti gli step del metodo ingegneristico sono effettuati sequenzialmente. Tale metodo è l'equivalente della *teoria del secchio* che afferma che la conoscenza si può ottenere in maniera lineare (Cosa smentita all'inizio del paragrafo).  

Ci sono molteplici processi software che affrontano questo problema evitando le dipendenze sequenziali intrinseche nel modello a cascata: **Risk-based development** cerca di anticipare le sorprese identificando i componenti ad alto rischio; **Issue-based development** cerca di rimuovere la linearità nella sua interezza: ogni attività - analisi, progettazione, implementazione, testing, consegna - può influenzare ogni altra attività e può essere eseguita in parallelo.  

La difficoltà con modelli di sviluppo non sequenziali sta nella difficoltà di gestione.  

### Fondamento logico (Rationale)

Le supposizioni degli sviluppatori riguardo un sistema cambiano costantemente. Anche se il modello del dominio applicativo dovesse eventualmente stabilizzarsi una volta che lo sviluppatore ha acquisito una conoscenza adeguata del problema, il modello del dominio della soluzione è un flusso costante: falle nella progettazione e nell'implementazione scoperte durante il testing portano a problemi del dominio della soluzione. I cambiamenti possono essere anche causati da nuove tecnologie (ad esempio, la disponibilità di batterie a lunga durata e di comunicazioni wireless ad alta banda può portar ea revisioni del concetto di terminale portatile)  

Per apportare modifiche al sistema non è sufficiente capire i componenti attuali e il loro comportamento: è necessario anche catturare e comprendere il contesto in cui ogni scelta progettuale è stata effettuata. Questa conoscenza aggiuntiva è chiamata **fondamento logico** (**rationale**) del sistema.  

Catturare e conoscere il *rationale* del sistema non è banale: per ogni decisione fatta, molteplici alternative potrebbero essere state considerate, valutate e discusse. Di conseguenza, il *Rationale* rappresenta una quantità di informazioni molto più grande di quanta ne rappresenti il modello delle soluzioni.  
Inoltre, le informazioni sul *rationale* non spesso non esplicite. Gli sviluppatori fanno tante decisioni basate sulla loro esperienza e sul loro intuito, spesso senza valutare esplicitamente le varie alternative. Quando viene chiesto di spiegare una decisione, gli sviluppatori potrebbero doversi trovare a spendere una quantità significativa di tempo cercando di recuperare il *rationale*.  

Al fine di trattare sistemi in continuo mutamento, quindi, gli ingegneri software devono affrontare la sfida del catturare e accedere al *rationale*.  

## Concetti dell'ingegneria del software

In questo paragrafo sono descritti i termini e in concetti principali usati per tutto il libro. (Sono seguite le definizioni dello standard IEEE 610.12-1990)  

Un *progetto*, il cui scopo è quello di sviluppare un sistema software, è composto da un numero di *attività*. Ogni *attività* è a sua volta composto da un numero di *Task*. Un *task* consuma *Risorse* e produce *WorkProduct*. Un *WorkProduct* può essere un *Sistema*, un *Modello* o un *Documento*. Le *Risorse* possono essere *Partecipanti*, *Tempo* o *Equipaggiamento*.  

Una rappresentazione grafica è mostrata in figura:  

% [ figure 1-1 pag 10]

### Partecipanti e ruoli

Sviluppare un sistema software richiede la collaboration di tante persone con diversi background e interessi. Il committente ordina e paga per il sistema, lo sviluppatore costruisce il sistema, il project manager pianifica e preventiva il progetto e coordina sviluppatori e committente, gli utenti finali sono supportati dal sistema. Ci riferiamo a tutte le persone coinvolte nel progetto col nome di **partecipanti**. Definiamo **ruolo** l'insieme delle responsabilità nel progetto (o nel sistema) di un partecipante.  
Un ruolo è associato ad un insieme di **task** ed è assegnato ad un partecipante; lo stesso partecipante può occupare più task.  

Consideriamo come esempio il sistema di un distributore di biglietti:  

% [ pag 11 esempio ]
% [ pag 12 tabella 1-1]

### Sistemi e modelli

Usiamo il termine **sistema** per indicare una collezione di parti interconnesse.  
La **modellazione** è un modo per affrontare la complessità ignorando i dettagli irrilevanti. Usiamo il termine **modello** per riferirci a qualunque astrazione al sistema.  

Un *TicketDistributor* per la metropolitana è un sistema. Il progetto per il *TicketDistributor*, schemi del suo cablaggio elettrico e gli object models del suo software sono modelli del *TicketDistributor*.  

Si noti che un progetto di sviluppo è esso stesso un sistema che può essere modellato: la pianificazione di progetto, il suo budget e le scadenze pianificate sono modelli del progetto di sviluppo.  

### Work Products

Un **work product** è un artefatto che è prodotto durante lo sviluppo, come un documento o un pezzo di software per il committente o per altri sviluppatori.  
Chiamiamo **internal work product** destinato all'uso interno per il progetto. Chiamiamo **deliverable** i work product che devono essere consegnati al committente.  
I deliverable sono solitamente definiti prima dell'inizio del progetto e sono specificati da un contratto vincolante tra committente e sviluppatori.  

### Attività, task e risorse  

Un'**attività** è un insieme di task eseguiti per uno scopo specifico.  
Ad esempio, la raccolta dei requisiti è un'attività il cui scopo è definire col cliente cosa dovrà fare il sistema. La consegna è un'attività il cui scopo è installare il sistema in una posizione operativa. La gestione (*management*) è una attività il cui scopo è monitorare e controllare il progetto in modo tale che questo vengano rispettati gli obiettivi imposti (deadline, budget, qualità..).  [^1]

Le attività possono essere composte da altre attività. L'attività di consegna include l'attività di installazione software e quella di formazione degli operatori. Le attività sono talvolta chiamate **fasi**.  

Un **task** rappresenta un'unità di lavoro atomica che può essere gestita: un manager assegna un task a un developer, il developer lo esegue, il manager monitora il progresso e il completamento del task. I task includono **risorse**, producono work products, e dipendono da altri work product prodotti da altri task.  

Le **risorse** sono usate per svolgere un lavoro. Le risorse includono tempo, equipaggiamento e lavoro. Quando si pianifica un progetto, un manager decompone il lavoro in task e li assegna alle risorse.  

% [ pag 14  1-3 ]

### Requisiti funzionali e non funzionali

I requisiti specificano un insieme di caratteristiche che il sistema deve avere. Un **requisito funzionale** è una specifica di funzione che il sistema deve supportare, mentre un **requisito non funzionale** è un vincolo sul modo di operare del sistema che non è legato direttamente ad una funzione del sistema.  

**Esempio** *L'utente deve poter comprare biglietti* e *L'utente deve poter accedere alle informazioni sulle tariffe* sono requisiti funzionali. *L'utente deve ricevere risposta da parte del sistema in meno di 1 secondo* e *I colori usati nell'interfaccia devono essere consistenti con i colori della compagnia* sono requisiti non funizionali.  

Altri requisiti non funzionali possono essere l'utilizzo di una specifica piattaforma hardware per il sistema, requisiti di sicurezza, il modo in cui il sistema dovrebbe gestire falle di sistema o come fornire retrocompatibilità con sistemi che non si vogliono ritirare.  

### Notazioni, metodi e metodologie  

Una *notazione* è un insieme di regole (grafiche o testuali) per rappresentare un modello. L'alfabeto Romano è una notazione per rappresentare parole. UML è una notazione per rappresentare modelli orientati agli oggetti. Data Flow diagram è una notazione per rappresentare sistemi in termini di *data sources*, *data sinks* e *data transformations*. Z è una notazione per rappresentare i sistemi basata sulla teoria insiemistica.  

Un **metodo** p una tecnica ripetibile che specifica gli step necessari per risolvere un problema specifico. Una ricetta è un metodo per cucinare un piatto specifico. Un algoritmo di ordinamento è un metodo per ordinare elementi di una lista. La gestione del Rationale (*Rationale management*) è un metodo per giustificare i cambiamenti. La gestione delle configurazione è un metodo per tenere traccia dei cambiamenti.  

Una **metodologia** è una collezione di metodi atti a risolvere una classe di problemi e specifica come e quando ogni metodo dovrebbe essere usato.   

Un libro di cucina per frutti di mare con una collezione di ingrediente è una metodologia per preparare cibo a base di frutti di mare se questo contiene anche consigli su come gli ingredienti devono essere usati e come fare se non tutti gli ingredienti sono disponibili.  
Royce's methodology, la Object Modeling Technique (OMT), la metodologia Booch e Catalysis sono metodologie orientate agli oggetti per sviluppare software.  

Le metodologie di sviluppo software decompongono il processo in attività. OMT fornisce i metodi per tre attività:  

* Analisi, che si focalizza sul formalizzare i requisiti di sistema in forma di object model
* System design, che si focalizza sulle decisioni strategiche
* Object design, che trasforma il modello di analisi in un object model che può essere implementato  

La metodologia OMT suppone che i requisiti siano già definiti e non fornisce metodi per la raccolta di requisiti.  

Lo *Unified Software Development Process*, include anche un'attività di Analisi e raccolta dei requisiti e tratta le attività di System Design e di Object Design come un'unica attività chiamata Design.  

## Attività di sviluppo nell'ingegneria del software

In questo paragrafo viene data una panoramica delle attività associate all'ingegeria del software orientata agli oggetti.  

Le attività di sviluppo includono:  

* Raccolta dei requisiti
* Analisi
* System Design
* Object Design
* Implementation
* Testing

La seguente figura fornisce una panoramica delle relazioni che occorrono tra queste attività e i loro prodotti.  

% [ pag 16 1-2 ]

### Raccolta dei requisiti

Durante la raccolta dei requisiti, il committente e gli sviluppatori definiscono lo scopo del sistema. Il risultato di questa attività è una descrizione del sistema in termini di **attori** e **casi d'uso**. Gli attori rappresentano le entità esterne che interagiscono col sistema e possono includere ruoli come utenti finali, altri computer (e.g. il computer centrale di una banca o una rete) e l'ambiente circostante. I casi d'uso sono sequenze generali di eventi che secrivono tutte le possibili azioni tra gli attori e il sistema per un dato pezzo di funzionalità.  

Il seguente è un esempio di use case:  

% [ pag 18 fig 1-3]

### Analisi

Durante la fase (o attività) di analisi, gli sviluppatori mirano a produrre un modello del sistema che sia completo, corretto, consistente e non ambiguo.  
Gli sviluppatori trasformano i casi d'uso prodotti nell'attività di raccolta dei requisiti in un object model che descrive completamente il sistema. Durante questa attività, gli sviluppatori scoprono le ambiguità e le inconsistenze nel modello dei casi d'uso e li risolvono insieme al committente.  

Il risultato delle analisi è un modello del sistema annotato con attributi, operazioni e associazioni. La figura sottostante presenta un esempio di modello dinamico per il distributore dei ticket.  

% [ pag 18 1-4 ]

La figura sottostante mostra un esempio di object model per il distribuore di ticket  

% [ pag 18 1-5 ]

### System design

Durante la fase di system design, gli sviluppatori definiscono gli obiettivi di progettazione e decompongono il sistema in sottosistemi più piccoli che possono essere realizati da team individuali. Gli sviluppatori possono anche selezionare strategie per costruire il sistema, come la piattaforma hardware o software sul quale il sistema girerà, la strategia per la gestione dei dati peristenti, il flusso di controllo globale, le politiche per il controllo degli accessi. Il risultato del system design è una chiara descrizione di ognuna di queste strategie, una decomposizione in sottosistemi e un *deployment diagram* che rappresenta i mapping hardware/software del sistema.  

Dato che l'analisi e il system design producono entrambi modelli del sistema ancora in fase di costruzione, va specificato che solamente l'analisi si occupa di entità comprensibili dal committente, a differenza del system design. Il system design include un modello molto più raffinato che inclde entità che vanno oltre la comprensione e/o l'interesse del committente.  

Ecco un esempio di decomposizione in sottosistemi:  

%[fig 1-6 pag 20 ] 

### Object design

Durante la fase di object design, gli sviluppatori definiscono gli oggetti del dominio della soluzione per colmare il gap tra il modelo di analisi e la piattaforma hardware/software definita durante il system design. Questo include precisamente descrivere gli oggetti e le interfacce dei sottosistemi, selezionare componenti pronti per l'uso, ristrutturare l'object model per attenersi ai design goals come l'estensibilità e la comprensibilità, e ottimizzare l'object model per le performance.  

Il risultato di questa attività è un object moel dettagliato annotato con i constraint e le precise descrizioni per ogni elemento.  

### Implementation  

Durante la fase di implementazione, gli sviluppatori traducono il modello del dominio della soluzione in codice sorgente. Questo include implementare gli attributi e i metodi di ogni oggetto e integrare tutti gli oggetti in maniera trale che questi funzionino come un singolo sistema. L'attività di implementazione attraversa il gap tra il dettagliato object design model e un completo set di file sorgenti che possono essere compilati.  

### Testing

Durante il testing, gli sviluppatori trovano le differenze tra il sistema e i suoi modelli eseguendo il sistema (o parte di esso) con degli dati campione di input. Durante lo *unit testing*, gli sviluppatori confrontano l'object design model con ogni oggetto e sottosistema. Durante l'*integration testing*, combinazioni dei sottosistemi sono integrate tra loro e confrontate col system design model. Durante il *system testing*, vengono eseguiti casi tipici e casi eccezionali sul sistema e vengono confrontati col modello dei requisiti.  
L'obiettivo del testing è di trovare quante più falle possibile in maniera tale che questi vengano riparati prima della consegna del sistema. Le pianificazioni delle fasi di test accadono in parallelo alle altrea ttività di sviluppo: i system test sono pianificati durante la raccolta dei requisiti e analisi, i test di integrazione sono pianificati durante il system design, le unit test sono pianificate durante l'object design.  

## Gestire lo sviluppo software

Le attività di gestione mirano a pianificare il progetto, monitorare il suo stato, tenere traccia dei cambiamenti, coordinare risorse in modo tale che venga consegnato un prodotto di qualità in tempo e rientrando nel budget.  

Le attività di gestione non coinvolgono solo i manager, ma anche molti altri partecipanti del progetto. Le attività di gestione includono:  

* Comunicazione
* Rationale Management
* Gestione della configurazione software
* Gestione del progetto
* Ciclo di vita del software

### Comunicazione

La comunicazione è l'attività più critica e time-consuming nell'ingegneria del software. Incomprensioni e omissioni portano spesso a falle e ritardi che sarebbe costoso correggere più tardi durante lo sviluppo. 

La comunicazione include lo scambio dei modeli e dei documenti riguardo il sistema e il suo dominio applicativo, riportando lo stato dei work product, fornendo feedback sulla qualità dei work product, raccogliendo e negoziando i problemi e comunicando le decisioni.  

La comunicazione è resa difficile dalla diversità dei background dei partecipanti, dalla loro distribuzione geografica e dal volume,complessità ed evoluzione delle informazioni scambiate.  

Per affrontare i problemi di comunicazione, i partecipanti di un progetto hanno a disposizione molti strumenti. Lo strumento più efficace è quello delle convenzioni: quando i partecipanti si accordano su una notazione per rappresentare informazioni, oppure su strumenti specifici per manipolare le informazioni, e su procedure per raccogliere e comunicare problematice, hanno già eliminato fonti significative di incomprensioni.  

Esempi di notazioni includono i diagrammi UML, i template per scrivere documenti e schemi di identificazione per la nomenclatura dei componenti software.  
Esempi di tools includono i CASE (Computer Aided Software Engineering) tools per mantenere modelli, word processor per generare documenti, formati di interscambio per pubblicare informazioni.  
Esempi di procedure includono le procedure per organizzare, condurre e prendere parte a una riunione, procedure per la revisione di documenti e per fornire feedback, prcedure per l'ispezione del codice sorgente e di eventuali falle nei modelli.  

Le convenzioni non devono essere le migliori in assoluto, devono solamente essere condivise e accordate con tutti i partecipanti.  

### Rationale management

Il rationale è la giustificazione delle decisioni. Data una decisione, il suo rationale include il problema a cui si rivolge, le alternative considerate, i criteri usati dallo sviluppatore per valutare le alternative, il dibattito che lo sviluppatore ha affrontato per ottenere in consenso e la decisione finale.  
Il rationale è l'informazione più importante per uno sviluppatore quando deve apportare modifiche al sistema. Se un criterio cambia, gli sviluppatori possono rivalutare tutte le decisioni che dipendono su tale criterio. Se una nuova alternativa è disponibile, questa può essere confrontata con tutte le altre alternative già valutate. Se una decisione è contestata, è possibile recuperare il suo rationale per poterla giustificare.  

Purtroppo, il rationale è anche l'informazone più complessa con cui gli sviluppatori hanno a che fare durante lo sviluppo e pertanto è difficile da aggiornare e da mantenere. A tal propositio, gli sviluppatori catturano il rationale durante i meeting e le discusioni online, rappresentano i lrationale con gli issue models e accedono al rationale durante i cambiamenti.  

### Gestione della configurazione software (Software Configuration Management)

La gestione della configurazione software è il processo che monitora e controlla i cambiamenti nei work products.  
I cambiamenti pervadono lo sviluppo software. I requisiti cambiamenti con l'avanzare di nuove richieste dal committente e con il migliorare delle conoscenze del dominio applicativo da parte degli sviluppatori. La piattaforma hwardare o software sul quale il sistema è costruito può cambiare con l'avanzare di nuove tecnologie. Il sistema può cambiare in seguito alla scoperta di nuove falle durante la fase di testing che sono state riparate.  

La gestione della configurazione software era il regno della manutanzione. Nei processi moderni di sviluppo, tuttavia, i cambiamenti avvengono molto prima della manutenzione. Di conseguenza, i cambiamenti durante lo sviluppo devono affrontati con la gestione della configurazione in tutte le fasi.  

La gestione della configurazione software consente gli sviluppatori di tenere traccia dei cambiamenti. Il sistema è rappresentato conme un numero di elementi di configurazione indipendentemente revisionati. Per ogni oggetto di configurazione, la sua evoluzione è tenuta traccia come una serie di versioni. Selezionare le versioni permette agli sviluppatori di fare il rollback a uno stato ben definito quando un cambiamento fallisce.  

La gestione della configurazione permette agli sviluppatori di controllare i cambiamenti. Dopo aver definito una linea di base, ogni cambiamento deve essere valutato e approvato prima di essere implementato.  

### Gestione del progetto

La gestione del progetto non produce nessun artifatto. Invece, la gestione del progetto include la supervisione delle attività per assicurare la consegna di un sistema di qualità in tempo e nei limiti di budget. Questo include pianificazione e bilancio del progetto durante le negoziazioni col committente, assumere sviluppatori e organizzarli in teams, monitorare lo stato del progetto, intervenire quando si verificano deviazioni.  

### Ciclo di vita del software

Il processo di sviluppare software può essere visto come un complesso sistema di input, output, attività e risorse.  
Le stesse tecniche di modellazione applicate agli artefatti software sono usate per modellare processi software. Un modello generale per il processo di sviluppo software è detto *ciclo di vita dei software*.  


