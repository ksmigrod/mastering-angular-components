# Mastering Angular Components

Przykłady z książki [Mastering Angular Components](https://www.packtpub.com/web-development/mastering-angular-components-second-edition)
i notatki z przerabiania tej książki.

[Repo z kodami źródłowymi do tej książki](https://github.com/PacktPublishing/Mastering-Angular-Components-Second-Edition)

## Tworzenie projektu

Zamiast instalować @angular/cli globalnie użyłem:

```
npx @angular/cli new --style=css --routing=false --prefix=mac mastering-angular-component
```

Pamiętać o skopiowaniu [src/styles.css](https://raw.githubusercontent.com/PacktPublishing/Mastering-Angular-Components-Second-Edition/master/Chapter02/mastering-angular-components/src/styles.css)

### Dodawanie komponentów

`ng generate component` używane w książce tworzy pliki css. Nie są one używane więc warto je kasować.
