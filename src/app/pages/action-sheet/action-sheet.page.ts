import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor( private actionSheetCtrl: ActionSheetController ) { }

  ngOnInit() {
  }

  onClick() {
    this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albumes',
      backdropDismiss: false,
      subHeader: 'Example subheader',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash-outline',
          cssClass: 'rojo',
          handler() {
            console.log('Delete clicked');
          },
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          icon: 'share-outline',
          handler() {
            console.log('Share clicked');
          },
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler() {
            console.log('Cancel clicked');
          },
          data: {
            action: 'cancel',
          },
        },
      ],
    });


    await actionSheet.present();
}



}

