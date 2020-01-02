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

Zmieniła się składnia opcji dla `ng generate component` lepiej użyć:

Zamiast `--spec false` należy użyć `--skipTests`.
 
Zamiast `-ve none` należy użyć `--viewEncapsulation None`.

 
### Komponent do dodawania zadań

Rozdział 2, „Adding Tasks”.

Aby `<input type="text" >` reagował na klawisz enter dodałem `(keyup.enter)`
 
```angular2html
<input type="text"
       placeholder="Enter new task title..."
       (keyup.enter)="enterTask(titleInput)"
       #titleInput>
<button (click)="enterTask(titleInput)">
  Add Task
</button>
```

### Komponenty własne

Oryginalny kod powodował ostrzeżenia w nowszym Angularze (lub TypeScript).

Zamiast:

```angular2html
<label class="label">
  <input class="input" type="checkbox"
         [checked]="checked"
         (change)="check($event.target.checked)">
  <span class="text">{{label}}</span>
</label>
```

użyłem

```angular2html
<label class="label">
  <input class="input" type="checkbox"
         [checked]="checked"
         (change)="check($event)">
  <span class="text">{{label}}</span>
</label>
```

A w kodzie zamiast:

```typescript
  check(checked: boolean) {
    this.outCheck.emit(checked);
  }
```

użyłem

```typescript
  check({target = {} as HTMLInputElement }) {
    this.outCheck.emit(target.checked);
  }
```

To pozwoliło na kompilację bez ostrzeżeń.
