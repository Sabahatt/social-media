import {ToastAndroid} from 'react-native';

class Auth {
    createToast = message => {
        ToastAndroid.showWithGravityAndOffset(
          message,
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          0,
          50,
        );
      };
    
      post = async => {
        try {
          this.createToast('Posted successfully!');
        } catch (err) {
          this.createToast('Posting failed');
        }
      };
}



  export const AuthStore = new Auth();