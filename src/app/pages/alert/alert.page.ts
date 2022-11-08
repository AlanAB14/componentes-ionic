import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage {

  handlerMessage: string = '';
  roleMessage: string = '';

  constructor( private alertCtrl: AlertController ) { }


  onClick() {
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert!',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Please enter your info',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm cancel')
          }
        },
        {
          text: 'Ok',
          handler: (data: any) => {
            console.log(data);
          }
        }
      ],
      inputs: [
        {
          placeholder: 'Name',
          id: 'name',
          type: 'text',
          name: 'name'
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          id: 'age',
          name: 'age',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
        {
          name: 'fecha',
          type: 'date',
          min: '2015-03-01',
          max: '2023-01-12'
        }
      ],
    });

    await alert.present();
  }

}
