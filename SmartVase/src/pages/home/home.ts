import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  unpairedDevices: any;
  pairedDevices: any;
  gettingDevices: Boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bluetoothSerial: BluetoothSerial) {
  }

  public stat_on:any;

  turnON(){
    this.bluetoothSerial.enable().then((status)=> {
        this.stat_on=status;
        console.log("AA"+status);

    });

  }

  
}