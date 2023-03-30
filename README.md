# angular-ivy-yg2ucc

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-yg2ucc)

# Questions

- Quels sont les bonnes façons d’unsubscribe un observable. (3 façons données dans un bloc de code).
- ngOnChange vs ngAfterContentChecked vs ngDoCheck vs ngOnInit, lequel doit être utilisé pour faire des actions sur des éléments qu’Angular ne détecte pas par lui-même lors de la détection de changement
- Observable.of(NaN) | async génère une erreur, laquelle ?
- À quoi sert static : true dans @ViewChild(Component, {static : true})
- Qu’est-ce qu’Ivy ?
- Quels sont les modes de compilation d’Angular (JIT, AOT) ?
- Qu’est-ce que le differential loading ?
- switchMap vs concatMap vs exhaustMap, lequel utiliser dans le cas où l’on souhaite annuler l’observable intérieur lorsque l’on reçoit une nouvelle donnée de l’observable initial ?
- Comment clear un FormArray ?
- Quelle est la bonne façon de faire un binding dans un template utilisant ReactiveForm, ([(ngModel)] vs [FormControl]="myFormControl" vs ??)
- Comment définir une route par défaut ? (path: '\*\*')
- Quelle ligne ne génère pas d’erreur mais ne fonctionne pas dans le code suivant ?

```
export class MyComponent implements OnInit {
constructor(private someService: SomeService){}

  public async ngOnInit() {
    await this.fetchData(); 
  }

  private async fetchData(): Promise<string> {
    return await this.someService.fetchData().toPromise();
  }
}
```

- Lorsqu’on fait du lazy loading de module, quelle est la meilleure façon de gérer le providing des services de ce module (Éviter @Injectable({providedIn :'root'}, )
  Peut-on et si oui, comment provide un service à un component ?

. Que signifie le lazy-loading en Angular ?

. Qu’est-ce qu’une directive en Angular ?
