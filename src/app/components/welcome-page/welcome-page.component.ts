import { Component } from '@angular/core';
import { ArrowComponent } from '../arrow/arrow.component';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [ArrowComponent],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss',
})
export class WelcomePageComponent {}
