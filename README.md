Angular


###Notre premier composant

un composant est la combinaison d’une vue (le template) et de logique (notre classe TS)

Revenons à NgModule : nous devons déclarer les composants qui appartiennent à notre module racine dans l’attribut declarations de son objet de configuration.

Comme ce module est notre module racine, nous devons également indiquer à Angular quel composant est le composant racine, c’est à dire le composant que nous devons instancier quand l’application démarre. C’est l’objectif du champ bootstrap de l’objet de configuration 

Créons un nouveau fichier, par exemple main.ts, pour séparer la logique de démarrage :


Pour charger nos modules, il nous faudra donc s’appuyer sur un outil : SystemJS. SystemJS est un petit chargeur de modules : tu l’ajoutes (statiquement) dans ta page HTML, tu lui indiques où sont situés les modules sur le serveur, et tu charges l’un d’eux. Il déterminera automatiquement les dépendances entre les modules, et téléchargera ceux utilisés par ton application.

Dernière petite fonctionnalité : que se passe-t-il si mon objet user est en fait récupéré depuis le
serveur, et donc indéfini dans mon composant au début ? Que pouvons-nous faire pour éviter les
erreurs quand le template est compilé ?

Et nous n’avons plus d’erreur ! Le ?. est parfois appelé "Safe Navigation Operator" (opérateur de
navigation sûre).
Ainsi on peut écrire nos templates plus sereinement, et être assurés qu’ils vont se comporter
correctement.
,

<component [property]="doSomething()"></component>
et
<component (event)="doSomething()"></component>
Dans le premier cas de binding de propriété, la valeur doSomething() est une expression, et sera
évaluée à chaque cycle de détection de changement pour déterminer si la propriété doit être
modifiée.
Dans le second cas de binding d’événement, la valeur doSomething() est une instruction (statement),
et ne sera évaluée que lorsque l’événement est déclenché.

En règle générale, on peut dire que si un seul composant a besoin d’un service donné, c’est une
bonne idée de définir ce service dans l’injecteur du composant, via l’attribut providers. Si une
dépendance peut être utilisée ailleurs dans l’application, on la déclare dans le module racine.