import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GroupsPage } from '../pages/groups/groups';
import { AlertsPage } from '../pages/alerts/alerts';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { LandingPage } from '../pages/landing/landing';
import { PopoverComponent } from '../components/popover/popover';
import { GroupModalPage } from '../pages/modals/groupModal/groupModal';
import { PostModalPage } from '../pages/modals/post-modal/post-modal';

import { ImagePicker } from '@ionic-native/image-picker';
import { PostService } from './services/post.service';
import { GroupService } from './services/group.service';
import { SelectedPostModalPage } from '../pages/modals/selected-post-modal/selected-post-modal';
import { SelectedGroupModalPage } from '../pages/modals/selected-group-modal/selected-group-modal';
import { Camera } from '@ionic-native/camera';
import { ImagenBdPipe } from '../pages/modals/post-modal/imagen-bd-pipe';
import { File } from '@ionic-native/file';
import { MediaCapture } from '@ionic-native/media-capture';
import { Media } from '@ionic-native/media';
import { VideoPlayer } from '@ionic-native/video-player';
import { IonicStorageModule } from '@ionic/storage';
import { VideoEditor } from '@ionic-native/video-editor';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    GroupsPage,
    AlertsPage,
    LoginPage,
    ProfilePage,
    LandingPage,
    PopoverComponent,
    GroupModalPage,
    PostModalPage,
    TabsPage,
    SelectedPostModalPage,
    SelectedGroupModalPage,
    ImagenBdPipe,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    GroupsPage,
    AlertsPage,
    LoginPage,
    ProfilePage,
    LandingPage,
    PopoverComponent,
    GroupModalPage,
    PostModalPage,
    TabsPage,
    SelectedPostModalPage,
    SelectedGroupModalPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    PostService,
    GroupService,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImagenBdPipe,
    File,
    MediaCapture,
    Media,
    VideoPlayer,
    VideoEditor
  ]
})
export class AppModule {}
