import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../search/services/search.service';

@Component({
  selector: 'app-article',
  template: `
    <article class="article">
      <a
        [href]="'http://es.wkipedia.org/?curid=' + article.pageid"
        target="_blank"
      >
        {{ article.title }}
      </a>
      <p [innerHtml]="article.snippet"></p>
    </article>
  `,
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article!: Article;
}
