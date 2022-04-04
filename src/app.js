import './style.scss';
import MyWS from './MyWS';

document.addEventListener('DOMContentLoaded', function() {

    let connectButton = document.getElementById("connect");
    let myWS = new MyWS();

    let baseAddress = document.getElementById("base-address");
    
    connectButton.onclick = function(event) {
        event.preventDefault();
        
        let wsAddress = baseAddress.value;
        if (wsAddress !== "") {
            let portNumber = document.getElementById("input-protocol").value;
            myWS.setWsAddress(wsAddress).setPort(portNumber);
            event.currentTarget.disabled = true;
            myWS.connect();
        } else {
            alert("É necessário colocar um endereço base antes de se conectar.");
        }
    };
});


