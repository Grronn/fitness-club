import {makeAutoObservable} from "mobx";

export default class SpecStore {
    constructor() {
        this._spec=[
            
        ]
        makeAutoObservable(this)
    }

    setSpecs(spec) {
        this._spec = spec
    }

    get spec() {
        return this._spec
    }
}