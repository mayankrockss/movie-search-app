import WebStorage from 'react-webstorage';

class WebStorageAPI {
    constructor() {
        this.webStorage = new WebStorage(window.localStorage ||
            window.sessionStorage);
    }
}
export default new WebStorageAPI();  //Singleton object
