import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {	
	
water = {name: "Відсутня питна вода", checked: false,  d: new Date(), image: "" }
tea = {name: "Відсутній чай", checked: false,  d: new Date(), image: "" }
coffee = {name: "Відсутня кава", checked: false,  d: new Date(), image: "" }
milk = {name: "Відсутнє молоко", checked: false,  d: new Date(), image: "" }
cookies = {name: "Відсутнє печиво", checked: false,  d: new Date(), image: "" }
suryp = {name: "Відсутні сиропи", checked: false,  d: new Date(), image: "" }
sugar = {name: "Відсутній цукор", checked: false,  d: new Date(), image: "" }
napkin = {name: "Відсутні серветки", checked: false,  d: new Date(), image: "" }
tableware = {name: "Відсутній одноразовий посуд", checked: false,  d: new Date(), image: "" }
floor = {name: "Брудна підлога", checked: false,  d: new Date(), image: "" }
table = {name: "Брудні столи", checked: false,  d: new Date(), image: "" }
communications = {name: "Проблеми з комунікаціями", checked: false,  d: new Date(), image: "" }
internet = {name: "Не працює інтернет", checked: false,  d: new Date(), image: "" }
	
issues:any[]=[this.milk,this.coffee,this.tea,this.water,this.cookies,this.suryp,this.sugar,this.napkin,this.tableware,this.floor,this.table,this.communications,this.internet];	
num:any=0;	
issuesS:any[]=[];
	
	add() {
		this.issuesS.splice(0,this.issuesS.length)
		for (this.num in this.issues){
			if (this.issues[this.num].checked == true){
				this.issuesS.push(this.issues[this.num])
				
				
  }

}
		console.log(this.issuesS);
	}
			
			

  constructor(public navCtrl: NavController) {
	  
  }

}

