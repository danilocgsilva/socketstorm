class AreaConnectionState {
    constructor() {
        this.element = document.getElementById("connect-status");
        this.port = "";
    }

    connected() {
        this.element.classList.remove("alert-secondary");
        this.element.classList.remove("alert-warning");
        this.element.classList.add("alert-success");
        this.clear()
        this.addLine("Conectado!<br />");
        this.writeConnectionData();
    }

    connecting() {
        this.element.classList.remove("alert-secondary");
        this.element.classList.add("alert-warning");
        this.clear();
        this.addLine("Conectando...<br />");
        this.writeConnectionData();
    }

    write(string) {
        this.element.innerHTML = string;
    }

    setPort(port) {
        this.port = port;
        return this;
    }

    setProtocol(protocol) {
        this.protocol = protocol;
        return this;
    }

    addLine(string) {
        if (this.element.innerHTML === "") {
            this.element.innerHTML += string;
        } else {
            this.element.innerHTML += "<br />" + string;
        }
        return this;
    }

    clear() {
        this.element.innerHTML = "";
    }

    writeConnectionData() {
        this.addLine("Protocolo: " + this.protocol);
        this.addLine("Porta: " + this.port);
    }
}

export default AreaConnectionState;