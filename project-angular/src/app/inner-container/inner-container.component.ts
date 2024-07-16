import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jsonData from '../data/data_texts.json';

interface Item {
  id: number;
  text: string;
}

@Component({
  selector: 'app-inner-container',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inner-container.component.html',
  styleUrl: './inner-container.component.scss'
})
export class InnerContainerComponent {
  selectedOption1: string = '';
  items: Item[] = jsonData.items;
  items_add: Item[] = jsonData.new_items;


  onButtonClickReplace() {
    console.log('Wybrana opcja to: ' + this.selectedOption1);
    switch (this.selectedOption1) {
      case 'option1':
        this.setFirstItem();
        break;
      case 'option2':
        this.setSecondItem();
        break;
      case 'option3':
        this.setRandomItem();
        break;
      default:
        console.log('Nie wybrano żadnej opcji');
    }
  }

  onButtonClickAdd() {
    console.log('Wybrana opcja to: ' + this.selectedOption1);
      switch (this.selectedOption1) {
      case 'option1':
        this.addFirstItem();
        break;
      case 'option2':
        this.addSecondItem();
        break;
      case 'option3':
        this.addRandomItem();
        break;
      default:
        console.log('Nie wybrano żadnej opcji');
    }
  }

  sortTable(): Item[] {
    return this.items.sort((a, b) => a.text.localeCompare(b.text));
  }
  sumSotrTable(): string {
    const text = this.sortTable().reduce<string[]>((a, b) => {
      a.push(b.text);
      return a;
    }, []).reduce((a, b) => a + ", " + b);
    return text;
  }
  repeatItem(item: Item): boolean {
    let w = false;
    for (var i of this.items) {
      if ((item.text == i.text) && (item.id == i.id)) {
        w = true;
      }
    }
    return w;
  }
  clearItems() {
    this.items = [];
  }
  resetItems(): void {
    this.items = jsonData.items;
  }
  addItem(item: Item): void {
    this.items.push(item)
  }
  setItem(item: Item, num: number): void {
    this.items[num] = item;
  }
  addFirstItem(): void {
    if (this.repeatItem(this.items_add[0])) {
      alert('Wybrany element już istnieje: ' + this.items_add[0].text);
    } else {
      this.addItem(this.items_add[0]);
    }
  }
  addSecondItem(): void {
    if (this.repeatItem(this.items_add[1])) {
      alert('Wybrany element już istnieje: ' + this.items_add[1].text);
    } else {
      this.addItem(this.items_add[1]);
    }
  }
  addRandomItem(): void {
    let w = true;
    for (let i = 1; i < 50; i++) {
      let x = Math.floor((Math.random() * this.items_add.length) + 1);
      if (!this.repeatItem(this.items_add[x - 1])) {
        this.addItem(this.items_add[x - 1]);
        w = false;
        break;
      }
    }
    if (w) {
      alert('Po 50 losowaniach, nie można wybrać niepowtarzalnego dodatkowego elementu');
    }
  }
  setFirstItem(): void {
    this.clearItems();
    this.addItem(this.items_add[0]);
  }
  setSecondItem(): void {
    this.clearItems();
    this.addItem(this.items_add[1]);
  }
  setRandomItem(): void {
    this.clearItems();
    let x = Math.floor((Math.random() * this.items_add.length) + 1);
    this.addItem(this.items_add[x-1]);
  }
}
