import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {HttpClient} from '@angular/common/http';
//import {HomePage} from '../pages/client/home';
@IonicPage()
@Component({
  selector: 'page-client',
  templateUrl: 'client.html',
  
})
export class ClientPage  {
    users:any[] = [
        { name: "Andrei", surname: "Suvorov", checked:true },
        { name: "Daniil", surname: "Petrov", checked:false },
        { name: "Alina", surname: "Makarova", checked:true },

    ]
    // num:any=0;
    // userS:any[]=[];
    ionViewDidLoad() {
        let cht = document.getElementById('cht'); cht.style.display='none';
        let chf = document.getElementById('chf'); chf.style.display='none';
        // let new1 = document.getElementById('newCont'); new1.style.display='none';
        //this.userS.splice(0,this.userS.length)
        /*for (this.num in this.users){
            if (this.users[this.num].checked == true){
                this.userS.push(this.users[this.num])
            }
        }  */
        // console.log(this.userS);
    }
    op1(){
        let op1 = document.getElementById('cl1'); op1.style.display='block';
        let cht = document.getElementById('cht'); cht.style.display='none';
        let chf = document.getElementById('chf'); chf.style.display='none';
        let all = document.getElementById('all'); all.style.display='block';
        let op2 = document.getElementById('cl2'); op2.style.display='block';
        let op3 = document.getElementById('cl3'); op3.style.display='block';
        let dropdown = document.getElementById('dropdown'); dropdown.style.display='none';
        let content = document.getElementById('content'); content.style.marginTop='45px';
        // let new1 = document.getElementById('newCont'); new1.style.display='none';
    }
    /*newContact(){
        let cht = document.getElementById('cht'); cht.style.display='none';
        let chf = document.getElementById('chf'); chf.style.display='block';
        let all = document.getElementById('all'); all.style.display='none';
        // let new1 = document.getElementById('newCont'); new1.style.display='block';
    } */
    active(){
        let cht = document.getElementById('cht'); cht.style.display='block';
        let chf = document.getElementById('chf'); chf.style.display='none';
        let all = document.getElementById('all'); all.style.display='none';
        // let new1 = document.getElementById('newCont'); new1.style.display='none';
    }
    disactive(){
        let cht = document.getElementById('cht'); cht.style.display='none';
        let chf = document.getElementById('chf'); chf.style.display='block';
        let all = document.getElementById('all'); all.style.display='none';
        // let new1 = document.getElementById('newCont'); new1.style.display='none';
    }

    key: string = 'name';
    reverse: boolean = false;
    sort(key){
        this.key = key;
        this.reverse = !this.reverse;
    }
    user:any[]=[];
    constructor(public navCtrl: NavController, public navParams: NavParams) {}
    clicked() {
        let select1 = document.getElementById('select');select1.style.display='none';
        let search = document.getElementById('search'); search.style.display='none';
        let find1 = document.getElementById('find'); find1.style.display='block';
        let content = document.getElementById('content'); content.style.marginTop='0px';
    }
    back(){
        let select1 = document.getElementById('select'); select1.style.display='block';
        let search = document.getElementById('search'); search.style.display='block';
        let find1 = document.getElementById('find'); find1.style.display='none';
        let content = document.getElementById('content'); content.style.marginTop='0px';
    }

}

