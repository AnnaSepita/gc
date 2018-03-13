import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import {LoginPage} from '../login/login';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

reg:any = {fname: "", lname: "", email: "", password: ""};
arrR:any[]=[];	

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
    login(){
        this.navCtrl.push(LoginPage)
    }
	regIn(){
	this.arrR.splice(0,this.arrR.length)
	this.arrR.push(this.reg)
	console.log(this.arrR)
}
}
