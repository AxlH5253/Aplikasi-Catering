import { Component,OnInit, ChangeDetectorRef } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {AlertController, LoadingController,ActionSheetController, ToastController, Platform} from '@ionic/angular';
import { LogininfoService } from '../logininfo.service';
import { HTTP } from '@ionic-native/http/ngx';

import { File, FileEntry } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';

import { finalize } from 'rxjs/operators';
 
const STORAGE_KEY = 'my_images';
 

@Component({
  selector: 'app-gprofil',
  templateUrl: './gprofil.page.html',
  styleUrls: ['./gprofil.page.scss'],
})
export class GprofilPage implements OnInit {
  
  loading: any;
  id:any
  gambar: any;
  host: any;

  username ="";
  testos = "";
  items = [];
  images = [];

  constructor(
    private httpn : HTTP,
  	private http: HttpClient,
  	private alertController: AlertController,
  	private loginservice: LogininfoService,
  	private router: Router,
  	private loadingController: LoadingController,
    private camera: Camera, 
    private file: File, 
    private plt: Platform,
    private webview: WebView,
    private actionSheetController: ActionSheetController, 
    private toastController: ToastController,
    private storage: Storage, 
    private ref: ChangeDetectorRef, 
    private filePath: FilePath
  ) { }

  ngOnInit() {
  	 this.id = this.loginservice.userId;
  	 this.username = this.loginservice.username;
     this.host = this.loginservice.host;
     
     this.plt.ready().then(() => {
      //this.loadStoredImages();
      //while(this.images.length > 0){
        //this.deleteImage(this.images,0);
      // }
     });
  }

  ionViewWillEnter(){
    this.getPostData(this.id);
  }

  loadStoredImages() {
    this.storage.get(STORAGE_KEY).then(images => {
      if (images) {
        let arr = JSON.parse(images);
        this.images = [];
        for (let img of arr) {
          let filePath = this.file.dataDirectory + img;
          let resPath = this.pathForImage(filePath);
          this.images.push({ name: img, path: resPath, filePath: filePath });
        }
      }
    });
  }

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
        message: text,
        position: 'bottom',
        duration: 3000
    });
    toast.present();
  }

  selectImage() {
    this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
  }

  takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
        quality: 100,
        sourceType: sourceType,
        saveToPhotoAlbum: false,
        correctOrientation: true
    };

   
     while(this.images.length > 0){
        this.deleteImage(this.images,0);
     }
 
    this.camera.getPicture(options).then(imagePath => {
        if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
            this.filePath.resolveNativePath(imagePath)
                .then(filePath => {
                    let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                });
        } else {
            var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
            var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        }
    });
 
  }

createFileName() {
    var d = new Date(),
        n = d.getTime(),
        newFileName = n + ".jpg";
    return newFileName;
}

copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
        this.updateStoredImages(newFileName);
    }, error => {
        this.presentToast('Error while storing file.');
    });
}
 
updateStoredImages(name) {
    this.storage.get(STORAGE_KEY).then(images => {
        let arr = JSON.parse(images);
        if (!arr) {
            let newImages = [name];
            this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
        } else {
            arr.push(name);
            this.storage.set(STORAGE_KEY, JSON.stringify(arr));
        }
 
        let filePath = this.file.dataDirectory + name;
        let resPath = this.pathForImage(filePath);
 
        let newEntry = {
            name: name,
            path: resPath,
            filePath: filePath
        };
 
        this.images = [newEntry, ...this.images];
        this.ref.detectChanges(); // trigger change detection cycle
    });
}

deleteImage(imgEntry, position) {
    this.images.splice(position, 1);
 
    this.storage.get(STORAGE_KEY).then(images => {
        let arr = JSON.parse(images);
        let filtered = arr.filter(name => name != imgEntry.name);
        this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
 
        var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
 
        this.file.removeFile(correctPath, imgEntry.name).then(res => {
            this.presentToast('File removed.');
        });
    });
}

startUpload(imgEntry) {
    this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
        .then(entry => {
            ( < FileEntry > entry).file(file => this.readFile(file));
            this.router.navigate(['/tabs/tab3']);
        })
        .catch(err => {
            this.presentToast('Error while reading file.');
        });
}

readFile(file: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
        const formData = new FormData();
        const imgBlob = new Blob([reader.result], {
            type: file.type
        });
        formData.append('file', imgBlob, file.name);
        this.uploadImageData(formData);
    };
    reader.readAsArrayBuffer(file);
}
 
async uploadImageData(formData: FormData) {
    const loading = await this.loadingController.create({
        message: "Uploading image...",
    });
    await loading.present();
 
    this.http.post("http://"+this.loginservice.host+"/kevyn/uploadgambar.php", formData)
        .pipe(
            finalize(() => {
                loading.dismiss();
            })
        )
        .subscribe(res => {
            if (res['success']) {
                this.presentToast('File upload complete.')
            } else {
                this.presentToast('File upload failed.')
            }
        });
}

async getPostData(id) {
    this.items = [];
    var sampleData = [];

    const loading = await this.loadingController.create({
        message: "Ambil Data",
    });
    await loading.present();

    let url = 'http://'+this.loginservice.host+'/kevyn/datajsn.php';
    this.httpn.post(url,{'id':id},{})
     .then(data => {
        console.log(data.data);
        sampleData = data.data.split("#");
        for ( var i of sampleData){
          this.items.push(i);
        }
        console.log(this.items);
        loading.dismiss();
    });
  }



}
