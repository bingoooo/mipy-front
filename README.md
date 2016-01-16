# Base-SimplonMIP

Les Technos utilisées par le site SimplonMIP :

    - Sass ( gestionnaire et intégrateur de fichiers CSS )
    - Semantic ( Framework de mise en forme et aide au MediaQueries )
    - Senna ( Application chargement de fichiers sur une seule page )
    - Mustache 
    - Gulp 
    - Browser sync
    - JQuery
    
Editez le fichier hosts. Dans la console : `vim etc/hosts` 
Ajoutez la ligne : `192.168.1.97 server.dev`.

Pour enregistrer : Echap puis `:wq`  puis entrée.

Avant d'installer quoique ce soit avec npm `npm config set registry http://server.dev:8080/`


Dans la console : 

    $ npm install -g bower
    $ npm install gulp-uglify
    $ npm install 
    $ bower install 

Hook git :
    Créer un fichier `post-merge` dans le dossier `/.git/hooks`
    Éditez le fichier ainsi:
    
    #!/bin/bash
    echo 'building site'
    php build/build.php
    
Dans la console, passer la commande : `chmod +x post-merge`
afin que le hook ait l'autorisation d'executer des commandes.
Par la suite, lorsque vous ferez un git pull, le build.php s'exécutera et construira le site dans le dossier 'dist'
