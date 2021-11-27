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

Durante l'analisi e raccolta dei requisiti, ci oncentriamo sullo scopo e le funzionalità del sistema.  
Durante il System Design, ci concentriamo sui processi, sulle strutture dati e sui componenti hardware e software necessari all'implementazione.  
La sfida del System Design è che verranno riscontrati tanti criteri contrastanti e tanti vincoli durante la decomposizione.  

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

![systemdesignactivity.png](../../assets/img//systemdesignactivity.png)


# Concetti

## Sottosistemi e classi

Allo scopo di ridurre la complessità del dominio applicativo, identifichiamo in essa parti piùù piccole chiamate "classi" e le organizziamo all'interno di packages.  

Allo stesso modo, per ridurre la complessità del *dominio (della) soluzione*, decomponiamo il sistema in parti più semplici detti **sottosistemi**, che sono costituiti da un certo numero di *classi del dominio soluzione*.  

Un **sottosistema** è una parte sostituibile del sistema con interfacce ben definite e che incapsula lo stato e il comportamento delle classi che contiene.  

Un sottosistema tipicamente corrisponde alla quantità di lavoro che un singolo sviluppatore (o un singolo team di sviluppo) può affrontare. Decomponendo il sistema nei suoi relativi sottosistemi indipendenti, team di sviluppo simultanei possono lavorare su singoli sottosistemi col minimo "overhead da comunicazione".  

Nel caso di sottosistemi complessi, applichiamo **ricorsivamente** questo principio e decomponiamo il sottosistema in ulteriori sottosistemi più semplici. Il seguente *class diagram* mostra la struttura di un sistema:  

![decomsys.png](../../assets/img//decomsys.png)

La decomposizione in sottosistemi è rappresentata mediante *UML component diagrams*. Un esempio di decomposizione in sottosistemi è la seguente:  

![decosys2.png](../../assets/img//decosys2.png)

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

![ballsocket.png](../../assets/img//ballsocket.png)

La notazione *ball-and-socket* viene utilizzata quando la decomposizione in sottosistemi diventa abbastanzastabile. Durante i primi passi del *system design*, potremmo non avere ancora una chiara visione riguardo l'allocazione delle funzionalità nei sottosistemi: in tal caso possiamo usare la notazione "*dipendenza*" mostrata nella sezione precedente, raffigurata da una freccia tratteggiata.  

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

![dbstoragecop.png](../../assets/img//dbstoragecop.png)

La **coesione** è il numero di dipendenze all'interno di un sottosistema.  
Se un sottosistema contiene tanti oggetti correlati tra loro e che eseguono task simili, allora la sua coesione è alta.
Se un sottosistema contiene tanti oggetti non correlati tra loro, allora la sua coesione è bassa.  

Una proprietà desiderabile di una decomposizione in sottosistemi è che i suoi sottosistemi abbiano una **alta coesione**.  

Il seguente *component diagram* mostra un esempio di sottosistema con bassa coesione:  

![bassacoesione.png](../../assets/img//bassacoesione.png)

Nella figura sopra possiamo osservare come il *class model* possa essere partizionato in due sottografi. I sottosistemi risultanti sono i seguenti:  

![altsubdec10.png](../../assets/img//altsubdec10.png)

La decomposizione risultante ci permette di sviluppare (e riusare) i sottosistemi in maniera indipendente. I sottosistemi risultanti presentano una coesione più alta e l'accoppiamento tra loro risulta basso (dato che vi è solo un'associazione tra i 2 sottosistemi).  

In genere, vi è un trade-off tra coesione e accoppiamento: possiamo aumentare la coesione decomponento il sistema in sottosistemi più piccoli, ma questo porta ad un aumento dell'accoppiamento dato che il numero di interfacce cresce.  

Una buona **regola empirica** da adottare è quello di affrontare \(7\pm2\) concetti per ciascun livello di astrazione: se vi sono più di 9 sottosistemi ad un dato livello di astrazione oppure se un sottosistema fornisce più di 9 servizi, occorre considerare una revisione della decomposizione.  

Per lo stesso motivo, il numero di layers non deve essere più di \(7\pm 2\). Infatti, un buon system design è in genere compiuto con soli 3 layer.  

## *Layers* e partizioni

Una **decomposizione gerarchica** di un sistema produce un set ordinato di layers.  
Un **layer** è un raggruppamento di sottosistemi che forniscono servizi correlati, possibilmente realizzati usando servizi da un altro layer.  
I layer sono ordinati in modo tale che ogni layer può dipendere solo dai layer sottostanti e non ha conoscenza dei layer soprastanti. Il layer che non dipende da nessun altro è detto **bottom layer**, mentre il layer non usato da nessun altro è detto **top layer**.  

Un esempio di decomposizione distribuita in 3 layer:  

![layersyst.png](../../assets/img//layersyst.png)

In una **architettura chiusa**, ogni layer può accedere solo al layer inferiore adiacente ad esso. In una **architettura aperta**, ogni layer può accedere a qualsiasi layer inferiore ad esso.  

Le architetture **chiuse** hanno delle proprietà desiderabili: queste portano ad un basso accoppiamento tra i sottosistemi, e i sottosistemi possono così essere integrati e testati in maniera incrementrale.  
Ogni livello, tuttavia, introduce un overhead di velocità e di spazio che potrebbe rendere difficile il soddisfacimento di requisiti non funzionali. Inoltre, aggiungere funzionalità al sistema nelle fasi "tardive" del processo di sviluppo può rivelarsi difficile, soprattutto se le aggiunte non erano state previste.  

Nella pratica, raramente un sistema viene decomposto in più di 3 o 5 layers.  

Un altro approccio per affrontare la complessità è quello di **partizionare** il sistema in *peer subsystems*, ossia *sottosistemi alla pari*, ognuno responsabile per una diversa classe di servizi. Ogni sottosistema dipende debolmente dagli altri, ma il più delle volte opera in maniera "indipendente".  

La decomposizione in sottosistemi è in genere il risultato sia del *partizionamento* che del *layering*.   

Un approccio è quello di partire da sottosistemi di alto livello per poi ricorsivamente decomporli in sottosistemi di più basso livello fino a raggiungere sottosistemi implementabili da un singolo sviluppatore (o da un singolo team) senza però risultare in un aumento di complessità.    

### Esempi

Un esempio di architettura chiusa è il modello **OSI**, composto da 7 layer di cui ognuno è responsabile per l'esecuzione di funzioni ben definite e fruisce dei servizi offerti dal layer immediatamente inferiore.  

![OSI.png](../../assets/img//OSI.png)

In precedenza, solo i 4 layer inferiori del modello OSI (dal layer fisico fino al trasporto) erano ben standardizzati. Gli sviluppatori di applicazioni dovevano quindi riempire il gap tra il layer di *Trasporto* col layer di *Applicazione*. Col numero sempre crescente di applicazioni distribuite, questo gap ha motivato lo sviluppo di middleware come CORBA e Java RMI. CORBA e Java RMI permettono l'accesso ad oggetti remoti in maniera trasparente, come se fossero oggetti locali, implementando quindi di fatto i layer di *Presentazione* e di *Sessione*. Il seguente è quindi un altro esempio di architettura chiusa*:  

![CORBA.png](../../assets/img//CORBA.png)

Un esempio di architettura aperta è dato dallo *Swing user interface toolkit for Java*:  

![swing.png](../../assets/img//swing.png)


## Stili architetturali
           