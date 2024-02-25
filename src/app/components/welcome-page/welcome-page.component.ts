import { Component, HostListener } from '@angular/core';
import { ArrowComponent } from '../arrow/arrow.component';
import { debug } from 'node:util';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [ArrowComponent],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss',
})
export class WelcomePageComponent {}
