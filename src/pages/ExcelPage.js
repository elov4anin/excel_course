import {Page} from '@core/page'
import {rootReducer} from '@/redux/rootReducer'
import {createStore} from '@core/createStore'
import {normalizeInitialState} from '@/redux/initialState'
import {Header} from '@/components/header/Header'
import {Excel} from '@/components/excel/Excel'
import {Formula} from '@/components/formula/Formula'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Table} from '@/components/table/Table'
import {debounce, storage} from '@core/utils'

function storageName(params) {
    return 'excel:' + params
}

export class ExcelPage extends Page {
    getRoot() {
        const params = this.params ? this.params : Date.now().toString()
        const state = storage(storageName(params))
        console.log('APP state 1', state)
        const store = createStore(rootReducer, normalizeInitialState(state))

        const stateListener = debounce(state => {
            storage(storageName(params), state)
            console.log('APP state', state)
        }, 300)
        store.subscribe(stateListener)

        this.excel = new Excel( {
            components: [Header, Toolbar, Formula, Table],
            store: store
        });

        return this.excel.getRoot();
    }

    afterRender() {
        this.excel.init()
    }

    destroy() {
        this.excel.destroy();
    }
}

