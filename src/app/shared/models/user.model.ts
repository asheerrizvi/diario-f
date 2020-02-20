export class User {
    constructor(
        public id: string,
        public name: string,
        public emaiL: string,
        // tslint:disable-next-line:variable-name
        private _token: string
    ) {}

    get token() {
        return this._token;
    }
}
