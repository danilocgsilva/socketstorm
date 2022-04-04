import AreaConnectionState from './AreaConnectionState';

class MyWS {

    setWsAddress(address) {
        this.address = address;
        this.protocol = 'ws';
        this.connectionArea = new AreaConnectionState();
        this.connectionArea.setProtocol(this.protocol);
        return this;
    }

    setPort(port) {
        this.port = port;
        this.connectionArea.setPort(this.port);
        return this;
    }
    
    connect() {

        const ws = new WebSocket(`${this.protocol}://${this.address}:${this.port}`)
        this.connectionArea.connecting();

        ws.addEventListener("open", () => {
            this.connectionArea.connected();
        })
    }
}

export default MyWS;
