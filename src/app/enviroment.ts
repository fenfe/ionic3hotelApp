
  export const firebaseConfig = {
    apiKey: "AIzaSyCDO08zL1nhFtcFD-GEyj2k1GnzT_PSHIE",
    authDomain: "hotelapp-725ec.firebaseapp.com",
    databaseURL: "https://hotelapp-725ec.firebaseio.com",
    projectId: "hotelapp-725ec",
    storageBucket: "",
    messagingSenderId: "169524892641",
    appId: "1:169524892641:web:32d67945d95e71f1"
  };


  //transpoter to and from the database
  export const transportPerson = address => {
      let Bucket = [];
      address.forEach(obj => {
          let variable = obj.val();
          variable.key = obj.key;
          Bucket.push(variable);
      });
      return Bucket;
  }