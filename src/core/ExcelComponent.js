import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.subscribe = options.subscribe || []
        this.store = options.store
        this.unsubscribers = []
        this.prepare()
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

    // Изменения по тем полям на которые подписан компонент
    storeChanged() {

    }

    isWatching(key) {
        return this.subscribe.includes(key)
    }

    init() {
        this.initDOMListeners()
    }

    destroy() {
        this.removeDOMListeners()
        this.unsubscribers.forEach((unsubs) => unsubs())
    }

    prepare() {

    }
}
