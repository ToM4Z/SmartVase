import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { SmartVaseControllerPage } from '../smart-vase-controller/smart-vase-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  unpairedDevices: any;
  pairedDevices: any;
  gettingDevices: Boolean;

  constructor(public navCtrl: NavController, private bluetoothSerial: BluetoothSerial) {
  }

  public stat_on:any;

  turnON(){
    this.bluetoothSerial.enable().then((status)=> {
        this.stat_on=status;
    });
  }

  changeScreen(){
    this.navCtrl.push(SmartVaseControllerPage);
  }


  /*Connect(){
    this.bluetoothSerial.isEnabled().then((data)=> {
      this.bluetoothSerial.connect(this.macAddress).then((stat_con)=>{
            this.stat_con=stat_con;

        });
    });
  }*/


  /*ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }*/

  startScanning() {
    this.pairedDevices = null;
    this.unpairedDevices = null;
    this.gettingDevices = true;

    if(! this.bluetoothSerial.isEnabled()){
      //this.bluetoothSerial.enable();
      console.log("NONE");
    }



    this.bluetoothSerial.discoverUnpaired().then((success) => {
      this.unpairedDevices = success;
      console.log(success);
      this.gettingDevices = false;
      success.forEach(element => {
        // alert(element.name);
      });
    },
      /*(err) => {
        console.log(err);
      }*/);

    this.bluetoothSerial.list().then((success) => {
      this.pairedDevices = success;
    },
      (err) => {

      });
  }
  success = (data) => alert(data);
  fail = (error) => alert(error);

 /* selectDevice(address: any) {

    let alert = this.alertCtrl.create({
      title: 'Connect',
      message: 'Do you want to connect with?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Connect',
          handler: () => {
            this.bluetoothSerial.connect(address).subscribe(this.success, this.fail);
          }
        }
      ]
    });
    alert.present();

  }*/

  disconnect() {
    /*let alert = this.alertCtrl.create({
      title: 'Disconnect?',
      message: 'Do you want to Disconnect?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Disconnect',
          handler: () => {
            this.bluetoothSerial.disconnect();
          }
        }
      ]
    });
    alert.present();*/
  }


  /*connect(){
    this.bluetoothSerial.isEnabled().then(res => {

//    this.bluetoothSerial.connect("");
    })

    /*
    // Write a string
    this.bluetoothSerial.write('hello world').then(success, failure);
  
    // Array of int or bytes
    this.bluetoothSerial.write([186, 220, 222]).then(success, failure);
  
    // Typed Array
    var data = new Uint8Array(4);
    data[0] = 0x41;
    data[1] = 0x42;
    data[2] = 0x43;
    data[3] = 0x44;
    this.bluetoothSerial.write(data).then(success, failure);
  
    // Array Buffer
    this.bluetoothSerial.write(data.buffer).then(success, failure);*/
  //}

  
}