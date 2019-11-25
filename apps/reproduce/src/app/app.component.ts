import { Component } from '@angular/core';

interface Foo {
  readonly bar: string;
  readonly fubar?: string;
}

@Component({
  selector: 'reproduce-prettier-format-issue-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reproduce';
  fooWithNull: Foo = {
    bar: 'fizz'
  };

  getFoo(): Foo {
    return {
      bar: this.fooWithNull.bar,
      fubar: this.fooWithNull.fubar ?? 'aFubar'
    }
  }
}
