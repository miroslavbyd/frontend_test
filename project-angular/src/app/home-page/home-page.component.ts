import { Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InnerContainerComponent } from '../inner-container/inner-container.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule, InnerContainerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  selectedOption1: string = '';
  person = '';
  @ViewChild(InnerContainerComponent) innerContainer!: InnerContainerComponent;

  onButtonClickReset() {
    this.person = '';
    this.innerContainer.resetItems();

  }
  onButtonClickPerson() {
    this.person = 'Mirosław Czarnecki';
  }
}
