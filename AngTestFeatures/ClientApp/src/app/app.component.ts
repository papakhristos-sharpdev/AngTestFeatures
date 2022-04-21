import { Component } from '@angular/core';

class Item {
    purchase: string;
    done: boolean;
    price: number;

    constructor(purchase: string, price: number) {

        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    text: string = "";
    price: number = 0;

    items: Item[] =
        [
            { purchase: "Prod1", done: false, price: 15.9 },
            { purchase: "Prod2", done: false, price: 60 },
            { purchase: "Prod3", done: true, price: 22.6 },
            { purchase: "Prod4", done: false, price: 310 }
        ];

    addItem(text: string, price: number): void {

        if (text == null || text.trim() == "" || price == null)
            return;

        this.items.push(new Item(text, price));
    }

    removeItem(item: Item) {
        if (item == null)
            return;

        const index = this.items.indexOf(item, 0);

        if (index > -1)
            this.items.splice(index, 1);
    }
}
