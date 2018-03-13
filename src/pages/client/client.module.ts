import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientPage } from './client';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    ClientPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientPage),
  ],
})
export class ClientPageModule {}
