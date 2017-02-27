Angular


###Notre premier composant

un composant est la combinaison d’une vue (le template) et de logique (notre classe TS)

Revenons à NgModule : nous devons déclarer les composants qui appartiennent à notre module racine dans l’attribut declarations de son objet de configuration.

Comme ce module est notre module racine, nous devons également indiquer à Angular quel composant est le composant racine, c’est à dire le composant que nous devons instancier quand l’application démarre. C’est l’objectif du champ bootstrap de l’objet de configuration 

Créons un nouveau fichier, par exemple main.ts, pour séparer la logique de démarrage :


Pour charger nos modules, il nous faudra donc s’appuyer sur un outil : SystemJS. SystemJS est un petit chargeur de modules : tu l’ajoutes (statiquement) dans ta page HTML, tu lui indiques où sont situés les modules sur le serveur, et tu charges l’un d’eux. Il déterminera automatiquement les dépendances entre les modules, et téléchargera ceux utilisés par ton application.

