---
title : Raccolta dei requisiti
notetype : feed
date : 01-02-2021
---

* TOC  
{:toc}

# Introduzione

La **raccolta dei requisiti** (*requirements elicitation*) si focalizza sul descrivere lo scopo del sistema. Il committente, lo sviluppatore e gli utenti identificano un problema e definiscono un sistema che indirizza tale problema: tale definizione è detta **specifica dei requisiti** (*requirements specification*) e serve da contratto tra il committente e gli sviluppatori.  

La specifica dei requisiti è strutturata e formalizzata durante la fase di **analisi**, che produce un **modello di analisi** (*analysis model*).  

I prodotti delle fasi di raccolta e analisi sono raffigurati nel seguente *activity diagram*:  

![anreq.png](../../assets/img//anreq.png)

Le fasi di raccolta e analisi rappresentato le stesse informazioni: le due fasi differiscono solo nel linguaggio e nella notazione utilizzata:  

* la *specifica dei requisiti* (ottenuta nella fase di raccolta) è scritta in linguaggio naturale
  + la specifica dei requisiti supporta la comunicazione con gli stakeholder
* il *modello di analisi* (ottenuto nella fase di analisi) è espresso in una notazione formale o semiformale  
  + il modello di analisi supporta la comunicazione tra sviluppatori

Entrambi sono considerati modelli del sistema ed entrambi rappresentano gli stessi aspetti del sistema: pertanto, è possibile eseguire le fasi di raccolta e analisi in maniera concorrente e iterativa.  

Le fasi di raccolta e l'analisi si focalizzano solo sul sistema dal *punto di vista dell'utente*: questo comprende le funzionalità di sistema, le interazioni utente-sistema, gli errori che il sistema rileva e gestisce e le condizioni ambientali in cui il sistema deve funzionare.  

La struttura del sistema, le tecnologie implementative scelte per costruire il sistema, la progettazione del sistema, le metodologie di sviluppo e altri aspetti *non direttamente visibli all'utente* **non** sono parte dei requisiti.  


# Concetti

## Requisiti funzionali

I **requisiti funzionali** descrivono le interazioni tra l'utente e il suo ambiente in maniera indipendente dalla sua implementazione. L'ambiente include gli utenti e ogni altro sistema esterno con cui il sistema interagisce.  

## Requisiti non funzionali

I **requisiti non funzionali** descrivono aspetti del sistema che non sono direttamente correlati al comportamento funzionale del sistema.  
I requisiti non funzionali includono un'ampia varietà di requisiti applicabili a diversi aspetti del sistema che spaziano dall'usabilità fino alle performance.  

Il modello **FURPS+**, usato da *Unified Process* (*Jacobson et al., 1999*), fornisce le seguenti *categorie* di requisiti non funzionali:  

* **Usabilità**: è la facilità con cui un utente impara ad operare, preparare input e interpretare un output di un sistema (o componente).
  + I requisiti di usabilità includono, per esempio, le convenzioni adottate per l'interfaccia utente e il livello di documentazione utente
  + Spesso, i committenti affrontano i problemi di usabilità richiedendo agli sviluppatori di seguire certe linee guida per l'interfaccia utente (color schemes, loghi, fonts...)
* **Affidabilità**: è la capacità del sistema (o componente) di eseguire le funzioni richieste sotto le condizioni stabilite per un lasso di tempo definito
  + I requisiti di affidabilità includono, ad esempio, il tempo medio accettabile per un *failure* e la capacità di rilevare determinati *faults* oppure la capacità di restitere degli specifici attacchi
  + Questa categoria spesso comprende i requisiti di **attendibilità**, **robustezza** e **sicurezza**
    - *robustezza*: il grado in cui un sistema (o componente) riesce a funzionare correttamente in presenza di input non validi o condizioni ambientali stressanti
    - *sicurezza*: una misura dell'assenza di conseguenze catastrofische all'ambiente
  * **Prestazioni**: questi requisiti riguardano attributi *quantificabili* del sistema
    + *tempo di risposta* (il tempo in cui il sistema reagisce a un input utente)
    + *throughput* (quantità di lavoro compiuto dal sistema in unità di tempo)
    + *disponibilità*: il grado in cui il sistema (o il componente) è operativo e accessibile quando richiesto
* **Supportabilità**: riguarda la facilità di effettuare modifiche al sistema dopo il deploy
  + include l'*adattabilità*: la capacità di modificare il sistema allo scopo di trattare concetti aggiuntivi del dominio applicativo
  + include anche la *manutenibilità*: l'abilità di modificare il sistema per trattare nuove tecnologie o difetti da fixare
  + altri cambiamenti possono ad esempio riguardare l'*internazionalizzazione*: l'aggiunta di una nuova lingua o formati di valuta
  + Lo standard **ISO 9126**, simile al modello FURPS+, sostituisce questa categoria con  la *manutenibilità* e la  *portabilità* (la facilità con cui un sistema può essere trasferito da un ambiente hardware/software a un altro)

Le categorie appena menzionate sono detti **quality requirements**.  

Il modello FURPS+ fornisce categorie aggiuntive di requisiti che sono tipicamente incluse sotto la voce dei requisiti non funzionali:  

* **Requisiti di implementazione**: sono vincoli riguardanti l'implementazione del sistema
  + Possono riguadare l'uso di specifici tool, linguaggi di programmazione o piattaforme hardware
* **Requisiti di interfaccia**: sono vincoli imposti da sistemi esterni
  + Possono riguardare sistemi legaci o formati di interscambio
* **Requisiti operazionali**: sono vincoli sull'amministrazione e la gestione del sistema quando è operativo
* **Requisti di packaging**: sono requisiti sulle modalità di consegna del sistema
  + Può riguardare, ad esempio, vincoli riguardanti il supporto per l'installazione
* **Requisiti legali**: riguardano aspetti delle licenze,  
regolamenti, certificazioni rispetto a standard di qualità, etc.

I requisiti che rientrano nelle categorie appena menzionate sono chiamati **vincoli** (*constraints*) o **pseudo-requisiti** (*pseudo-requirements*).  

Il budget e le tempistiche per la consegna non sono trattati come requisiti non funzionali, in quando riguardano il progetto. 

## Completezza, consistenza, chiarezza e correttezza

I requisiti sono continuamente *validati* dal committente e dagli utenti.  
La **validazione** è un passo critico al processo di sviluppo, dato che sia il committente che gli sviluppatori dipendono dalla specifica dei requisiti.  

La *validazione dei requisiti* prevede che le specifiche siano complete, consistenti, non ambigue e corrette:  

* La specifica dei requisiti è **completa** se tutti gli scenari possibili del sistema sono descritti, inclusi i comportamenti eccezionali
* La specifica dei requisiti è **consistenze** se non sono presente contraddizioni
* La specifica dei requsiti e **non ambigua** se esattamente un solo sistema è definito (non è quindi possibile, ad esempio, interpretare le specifiche in due o più modi diversi)
* La specifica dei requisiti è **corretta** se rappresenta accuratamente il sistema che il committente ha chiesto e che gli sviluppatori hanno intenzione di costruire

La *correttezza* e la *completezza* della specifica dei requisiti è spesso difficile da stabilire, soprattuto prima dell'effettiva esistenza del sistema.  
Dato che la specifica dei requisiti funge da base contrattuale tra il committente e gli sviluppatori, tali specifiche vanno revisionate attentamente da entrambe le parti. In aggiunta, le parti critiche del sistema dovrebbero essere prototipate o simulate per dimostrare la loro fattibilità e per ottenere un feedback dall'utente.  

Il seguente è un esempio di alcuni requisiti che non soddisfano le proprietà appena descritte:  

![satwatcreq.png](../../assets/img//satwatcreq.png)

## Realismo, verificabilità e tracciabilità

Altre proprietà auspicabili per la specifica dei requisiti sono i seguenti:  

* La specifica dei requisiti è **realistica** se il sistema può essere implementato entro i vincoli imposti
* La specifica dei requisiti è **realistica** se il sistema, una volta costruito, consente di effettuare dei test ripetibili allo scopo di dimostrare che il sistema soddisfa i requisiti
  + Le seguenti sono istanze di requisiti non verificabili:
    - *Il prodotto deve avere una buona interfaccia*
    - *Il prodotto deve essere privo di errori*
    - *Il prodotto deve rispondere all'utente per 1 secondo il più delle volte*
* La specifica dei requisiti è **tracciabile** se ogni requisito può essere rintracciato per tutto il processo disviluppo fino alla corrispondente funzionalità di sistema e viceversa
  + La tracciabilità comprende anche la capacità di rintracciare le dipendenze tra i requisiti, le funzioni di sistema e gli artefatti intermedi
  + La tracciabiltà è critica per lo sviluppo di test e per valutare delle modifiche

### Mantenere la tracciabilità

L'approccio più semplice per mantenere la tracciabilità è quella di usare il *cross-referencing* tra i documenti, i modelli, codici e altri artefatti. Ogni elemento individuale (requisiti, componenti, classe, operazioni, casi di test) è individuato dal numero dell'elemento sorgente e dal numero dell'oggetto *target*.  


## Greenfield Engineering, Reengineering

L'attività di raccolta dei requisiti può essere classificata in tre categorie, a seconda della sorgente dei requisiti.   

* Nel **greenfield engineering**, lo sviluppo parte da 0. Non vi è alcun sistema preesistente.
  + I requisiti sono estratti dagli utenti e dal committente.
  + Un progetto di tipo **greenfield engineering** è avviato dall'esigenza di un utente o dalla creazione di un nuovo mercato
* Un progetto di tipo **reengineering** prevede la riprogettazione e re-implementazione di un sistema esistente.
  + I requisiti del nuovo sistema sono estratti dal sistema già esistente
  + Un progetto di questo tipo è avviato dall'accesso a nuove tecnologie o da una riprogettazione dei processi aziendali
* **Interface engineering**: riprogettzione dell'interfaccia utente di un sistema utente. Il sistema legacy rimane intatto tranne che per la sua interfaccia.

In progetti di tipo *reengineering* e *greenfield engineering*, gli sviluppatori devono accumulare quante più informazioni possibile dal dominio applicativo. Tali informazioni possono essere trovare nei manuali delle procedure, nella documentazione distribuita ai nuovi impiegati e nelle interviste fatti ai committenti ai clienti. Le interviste, tuttavia, possono essere inutili se non vengono chieste le giuste domande: a tal fine, è consigliato acquisire una solida conoscenza del dominio applicativo primo di ricorrere all'approccio diretto.  

# Attività

In questa sezione sono discusse le attività che costituiscono la fase di raccolta dei requisiti.  

## Identificare gli attori

Gli attori rappresentano le entità esterne che interagiscono col sistema. Un attore può essere umano oppure un sistema esterno.  

Gli attori sono un'astrazione dei ruoli e non necessariamente devono essere direttamente mappabili a delle persone. La stessa persona può assumere diversi ruoli (e quindi accedere a diverse funzionalità) in tempi diversi.  

Il primo passo della raccolta dei requisiti consiste nell'**identificazione degli attori**. Questo serve a delimitare i confini del sistema ma anche a trovare tutte le prospettive che lo sviluppatore deve considerare per il sistema.  

Se il sistema deve essere distribuito per un'organizzazione già esistente (Ad esempio un'azienda), solitamente gli attori esistono già ancor prima dello sviluppo del sistema e corrispondono ai ruoli all'interno dell'organizzazione.  

Durante i primi passi di identificazione degli attori, può risultare difficile distinguere gli attori dagli oggetti: un database, ad esempio, può essere un attore in certi casi oppure può essere parte del sistema.  
Una volta definiti i confini del sistema, non ci deve essere più nessun problema a distinguere tra gli attori e i componenti del sistema.  

Quando si identificano gli attori, gli sviluppatori devono porsi le seguenti domande:  

* *Quali gruppi di utenti sono supportati dal sistema per svolgere il loro lavoro?*
* *Quali gruppi di utenti eseguono le funzionalità principali del sistema?*
* *Quali gruppi di utenti eseguono funzioni secondarie, come la manutenzione e l'amministrazione?*
* *Con quale hardware esterno o sistema software esterno dovrà interagire il mio sistema?*

Una volta definiti gl iattori, il prossimo passo è quello di determinare le funzionalità accessibili a ciascun attore: queste informazioni possono essere estratte usando gli scenari e possono essere formalizzate usando gli use case.  

## Identificare gli scenari

Uno scenaro è una "*descrizione narrativa di cosa le persone fanno quando utilizzano un sistema software*". Uno scenario è una descrizione concreta, focalizzata e informale di una singola funzionalità del sistema dal punto di vista di un singolo attore.  

Gli scenari non vanno sostituiti con i casi d'uso, dato che si focalizzano su specifiche istanze di eventi concreti (al contrario dei casi d'uso, che si occupano di offrire una descrizione completa e generale).  
Gli scenari arricchiscono la raccolta dei requisiti, risultando uno strumento comprensibile a tutti gli stakeholder.  

Gli scenari possono avere diverse utilizzi durante le fasi del cliclo di vita del software. I seguenti sono alcune tipologie di scenari (*Carroll, 1995*):  

* **As-is scenarios**: descrivono una situazione corrente
  + Utilizzati in progetti *re-engineering*, questi scenari possono essere validati per la correttezza e accuratezza insieme agli utenti
* **Visionary scenarios**: descrivono un sistema futuro
  + Questi fungono da punto di riferimento per gli sviluppatori ma anche come mezzo di comunicazione per raccogliere requisiti dagli utenti
  + Possono essere visti come dei prototipi poco costosi
* **Evauation scenarios**: descrivi i compiti degli utenti rispetto al rispetto da valutare
  + Lo sviluppo collaborativo di questi scenari da parte degi utenti e da parte degli sviluppatori migliora la definizione delle funzionalità testate da questi scenari
* **Training scenarios**: introducono i nuovi utenti al sistema
  + Sono istruzioni passo per passo che guidano l'utente

Le seguenti domande possono essere poste per identificare gli scenari:  

* *Quali sono i task che l'attore vuole che il sistema svolga?"
* *A quali informazioni vuole accedere l'attore? Chi crea tali dati? Questi dati possono essere modificati o rimossi, e da chi?*
* *Di quali cambiamenti esterni l'attore deve informare il sistema? Quanto spesso? Quando?*
* *Di quali eventi il sistema deve informare l'attore? Con quanta latenza?"*

Gli sviluppatori usano documenti esistenti riguardo il dominio applicativo per poter rispondere alle domande poste sopra. Tali documenti includono i manuali utenti di sistemi precedenti, standard della compagnia, note degli utenti, cheat sheets, interviste agli utenti e al committente.  

Gli sviluppatori dovrebbero scrivere gli scenari usando i termini del dominio applicativo. Quando gli sviluppatori acquisiscono sempre più conoscenza del dominio applicativo, è possibile iterare sugli scenari per raffinarli e aggiungere un livello di dettaglio maggiore.  

Disegnare mock-ups di interfacce aiuta a trovare omissioni nelle specifiche e aiuta a costruire un'immagine più concreta del sistema.  

L'importanza e l'enfasi date alle fasi di identificazione degli attori e degli scenari consente fanno sì che gli sviluppatori acquiscano conoscenza del dominio applicativo. Una volta che gli sviluppatori hanno identificato e descritto gli attori e gli scenari, questi possono formalizzare gli scenari in *use cases*.  

## Identificare i casi d'uso

Uno *scenario* è un'istanza di *use case*.  
Uno *use case* specifica tutti i possibili scenari per un dato pezzo di funzionalità.  
Uno *use case* è avviato da un attore. Dopo il suo avvio, uno use case può interagire anche con altri attori.  
Uno **use case** rappresenta un flusso completo di eventi attraverso il sistema che scaturiscono dal suo avvio.  

Gli *use cases*, come gli scenari, possono essere scritti in vari livelli di dettaglio.  

Generalizzare gli scenari e *identificare* gli use case di alto livello che il sistema deve supportare consente agli sviluppatori di definire l'ambito (*scope*) del sistema.  

Come prima cosa, gli sviluppatori danno un nome ai casi d'uso, gli associano degli attori iniziali e forniscono una descrizione ad alto livello dei casi d'uso.  

Il *nome* di un caso d'uso deve essere una frase che comincia con un verbo e che denota quello che l'utente sta cercando di compiere. (esempio: *Report Emergency*). Il verbo deve essere dal punto di vista dell'utente e non del sistema.  

Associare degli attori inziali ai casi d'uso permette agli sviluppatori di chiarire i ruoli dei diversi utenti.  

La descrizione di uno use case implica di solito la specifica di quattro campi:  

* **entry conditions** e **exit conditions** del caso d'uso: permettono agli sviluppatori di capire le condizioni in cui uno use case è invocato e l'impatto dello use case sull'ambiente e sul sistema
  + Esaminando queste condizioni, lo sviluppatore può determinare se vi sono use cases mancanti
    - *Esempio*: se uno use case richiede che il "*piano di operazioni di emergenza per terremoti*" venga attivato, allora la specifica dei requisiti deve fornire uno use case per l'attivazione di tale piano
  * **flusso degli eventi**: permette agli sviluppatori e ai committenti di discutere le interazioni tra attori e sistema
    + Questo porta a decisioni riguardo i confini del sistema, come ad esmepio quali decisioni sono svolte dagli attori e quali azioni sono svolte dal sistema
* **requisiti speciali**: permette agli sviluppatori di raccogliere *requisiti non funzionali* nel contesto di una specifica funzionalità.  

Nella pratica possono esserci anche altri campi (es. flusso eccezionali degli eventi, regole, ...). 
Per maggiori informazioni vedi **Use Case Diagrams** qui: [[Modellare con UML]]    

### Linee guida per la scrittura dei casi d'uso

Scrivere casi d'uso è un mestiere (*craft*). Un analista impara  con l'esperienza a scrivere casi d'uso migliori. Di conseguenza, analisti diversi tendono a sviluppare diversi stili di stesura, che rende difficile la produzione di una specifica dei requisiti consistente. A tal scopo gli analisti adottano delle linee guida per la stesura dei casi d'uso. Le seguenti sono delle semplici linee guida che un novizio può adottare per scrivere i casi d'uso (*Cockburn, 2001*):  

* I casi d'uso devono avere come nome una frase che comincia con un verbo e che indica quello che l'utente ha intenzione di compiere
  + ``ReportEmergency``, ``OpenIncident``
  + I verbi devono corrispondere ad azioni dal punto di vista dell'utente, non del sistema
* Gli attori devono avere come nome una frase nominale
  + ``Fieldofficer``, ``Dispatcher``, ``Victim``
* Il confine del sistema deve essere chiaro. I passo compiuti dal sistema e i passi compiuti dall'attore devono essere ben distinti
* I passi nel flusso degli eventi devono essere formulati nella forma attiva
  + In questo modo viene esplicitato chi compie il passo
* La relazione causale tra passi successivi deve essere chiara
* Uno use case deve descrivere una transazione utente completa
  + Questo può andare, ad esempio dall'avvio dell'interazione fino alla ricezione di un feedback da parte del sistema
* Le eccezioni vanno descritte separatamente
* Uno use case non dovrebbe descrivere l'interfaccia utente del sistema
  + Questo distoglie l'attenzione dai passi attuati dall'utente
  + Un mock-up grafico è più adatto a tale scopo
* Uno use case non deve superare le due o tre pagine
  + Altrimenti, si consideri l'utilizzo di una relazione *«include»* o *«extend»*

Il seguente è un esempio di use case che viola le linee guida appena menzionate:  


![usecaseguide.png](../../assets/img//usecaseguide.png)



## Raffinare i casi d'uso

L' uso degli scenari e dei casi d'uso per definire le funzionalità di un sistema mira alla creazione di requisiti che vengono poi validati dagli utenti nelle prime fasi dello sviluppo.  
Quanto più si è lontani dall'inizio del processo di sviluppo, più il costo di un cambio nella specifica dei requisiti (e quindi dell'aggiunta di funzionalità non previste) aumenta. A tal proposito, gli sviluppatori devono sforzarsi di affrontare la maggior parte dei problemi riguardanti i requisiti nelle prime fasi di sviluppo.  

Nel processo di sviluppo, molti use cases vengono riscritti molteplici volte, altri use cases vengono raffinati in maniera sostanziale mentre altri ancora vengono completamente scartati.  

Per risparmiare tempo, la maggior parte del "lavoro esplorativo" può essere compiuto usando scenari e mock-up di interfacce.  

Le seguenti euristiche possono essere usate per scrivere gli scenari e i casi d'uso:  

* Utilizza gli scenari per comunicare con gli utenti e per validare le funzionalità
* Come prima cosa, raffina un singolo scenario per capire le supposizioni dell'utente riguardo il sistema
  + L'utente potrebbe essere familiare con un sistema simile. in tal caso, adottare le convenzioni di quella specifica interfaccia utente potrebbe rendere il sistema più utilizzabile
* Successivamente, definisce molti scenari in maniera non molto dettagliata per definire l'ambito (*scope*) del sistema. Valida questi scenari con l'utente
* Usa i *mock-ups* esclusivamente come supporto visuale
  + La progettazione dell'interfaccia utente andrebbe fatta come task separato dopo che la funzionalità è sufficientemente stabili
* Presenta all'utente molteplici alternative differenti
  + Valutare le differenze amplia l'orizzonte dell'utente e le sue prospettive
  + Generare differenze forza gli sviluppatori a "pensare fuori dagli schemi"
* Raffina e dettaglia un'ampia fetta quando il sistema e le preferenze degli utenti sono ben compresi. Valida con l'utente

Questa attività si focalizza sulla *completezza* e sulla *correttezza*. Gli sviluppatori identificano funzionalità non coperte dagli scenari, per poi documentarle raffinando gli use case o aggiungendone di altri. Gli sviluppatori descrivono casi rari o eccezionali dal punto di vista degli attori.  

Mentre la fase di identificazione degli use case si focaizza sullo stabilire i confini del sistema, la fase di raffinamento dei casi d'uso offre maggior dettaglio sulle funzionalità offerte dal sistema e dai suoi vincoli.  

## Identificare relazioni tra attori e casi d'uso

Le relazioni tra gli attori e gli use case permettono agli sviluppatori e agli utenti di ridurre la complessità dei modelli e aumentarne la comprensibilità.  

Usiamo la relazione di "*comunicazione*" tra attori e casi d'uso per descrivere il sistema in strati di funzionalità. Usiamo la relazione *«extend»* per separate il flusso di eventi eccezionale da quello comune.  
Usiamo la relazione *«include»* per ridurre la ridondanza tra i casi d'uso.  (Vedi [[Modellare con UML]])

### Relazione di "comunicazione" tra attori e casi d'uso

La relazione di *comunicazione* tra attori e casi d'uso rappresenta il flusso di informazioni durante il caso d'uso.  

L'attore che avvia il caso d'uso dovrebbe essere distinto dagli altri attori con cui il caso d'uso comunica. In questo modo ci è anche possibile distinguere quale attore può invocare un caso d'uso e quale attore invece non può.  

Allo stesso modo, specificando gli attori che comunicano con un caso specifico, noi specifichiamo anche quali attori accedono a specifiche informazioni e quali invece no.  

Quindi, documentanto le relazioni di avvio e di comunicazione tra attori e caso d'uso, noi stiamo specificando anche i controlli di accesso del sistemo ad un "livello grossolano".  

La seguente figura mostra un esempio di relazione di *comunicazione* tra attori e casi d'uso. Gli *stereotipi* *«initiate»* e *«participate»* denotano rispettivamente gli attori che iniziano la comunicazione e quelli che vi comunicano (Dopo che è stata avviata).    

![commcoars.png](../../assets/img//commcoars.png)

### Relazione *«extend»* tra i casi d'uso

Uno use case *estende* un altro use case se lo use case esteso include il comportamento dell'estensione sotto certe condizioni eccezionali.  

La separazione del flusso eccezionale degli eventi dal flusso di base permette la stesura di use case più brevi e concisi e consente allo sviluppatore di trattare ogni tipologia di funzionalità differentemente.  

![extendusecase.png](../../assets/img//extendusecase.png)

### Relazione *«include»* tra i casi d'uso


La ridondanza tra i casi d'uso va scomposta usando la relazione *«include»*.  

Fattorizzare comportamenti comuni (nel flusso di eventi principale) ha molti benefici, che includono descrizioni più brevi e minore ridondanza. Tuttavia, un'eccessiva frammentazione può risultare confusionari agli utenti e al committente.  

![includeusecase2.png](../../assets/img//includeusecase2.png)

### Differenza tra *«include»* e *«extend»*: alcune euristiche

Le relazioni *«include»* e *«extend»* sono costrutti simili.  
 
 (Vedi *Use Case Diagrams*: [[Modellare con UML]])   
La distinzione principale tra questi costrutti riguarda la direzione della relazione: 

* Per le relazioni *«include»*, l'evento che scaturisce lo use case incluso (*target*) è descritto nel flusso degli eventi dello use case che include (*source*)
  + Ogni use case che ne include un altro deve specificare dove tale use case va incluso
* Per le relazioni *«extend»*, l'evento che scatrisce lo use case sorgente (quello che estende) è descritto nel sorgente stesso come precondizione
  + Solo lo use case che estende deve specificare quali casi d'uso vanno estesi

Le seguenti euristiche possono essere usate per selezionare una relazione *«include»* o *«extend»*:  

* Usa relazioni *«extend»* per comportamenti eccezionali, opzionali o di rara occorrenza
  + Un esempio di rara occorrenza è il guasto di una risorsa
  + Un esempio di comportamento opzionale è la notifica di risorse nelle vicinanze che rispondono ad un evento non correlato
* Usa relazioni *«include»* per comportamenti condisi tra due o più use cases
* Non abusare della struttura dello use case model: degi use case un po' più lunghi (es. 2 pagine) possono risultare più comprensibili di tanti piccole use case

## Identificare gli oggetti di analisi iniziali

Uno dei primi ostacoli che gli sviluppatori e gli utenti incontrano durante la loro collaborazione riguarda l'utilizzo di terminologie differenti. Anche se col tempo gli sviluppatori imparano la terminologia ell'utente, questa problematica è riscontrabile nuovamente quando nuovi sviluppatori vengono aggiunti al progetto.   

Per stabilire una terminologia chiara, gli sviluppatori identificano gli **oggetti partecipanti** per ogn icaso d'uso. Gli sviluppatori dovrebbero identificare, denominare e descrivere univocamente tali oggetti e inserirli in un **glossario** (detto anche *data dictionary*). La costruzione del glossario costituisce in realtà il primo passo verso l'analisi ([[Analisi]]).  

Il glosario è incluso nella specifica dei requisiti e, successivamente, nei manuali utente.  
Gli sviluppatori mantengono il glossario aggiornato con l'evolersi della specifica dei requisiti.  

I benefici di un glossario sono molteplici:  

* nuovi sviluppatori sono esposti a un insieme *consistente* di definizioni
* un singolo termine è usato per ogni concetto, sia per gli sviluppatori che per gli utenti
* ogni termine ha un significato ufficiale chiaro e preciso

L'identificazione degli *oggetti partecipanti* risulta in un iniziale **modello a oggetti di anlisi** (*analysys object model*). L'identificazione degli oggetti partecipanti durante la raccolta dei requisiti costituisce un primo psso verso il completamento del *modello a oggetti di analisi*.  

Il *modello a oggetti di analisi* **non** è di solito usato come mezzo di comunicazione tra sviluppatori e utenti, in quanto questi ultimi in genere non hanno familiarità con i concetti dell'OO. Tuttavia, la descrizione degli oggetti (es. le definizioni dei termini nel glossario) e i loro attributi potrebbero essere visualizzati e revisionati dagli utenti. Questa attività è approfondita in [[Analisi]]  


Alcune euristiche per **identificare** gli oggetti di analisi iniziali:

* Termini che gli sviluppatori o gli utenti devono chiarire per capire uno use case
* Nomi ricorrenti negli use case
* Entità del mondo reale che il sistema deve tracciare
* Processi del mondo reale che il sistema deve tracciare
* Casi d'uso
* *Data sources* e *Data sinks*
  + Es. database o una stampante
* Artefatti con cui un utente interagisce
* **Nota**: utilizzare sempre termini del dominio applicativo

Durante la raccolta dei requisiti, gli oggetti partecipanti sono generati per ogni caso d'uso. Se due casi d'uso si riferiscono allo stesso concetto, allora l'oggetto corrispondente dovrebbe essere lo stesso. Se due oggetti condividono lo stesso nome ma non corrispondono allo stesso concetto, allora uno di questi va rinominato in modo tale da enfatizzare la differenza. Questa consolidazione elimina ogni ambiguità nella terminologia usata.  

Una volta identificati e consolidati gli oggetti partecipanti, gli sviluppatori possono porsi le seguenti domande per assicurarsi che l'insieme degli oggetti partecipanti sia completo:  

* *Quale use case crea questo oggetto?*
  + Esempio: *durante quali use case i valori di questo oggetto attributo entrano nel sistema?*
* *Quali attori accedono a questa informazione?*
* *Quale use case modifica e distrugge questo oggetto?*
  + Esempio: *quale use case modifica o rimuove questa informazione?*
* *Quale attore avvia questo use case?*
* *Questo oggetto è necessario?*
  + Esempio: *esiste almeno uno use case che dipende da questa informazione?*

## Identificare i requisiti non funzionali  
*Per la definizione di requisiti funzionali vedi la sezione sopra "Requisiti non funzionali".  *


I requisiti non funzionali sono definiti nello stesso momento dei requisiti funzionali dato che hanno un grande impatto sullo sviluppo e costo del sistema.  

> For example, consider a mosaic display that an air traffic controller uses to track planes. A mosaic display system compiles data from a series of radars and databases (hence the term “mosaic”) into a summary display indicating all aircraft in a certain area, including their identification, speed, and altitude. The number of aircraft such a system can display constrains the performance of the air traffic controller and the cost of the system. If the system can only handle a few aircraft simultaneously, the system cannot be used at busy airports. On the other hand, a system able to handle a large number of aircraft is more costly and more complex to build and to test. 

L'insieme di requisiti non funzionali che raccolti solitamente include requisiti che vanno in conflitto tra loro (**Esempio**: un meccanismo accurato e allo stesso tempo economico da sostituire). A tal proposito , il committente e lo sviluppatore *prioritizzano* i requisiti non funzionali.  

Gli analisti adoperano solitamente una *classificazione* dei requisiti non funzinali (ad esempio lo schema FURPS+) per poter generare una "check list" di domande da porre per aiutare sviluppatori e committenti a concentrarsi sui requisiti non funzionali. Dato che a questo punto sono stati già identificati gli attori, è possibile suddividere le domande della "check list" in base ai ruoli per poterli chiedere agli appositi rappresentati.  


La seguente figura mostra delle domande per ogni categoria FURPS+:  

![categoriefurps.png](../../assets/img//categoriefurps.png)

# Requirements Analysis Document

I risultati delle fasi di raccolta e analisi sono documentate nel *Requirements Analysis Document* (**RAD**). Questo documento descrive completamente il sistema in termini di requisiti funzionali e non funzionali.  

I lettori del RAD includono il committente, gli utenti, i gestori del progetto, gli analisti di sistema e i progettisti di sistema.  

La prima parte del documento, che include i casi d'uso e i requisiti non funzionali, è scritta duarante la fase di *Raccolta dei requisiti*. La formalizzazione delle specifiche in termini di *modello ad oggetti* è scritta durante la fase di *analisi*.  

Il seguente è un esempio di template per il RAD per la fase di Raccolta dei requisiti (le sezioni in corsivo sono scritte durante la fase di [[Analisi]]):  

![radsezioni.png](../../assets/img//radsezioni.png)


* **Introduzione**: ha lo scopo di fornire una breve panoramica delle funzionalità del sistema, dei motivi legati al suo sviluppo, del suo ambito e dei riferimenti al contesto di sviluppo (es. riferimenti al *problem statement* scritto dal cliente, riferimenti a sistemi esistenti, studi di fattibilità)
  + L'introduzione include anche gli obiettivi e i criteri di successo del progetto
* **Sistema corrente**: descrive l'attuale situazione
  + Se il sistema deve sostituire un sistema già esistente, la sezione descrive le funzionalità e le problematiche di tale sistema
  + Altrimenti, la sezione descrive come i compiti supportati dal nuovo sistema sono compiuti attualmente
* **Sistema proposto**: documenta la raccolta dei requisiti e il modello di analisi del nuovo sistema. Questo è diviso in quattro sottosezioni.  
  + **Panoramica**: presenta una panoramica funzionale del sistema
  + **Requisiti funzionali**
  + **Requisiti non funzionali** e le sue sottocategorie
  + **Modelli di sistema**: descrive gli scenari, gli use case, il modello a oggetti e i modelli dinamici per il sistema.
    - Questa sezione contiene le specifiche funzionali complete, inclusi i mock-up che illustrano le interfacce utente e i path navigazionali.
    - **Object model** e **Dynamic model** sono scritti durante l'analisi
* **Glossario**  

Il RAD dovrebbe essere scritto dopo che il modello dei casi d'uso diventi stabile: in questo modo, il numero di modifiche ai requisiti è minima. Tuttavia, delle modifiche ai requisiti possono sempre verificarsi durante il ciclo di vita del software.  
