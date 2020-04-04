
//var web = "https://www.farmazon.mx/v2_webservices_repartidor/";
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
     
        trigger_autologin();

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        /*var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);*/
    }
};


function trigger_autologin(){
    
   //  if(getData("user")!=null){   
       // $("#rep_correo").val(getData("user"));
       // $("#rep_pass").val(getData("pass"));
        login();
    // }
}
