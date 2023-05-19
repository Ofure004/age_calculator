import { defineStore } from 'pinia'

export const useDateStore = defineStore({
  id: 'date',
  state: () => ({
    selectedDay : '',
    selectedMonth : '',
    selectedYear : '',
    show : false
  }),
  actions : {
    showDate(){
      this.show = !this.show
    }
  }

})
