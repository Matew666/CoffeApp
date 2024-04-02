import { Component } from '@angular/core';
import { SimpleCoffeeService } from '../../simple-coffee.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  coffeeList!: any[];
  selectedOption: string = "opcion1";
  showAllProducts: boolean = true;

  constructor(private coffeeService: SimpleCoffeeService) { }

  ngOnInit(): void {
    this.getCoffeeList();
  }

  getCoffeeList(): void {
    this.coffeeService.getCoffeeList().then(data => {
      this.coffeeList = data;
    }).catch(error => {
      console.error('Error:', error);
    });
  }

  get filteredCoffeeList() {
    if (this.selectedOption === 'opcion1') {
      return this.coffeeList;
    } else {
      return this.coffeeList.filter(coffee => coffee.available);
    }
  }
}
