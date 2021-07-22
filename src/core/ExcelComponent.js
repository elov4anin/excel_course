import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.store = options.store
        this.unsubscribers = []
        this.prepare()
        this.storeSub = null
    }
    /**
     * Возращает шаблон копмонента
     * @return {string}
     */
    toHTML() {
    }

    // Уведомляем слушателей про события
    $emit(event, ...agrs) {
        this.emitter.emit(event, ...agrs);
    }

    $on(event, fn) {
        const unsubs = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsubs)
    }
    $dispatch(action) {
        this.store.dispatch(action)
    }

    $subscribe(fn) {
        this.storeSub = this.store.subscribe(fn)
    }

    init() {
        this.initDOMListeners()
    }

    destroy() {
        this.removeDOMListeners()
        this.unsubscribers.forEach((unsubs) => unsubs())
        this.storeSub.unsubscribe()
    }

    prepare() {

    }
}
