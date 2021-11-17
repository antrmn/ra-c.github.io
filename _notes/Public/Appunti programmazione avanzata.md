---
title : Appunti programmazione avanzata
notetype : feed
date : 01-02-2021
---

* TOC  
{:toc}

**Risorsa principale:** [https://docs.python.org/3/]](https://docs.python.org/3/])

``help(object)`` restituisce documentazione e annotazioni per ``object``  

Late binding closure: [https://stackoverflow.com/questions/36463498/what-does-late-binding-closures-mean](https://stackoverflow.com/questions/36463498/what-does-late-binding-closures-mean)

Indentazione: 4 spazi  

### Funzioni built-in  

**Elenco completo:** [https://docs.python.org/3/library/functions.html](https://docs.python.org/3/library/functions.html)

Le seguenti funzioni sono sempre disponibili all'uso da parte dell'interprete Python:  

* ``abs(x)``: modulo di *x*  
* ``all(iterable)`` restituisce ``true`` se *iterable* è vuoto oppure se tutti gli elementi sono ``True`` 
  + (Viene invocato ``__bool__(self)`` per valutare il valore di verità di ciascun elemento)
* ``any(iterable)`` restituisce ``false`` se *iterable* è vuoto oppure ``True`` se almeno un elemento è ``True``
  + (Viene invocato ``__bool__(self)`` per valutare il valore di verità di ciascun elemento)
* ``delattr(object,name)`` è equivalente a ``del object.name``
* ``dir([object])`` restituisce la lista degli attributi di un oggetto. Se ``object`` è omesso, restituisce la lista di nomi simbolici nello scope locale  
  + È possibile ridefinire il comportamento di questa funzione su un oggetto modificando il metodo ``__dir__(self)``
  + Se ``__dir__()`` non è implementato, la funzione prova a prendere informazioni dall'attributo ``__dict__`` in maniera diversa a seconda del tipo di oggetto
    - Se l'oggetto è un modulo, viene restituita la lista dei suoi attributi
    - Se l'oggetto è un tipo o un oggetto classe, la lista contiene i nomi dei suoi attributi e i nomi di tutte le sue classi base (risolte ricorsivamente).  
* ``divmod(a,b)`` restituisce quoziente e resto tra *a* e *b* nella forma ``(a//b, a%b)``
* ``enumerate(iterable, [start=0])``
* ``filter(function,iterable)`` costruisce un iteratore dagli elementi di *iterable* con cui la funzione restituisce *True*
* ``getattr(object, name, [default])`` equivale a ``object.name``, se *default* è specificato, tale valore sarà restituito qualora ``name`` non dovesse esistere. (Se ``name`` non esiste e *Default* non è specificato allora viene lanciato ``AttributeError``)
* ``globals()`` restituisce un dizionario che rappresenza il namespace globale
* ``hasattr(object, name)`` verifica se *object* ha un attributo chiamato *name*
* ``hash(object)``
* ``help([object])``
* ``id(object)``
* ``input([messaggio])`` stampa ``messaggio`` a schermo, riceve l'input da ``stdin`` e lo restituisce sotto forma di stringa con ``\n`` finale.
* ``isinstance(object, class)``
* ``issubclass(class, classinfo)``
*  ``iter(object, [sentinel])``
* ``len(s)``
* ``map(function, iterable, ...)`` restituisce un iterator che applica *function* ad ogni elemento di *iterable*. La funzione deve prendere tanti argomenti quanti sono gli *iterable* passati e deve terminare quando almeno uno di questi termina
*  ``max(iterable, *, [key], [default])`` restituisce il massimo dell'iterabile.
  + Alternativa:  ``max(arg1, arg2, *args, [key])``
  + Vi è anche l'analogo ``min(...)``
* ``next(iterator, [default])`` avanza di un oggetto nell'iteratore. Se l'iteratore è esaurito viene restituito ``default`` (Se ``default`` non è specificato viene invece lanciato ``StopIteration``)
*  ``object()`` restituisce un oggetto senza alcuna funzionalità
  + ``object`` è la base di tutte le classi
  + ``object`` non ha un ``__dict__``, quindi non è possibile assegnarvi attributi
* ``open( file, mode='r')`` apre un file e restituisce un *file object*
* ``print(*args, [sep=' '], [end='\n'], [file=sys.stdout])``
* ``range(stop)`` o ``range(start, stop, [step])``
* ``reversed(seq)``
* ``setattr(object, name, value)`` equivale a ``object.name = value``
* ``sum(iterable)``
* ``super([type, [object-or-type]])``
* ``type(object)`` restituisce un oggetto tipo corrispondente a *object*
* ``vars([object])`` restituisce ``object.__dict__``. Se *object* è omesso ``vars()`` si comporta come ``locals()``

    
### Costrutti fondamentali

    if condition:
    ...
    elif condition:
    ...
    else:

In alternativa si può usare l'operatore ternario: ``var = a if (cond) else b``  

    while condition:  

Si può usare ``break``e ``continue``  

    for ... in ...:  

### Tipi built-in

I principali tipi built-in sono i tipi numerici (come ``int`` e ``float``), sequenze (liste, tuple, stringhe, range), mappings (``dict``), classi, istanze e eccezioni.  

* ``int([x=0],[base=10])`` (``x`` può essere stringa)
* ``float([x=0.0])`` (``x`` può essere stringa)
* ``bool([x=false])``
* ``str([object=''])``

``t = 3.8`` equivale a ``t = float(3.8)``, stesso vale per gli altri tipi.   

``a = a+b`` crea nuovo oggetto, ``a+=b`` no (``+=`` è un operazione in loco se viene implementato il metodo ``__iadd__()``, altrimenti è uno shorthand di ``__add()``)  

``x//y`` equivale a fare ``math.floor(x/y)``  
La potenza si esprime con ``x ** y`` o ``pow(x,y)``  

Python supporta il chianing di assegnamento: ``x=y=z=k=0``

Python permette di swappare variabili in questo modo: ``a,b=b,a``. Nota che è l'equivalente di scrivere ``(a,b)=(b,a)`` ossia 2 tuple.  


### Confronti

Gli operatori di confronto sono i soliti ``==``, ``!=``, ``<=``, ecc...  
A questi si aggiunge anche ``is`` e ``is not``.  

Il comportamento di questi operatori si può modificare ridefinendo gli appositi metodi (``__lt__()``, ``__eq__()``, ``__eq__()``...).  
``a == b``, ad esempio, chiama implicitamente ``a.__eq__(b)``.  
``a is b`` restituisce ``True`` se e solo se ``a`` e ``b`` riferimenti allo stesso oggetto in memoria. L'operatore ``is`` non può essere ridefinito ed è sempre utilizzabile.  

Se ``__contains__()`` è definito (solitamente per le collezioni) è possibile usare ``in``  

Python supporta il *chaining* di confronti: ``1<x+y<=10`` è l'equivalente di ``(1<x+y) and (x+y<=10)`` (però ``x+y`` viene valutato solo una volta)  

### Valori di verità

Ogni oggetto in Python può essere valutato come booleano (ossia come true/false).  
Di default, un oggetto è considerato ``true`` a meno che non viene definito un metodo ``__bool__(self)`` che restituisce false o un metodo ``__len__(self)`` che restituisce 0.  

Gli oggetti built-in considerati ``false`` sono i seguenti:  

* Le costanti ``False`` e ``None``
* Il numero ``0`` in qualunque tipo numerico: ``0``, ``0.0``, ``Decimal(0)``
* Sequenze e collezioni vuote: ``''``, ``()``, ``{}``...

Gli operatori booleani sono ``and``, ``or`` e ``not``


### Sequenze

Le sequenze base sono: **liste**, **tuple** e **range**. Anche le stringhe sono sequenze.  
L'ordine delle sequenze è rilevante  

Operazioni sequenze **immutabili** (list) e **mutabili** (tuple, range, stringhe):  

* ``el in s``, ``el not in s`` per verificare appartenenza
  + Nel caso delle stringhe, si può usare anche per verificare sottostringhe: ``"gg" in "eggs" -> true``
* ``s + t``per concatenare 2 sequenze
* ``s*n`` per concatenare la sequenza con sè stessa n volte
  + **Nota**: la sequenza non viene copiata ma semplicemente referenziata più volte. La modifica ad una sequenza è propagata in tutte le altre
* ``s[i]`` accedi all'i-esimo elemento
  + ``-1`` indica l'ultimo elemento, ``-2`` il penultimo e cosi via.
* ``s[start:stop]`` sottosequenza che comincia a ``start`` e finisce a ``stop-1``
* ``s[start:stop:step]`` come prima, però avanza di ``step`` elementi alla volta (Default 1)
* ``s[::step]`` se si vuole solo modificare lo step
  + **ESEMPIO**: ``s[::-1]`` è utilissimo se si vuole vedere la sequenza al contrario
* ``len(s)`` lunghezza di ``s``
* ``min(s)`` minimo e ``max(s)`` massimo
* ``s.count(el)`` conta occorrenze di ``el``
* ``s.index(el, [start, [end]])`` restituisce indice della prima occorrenza di ``el``, altrimenti lancia ``ValueError``

Operazioni sequenze **mutabili**:  

* ``s[i] = el`` rimpiazza ``el``con l'i-esimo oggetto di ``s``
* ``s[i:j] = t`` la sottosequenza di ``s`` che va da ``i`` a ``j`` (``j`` escluso) è rimpiazzata dalla sequenza ``t`` (più in generale, ``t`` è un ``iterable``, vedi sotto la definizione)
  + si può fare anche ``s[i:j:k]=t``
  + ``t`` deve essere di lunghezza pari alla sottosequenza di ``s``
* ``del s[i:j]`` è l'equivalente di ``s[i:j] = []``
* ``s.append(el)`` aggiunge ``el`` alla fine della sequenza. Equivale a fare ``s[len(s):len(s)] = [x]``
* ``s.clear()`` rimuove tutti gli elementi da ``s``. Equivale a ``del s[:]``
* ``s.copy()`` crea una *shallow copy* di ``s``. Equivale a fare ``s[:]``
* ``s.extend(t)`` estende ``s`` con il contenuto di ``t``. Equivale a fare ``s+=t`` o ``s[len(s):len(s)]=t``
* ``s*=n`` aggiorna ``s`` col suo contenuto ripetuto ``n``volte
* ``s.insert(i,el)`` aggiunge ``el`` in ``s`` all'indice ``i``. Equivale a ``s[i:i]=[x]``
  + Tutti gli elementi dopo ``i`` vengono shiftati di una posizione in avanti
* ``s.pop([i=-1])`` trova l'oggetto all'indice ``i``, lo rimuove e lo restituisce
  + Di default ``i=-1`` cioè viene rimosso l'ultimo elemento
* ``s.remove(el)`` rimuove il primo oggetto che corrisponde a ``el``, altrimenti lancia ``ValueError``
* ``s.reverse()`` inverte la sequenza e **non restituisce nulla** (la modifica è apportata direttamente su ``s``)

L'unica operazione che le sequenze **mutabili** non hanno implementato mentre le sequenze **immutabili** invece si è l'operazione ``hash(sequenza)``. Oggetti su cui si può usare ``hash()`` sono detti **hashable**. Le sequenze **immutabili** sono quindi *hashable**, ma solo se tutti gli elementi al suo interno sono a loro volta hashable.  

#### Liste

Le liste sono sequenze mutabili

Possono essere inizializzate in più modi:

* ``[]`` denota una lista vuota
* ``[a,b,c]``
* Mediante *list comprehension*: ``[x for x in iterable if......]``
  + ``coppie = [(x,y) for x in [1,2,3] for y in [4,5,6] if x!=5]``
* Usando ``list([iterable])`` (nessun parametro = lista vuota)  

Un oggetto lista ha anche il seguente metodo:  

* ``sort(self,*,[key=None],[reverse=False])`` ordina la lista in-loco (e *stabilmente*) usando confronti ``<`` tra gli elementi (chiamando opzionalmente una funzione ``key`` su ciascun elemento prima di ordinare)
  + I 2 parametri ``key`` e ``reverse`` sono **parametri keyword-only**
  + Quando è presente un'asterisco ``*``, tutti i parametri successivi sono **keyword-only**
  + Questo metodo restituisce ``None``

Un'alternativa al metodo ``sort(self,...)`` è la funzione built-in ``sorted(iterable,*,[key=None],[reverse=False])``, che **restituisce** una nuova lista ordinata.  

Tutti i metodi e le funzioni in Python seguono questa logica: quando l'operazione è effettuata *in-loco* (*in-place*, ossia sulla stessa struttura dati) allora non viene restituito nulla per chiarezza. È esattamente questo il caso del metodo ``sort`` e della funzione ``sorted``  

#### Tuples

Le tuple sono sequenze immutabili.  

I metodi per la creazione sono i seguenti:  

* ``()`` tupla vuota
* ``a,`` oppure ``(a,)`` per una tupla con un solo elemento (nota: la virgola alla fine è fondamentale)
* *tuple packing*: ``dict = 123, 456, 789`` crea una tupla ``(123,456,789)``
  + Nota: è possibile anche l'opposto: ``x,y,z = dict`` col *tuple unpacking*. Abbiamo quindi ``x=123``, ``y=456`` e ``z=789``
  - Al primo membro è possibile aggiungere anche una sequenza: ``a,b,c, *L, d = 1,2,3,4,5,6,7,8``fa sì che ``a=1``, ``b=2``, ``c=3``, ``d=8`` e ``L`` contiene tutto il resto
* ``a,b,c`` oppure ``(a,b,c)``
* ``tuple([iterable])``

**Nota**: NON esiste *tuple comprehension*. Vedi *generator expressions*

#### Ranges

``range(stop)`` oppure ``range(start,stop,[step])``


#### Stringhe  

``'Single quote permettono di aggiungere "double quote"'``  
``"Double quote permettono di aggiungere 'single quote'"``  

    '''Usare 3 apici (oppure 3 doppi apici) 
       permette di inserire newline'''

String literals adiacenti sono contatenati:  ``"foo " "spam" == "foo spam"``  

**Nota** non esiste alcun tipo ``char``.  

Una stringa è un oggetto **immutabile**.  

Una stringa è costruita con ``str(object)`` che si occuperà di restituire  ``object.__str__()``. Se ``object.__str__()`` non è definito, allora verrà chiamato ``repr(object)`` (definito da ``object.__repr__()``)  

    >>> class Test(object): 
    ...     pass
    ...
    >>> print str(Test())
    <__main__.Test object at 0x8b7d0>
    >>> print repr(Test())
    <__main__.Test object at 0x8b7d0>

**Metodo format:**

```python
formatstring = "{parola1} ciao {parola2}".format(parola1="aaa", parola2="bbb")
paroledic = {parola1: 'haha', parola2: 'hehee'}
formatstring2= "{parola1} ciao {parola2}".format(**paroledic)
```
```python
formatstring3 = "{} ciao {}".format("aaaa", "bbbb")
formatstring4 = "{1} ciao {0}".format("aaaa", "bbbb")  # inverte
```
### Hashable

Per poter usare ``hash(oggetto)`` la classe di ``oggetto`` deve implementare il metodo ``__hash__()``. Grazie a ``hash(..)`` è possibile verificare l'uguaglianza tra 2 oggetti con ``==`` (l'implementazione va messa nel metodo ``__eq__(self, other)``. Se questa non è presente, Python usa l'implementazione standard che consiste nel chiamare il costrutto ``is`` che restituisce ``true`` solo se i due operandi corrispondono allo stesso oggetto in memoria).  
Chiamare ``hash(..)`` su oggetti non-hashable risulta in ``TypeError``  

Di default, le classi create dall'utente sono ``hashable`` e di default l'hash è definito in base a ``id(object)`` che in CPython restituisce l'indirizzo dell'oggetto in memoria.  

### Iterable

Un oggetto **iterable** è un oggetto che può essere iterato mediante un **iteratore** e può essere usato nei cicli ``for`` (in realtà i cicli ``for`` chiamano *implicitamente* un iteratore e lo mantengono in memoria per la durata del ciclo).    

Per essere **iterable**, un oggetto deve:  

* implementare il metodo ``__iter__(self)`` che restituisce un oggetto *iteratore*
* **oppure** implementare i metodi ``__len__(self)`` e ``__getitem__(self, key)``
  + Questo perchè avere l'implementazione di ``__len__`` e ``__getitem__`` permette a Python di fornire un'implementazione predefinita di ``__iter__``  

Esempi di oggetti iterabili sono le sequenze (tuple, liste, stringhe, range), i dizionari e i **file object**  

**Nota**: sugli oggetti iterable si può usare il metodo ``__contains__(self, other)`` (**Nota**: ``__contains__`` è chiamato implicitamente quando si usa l'operatore ``in``)  

### Iteratore

Un **iteratore** è un oggetto che permette di iterare un oggetto **iterable**. L'iteratore per un oggetto **iterable** chiamato ``foo`` è restituito da ``foo.__iter__()`` oppure dalla funzione built-in ``iter(iterable)``.    

Un oggetto **iteratore** *deve* implementare i seguenti metodi:  

* ``__iter__(self)`` per restituire sè stesso
* ``__next__(self, [default])`` per restituire il prossimo oggetto dell'*iterable*
  + Se ``default`` è specificato, verrà restituito ``default`` se non vi sono più oggetti. Se invece ``default`` non è specificato e sono finiti gli oggetti allora verrà lanciata l'eccezione ``StopIteration``  

La condizione appena descritta è detta *iterator protocol*.  

Gli iteratori non sono riutilizzabili. Non è possibile resettare un iteratore alla posizione iniziale: occorre istanziarne un'altro.  

Un altro modo per realizzare un iteratore è implementando un **generatore**

### Generatore  

Un **generatore** è una funzione che contiene la keyword ``yield`` al posto di ``return``.  


```python
# esempio di definizione di funzione generatore
    def evens(iterable): 
        for n in iterable:
            if n % 2 == 0:
                yield 
```

```python
# esempio di chiamata a funzione generatore
nums = [1,2,3,4,5,6,7,8]
for n in evens(nums):
    print(n) #stampa "2 4 6 8" riga per riga
```

La chiamata di una funzione generatore comporta la restituzione di un **oggetto generatore**: tale oggetto implementa i metodi ``__iter__(...)`` e ``__next__(...)`` e rispetta quindi l'*iterator protocol* (tale oggetto è quindi un iteratore). 

Questo oggetto generatore si occupa di controllare l'esecuzione della funzione generatore: l'esecuzione della funzione comincia quando uno dei metodi dell'oggetto generatore viene chiamato. A quel punto l'esecuzione procede fino alla prima ``yield`` expression, dove viene sospesa e restituisce il valore di ``yield`` al ``__next__()`` (o ``send()``).  
L'esecuzione della funzione riprende quando uno dei metodi dell'oggetto generatore viene chiamato di nuovo: a quel punto l'esecuzione riparte da dove si era interrotta (mantenendo anche i valori delle variabili locali, lo stato di ogni eventuale eccezione ecc...) per poi sospendersi di nuovo al prossimo ``yield``.  

I metodi che riprendono l'esecuzione di una funzione generatore sono:  

* ``__next__(self)`` (o la funzione equivalente ``next(iterator)``)
  + Questo metodo è chiamato implicitamente da un ciclo ``for``
* ``send(self, value)`` come ``next(..)``, ma fa in modo che l'espressione ``yield`` su cui è stata sospesa l'esecuzione restituisca ``value``
  + Utile per passare valori in input (``yield`` restituisce ``None`` quando viene usato ``next(..)``)
* ``throw(self, type, [value])`` riprende dall'ultimo ``yield`` lanciando un'eccezione ``type`` e opzionalmente si comporta come ``send(value)``.  

Per tutti e 3 i metodi, se la funzione termina senza chiamare ``yield``, viene lanciata una eccezione ``StopIteration``.

È possibile chiudere un generatore col metodo ``close(self)``, che lancerà una ``GeneratorExit`` al punto dove la funzione generatore era sospesa.  

**Altri dettagli sui generatori:**  
https://docs.python.org/3/reference/expressions.html#yield-expressions


Il seguente è un esempio di generatore dove viene usato ``send()``  

```python
def double_inputs():
    while True:
        x = yield
            yield x * 2
```

```python
generatore = double_inputs()
next(generatore) # raggiungi il primo yield, necessario per chiamare send()
y=generatore.send(10) # la variabile 'x' assumerà valore 10
print(y) # stampa 20
```


È possibile ottenere generatori con una sola riga di codice usando le *generator expressions*:  

```python
squares = (n**2 for n in range(5))
```

I *generator expressions* sono il motivo per cui non esiste la *tuple comprehension*.  


### Set

Un oggetto ``set`` è una collezione non ordinata di oggetti *hashable* distinti. Un set **non** è una sequenza. Un set rappresenta quindi la definizione matematica di insieme.  
Un ``set`` è mutabile, un ``frozenset`` è immutabile.  

``set([iterable])``  
``frozenset([iterable])``  

Un ``set`` può essere anche creato mediante ``{}``: 

* *set comprehension*: ``{x**2 for x in [0,0,2,4]}``
* ``{1,2,3}``

**Operatori per ``set`` e ``frozenset``**:

* ``el in s``, ``el not in s``
* ``s == t``
* ``s <= t`` (**s contiene t**)
* ``s < t`` (**s contiene strettamente t**)
*  ``s | t`` **unione**
* ``s & t`` **intersezione**
* ``s - t`` **differenza**
* ``s ^ t`` **unione disgiunta**

### Dict

Un oggetto *mapping* mappa valori *hashable* ad oggetti arbitrari. I mapping sono oggetti mutabili.  
Attualmente Python fornisce solo un tipo standard di *mapping*: il *dictionary* (``dict``).  

Solo oggetti *hashable* possono essere usati come chiave: oggetti che producono lo stesso ``hash()`` identificheranno lo stesso valore nel dizionario (**Esempio:** l'intero ``1`` e il float ``1.0`` producono lo stesso hash)  

I ``dict`` possono essere creati in più modi:  

* elencare coppie key:value in parentesi graffe: ``{'jack': 4098, 'luke':1}``
* *dict comprehension*: ``{x:x**2 for x in range(10)}``
* costruttore
  + ``dict(**kwarg)`` costruisce un dizionario in base ai parametri keyword menzionati
    - ``dict(foo=100, bar=50)`` restituisce ``{foo:100, bar:50}``
  + ``dict(iterable, [**kwarg])`` costruisce un dizionario in base ai parametri keyword e in base alla lista di coppie
    - ``dict([(1,2),(3,4)], foo='lol')`` restituisce ``{1: 2, 3: 4, 'foo': 'lol'}``
  + ``dict(mapping, [**kwarg])`` costruisce un dizionario in base ai parametri keyword e in base all'oggetto mapping (Che potrebbe essere un altro dizionario)
  + ``dict()`` restituisce il dizionario vuoto

Si possono usare le seguenti operazioni:  

* ``list(d)`` restituisce la lista delle chiavi di ``d``
* ``len(d)`` numero di entries
* ``d[key]`` restituisce l'oggetto mappato alla ``key`` specificata, altrimenti ``KeyError`` se non è presente
  + Una sottoclasse di ``dict``potrebbe ridefinire ``__missing__(self, key)`` per cambiare comportamento in caso di elemento non trovato
* ``d[key] = value`` setta il valore a tale chiave
* ``del d[key]`` rimuove l'elemento associato a ``key``, altrimenti lancia ``KeyError``
* ``key in d`` verifica se la chiave è presente
* ``d.keys()`` restituisce una *view* delle chiavi
* ``d.items()`` restituisce una *view* delle entry, sotto forma di coppie ``(key,value)``
* ``d.update([coppie])`` accetta liste di coppie o oggetti mapping


Gli oggetti ``view`` forniscono una visualizzazione dinamica delle entry di un dizionario. Questo significa che se il dizionario cambia le modifiche vengono propagate alle corrispettive view.  
Le *view* possono essere iterate e supportano ``in``.  


### Deep copy e shallow copy  


**Shallow copy**: costruisce un nuovo oggetto mettendo i riferimenti originali  
**Deep copy**: costruisce oggetto composto e ricorsivamente inserisce le copie degli oggetti  
*Problema del deep copy*: oggetti ricorsivi possono causare un loop. Inoltre, la deep copy potrebbe copiare fin troppi dati. A tal scopo, la funzione ``deepcopy()`` rimedia:  

1. mantiene un memo (dict) di oggetti già copiati
2. può essere overriden dall'utente, defininendo ``__deepcopy__()``  

### Funzioni

Le funzioni in Python sono oggetti.  

```python
def my_function():
    pass # "pass" è l'equivalente di no-op  
```

La definizione di una funzione come sopra comporta la creazione da parte dell'interprete di un *function object* che rappresenta la funzione appena definita.  
Questi *function objects* hanno lo stesso nome della funzione appena definita. Nel nostro caso abbiamo quindi un oggetto ``my_function``, istanza di ``function``.  

```python
>>> id(my_function)
<1836833423840>
>>> type(my_function)
<class 'function'>
>>> my_function.var = 6
>>> tmp = my_function
>>> id(tmp)
<1836833423840>
>>> tmp.var
6
>>> tmp() #l'equivalente di chiamare my_function()
```
  
Più nello specifico, una funzione è un oggetto *callable*. Un oggetto **callable** è un oggetto che implementa il metodo ``__call__(self)``. Il metodo ``__call__(self)`` su un oggetto viene invocato quando si chiama tale oggetto come una funzione (ossia con le parentesi ``()``)  

```python
>>> class MiaClasse:
...     def __call__(self):
...             print("funzione chiamata")
...
>>> mioOggetto = MiaClasse() #invoca costruttore __init__()
>>> mioOggetto() # stampa "funzione chiamata"
```


Nel caso di *function objects*, il metodo ``__call__()`` coincide col corpo della funzione definita.  

#### Variabili locali e globali


Nelle funzioni è possibile leggere variabili globali:  

```python
var1 = 10
def funct1:
    print(var1)  # stampa 10
```

Nelle funzioni è possibile chiamare variabili locali con lo stesso nome di quelle globali

```python
var2 = 20
def fuct2:
    var2 = 30 # var2 è una variabile diversa dal "var2" globale
    print(var2) #stampa 30
```

Non è possibile modificare variabili globali all'interno di funzioni se non viene inserito la keyword "global"

```python
var3 = 30
def funct3:
    global var3
    var3=50 #per fare questo è necessario il global sopra, altrimenti sarebbe stata locale
```

#### Parametri

Su Python è passato tutto **per riferimento**: vengono passati i riferimenti agli oggetti come parametri.  

È possibile impostare un valore di default a un parametro:  

```python
def pardefault(a,b=3):
    print(a,b)
```

Nota: i parametri con valori di default di default devono stare dopo ai parametri che non hanno valori di default  

I parametri di default sono valutati solo una volta durante la DEFINIZIONE della funzione. Il valore è quindi lo stesso tra più chiamate. Se si vuole invece valutare il valore di default ad ogni chiamata si fa cosi:  

```python
def func(a, L=None):
    if L is None:
        L=[]
    L.append(a)
    return L
```

Si può esprimere un numero variabile di parametri con *

```python
def numvar(a, L=[], *arg):
    print(arg)
```

Si accede ad ``arg`` come se fosse una sequenza.  

Python permette di inserire un tutti gli elementi di un *iterable* come parametro grazie all'*unpacking operator* ``*``.  

```python
L = [1,2,3,4]
func(*L) #equivale a fare func(1,2,3,4)  
```

I **parametri keyword** permettono di usare una notazione non posizionale per specificare i parametri:  

```python
def mapping(a,b,c):
    pass 

mapping(b=1, a=3, c=2)
```

È possibile avere un numero variabile di parametri keyword di ogni tipo con ``**``  

```python
def mapping2(a,b,c,**kwargs):
    pass
```

In questo caso ``kwargs`` è un dizionario.  

Esiste il *mapping unpacking operator* ``**`` che permette di inserire le entry di un dizionario come parametri keyword di uan funzione.  

```python
mydic = {foo:1, bar:3}
func(**mydic) #equivale a func(foo=1, bar=3) 
``` 


#### Annotazioni e documentazione

È possibile aggiungere documentazione:  

```python
def my_function():
  '''Questa è la documentazione per questa funzione.
    Accetta newline e deve essere all'inizio della funzione
    Posso accedere a questa documentazione come stringa in my_function.__doc__'''
  pass
```

Posso accedere alla documentazione con ``my_function.__doc__``  

È possibile aggiungere annotazioni per specificare il tipo dei parametri e il tipo del valore di ritorno. Nota che questi suggerimenti non sono assolutamente vincolanti e servono solo come suggerimento per lo sviluppatore (sono eventualmente usati dall'IDE per fornire suggerimenti durante la scrittura del codice)  

```python

def func(nome:str = 'default', età:int = 23) -> str:
    pass
```

``func.__annotations__`` restituisce dizionario con le annotazioni sui parametri e sul ritorno.  

Nota: ``help(object)`` stampa informazioni su attributi e metodi di un oggetto, insieme alla sua documentazione e le sue annotazioni.  


#### Lambda functions

È possibile definire funzioni anonime in una singola linea di codice con le *lambda functions*. La sintassi è 

    myfunc = lambda a,b,c:a+b+c

In questo caso ``a,b,c`` sono gli *argomenti*, mentre ``a+b+c`` è l'*espressione* da restituire (ci può essere solo 1 espressione)  
 

### File

Si manipolano i file mediante *File Objects*. Si ottiene un *file object* usando la funzione built-in ``open(...)``:  

    fo=open("file.txt",mode)  

``mode`` è una stringa che specifica la modalità in cui il file viene aperto:

* ``'r'``: aperto per lettura
* ``'w'``: aperto per scrittura, tronca il file prima di scrivere
* ``'x'``: aperto per la scrittura, ma se il file esiste già l'operazione fallisce
* ``'a'``: aperto per la scrittura, se il file esiste già si scrive alla fine del file

Dopo aver specificato una delle 4 modalità è possibile aggiungere un ``+`` per indicare che si tratta di un *update* del file (sia scrittura che lettura). **Esempio** ``r+``, ``w+``, ``x+``.  
Alla fine è possibile specificare se il file è testuale o binario usando rispettivamente ``t`` e ``b``: ``rb``, ``x+b``, ``w+t``...  

Il metodo ``open(..)``  restituisce un function object sui quali è possibile eseguire i seguenti metodi:  

* ``fo.write("testo")``
* ``fo.read()``:  legge rimanente
* ``fo.read(k)``: legge k byte
* ``fo.readline()``:  legge rimanente di riga
* ``fo.readlines()``: restituisce righe in lista
* ``fo.seek(k)`` vai al k-esimo byte del file
* ``fo.tell()`` stampa posizione in termini di offset di byte dalla posizione 0
* ``fo.writelines(seq)`` scrive la sequenza. Nota: non inserisce newline
* ``fo.close()``  

**Menzione speciale:** ``print("mystring", file=fo)`` effettua la print al file specificato anzichè ``stdout``  

I *file objects* supportano l'*iterator protocol*: sono quindi iterabili ed è possibile chiamarli in un for.  

```python
fo=open("miofile.txt","w+")
fo.writelines(["linea1\n", "linea2\n", "linea3"])
fo.seek(0)

for line in fo:
    print(line, end='')
```


### Moduli

I moduli sono script ``.py`` che contengono codice Python che può essere importato in altri script Python. (usando l'operazione ``import``)  
In realtà, i moduli possono anche essere raggruppamenti di altri moduli (*package*) oppure possono essere scritti in C.  

```python
import math
import math as m
import math as m, sys as s
import mypackage
import mypackage.modulo1
```

Gli ``import``nell'esempio sopra esegono le seguenti operazioni:

1. trova il modulo, caricalo e inizializzalo se necessario
  + Il codice "libero", ossia quello al di fuori da ogni funzione, viene eseguito durante l'inizializzazione
2. inserisce il modulo all'interno dello scope dove è stato chiamato ``import``

**Esempio:  **

```python
import math
math.sqrt(2)
```

```python
import math as m
m.sqrt(2)
```

È possibile anche non importare il modulo ma solo alcuni identificatori di un modulo:

```python
from math import sqrt,floor
from math import sqrt as s, floor as f
from math import *
```

In questo caso il modulo viene trovato, caricato e inizializzato, però nello scope non viene inserito il *module object* ma semplicemente gli identificatori specificati.  

```python
from math import sqrt as s, floor
s(4)
floor(5.6)
```


#### Packages

https://docs.python.org/3/reference/import.html#packages

Un package è un modulo che funge da aggregatore per altri moduli. Un package è tipicamente formato da una cartella nel file system (il cui nome corrisponde al nome del package) contenenti moduli o altri package (detti *subpackage*).  
Ogni package **deve** avere un file ``__init__.py`` anche vuoto. Opzionalmente è possibile scrivere codice Python per l'inizializzazione all'interno di tale file.  

Importare un subpackage comporta prima l'inizializzazione del padre e poi del figlio. (Il codice di inizializzazione per un modulo è eseguito non più di una volta)  

    parent/
        __init__.py
        one/
            script1.py
            __init__.py
        two/
            script2.py
            __init__.py

Un modulo può importare altri moduli contenuti nello stesso package/package adiacenti usando ``.`` e ``..`` in ``import`` statements. Vedi qui: https://docs.python.org/3/reference/import.html#submodules

#### Ricerca dei moduli

Quando viene specificato un modulo con lo statement ``import``, l'interprete avvia la ricerca per il modulo in questo ordine:  

* Cerca nella directory corrente (*working directory*) dove l'interprete è eseguito
* Cerca nelle directory elencate nella variabile d'ambiente ``PYTHONPATH``, se esiste
* Cerca in altri elenchi di directory specificate durante l'installazione di Python

La sequenza complessiva delle directory in cui viene effettuata la ricerca è accessibile nella variabile ``sys.path`` del modulo ``sys``  

#### Module objects  

I moduli in Python sono rappresentati come oggetti della classe ``module``.  

```python
>>> import math
>>> type(math)
<class 'module'>
```

Gli attributi principali per i *module objects* sono:  

* ``__name__`` restituisce il nome del modulo
  + Questo corrisponde al nome del file tranne ``.py``, al nome della cartella se si tratta di un package, oppure ``__main__`` se si tratta dello script avviato interattivamente
* ``__file__`` restituisce il percorso del modulo
  + Questo attributo non è sempre presente (e.g. moduli built-in)
* ``__dict__`` restituisce il namespace del modulo come un dizionario
  + L'accesso ad un identificatore nel namespace di un moidulo coinvolge implicitamente l'accesso al suo ``__dict__``: ``math.sqrt(4)`` equivale a ``math.__dict__['sqrt'](4)``

L'attributo ``sys.modules`` referenzia un dizionario con coppie *nome:module object* rappresentante tutti i moduli caricati dall'interprete.  


#### Namespace

Approfondimenti sui namespace: https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces  

Python usa i namespace per tenere traccia delle variabili.  
Un **namespace** è semplicemente un mapping tra simboli e oggetti. In Python i namespace sono realizzati mediante dizionari. (Ad esempio, come visto sopra, gli attributi di un module object sono presenti in ``__dict__``)  

Esempi di namespace includono: l'insieme di nomi *built-in* (ad esempio le funzioni built-in come ``abs()``o ``open()``), i nomi globali in un modulo, i nomi locali nello scope di una chiamata a funzione, gli attributi di una classe...  

Con i namespace è possibile definire variabili con lo stesso nome in 2 moduli diversi senza confusione: basta aggiungere ``nomemodulo.`` come prefisso.  


### Classi

https://docs.python.org/3/tutorial/classes.html  


```python
class ClassName:
    <statements>
```

Nel blocco di definizione di una classe viene creato un nuovo namespace e usato come scope locale: di conseguenza, tutti gli assegnamenti a variabili locali vanno in questo nuovo namespace. In particolare, le funzioni definite in questo scope avranno il loro nome assegnato a questo namespace.  

Una volta definita la classe, viene creato un nuovo **class object** (ossia un oggetto della classe ``class``) che rappresenta l'oggetto appena creato.  

Dato che le classi hanno un loro namespace, di conseguenza i class objects hanno un attributo ``__dict__``.  

I *class object* sono **callable**: la loro invocazione corrisponde alla chiamata del costruttore che restituirà un oggetto. Il comportamento del costruttore è definito in ``__init__(self)``, specificando ulteriori eventuali parametri.  

```python
class MyClass:
    '''Esempio di documentazione'''
```

```python
x = 5 # variabile di classe/statica condivisa tra tutte le istanze
```

```python
def __init__(self):
    self.i=0 #variabile di istanza

myObject = MyClass()
```

#### Metodi d'istanza

Una qualunque funzione definita all'interno dello scope di definizione di una classe è un **metodo d'istanza**. In maniera totalmente analoga è possibile passare una *function object* definiti all'esterno come attributo della classe.  

```python
class MyClass:
    def meth(self):
        print("Hello")
```

```python
obj=MyClass()
obj.meth()
```

il codice sopra è analogo a

```python
def func(self):
    print("Hello")
```

```python
class MyClass:
    meth=func

obj=MyClass()
obj.meth()
```

I metodi sono oggetti di tipo ``method`` (Si parla quindi di *method objects*). (trivia: i *method objects* hanno un *function object* associato nell'attributo ``__func__``)  

I metodi d'istanza differiscono dalle funzioni in questo modo: l'istanza viene passata come primo parametro del metodo. (In termini di Java, si potrebbe dire che il parametro implicito diventa il primo parametro esplicito)  
Nei metodi il primo parametro viene chiamato convenzionalmente ``self`` per evidenziare questo meccanismo. (Non si tratta di una keyword)  

Nell'esempio sopra, ``obj.meth()`` equivale a chiamare il metodo ``meth()`` e passare ``obj`` come primo parametro. È quindi possibile scrivere ``MyClass.meth(obj)``  

#### Metodi di classe

Nei metodi di classe, a differenza dei metodi d'istanza, viene passato il ``class object`` come primo parametro. Per convenzione il primo parametro è chiamato ``cls``.  

Per trasformare un metodo d'istanza in metodo di classe, si usa il **decoratore** ``@classmethod`` (nota: tutti i metodi sono d'istanza per default)  

```python
class C:
    @classmethod
    def func(cls): 
        ...

C.func()
obj = C()
obj.func() #equivale a obj.__class__.func()
```

#### Metodi statici

Nei metodi statici non viene passato il riferimento all'oggetto nè alla classe.  

Si usa il decoratore ``@staticmethod``  

```python
class C:
    @staticmethod
    def func():
        ...
```

```python
C.func()
obj = C()
obj.func()
```

#### Ereditarietà  

https://docs.python.org/3/tutorial/classes.html#multiple-inheritance

Python supporta l'**ereditarietà multipla**. Per specificare uno o più classi padri è necessario specificarli in questo modo:  

    class DerivedClassName(BaseClass1, BaseClass2, ...):
        ...

È possibile accedere ai metodi/attributi dei padri e di poterli sovrascrivere.  

La risoluzione degli attributi ereditati avviene in questo modo: dal basso verso l'alto, da sinistra verso destra. L'attributo ``__mro__``  (*Method Resolution Order*) di una classe contiene l'elenco di classi in cui si cercano i metodi invocati. questo attributo determina l'ordine per la risoluzione. Il metodo ``mro()`` determina il valore di ``__mro__`` e può essere sovrascritto per modificarne il comportamento. ``__mro__`` è read only. **Informazioni aggiuntive su mro:** https://www.python.org/download/releases/2.3/mro/  

Python fornisce le seguenti due funzioni built-in per l'ereditarietà:  

* ``issubclass(class, classinfo)`` restituisce ``True`` se ``class`` è sottoclasse di ``classinfo``
* ``isinstance(object, classinfo)`` restituisce ``True`` se ``object`` è istanza di ``classinfo`` (o di una sottoclasse di ``classinfo``)  

La funzione built-in ``super()`` permette ad una istanza di accedere ad un'istanza temporanea della classe padre per accedere ad un suo attributo/metodo. La versione senza parametri restituisce il primo padre diretto, le varianti sono dettate con ``help(super)`` come segue:  

    super() -> same as super(__class__, <first argument>)
    |  super(type) -> unbound super object
    |  super(type, obj) -> bound super object; requires isinstance(obj, type)
    |  super(type, type2) -> bound super object; requires issubclass(type2, type)
    |  Typical use to call a cooperative superclass method:
    |  class C(B):
    |      def meth(self, arg):
    |          super().meth(arg)
    |  This works for class methods too:
    |  class C(B):
    |      @classmethod
    |      def cmeth(cls, arg):
    |          super().cmeth(arg)  

Un'alternativa a ``super`` può essere quella di invocare un metodo usando il nome della classe base: ``BaseClass.metodo(obj)``  


**Nota**: il tipo ``object``è la base di tutti gli altri tipi  

L'attributo ``__bases__`` del *class object* contiene la tupla delle classi base di una classe. Tale attributo si può modificare, la sua modifica comporta il ricalcolo di ``__mro__``.  

#### Classi astratte

Il metodo *old-school* per creare una classe astratta è il seguente:  


class Abstract:
    def action(self):
        raise NotImplementedError("action must be defined")
  
Un altro metodo per definire classi astratte è col modulo ``abc`` (*Abstract Base Class*)  

```python
from abc import ABC, abstractmethod
```

```python
class MyAClass(ABC):
    @abstractmethod
    def foo(self):
        pass
```

Tentare di istanziare ``MyAClass`` lancerà una ``TypeError``.  

### Eccezioni

    try:
        ...
    except (Exception1 as e1, Exception2 as e2):
        ...    
    else:
        #eseguito quando non viene lanciata alcuna eccezione
        ...
    finally:
        ...

Per lanciare un'eccezione si usa ``raise``:  

```python
raise RuntimeError
raise RuntimeError("Messaggio di errore")
```

È possibile effettuare il **chaining** di eccezioni:  

```python
except ConnectionError as e:
    # lancia RuntimeError specificando 
    # che la causa è ConnectionError
    raise RuntimeError from e 
```

Possono essere definite eccezioni personalizzate creando classi che estendono ``Exception``:  

```python
class MyError(Exception):
    def __init__(self, message):
        self.message = message
```



### Assert 

```python
assert expression
```

Equivale a:  

```python
if __debug__:
    if not expression: raise AssertionError
```

Dove ``__debug__`` è true se l'interprete Python non è avviato col flag ``-o``.  

Una variante di ``assert`` è:  

```python
    assert expression1,msg
```

Che equivale a:  

```python
if __debug__:
    if not expression: raise AssertionError(msg)  
```

### Decoratori  

#### Function decorator

```python
@dec2
@dec1
def func(arg1, arg2, ...):
    pass
```

equivale a:  

```python
def func(arg1, arg2, ...):
    pass
func = dec2(dec1(func))
```

In entrambi i casi, ``dec1`` e ``dec2`` fungono da *wrapper* per una funzione, modificandone il comportamento. I decoratori costituiscono una sintassi atta a questo scopo, sia per le funzioni che per le classi.  


```python
def arg_e_return_float(function):
    '''Questa funzione prende in input una funzione e
      restituisce una funzione dal comportamento analogo
      ma con tutti i parametri convertiti in float
      e restituisce un float'''

```

```python
@functools.wrap
def mywrapper(*args, **kwargs):
    args = [float(arg) for arg in args]
    return float(function(*args, **kwargs))
return mywrapper
```

```python
@arg_e_return_float
def avg(first, second,*rest):
    ...
```


Nota: il decoratore ``@functools.wrap`` è importante perchè copia attributi come ``__name__`` e ``__doc__`` alla funzione wrapper ed effettua altre operazioni simili.  
https://stackoverflow.com/questions/308999/what-does-functools-wraps-do



#### Class decorator

```python
def count(aClass):
    '''Restituisce la classe passata
       ma viene aggiunto un attributo numInstances'''
    aClass.numInstances = 0
    return aClass
```

Il decoratore è applicato cosi:  

```python
@count
class Spam:
    ...
```

È l'equivalente di fare  

```python
Spam = count(Spam)
```


#### ``@property`` decorator

https://docs.python.org/3/library/functions.html#property  

La funzione built-in ``property`` restituisce una *property attribute*.
Una *property attribute* è un attributo cui l'accesso è definito mediante gli appositi metodi accessori getter (``__get__``), setter (``__set__``) e deleter (``__deleter__``)  

```python
property(getx=None, setx=None, delx=None, doc=None)
```

Un esempio di utilizzo è il seguente:  

```python
class C:
    def __init__(self):
        self._x = None
        
    def getx(self):
        return self._x

    def setx(self, value):
        self._x = value

    def delx(self):
        del self._x

    x = property(getx, setx, delx, "I'm the 'x' property.")
```


L'espressione ``c.x`` invocherà il getter, mentre ``c.x = value`` invocherà il setter, e ``del c.x`` invocherà il deleter.  

Un'alternativa più veloce consiste nell'usare il decoratore ``@property``:  

```python
class Parrot:
    def __init__(self):
        self._voltage = 100000
    @property
    def voltage(self):
        return self._voltage
```

Il decoratore ``property`` trasforma il metodo in un "getter" per un attributo di *sola lettura*.  
Per poter definire il setter e il deleter, occorre usare il decoratore ``@proprietà.setter`` e ``@proprietà.deleter``, dove *proprietà* corrisponde al nome del getter:  

```python
class C:
    def __init__(self):
        self._x = None
    @property
    def x(self):
        """I'm the 'x' property."""
        return self._x
    @x.setter
    def x(self, value):
        self._x = value
    @x.deleter
    def x(self):
        del self._x
```

**Nota**: setter, getter e deleter sono funzioni con lo stesso nome.  

#### Altro sui decoratori

Vedi ultime 9 pagine di ``decoratori_II.pdf``  

### Singleton


(**Incompleto**)


Il **pattern Singleton** è un pattern *creazionale* ed è usato quando abbiamo bisogno di una classe che ha un'unica istanza che è la sola ad essere utilizzata dal programma.  

In particolare, è utile nelle seguenti situazioni:  

* Controllare l'accesso concorrente ad una risorsa condivisa
* Se si ha bisogno di un punto globale di accesso per la risorsa da parti differenti del sistema
* Quando si ha bisogno di un unico oggetto di una certa classe  

**Esempio di singleton**: https://github.com/ActiveState/code/tree/master/recipes/Python/412551_Simple_Singleton  

class Singleton:

    def __init__(self):
        ''' Create singleton instance ''
        if Singleton.__instance is None:
            self.__dict__['_Singleton__instance'] = Singleton.__instance

    class __impl:
        '''Implementation of the singleton interface'''

        def spam(self):
            '''test method, return singleton id'''
            return id(self)

    # l'istanza è memorizzata qui
    __instance = None

da continuare. rivedi slide su singleton
