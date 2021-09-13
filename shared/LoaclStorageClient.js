import {storage} from '@core/utils'

function storageName(params) {
    return 'excel:' + params
}

export class LocalStorageClient {
    constructor(name) {
        this.name = storageName(name)
    }

    save(state) {
        storage(this.name, state)
        return Promise.resolve()
    }

    get() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(storage(this.name))
            }, 1500)
        })
    }
}
