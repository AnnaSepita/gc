import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { StartPage } from '../start/start';
import { RegisterPage } from '../register/register';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})


export class LoginPage {
	
user:any = {email: "", password: ""};
arrL:any[]=[];	

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
    /* client(){
      this.navCtrl.push(HomePag  }
   /* admin(){
      this.navCtrl.push(TabsPage)
  }  */
  logIn(){
	this.arrL.splice(0,this.arrL.length)
	console.log(this.arrL)
      if((this.user.email =="admin1@gmail.com")||(this.user.email =="admin2@gmail.com")){
          this.navCtrl.push(TabsPage);
          this.arrL.push(this.user);
      } else { this.navCtrl.push(HomePage)}
}
    register(){
        this.navCtrl.push(RegisterPage);
    }
}
