# MyAmazingAmazon - Frontend

## Creazione del progetto Angular

<!-- - installare Angular CLI: `npm install -g @angular/cli`
- creare un nuovo progetto: `ng new my-amazing-amazon-frontend`
- entrare nella cartella del progetto: `cd my-amazing-amazon-frontend`
- avviare il server di sviluppo: `ng serve --open` -->

The previous steps imply that we want to use the last version of Angular CLI, but we need this project to use the version 16.2.0 because the last version of Angular uses a different approach that we didn't study yet. So these are the steps to create the project:

- controllare di avere Nodejs in versione dalla 16.14 alla 18.10 (per controllare la versione di node: `node -v`). Se si necessita di avere più versioni di node installate, si può usare nvm (Node Version Manager)
- installare Angular CLI: Possiamo installarla globalmente o localmente. Se la installiamo globalmente, possiamo usare il comando `ng` da qualsiasi cartella. Se la installiamo localmente, dobbiamo usare il comando `npx ng` per eseguire i comandi di Angular CLI. Per questo progetto, la installiamo globalmente: `npm i -g @angular/cli@16.2.0`
- creare un nuovo progetto: `ng new my-amazing-amazon-frontend`

## Creazione del componente Navbar

- crea un nuovo componente e mettilo nella sotto-cartella components: `ng generate component components/navbar`
  Questo comando crea il componente E lo aggiunge al modulo principale (app.module.ts), in modo che sia disponibile in tutta l'applicazione senza doverlo importare esplicitamente in ogni modulo.

### Aggiungi la navbar al template principale

- nel componente padre (app.component.ts), importa il componente navbar aggiungendo NavbarComponent all'array di imports
- apri il file `src/app/app.component.html`
- aggiungi la navbar al suo interno: `<app-navbar></app-navbar>`

## Aggiungi il router outlet al template principale

Al fine di renderizzare le varie views, dobbiamo specificare DOVE. Per fare questo, usiamo il tag `<router-outlet></router-outlet>` all'interno dell'app.component.html. Questo tag è un placeholder che verrà sostituito con il contenuto della view corrispondente all'URL corrente.

## CSS style

- nel file `src/styles.css` definisco gli elementi che voglio siano uguali in tutta l'applicazione. Ad esempio, posso definire il font da usare per tutti i testi, i colori, ecc.

## Creare i models per i dati

- Creare una cartella `model` all'interno della cartella `src/app`
- Creare un file `product.model.ts` all'interno della cartella `models` (usando il comando `ng generate interface model/product`)
