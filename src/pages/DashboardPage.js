import {Page} from '@core/page'
import {$} from '@core/dom'
import {createRecords} from '@/pages/dashboard.functions'

export class DashboardPage extends Page {
    getRoot() {
        // const now = Date.now().toString()
        return $.create('div', 'db').html(`
        <div class="db__header">
          <h1>Excel Панель управления</h1>
        </div>
    
        <div class="db__new">
          <div class="db__view">
            <a href="#excel" class="db__create">
              Новая <br /> Таблица
            </a>
          </div>
        </div>
    
        <div class="db__table db__view">
        ${createRecords()}
        </div>
    `)
    }
}
