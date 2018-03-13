import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {SimpleTimer} from 'ng2-simple-timer';
//import { Push, PushToken } from '@ionic/cloud-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html',
})
export class TicketsPage  implements OnInit{
    // event1 = Date.now();
    users = [
        {  id:"1",    name: "Andrei",    surname: "Suvorov"},  // {  id:"2",   name: "Alina",     surname: "Makarova" },
    ]
    constructor(public navCtrl: NavController,private st: SimpleTimer) {
        //this.push.rx.notification(),public push: Push
       // .subscribe((msg) => { alert(msg.title + ': ' + msg.text); });
        }
    op(){
        let op = document.getElementById('cl'); op.style.display='block';
        let dropdown = document.getElementById('dropdown1'); dropdown.style.display='none';
    }
    ionViewDidLoad() {
        let timer = document.getElementById('timer');        timer.style.display='none';
        let right = document.getElementById('right');        right.style.display='none';
        let fixed = document.getElementById('fixed');        fixed.style.display = 'none';
        let outer = document.getElementById('outer');        outer.style.display='none';    }
    counter0:number;
    timer0Id: string;
    timer0button = 'Subscribe';
    ngOnInit() {
        this.st.newTimer('1sec',1);
        this.subscribeTimer0();
    }
    delAllTimer() {
        this.st.delTimer('1sec');
    }
    subscribeTimer0() {
        if (this.timer0Id) {
            this.st.unsubscribe(this.timer0Id);
            this.timer0Id = undefined;
            this.timer0button = 'Відновити';
        } else {
           // this.timer0Id = this.st.subscribe('1sec', e => this.timer0callback());
            this.timer0button = ' Зупинити';
        }
        console.log(this.st.getSubscription());
    }
    timer0callback() {
        this.counter0--;
    }
    public swipe: number = 0;
    event = new Date().getTime();

    d = new Date(2018, 3, 15, 20,56);
    swipeEvent(e) {
        let fixed = document.getElementById('fixed');        fixed.style.display = 'block'; fixed.style.transitionTimingFunction='ease';
        console.log(this);
    }
    events:any[]=[];

    today = Date.now();
    add(){
        if (event != ''){this.events.push(this.event); console.log(this);}
        let outer = document.getElementById('outer');        outer.style.display='none';
        let timer = document.getElementById('timer');        timer.style.display='block';
        let date1 = Date.parse(this.event);
        console.log(this.today); console.log(this.event); console.log(date1);
        let newDate = (date1 - this.today);
       console.log(newDate) ; this.counter0 = newDate;
    }
    postpone() {
        let outer = document.getElementById('outer'); outer.style.display='block';
        let fixed = document.getElementById('fixed'); fixed.style.display = 'none';
        let timer = document.getElementById('timer'); timer.style.display='none';
        console.log(this.event);
        let right = document.getElementById('right'); right.style.display = 'none';
    }
    right() {
        let right = document.getElementById('right'); right.style.display = 'block'; right.style.color = 'green';
        let fixed = document.getElementById('fixed'); fixed.style.display = 'none';
    }


}
