---
title : System Design
notetype : unfeed
date : 01-02-2021
---

* TOC  
{:toc}

# Introduzione

Il *System design*, l'*object design* e l'*implementazione* costituiscono la costruzione del sistema.  
Durante queste tre attività, gli sviluppatori colmano il gap tra la specifica dei requisiti e il sistema da consegnare agli utenti. Il *System Design*  è il primo passo in questo processo e si focalizza sul decomporre il sistema in parti gestibili.  

Durante l'analisi e raccolta dei requisiti, ci concentriamo sullo scopo e le funzionalità del sistema. (Dominio applicativo)    
Durante il System Design, ci concentriamo sui processi, sulle strutture dati e sui componenti hardware e software necessari all'implementazione. (Dominio di implementazione)    
La sfida del System Design è che verranno riscontrati tanti criteri contrastanti e tanti vincoli durante la decomposizione. Non si possono anticipare tutte le decisioni relative alla progettazione non avendo una chiara idea del dominio soluzione.  

Il system design è quindi la trasformazione del modello di analisi nel modello di progettazione del sistema.  


## Panoramica

Il modello dei requisiti, risultante dalla fase di analisi, è descritto dai seguenti prodotti: 

* Un insieme di *requisiti non funzionali* e *vincoli*
  + Tempo di risposta massimo, throughput minimo, affidabilità, piattaforma del sistema operativo, …
* Uno *use case model*, che descrive le funzionalità del sistema dal punto di vista degli attori
* Un *object model*, che descrive le entità manipolate dal sistema
* Un *sequence diagram* per ogni *use case*, che mostra la sequenza di interazioni tra oggetti partecipanti nello use case.

Il modello di analisi descrive il sistema completamente dal punto di vista degli attori e serve da base di comunicazione tra sviluppatori e committenti. Il modello id analisi non contiene informazioni sulla struttura interna del sistema, il suo hardware o le sue configurazioni.  


Il **system design**, invece, risulta nei seguenti prodotti:  

* **Design goals**, che descrivono le qualità del sistema che gli sviluppatori dovrebbero ottimizzare
* **Software architecture**, che descrive la decomposizione in sottosistemi in termini di:
  + responsabilità tra i sottosistemi
  + dipendenze tra i sottosistemi
  + mapping sottosistema-hardware
  + decisioni importanti quali control flow, access control e data storage
* **Boundary use cases** (Casi limite): descrivono l'avvio, lo spegnimento e la gestione errori del sistema

I **design goals** derivano dai requisiti non funzionali. I *design goals* sono gli obiettivi che guidano le decisioni degli sviluppatori quando sono riscontrati dei trade-off.  

La **decomposizione in sottosistemi** costituisce il "grosso" del system design: gli sviluppatori dividono il sistema in parti gestibili al fine di affrontare la complessità. Ogni sottosistema è assegnato a un team e realizzato indipendentemente.  

Il seguente *activity diagram* mostra le attività del *system design*:  

![](../../assets/img//systemdesignactivity.png)


# Concetti

## Sottosistemi e classi

Allo scopo di ridurre la complessità del dominio applicativo, identifichiamo in essa parti piùù piccole chiamate "classi" e le organizziamo all'interno di packages.  

Allo stesso modo, per ridurre la complessità del *dominio (della) soluzione*, decomponiamo il sistema in parti più semplici detti **sottosistemi**, che sono costituiti da un certo numero di *classi del dominio soluzione*.  

Un **sottosistema** è una parte sostituibile del sistema con interfacce ben definite e che incapsula lo stato e il comportamento delle classi che contiene.  

Un sottosistema tipicamente corrisponde alla quantità di lavoro che un singolo sviluppatore (o un singolo team di sviluppo) può affrontare. Decomponendo il sistema nei suoi relativi sottosistemi indipendenti, team di sviluppo simultanei possono lavorare su singoli sottosistemi col minimo "overhead da comunicazione".  

Nel caso di sottosistemi complessi, applichiamo **ricorsivamente** questo principio e decomponiamo il sottosistema in ulteriori sottosistemi più semplici. Il seguente *class diagram* mostra la struttura di un sistema:  

![](../../assets/img//decomsys.png)

La decomposizione in sottosistemi è rappresentata mediante *UML component diagrams*. Un esempio di decomposizione in sottosistemi è la seguente:  

![](../../assets/img//decosys2.png)

Nei *component diagrams*, i **componenti** sono raffigurati da rettancoli con l'icona del componente in alto a destra. Le **dipendenze** sono raffigurate da freccie tratteggiate.  

I componenti rappresentati in UML possono essere:  

* **componenti logici**: corrispondono a un sottosistema che non ha un equivalente al run-time esplicito
  + Ad esempio, singoli componenti di business uniti in un singolo layer logico applicativo al run-time
* **componenti logici**: corrispondono a sottosistemi con un equivalente al run-time esplicito
  + Ad esempio, un database server

Vi sono linguaggi che forniscono costrutti appositi per modellare i sottosistemi (es. i ``package`` in Java). In altri linguaggi (come C o C++), non sono presenti costrutti espliciti di questo tipo, e per questo gli sviluppatori usano apposite convenzioni per raggruppare le classi (directories, namespaces).  

## Servizi e interfacce di sottosistema

Un sottosistema è caratterizzato dai servizi che fornisce agli altri sottosistemi.  

Un **servizio** è un insieme di operazioni correlate che condividono uno scopo comune.  
Un sottosistema che fornisce servizi di notifica, ad esempio, definisce le operazioni per inviare notifiche, consultare canali di notifica, iscrivere e disiscrivere ai canali.  

L'insieme delle operazioni di un sottosistema che sono disponibili agli altri sottosistemi costituisce l'**interfaccia di sottosistema**. L'interfaccia di sottosistema include il *nome* delle operazioni, i loro *parametri* (con i rispettivi *tipi*) e i *valori di ritorno*.  

La fase di *system design* si focalizza sul definire i servizi offerti da ogni sottosistema. (La fase di *Object design*, più avanti, si focalizzerà sulle API, che raffinano e estendono le interfacce di sottosistema)  

Le interfacce *fornite* e le interfacce *richieste* possono essere rappresentate in UML col costrutto **assembly connector** (Detto anche *ball-and-socket connector*):  

* l'interfaccia *fornita* è raffigurata con una sfera col suo nome affianco
* l'interfaccia *richiesta* è raffigurata come una presa (*socket*)
* la dipendenza tra due sottosistemi è raffigurata mediante la connessione tra la corrispondente sfera e la corrispondente presa nel *component diagram*  

Un esempio di *component diagram* che utilizza il costrutto *ball-and-socket* è il seguente:  

![](../../assets/img//ballsocket.png)

La notazione *ball-and-socket* viene utilizzata quando la decomposizione in sottosistemi diventa abbastanza stabile. Durante i primi passi del *system design*, potremmo non avere ancora una chiara visione riguardo l'allocazione delle funzionalità nei sottosistemi: in tal caso possiamo usare la notazione "*dipendenza*" mostrata nella sezione precedente, raffigurata da una freccia tratteggiata.  

La definizione di un sottosistema in termini dei suoi servizi ci aiuta a focalizzarti sulle sue interfacce anzichè sulle sue implementazioni. Quando si scrivono le interfacce di sottosistema, occorre minimizzare il numero di informazioni fornite riguardo l'implementazione. (Ad esempio, un'interfaccia di sottosistema non deve riferirsi a strutture dati interne come linked lists, arrays, hash tables). Questo ci permette di minimizzare l'impatto delle modifiche in cambio di revisioni alle implementazioni di un sottosistema.  

Più in generale, vogliamo minimizzare l'impatto delle modifiche cercando di minimizzare le dipendenze tra i sottosistemi. 

## Coesione e accoppiamento
L'**accoppiamento** (*coupling*) è il numero di dipendenze tra due sottosistemi.  
Se sue sottosistemi sono **debolmente accoppiati** (*loosely coupled*), questi sono relativamente indipendenti, di conseguenza le modifiche ad un sottosistema hanno un impatto minimo sull'altro.  
Se due sottosistemi sono **fortemente accoppiati** (*strongly coupled*), le modifiche apportate ad un sottosistema impattano molto probabilmente con l'altro sottosistema.  
Una proprietà desiderabile di una decomposizione in sottosistemi è che i sottosistemi siano tanto *debolmente accoppiati* quanto ragionevole. Questo minimizza l'impatto di errori (o modifiche future) in un sottosistema nell'altro sottosistema.  

Ridurre l'accoppiamento non è fine a se stesso. il fine ultimo è quello di ridurre la complessità e vi possono essere casi in qui un accoppiamento ridotto può portare a complessità aggiuntiva. Infatti, riducendo il *coupling*, gli sviluppatori possono introdurre dei **layer di astrazione superflui** che impiegano tempo di sviluppo (per gli sviluppatori) e tempo di esecuzione (per la macchina).  
L'alto accoppiamento diventa un problema solo se sono previste modifiche nei sottosistemi.  

Il seguente *component diagram* mostra un esempio di riduzione del coupling tra i sottosistemi. La prima alternativa mostra una situazione dove tutti i sottosistemi accedono al database direttamente, mentre la seconda alternativa "copre" il database" da un sottosistema aggiuntivo che funge da "layer di astrazione". La supposizione dietro questa scelta di design sta nella supposizione che il sottosistema ``Storage`` abbia un'interfaccia più stabile di ``Database``:  

![](../../assets/img//dbstoragecop.png)

La **coesione** è il numero di dipendenze all'interno di un sottosistema.  
Se un sottosistema contiene tanti oggetti correlati tra loro e che eseguono task simili, allora la sua coesione è alta.
Se un sottosistema contiene tanti oggetti non correlati tra loro, allora la sua coesione è bassa.  

Una proprietà desiderabile di una decomposizione in sottosistemi è che i suoi sottosistemi abbiano una **alta coesione**.  

Il seguente *component diagram* mostra un esempio di sottosistema con bassa coesione:  

![](../../assets/img//bassacoesione.png)

Nella figura sopra possiamo osservare come il *class model* possa essere partizionato in due sottografi. I sottosistemi risultanti sono i seguenti:  

![](../../assets/img//altsubdec10.png)

La decomposizione risultante ci permette di sviluppare (e riusare) i sottosistemi in maniera indipendente. I sottosistemi risultanti presentano una coesione più alta e l'accoppiamento tra loro risulta basso (dato che vi è solo un'associazione tra i 2 sottosistemi).  

In genere, vi è un trade-off tra coesione e accoppiamento: possiamo aumentare la coesione decomponento il sistema in sottosistemi più piccoli, ma questo porta ad un aumento dell'accoppiamento dato che il numero di interfacce cresce.  

Una buona **regola empirica** da adottare è quello di affrontare $$7\pm2$$ concetti per ciascun livello di astrazione: se vi sono più di 9 sottosistemi ad un dato livello di astrazione oppure se un sottosistema fornisce più di 9 servizi, occorre considerare una revisione della decomposizione.  

Per lo stesso motivo, il numero di layers non deve essere più di $$7\pm 2$$. Infatti, un buon system design è in genere compiuto con soli 3 layer.  

## *Layers* e partizioni

Una **decomposizione gerarchica** di un sistema produce un set ordinato di layers.  
Un **layer** è un raggruppamento di sottosistemi che forniscono servizi correlati, possibilmente realizzati usando servizi da un altro layer.  
I layer sono ordinati in modo tale che ogni layer può dipendere solo dai layer sottostanti e non ha conoscenza dei layer soprastanti. Il layer che non dipende da nessun altro è detto **bottom layer**, mentre il layer non usato da nessun altro è detto **top layer**.  

Un esempio di decomposizione distribuita in 3 layer:  

![](../../assets/img//layersyst.png)

In una **architettura chiusa**, ogni layer può accedere solo al layer inferiore adiacente ad esso. In una **architettura aperta**, ogni layer può accedere a qualsiasi layer inferiore ad esso.  

Le architetture **chiuse** hanno delle proprietà desiderabili: queste portano ad un basso accoppiamento tra i sottosistemi, e i sottosistemi possono così essere integrati e testati in maniera incrementrale.  
Ogni livello, tuttavia, introduce un overhead di velocità e di spazio che potrebbe rendere difficile il soddisfacimento di requisiti non funzionali. Inoltre, aggiungere funzionalità al sistema nelle fasi "tardive" del processo di sviluppo può rivelarsi difficile, soprattutto se le aggiunte non erano state previste.  

Nella pratica, raramente un sistema viene decomposto in più di 3 o 5 layers.  

Un altro approccio per affrontare la complessità è quello di **partizionare** il sistema in *peer subsystems*, ossia *sottosistemi alla pari*, ognuno responsabile per una diversa classe di servizi. Ogni sottosistema dipende debolmente dagli altri, ma il più delle volte opera in maniera "indipendente".  

La decomposizione in sottosistemi è in genere il risultato sia del *partizionamento* che del *layering*.   

Un approccio è quello di partire da sottosistemi di alto livello per poi ricorsivamente decomporli in sottosistemi di più basso livello fino a raggiungere sottosistemi implementabili da un singolo sviluppatore (o da un singolo team) senza però risultare in un aumento di complessità.  

In generale, una decomposizione in sottosistemi è il risultato sia di un'opera di layering che di un opera di partitioning. Come prima cosa partizioniamo il sistema in sottosistemi di alto livello facendo sì che ogni sottosistema operi in nodi hardware diversi oppure che ogni sottositema abbia una responsabilità ben definita (*separation of concerns*): ogni sottosistema risultante, se abbastanza complesso, viene poi decomposto in layer di più basso livello fin quanto non diventano abbastanza semplici da essere implementati da un singolo sviluppatore (o team).  

Ogni sottosistema aggiunge overhead dato dall'interfacciamento con altri sottosistemi. Troppo layering o partitioning può aumentare la complessità.  

### Esempi

Un esempio di architettura chiusa è il modello **OSI**, composto da 7 layer di cui ognuno è responsabile per l'esecuzione di funzioni ben definite e fruisce dei servizi offerti dal layer immediatamente inferiore.  

![](../../assets/img//OSI.png)

In precedenza, solo i 4 layer inferiori del modello OSI (dal layer fisico fino al trasporto) erano ben standardizzati. Gli sviluppatori di applicazioni dovevano quindi riempire il gap tra il layer di *Trasporto* col layer di *Applicazione*. Col numero sempre crescente di applicazioni distribuite, questo gap ha motivato lo sviluppo di middleware come CORBA e Java RMI. CORBA e Java RMI permettono l'accesso ad oggetti remoti in maniera trasparente, come se fossero oggetti locali, implementando quindi di fatto i layer di *Presentazione* e di *Sessione*. Il seguente è quindi un altro esempio di architettura chiusa*:  

![](../../assets/img//CORBA.png)

Un esempio di architettura aperta è dato dallo *Swing user interface toolkit for Java*:  

![](../../assets/img//swing.png)


## Stili architetturali
Con l'aumentare della complessità dei sistemi, la specifica della decomposizione in sottosistemi è critica. È difficile modificare o correggere una scarsa decomposizione una volta che lo sviluppo è iniziato, dato che molte interfacce dei sottosistemi dovrebbero cambiare di conseguenza. A tal proposito, il concetto di **architettura software** è emerso.  

Una architettura software include la decomposizione del sistema, il flusso di controllo globale, la gestione delle boundary conditions e i protocolli di comunicazione tra sottosistemi.  

In questa sezione sono descritti degli stili architetturali che possono essere usati come base per le architetture dei diversi sistemi.  

### Repository

Nello **stile architetturale a repository**, i sottosistemi accedono e modificano una struttura centrale detta *repository*.  

I sottosistemi sono relativamente indipendenti (*loosely coupled*) dato che interagiscono solo attraverso il repository.  

Il flusso di controllo può essere dettato dal repository (ad esempio: trigger sui dati che invocano altri sottosistemi) oppure dai sottosistemi (ad esempio: flusso di controllo indipendente e sincronizzazione mediante lock nel repository)  

![](../../assets/img//repoarch.png)


I repository sono usati tipicamente per i DBMS: la centralità dei dati facilita il controllo di problemi di concorrenza e integrità tra i sottosistemi.  

I repository sono usati tipicamente anche dai *compilatori* e dai *software development environment*: i diversi sottosistemi di un compilatore accedono e aggiornano un *albero di parsing* centrale e una *tabella dei simboli*. I debugger e gli editor sintattici possono anche loro accedere a questa tabella dei simboli.  

I sottosistemi a repository possono implementare il controllo di flusso globale: nel caso del compilatore, ogni sottosistema invoca il repository centrale, mentre quest'ultimo si occupa di serializzare le chiamate concorrenti.    

Al contrario, può essere un repository a invocare gli altri sottosistemi in base allo stato della struttura dati centrale: sistemi di questo tipo sono detti **sistemi blackboard**.    

![](../../assets/img//esarchrep.png)

I repository sono adatti per applicazioni con task di elaborazione dati che cambiano di frequente. Una volta che un repository centrale è stato definiti, nuovi servizi possono essere definiti facilmente nella forma di sottosistemi aggiuntivi.  

Lo svantaggio principale dei sistemi a repository sta nel fatto che il repository centrale può diventare facilmente un collo di bottiglia. Inoltre, il coupling tra ogni sottosistema e il repository è alto, pertanto è difficile cambiare il repository senza impattare su tutti i sottosistemi.  

### Model/View/Controller
Nello stile architetturale *Model/View/Controller* (**MVC**), i sottosistemi sono classificati in 3 diversi tipi: 

* il sottosistema **model** manientene la conoscenza del dominio applicativo
  + fornisce quindi i metodi per accedere ai dati utili all'applicazione
  + non dipende dai sottosistemi *view* e *controller*. I cambiamenti nel suo stato sono rilevati mediante un protoccolo di *subscribe/notify*
* il sottosistema **view** visualizza all'utente gli oggetti del dominio applicativo (ossia i dati contenuto nel model) e si occupa dell'interazione con gli utenti
* il sottosistema **controller** è responsabile della sequenza di interazioni con l'utente
  + riceve i comandi dell'utente (in genere attraverso il view) e li attua modificando lo stato degli altri due componenti  

L'MVC è un caso speciale di repository dove il *model* implementa la struttura dati centrale mentre gli oggetti *control* dettano il flusso di controllo.  

![](../../assets/img//mvc.png)

Il motivo per cui si separano *Model*, *View* e *Controller* è che le interfacce utenti sono soggette a cambiamenti più spesso di quanto avviene per la conoscenza del dominio. (il *model*). MVC è appropriato per sistemi interattivi, specialmente quando si utilizzano viste multiple dellos tesso model. Tuttavia, MVC introduce lo stesso collo di bottiglia visto per lo stile repository.  

Il seguente *communication diagram* mostra una sequenza di eventi nello stile architetturale MVC:  

![](../../assets/img//mvcex.png)

MVC è un *pattern architetturale* molto diffuso nello sviluppo di interfacce grafiche di sistemi software OO. Originariamente impiegato dal linguaggio *Smalltalk*, è stato poi sposato da numerose tecnologie come ad esempio i framework *Java Swing*, *JSF* e *Struts*  



### Client/Server  

Nello stile architetturale *client/server/, un sottosistema *server* fornisce servizi a istanze di altri sottosistemi detti *client*, responsabili per l'interazione con l'utente.  
La richiesta di un servizio è tipicamente fatta via un meccanismo di *chiamata di procedura remote* o da un *common object broker* (es. CORBA, Java RMI, HTTP).  
Il flusso di controllo nei client e nei server è indipendente eccetto per la sincronizzazione per la gestione delle richieste e delle risposte.  

![](../../assets/img//clientserver.png)

Un sistema di informazioni con un database centrale è un esempio di *client/server*. In questo caso, lo stile architetturale *Client/server* è un caso particolare di stile repository in cui la struttura dati centrale è gestita da un processo.  

Il client in genere si occupa dell'interazione utente, di collezionare i dati, effettuare un elaborazione preliminare prima di inviarli al server e iniziare la transazione.  

Il server si occupa di ricevere i dati, eseguire la transazione e garantire l'integrità dei dati, la sicurezza del database e la concorrenza delle operazioni.  

In un'architettura *client/server* un client può accedere anche a più di un server: il *World Wide Web* è un'istanza di architettura *client/server* e permette ai client di accedere a dati di migliaia di server diversi.  

Lo stile architetturale *client/server* si presta bene a sistemi distribuiti che gestiscono grandi quantitativi di dati.  

Tuttavia, talvolta può essere necessario un meccanismo di comunicazione "tra pari" (*peer-to-peer*). A tal proposito, vi è una generalizzazione dello stile *client/server* detta **architettura peer-to-peer**  

### Peer-to-peer

Lo stile architetturale *peer-to-peer* è una generalizzazione del *client/server* in cui i sottosistemi agiscono sia da client che da server (ossia, i sottosistemi possono richiedere e offrire servizi).  
Il flusso di controllo all'interno di ogni sottosistema è indipendente tranne che per la sincronizzazione delle richieste.   

Un esempio di *peer-to-peer* è un database che accetta richieste dall'applicazione e notifica l'applicazione quando certi dati sono cambiati.    

![](../../assets/img//p2p.png)

I sistemi *peer-to-peer* sono più difficili da progettare dei sistemi *client/server* in quanto introducono la possibilità di deadlocks e complicanze col flusso di controllo.  


### Three-tier  

Lo stile architetturale *Three-tier* organizza i sottosistemi in 3 layer.  

* L'*interface layer* include tutti gli oggetti boundary che interagiscono con l'utente
  + finestre, form, pagine web, …
* L'*application logic layer* include tutti gli oggetti *control* e *entity*
  + Questo layer realizza le elaborazioni, le regole di verifica e la notifica richiesta dall'applicazione
* Lo *storage layer* realizza la memorizzazione, il recupero e l'interrogazione di oggetti persisenti    




![](../../assets/img//3tier.png)

Il layer di *storage*, in modo analogo ad un sottosistema *Repository*, può essere condiviso da diverse applicazioni che operano suglis tetti dati.  
Inolte, la separazione dei layer di interfaccia e di logica applicativa permettono lo sviluppo di diverse interfacce grafiche per la stessa logica applicativa.  

### Pipeline  

Nell'*architettura a flusso di dati* (*pipeline*) i sottosistemi processano i dati ricevuti da un insieme di input e inviano i risultati ad altri sottosistemi via un insieme di output. I sottosistemi sono chiamati "*filtri*" mentre le associazioni tra i sottosistemi sono chiamate "*pipe*".  
Ogni filtro conosce solo il contenuto e il formato dei dati ricevuti sulle *pipe* in input. Ogni filtro è eseguito in maniera concorrente: la sincronizzazione è compiuta dalle *pipe*.  

![](../../assets/img//pipef.png)
L'esempio migliore di architetture *pipeline* è dato dalla Shell UNIX.  

![](../../assets/img//unixsh.png)
L'architettura a *pipeline* si presta particolarmente bene a sistemi che applicazioni trasformazioni a flussi di dati senza interventi da parte dell'utente. Questa architettura non è adatta a sistemi che richiedono interazioni complesse tra i componenti (come i sistemi interattivi)   

# Attività (dagli oggetti di analisi ai sottosistemi)
Il system design consiste nel trasformare il modello di analisi nel *design model* (modello di progettazione) che tiene conto dei requisiti non funzionali descritti nel RAD.  

## Ottenere il modello di analisi

Innanzitutto partiamo con l'ottenere il modello di analisi: prendiamo i casi d'uso e, secondo le tecniche nel capitolo sull'analisi dei requisiti ([[Analisi]]) individuiamo gli oggetti di analisi. Quello che otteniamo è il modello di analisi come il seguente:  

![](../../assets/img//modelloanalisi.png)

## Definire i Design Goals  

La definizione degli *obiettivi di design* è il primo passo verso il system design. Esso identifica le qualità su cui il nostro sistema dovrebbe focalizzarsi.  

Molti obiettivi di design possono essere dedotti dai requisiti non funzionali o dal dominio applicativo. Altri obiettivi di design, invece, vanno raccolti dal committente. Tali obiettivi di design vanno in ogni caso specificati in maniera esplicita.  

Il seguente è un esempio di design goal specificati in funzione dei requisiti non funzionali raccolti durante le fasi precedenti:  

![](../../assets/img//nfr.png)

![](../../assets/img//dg.png)


### Categorie di Design Goals  
Possiamo stabilire gli obiettivi di design in base a molti criteri. I criteri possono essere suddivisi in cinque gruppi: *performance*, *dependability* (affidabilità), *cost*, *maintenance* e *end-user criteria*  

I criteri riguardanti le performance, l'affidabilità e i criteri dell'utente finale sono solitamente specificati nei requisiti o dedotti dal dominio applicativo.  
I criteri riguardanti il costo e la manutenzione sono dettati dal cliente e dal fornitore.  

#### Criteri di Performance  

I *criteri di performance* includono i requisiti di velocità e di spazio imposti sul sistema.   
*Il sistema dovrebbe essere reattivo, o deve massimizzare il numero di task compiuti? Vi è spazio in memoria disponibile per ottimizzazioni di velocità, oppure la memoria dovrebbe essere usata con parsimonia?*    

![](../../assets/img//performancec.png)

#### Criteri di affidabilità  

I *criteri di affidabilità* determinano quanto sforzo dovrebbe essere speso nel minimizzare i crash di sistema e le sue relative conseguenze.  

*Quanto spesso il sistema può crashare? Quanto deve essere disponibile il sistema agli utenti? Il sistema deve tollerare situazioni di errore e di failure? Vi sono rischi alla sicurezza associati con l'ambiente di sistema? Vi sono rischi alla sicurezza associati con i crash di sistema?*  

![](../../assets/img//affc.png)


#### Criteri di costo  

I *criteri di costo* includono il costo per sviluppare il sistema, per il suo *deploy*, e per amministrarlo. I criteri di costo non includono solo considerazioni di tipo progettuale ma anche considerazioni di carattere *manageriale*.  
Quando un sistema ne rimpiazza uno vecchio, il costo per assicurare la retrocompatibilità o il costo per effettuare una transizione completa vanno tenuti in considerazione. Vanno tenuti in considerazione i trade-off anche in termini di costi di sviluppo, di *formazione degli utenti finali*, dei costi di transizione, dei cosi di manutenzione…  

![](../../assets/img//costsc.png)

  
#### Criteri di manutenzione  

I *criteri di manutenzione* determinano quanto è difficile modificare il sistema dopo il suo impiego.  
*Quanto facilmente dovrebbero essere aggiunte nuove funzionalità? Quanto facilmente dovrebbero essere revisione delle funzioni esistenti? Può il sistema essere adattato ad un diverso dominio applicativo? Quanto sforzo sarà richiesto per portare il sistema ad una diversa piattaforma?*  

Questi criteri sono difficili da ottimizzare e pianificare, dato che rararemente si è a conoscenza dell'esito del progetto e di quanto a lungo il sistema sarà operativo.  

![](../../assets/img//maintenancec.png)

#### Criteri dell'utente finale

Gli *end user criterion* includono le qualità desiderabili dal punto di vista dell'utente finali non ancora coperte dai criteri delle altre categorie.  

*Il software è difficile da usare o da imparare? Possono gli utenti svolegere i task necessari sul sistema*    

![](../../assets/img//euc.png)

### Prioritizzare design goal e giungere a compromessi

Quando si definiscono i design goals, solo una piccola porzione di quei criteri può essere simultaneamente tenuta in considerazione. Sarebbe irrealistico sviluppare un software che sia allo stesso tempo sicuro, veloce ed economico.  

Tipicamente, gli sviluppatori devono *prioritizzare* gli obiettivi di design goals e giungere a compromessi tra gli obiettivi posti in gioco (ma anche tra gli obiettivi di carattere manageriale, dato che ci sono delle tempistiche e dei budget da rispettare).  

La seguente tabella elenca i possibili trade-off:  

![](../../assets/img//tradeoff.png)
  
Gli obiettivi di carattere manageriale possono essere scambiati con obiettivi di natura tecnica (es. tempi di consegna vs funzionalità aggiuntive). Una volta che si ha una chiara idea degli obiettivi di design, si può procedere con una prima progettazione della decomposizione in sottosistemi.  
  
## Identificare i sottosistemi: alcune euristiche

Individuare i sottosistemi durante la fase di progettazione è simile a trovare gli oggetti di analisi durante la fase di [[Analisi]]. Alcune tecniche di identificazione degli oggetti, come le euristiche di Abbott, sono applicabili all'identificazione dei sottosistemi.  

La decomposizione in sottosistemi è costantemente revisionata ogni volta che nuove problematiche vengono indirizzate: possono esserci accorpamenti, decomposizioni, nuove aggiunte tra i sottosistemi…  

La decomposizione in sottosistemi iniziale dovrebbe derivare dai requisiti *funzionali*.  

Ad esempio, nel modello di analisi risultante dalla fase di analisi, possiamo individuare tutti gli oggetti in comune in determinati casi d'uso e associarli ad un apposito sottosistema.   
Nel seguente esempio (Riconducible al modello di analisi di esempio visto sopra) possiamo vedere un sottosistema ``PlanningSubsystem`` contenente l'insieme di oggetti fortemente accoppiati legati all'oggetto ``Trip``, usato in alcuni use case (omessi in questa pagina). Gli altri oggetti sono stati associati ad un altro sottosistema, ``RoutingSubsystem``. In questo modo vi è solo un'associazione che attraversa i confini dei due sottosistemi.  

Un'altra euristica per l'identificazione dei sottosistemi è quella di mantenere insieme gli oggetti correlati funzionalmente. Un punto di partenza è quello di assegnare gli ogetti partecipanti identificati in ogni use case ad un sottosistema dedicato. Alcuni gruppi di oggetti risultano condivisi tra i sottosistemi e usati per la communicazione tra questi: è possibile decidere se creare un apposito sottosistema "di intramezzo" oppure assegnare l'oggetto comune al sottosistema che lo crea.  

Le seguenti sono alcune euristiche per il raggruppamento degli oggetti nei sottosistemi:  

* Assegna gli oggetti identificati in uno use case nello stesso sottosistema
* Crea un sottosistema dedicato per oggetti usati per muovere dati tra i sottosistemi
* Minimizza il numero di associazioni che attraversano i confini dei sottosistemi
* Tutti gli oggetti nello stesso sottosistema devono essere correlati funzionalmente    

Una volta raggruppati tutti gli oggetti correlati in un sottosistema, è possibile introdurre un oggetto di **facciata** (*façade pattern*) per creare un'interfaccia unificata nel sottosistema, nascondere le classi interne e ridurre il coupling tra i sottosistemi:  

![](../../assets/img//facadenalysis.png)


# Concetti: Affrontare i design goals  

Durante il system design identifichiamo i design goals, decomponiamo il sistema in sottosistemi e li raffiniamo fino ad affrontare tutti i design goals. In questo capitolo vengono introdotte le attività che occorrono allo scopo di affrontare i design goals.  

I design goals guidano le decisioni poste dagli sviluppatori, specialmente quando sono necessari dei trade-off.  
Gli sviluppatori dividono il sistema in parti gestibili allo scopo di affrontare la complessità: ogni sottosistema è assegnato a un team e realizzato indipendentemente. Affinché ciò sia possibile, gli sviluppatori devono affrontare problematiche a livello di sistema quando si decompone il sistema. Nello specifico, occorre affrontare le seguenti questioni:  

* *Hardware/software mapping*: Qual è la configurazione hardware del sistema? Quale nodo è responsabile per quale funzionalità? Come è realizzata la comunicazione tra i nodi? Quali servizi sono realizzati usando componenti software esistenti? Come sono incapsulate queste componenti?
  + Affrontare queste questioni porta spesso alla definizione di sottosistemi aggiuntivi che si occupano di spostare dati da un nodo all'altro, oppure sottosistemi aggiuntivi che affrontano le questioni legate alla concorrenza e all'affidabilità.
  + I componenti *off-the-shelf* permettono agli sviluppatori di realizzare servizi complessi più economicamente. I componenti OTS più comuni comprendono i DBMS e le interfacce utente. Le componenti, tuttavia, devono essere ben incapsulate al fine di minimizzare le dipendenze con componenti OTS
* *Data management*: Quali dato dovrebbero essere persistenti? Dove dovrebbero essere memorizzati i dati persistenti? Come si accede a tali dati?
  + I dati persistenti rappresentano un collo di bottiglia nel sistema su più fronti
  + L'accesso ai dati persistenti deve essere veloce e affidabile: una probabile corruzione dei dati porta a un probabile system failure
* *Access control*: chi può accedere a quali dati? Il controllo degli accessi può cambiare dinamicamente? Come è specificato e realizzato il controllo deglia ccessi?
  + Il controllo degli accessi e la sicurezza è una questione al livello di sistema.  Il controllo degli accessi deve essere consistente per tutto il sistema
* *Control flow*: Come sono sequenziate le operazioni nel sistema? Il sistema è event-driven? Può gestire più di una interazione utente per volta?
  + La scelta del flusso di controllo ha un impatto sulle interfacce ai sottosistemi. Se viene scelto un flusso di controllo *event-driven*, allora i sottosistemi devono fornire degli *event handlers*. Se vengono adottati i thread, allora i sottosistemi devono garantire mutua esclusione nelle sezioni critiche.
* *Boundary conditions*: Come viene inizializzato e spento il sistema? Come sono gestiti i casi eccezionali?
  + Queste questioni influenzano le interfacce di tutti i sottosistemi.  

Il seguente activity diagram raffigura le attività del system design.  

![](../../assets/img//activitysd.png)


Ogni attività affronta una questione descritta sopra. La fase di system design è altamente iterativa che spesso risulta nell'identificazione i nuovi sottosistemi, la modifica di sottosistemi esistenti e revisioni a livello di sistema che impattano su tutti i sottosistemi.  

## UML deployment diagrams

Gli UML **deployment diagrams** sono usati per raffigurare le relazioni tra i nodi e i componenti di run-time.  

I **componenti** sono entità auto-contenute che forniscono servizi ad altre componenti o ad attori. Un Web Server, per esempio, è una componente che fornisce servizi ad un web browser. Un Web Browser come Safari è una componente che fornisce servizi ad un utente.  

Un **nodo** è un dispositivo fisico oppure un ambiente di esecuzione in cui viene eseguito un componente. Un sistema è composto da componenti di run-time che interagiscono tra loro e che possono essere distribuiti tra più nodi. Un nodo può contenere un altro nodo (ad esempio, un dispositivo può contenere un ambiente di esecuzione).  

I nodi sono rappresentati da scatole e possono essere stereotipati per distinguere i dispositivi dagli ambienti di esecuzione.  

![](../../assets/img//deploymentdes.png)

Il diagramma sopra si focalizza sull'allocazione dei componenti ai nodi e fornisce una visione ad alto livello di ogni componente. I componenti possono essere raffinati allo scopo di includere informazioni sulle interfacce che forniscono e le classi che contengono. Il seguente *component diagram* mostra una componente con le classi in essa contenute:  

![](../../assets/img//componentdes.png)


# Attività (design goals)  

## Mappare sottosistemi ai processori e ai componenti  

### Selezionare una configurazione hardware e una piattaforma

Molti sistemi girano su più di una macchina e dipendono dall'accesso a una rete intranet o alla rete Internet.  

L'utilizzo di più computer può affrontare le esigenze di alte prestazioni e consente di più utenti. Di conseguenza, occorre esamianre con attenzione l'allocazione ai sottosistemi alle macchine e la progettazione dell'infrastruttura di supporto per la comunicazione tra sottosistemi. Dato che l'attività di hardware mapping ha un impatto significativo sulle prestazioni e sulla complessità del sistema, è possibile affrontare tali questioni già nei primi passi di system design.  

Selezionare una configurazione hardware include anche la selezione di una macchina virtuale su cui il sistema dovrebbe essere costruito. Tale macchina virtuale include il sistema operativo e tutte le componenti software necessarie, come un DBMS, ad esempio. La selezione di una macchina virtuale riduce la distanza tra il sistema e la piattaforma hardware sul quale verrà eseguito. Più funzionalità sono offerte dalle componenti, meno sforzo di sviluppo verrà richiesto. La scelta di una VM pul, tuttavia, essere vincolata dal committente (che ha già acquistato l'hardware prima della partenza del progetto) oppure dai costi (è difficile stimare se costruire una componente sia più economico di comprarne una off-the-shelf).  

### Allocare oggetti e sottosistemi ai nodi  

Una volta definita la configurazione hardware e le macchine virtuali, occorre assegnare gli oggetti e i sottosistemi ai nodi. Tale attività spesso porta all'identificazione di nuovi oggetti e sottosistemi addetti al trasporto di dati tra i nodi.  

In generale, allocare sottosistemi ai nodi hardware ci consente di distruibre funzionalità e potenza di calcolo dove è più necessario. Purtroppo, questo introduce anche problematiche legate alla memorizzazione, al trasferimento, al replicare e al sicnronizzare i dati tra i sottosistemi.  

## Identificare e memorizzare i dati persistenti  

I **dati persistenti** "vivono più a lungo" del tempo di esecuzione del sistema.  

*Dove* e *come* sono memorizzati i dati costituiscono una questione che influenza la decomposizione in sottositemi. In alcuni casi, ad esempio, in uno stile architetturale di tipo *Repository*, un sottosistema può essere completamente dedicato alla memorizzazione dei dati. La selezione si uno specifico DBMS può anche avere implicazioni sulle strategie di controllo e gestione della concorrenza.  

### Identificare gli oggetti persistenti  

Come prima cosa occorre identificare quali dati devono essere persistenti.  
Gli oggetti *entity* identificati durante la fase di analisi sono ovvi candidati per la persistenza. Non tutti gli *entity* object, tuttavia, devono essere persistenti (Alcuni oggetti sono calcolati al momento, ad esempio). I candidati alla persistenza sono anche altri e possono includere ad esempio informazioni riguardanti gli oggetti *boundary* (preferenze utente sulla GUI, ad esempio) o altro. In generale, è possibile identificare gli oggetti persistenti esaminando le classi che sopravvivono a un shutdown (volontario o no) di sistema.  

### Selezionare una strategie per la gestione dellos torage  

Una volta identificati gli oggetti persistenti, occorre decidere come tali oggetti saranno memorizzati. La decisione della gestione dello storage è molto complessa ed è solitamente dettata dai requistii non funzionali: *Gli oggetti devono essere ritrovati velocemente?* *Il sistema deve eseguire query complesse per ritrovare gli oggetti?* *Gli oggetti richiedono molta memoria?*.  

In generale vi sono 3 opzioni per la gestione dello storage:  


* *Flat files*: I file sono l'astrazione alla memorizzazione fornita dai sistemi operativi. L'applicazione memorizza i suoi dati come sequenza di byte e definisce come e quando tali dati dovrebbero essere recuperati. L'astrazione dei file è relativamente di basso livello e permette all'applicazione di eseguire una moltitudine di ottimizzazioni di tempo e spazio. I file, tuttavia, richiedono all'applicazione di tenere conto di molte problematiche, come l'accesso concorrente e la perdita di dati in caso di crash.
* *Relational database*. Un database relazionale fornisce astrazione per l'accesso ai dati ad un livello molto più alto rispetto ai file. I dati sono memorizzati in tabelle che rispettano uno **Schema**. Mappare oggetti complessi in uno schema relazionale può risultare una sfida, con più righe di più tabelle che rappresentano un singolo oggetto. I database relazionali forniscono servizi per la gestione della concorrenza, access control e crash recovery. I databsae relazionali sono una tecnologia matura, scalabile e adatta per grandi data sets. Tuttavia, possono risultare relativamente lenti per piccoli datasets e per dati non strutturati (immagini, natural language text)
* *Object-oriented database*. Un database orientato agli oggetti fornisce servizi simili ad un database relazionale. A differenza di un DB relazionale, i dati sono memorizzati come oggetti e relative associazioni, aggiungendo quindi un ulteriore livello di astrazione (rimuovendo la necessità del mapping tabella-oggetto) e introducendo il concetto dell'ereditarietà. I database OO sono tipicamente più lenti dei DB relazionali (specialmente per query complesse) e risultano più difficili da ottimizzare.  


![](../../assets/img//tradeoffstorage.png)


## Fornire controllo agli accessi  

In sistemi multi-utente, diversi attori hanno accesso a diversi dati e funzionalità. Durante l'analisi, abbiamo modellato queste distinzioni associando diversi casi d'uso a diversi attori. Durante il system design, modelliamo gli accessi determinando quali oggetti sono condivisi tra gli attori e definendo come gli attori controllano l'accesso.  

A seconda dei requisiti di seicurezza del sistema, definiamo anche come gli attori vengono autenticati dal sistema e come i dati selezionati nel sistema dovrebbero essere cifrati.  

In generale, occorre definire per ogni attore a quali operazioni egli può accedere su ogni oggetto condiviso. Gli accessi alle classi sono modellati con una *matrice degli accessi*: le righe della matrice rappresentano gli attori del sistema, le colonne rappresentano le classi di cui controlliamo gli accessi. Una entry ``(class, actor)`` nella matrice è chiamata **access right** ed elenca le operazioni che possono essere eseguite su istanze della classe specificata dall'attore specificato.  


![](../../assets/img//matrix.png)

È possibile rappresentare la matrice degli accessi seguendo tre approcci differenti:  

* **Global access table** rappresenta esplicitamente ogni cella come una tupla ``(actor, class, operation)``.
* **Access control list** associa una lista di ``(actor,operation)`` ad ogni corrispondente  ``class``. Ogni volta che un oggetto viene acceduto, la sua access list è controllata per trovare la corrispondente entry
* Una **capability** associa una coppia ``(class, operation)`` ad un attore

La rappresentazione della amtrice degli accessi costituisce una questione legata alle prestazioni: la *Global access table* richiede spazio; la *Access control list* velocizza la risposta a domande del tipo "*Chi ha accesso a questo oggetto?*; le *capabilities* velocizzano la risposta a domande del tipo "*A quali oggetti ha accesso questo attore?*".  

TODO PAG 271 E 272 (Nelle slide compaiono?)  
ANCHE 273 E 274. (Importanti: proxy, autenticazione e cifratura)  


## Progettare il flusso di controllo globale  

Il **Control flow** è il sequenziamento delle azioni in un sistema. In sistemi orientati agli oggetti, il sequenziamento delle azioni include la decisione di quali operazioni dovrebbero essere eseguite e in che ordine. Tali decisioni sono basate su eventi esterni generati da un attore o dal passaggio del tempo.  

Il flusso di controllo è una questione progetuale. Durante l'analisi il flusso di controllo non è un problema, perchè supponiamo che tutti gli oggetti stiano eseguendo simultaneamente ogni operazione quando necessario. Durante la fase di progettazione dobbiamo invece tenere in considerazione gli oggetti in modo più realistico.  

Ci sono tre possibili meccanismi per il control flow:  

* **Procedure-driven control**: operazioni aspettano per un input quando questi necessiano di dati da un attore.
  + Questa tipologia di control flow è usata principalmente nei sistemi legacy e in sistemi scritti in linguaggi procedurali
  + Introduce difficoltà quando è usato con linguaggi OO, dato che col distribuirsi delle operzioni in un largo set di oggetti, diventa difficile determinate l'ordine degli input guardando il codice
  + Utile per testare i sottosistemi: un driver fa specifiche chiamate ai metodi offerti dal sottosistema per testarli
* **Event-driven control**: un loop principale attende per un evento esterno. Quando un evento diventa disponibile viene inoltrato all'apposito oggetto in base alle informazioni in esso contenute.
  + Questo tipo di flusso di controllo ha il vantaggio di portare ad una struttura più semplice e di centralizzare tutti gli input nel main loop.
  + Tuttavia, questo rende l'implementazione di sequenze multi-step più difficile.
* **Threads**: i thread sono la variazione concorrente del controllo *procedure-driven*. Il sistema può creare un numero arbitrario di threads, ognuno dei quali corrisponde a un diverso evento
  + Se un thread necessità di più dati, può attenere input da uno specifico attore.
  + Questo tipo di control flow è il più intuitivo, ma il più difficile da debuggare per via del suo non determinismo  

Una volta scelto il meccanismo per il controllo di flusso, possiamo realizzarlo con un insieme di uno o più oggetti di controllo. Il ruolo di tali oggetti è quello di tenere traccia degli eventi esteri, memorizzare stati temporanei a riguardo ed eseguire la giusta sequenza di operazioni ai boundary e agli entity associati all'evento esterno.  

Localizzare le decisioni per il flusso di controlo per uno use case in un singolo oggetto risulta in codice più comprensibile e più resiliente a cambi nei requisiti.  

## Identificare i servizi  

In questa attività, si raffina la decomposizione in sottosistemi e si definiscono le interfacce per ogni servizio indentificato. Le interfacce sono raffigurate usando la notazione *UML socket and balls*. Vengono revisionate le dipendenze tra i sottosistemi e per ciascuna di esse viene definita un'interfaccia.  

Durante la fase di *object design*, spefichiamo i servizi in modo più *fine-grained*, in termini di operazioni, parametri e vincoli.  

Nella fase di *system design* ci si focalizza invece sulle dipendenze tra i sottosistemi. In questo modo, raffiniamo le responsabilità tra i sottosistemi, troviamo omissioni e validiamo l'architettura software corrente. Focalizzandoci sui servizi (anzichè sulle singole operazioni/parametri), riusciamo a stare ad un livello di astrazione di tipo architetturale, permettendoci di riassegnare le responsabilità tra i sottosistemi senza cambiare molti elementi modellanti.  

Le operazioni fornite dai servizi dovrebbero essere verbi in *camelCase*. Gli attributi definiti dalle interfacce sono sostantivi in camelCase.  

Una volta revisionate le dipendenze tra i sottosistemi e identificati i servizi corrispondenti, abbiamo una chiara visione delle responsabilità dei sottosistemi.  

## Identificare condizioni limite  


Occorre adesso esaminare le **condizioni limite** del sistema: ossia, occorre decidere come il sistema viene avviato, inizializzato e spento, e occorre definire come vengono affrontati situazioni di *major failure* come una corruzione dei dati o malfunzionamenti di rete, sia che questi siano causati da errori software che dalla mancanza di corrente elettrica.  

I casi d'uso che affrontano queste problematiche sono detti **casi d'uso limite** (*boundary use cases*).  

È comune che i casi d'uso limite non vengano specificati durante la fase di analisi e che questi vengano trattati separatamente rispetto ai comuni casi d'uso. Vi sono funzioni degli amministratori di sistema che possono essere dedotte dai requisiti, ma vi sono anche funzionalità che sono una coinseguenza delle decisioni di design (cache sizes, locazione del db server, locazione del backup server) e che non sono quindi deducibili dai requisiti.  

In generale, identifichiamo i boundary use cases esaminando ogni sottosistema e ogni oggetto persistente:  

* **Configuration**: per ogni oggetto persistente, esaminiamo in quale caso d'uso è creato o distrutto (o archiviato). Per oggetti che non sono creati o distrutti in nessun caso d'uso comune, occorre aggiungere un caso d'uso invocato da un amministratore di sistema
* **Start-up and shutdown**: per ogni componente, aggiungiamo tre casi d'uso per avviare, spegnere e configurare il componente. Nota che un singolo caso d'uso può gestire più componenti se questi sono fortemente accoppiati
* **Exception handling**: per ogni tipo di *component failure*, decidiamo come il sistema dovrebbe reagire (es. informa l'utente del failure). Documentiamo ognuna i queste decisioni con un caso d'uso eccezionale che estende i casi d'uso comuni rilevanti identificati durante la fase di raccolta dei requisiti  

In generale, una **eccezione** p un evento o un errore che accade durante l'esecuzione del sistema. Le eccezioni sono causate da tre diverse sorgenti:  

* *hardware failure*
* *modifiche nell'ambiente operativo*: perdita di connessione, power outage
* *software fault* un errore dovuto a un errore di design (bug)  

La **Gestione delle eccezioni** è il meccanismo con cui il sistema tratta una eccezione. In caso di errore utente, il sistema dovrebbe stampare a schermo un messaggio significativo e comprensibile all'utente in modo tale che egli possa correggere l'input. In caso di errore di rete, il sistema dovrebbe salvare il proprio stato temporaneo in modo da poterlo recuperare successivamente.   

Quando si identificano le condizioni boundary, gli sviluppatori esaminano ogni failure delle componenti e decidono come gestirle. È possibile progettare componenti che tollerino i failure o scrivere casi d'uso limite che specifichino come l'utente partecipa nella gestione del failure.  

Sviluppare sistemi affidabili è un compito arduo. Spesso, sacrificare alcune funzionalità può rendere la progettazione più facile.  


# Gestire il system design

### Documentare il system design: System Design Document 

Il system design è documentato dal *System Design Document* (**SDD**).  

L'SDD è usato per definire le interfacce tra i team di sviluppatori e funge da riferimento quando decisioni di carattere architetturale devono essere revisionato. L'SDD è destinato ai project manager, agli architetti di sistema e agli sviluppatori che progettano e implementano ogni sottosistema.  

La prima sezione è l'*Introduzione*. Il suo scopo è fornire una breve panoramica all'architettura software e ai suoid esign goals. Questa sezione fornisce anche riferimenti ad altri documenti e informazioni di tracciabilità.  

La seconda sezione, *Architettura del software corrente*, descrive l'architetture del sistema da rimpiazzare. Se non vi è alcun sistema, questa sezione può essere sostituita da uno studio delle architetture correnti per sistemi simili. Lo scopo di questa sezione è quella i drendere esplicito il background di informazioni utilizzate dagli architetti si sistema, le loro supposizioni e le questioni comuni affrontate dal nuovo sistema.  

La terza sezione, *Architettura del sistema proposto*, documenta il modello del system design del nuovo sistema ed è diviso in sette sottosezioni:  

* *Panoramica*: presenta una panoramica dell'architettura software e descrive brevemente le assegnazioni delle funzionalita di ciascun sottosistema
* *Decomposizione in sottosistemi* descrive la decomposizioni in sottosistemi e le responsabilità di ciascuno. Questo è il prodotto principale del system design
* *Mapping software/hardware* descrive come i sottosistemi sono assegnati all'hardware e a componenti off-the-shelf. Vengono affrontati anche i problemi introdotti dai molteplici nodi e dal riuso dei software
* *Persistent data mangement* descrive i dati persistenti memorizzati dal sistema e l'infrastruttura per la gestione dati richiesta.
  + Questa sezione include tipicamente la descrizione dello schema, la selezione del database e la descrizione dell'incapsulazione del database
* *Access control and security* descrive il modello utente e il sistema in termini di matrice di accesso
  + Questa sezione descrive anche le questioni legate alla sicurezza, come la selezione di un meccanismo di autenticazione, l'uso di cifratura e la gestione delle chiavi di cifratura
* *Global software control* descrive come il controllo software globale è implementato. In particolare, descrive come le richieste vengono scaturite e come i sottosistemi vengono sincronizzati. Questa sezione elenca e affronta le questioni legate a sincronizzazione e concorrenza
* *Boundary conditions* descrive lo startup, shutdown e gestione degli errori per il sistema

La quarta sezione, *Servizi dei sottosistemi*, descrive i servizi offerti da ciascun sottosistema. Nelle prime fasi di system design questa sezione può essere vuota o inconsistente. Questa ezione funge da riferimento tra i team per i confini di ciascun sottosistema. Le interfacce di ciascun sottosistema vengono poi raffinate nell'ODD:  

L'SDD viene scritto dopo aver effettuato una prima decomposizione del sistema. L'SDD viene poi aggiornato incrementalmente durante la fase di progettazione quando le decisioni vengono prese o quando i problemi vengono scoperti. L'SDD, una volta pubblicato, viene messo in *configuration management*. La sezione del revision history fornisce una cronologia delle modifiche apportate.  

### Assegnare responsabilità  

A differenza della fase di analisi, il system design è il regno degli sviluppatori. Il committente e l'utente finale vengono messi in secondo piano (Anche se molte alltività del system design scaturiscono revisioni nel modello di analisi).  

Il system design in sistemi complessi è incentrata intorno a un team di architetti. Questo è un team di carattere trasversale composta da architetti che definiscono la decomposizione in sottosistemi e da sviluppatori selezionati che implementato il sottosistema. Il team di architetti comincia a lavorare non appena il modello di analisi diventa stabile e continua ad essere operativo fino alla fine ella fase di integrazione. I seguenti sono i principali ruoli nel system design:  

* **Architect**: il ruolo principale. Assicura consistenza nelle decisioni di design e nello stile delle interfacce.  Assicura consistenza del design nel configuration management e nei team per il testing, in partciolare nella formulazione di politiche per il configuration management e per il system integration testing.
* **Architecture liaisons**: sono i rappresentati dei team si sottosistemi. Questi convogliano le informazioni da e per i propri team. Durante il system design, si focalizzano sui servizi dei sottosistemi; durante l'implementazione, si focalizzano sulla consistenza delle API
* **Document editor, configuration manager, reviewer**: stessi ruoli della fase di analisi  

Il numero di sottositemi determina la grandezza del team di architetti. Per sistemi complessi, un team di architetti è introdotto per ogni livello di astrazione.  

### Comunicare riguardo il system design  

Le cause della difficoltà nel comunicare durante la fase di system design sono le seguenti:  

* *Numero di problemi*: il numero di problemi aumenta quando gli sviluppatori cominciano la progettazione.
* *Cambiamenti*: la decomposizione e le interfacce dei sottosistemi sono un flusso costante. I termini usati dagli sviluppatori per nominare le parti evolvono
* *Livello di astrazione*: le discussioni sui requisiti possono essere rese concrete usando mockup e analogie con sistemi esistemi. Discussioni sulle implementazioni diventano concrete solo quando sono disponibili i test e i suoi risultati. Raramente le discussioni sul system design sono concrete.
* *Riluttanza nel confrontar eproblemi*: il livello di astrazioni di moste discussioni facilità la posticipazione nella risoluzione di grosse problematiche. Una tipica risoluzione è quella di "Revisioniamo questo problema durante la fase di analisi": nonostante una soluzione del genere sia desiderabile per alcune decisioni progettuali (es. strutture dati interne, algoritmi utilizzati), vi sono alcune decisioni che ahnno un impatto sui sottosistemi e sulle interfacce e che non dovrebbero essere posticipate
* *Conflitti tra gli obiettivi e i criteri*: sviluppatori diversi ottimizzano criteri diversi. Uno sviluppatore con esperienza in UX design sarà più prono ad ottimizzare i tempi di risposta; uno sviluppatore con esperienza in db ottimizzerebbe il throughput. Questi conflitti negli obiettivi tirano la decomposizione del sistema in direzioni diverse e portano a inconsistenze.

Le seguenti tecniche possono essere applicate durante la fase di analisi:  

* *Identificare e prioritizzare i design goals per il sistema e renderli espliti*
* *Rendere disponibile la versione corrente della decomposizione a tutti gli interessati*
* *Mantenere il glossario aggiornato*
* *Confrontare i problemi di progettazione*
* *Iterare*.  

### Iterare la fase di system design  

Come per i requisiti, il system design va incontro a successive iterazioni e modifiche.  
Le modifiche, tuttavia, dovrebbero essere controllate al fine di prevenire il caos (Specialmente in progetti complessi con molti partecipanti).  

Distinguiamo tre tipologie di iterazioni durante il system design:  

* Le decisioni pricipali" (*major decisions*) nelle prime fasi del system design impattano sulla decomposizione in sottosistema per ogni attività.
  + Tali decisioni sono gestite al meglio nelle sessioni di brainstorming. In questo caso, le definizioni sono ancora un *flusso*
* Revisioni alle interfacce
  + Iterazioni di questo tipo mirano a risolvere alcune questioni che solitamente riguardano la scelta di uno specifico vendor o di una specifica tecnologia. In circostanze del genere, la decomposizione è stabile.
* Errori e sviste nella progettazione  
  + Iterazioni di questo tipo rimediano a problemi di design scoperti più avanti nella fase di progettazione. Problematiche di questo tipo dovrebbero essere evitate il più possibile