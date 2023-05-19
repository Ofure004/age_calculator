<template>
    <div class="age column">
      <p v-if="store.show"><span>{{ AgeYears }}</span> years</p>
      <p v-else><span>--</span> years</p>

      <p v-if="store.show"><span>{{ AgeMonths }}</span> months</p>
      <p v-else><span>--</span> months</p>

      <p v-if="store.show"><span>{{ AgeDays }}</span> days</p>
      <p v-else><span>--</span> days</p>
      <!-- {{ selectedDay }}
      {{ selectedMonth }}
      {{ selectedYear }}
      {{ YearsDay }}
      {{ MonthDay }}
      {{ InputSecond }} -->
      <!-- {{ AgeYears }}
      {{ AgeMonths }}
      {{ AgeDays }}
      {{ store.show }} -->
    </div>
</template>
<script setup>
import { computed, watch, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
import { useDateStore } from '../stores/DateStore';
const store = useDateStore();
const { selectedDay, selectedMonth, selectedYear } = storeToRefs(store)
const CurrentDate = new Date().getDate();
const CurrentMonth = new Date().getMonth() + 1;
const CurrentYear = new Date().getFullYear();
// const YearsDay = computed(() => {
//     return parseInt(selectedYear.value) * 365;
// })
// const MonthDay = computed(() =>{
//     return (Math.round(parseInt(selectedMonth.value) * 30.42));
// })
// const InputDate = computed(() => {
//     return (YearsDay.value + MonthDay.value + NumberDay);
// })
// const InputSecond = computed(() => {
//     return (Math.round(InputDate.value * 86400));
// })
// const Age = computed(() => {
//     return CurrentDate - InputDate.value ; 
// })
// const AgeYears = Math.floor(Age.value / 31557600000 );
// const AgeMonths = Math.floor(Age.value % (365*24*60*60) / (30*24*60*60));
// const AgeDays = Math.floor(Age.value % (365*24*60*60))
const AgeYears = computed(() => {
if (CurrentMonth > parseInt(selectedMonth.value) ||( CurrentMonth == parseInt(selectedMonth.value) && CurrentDate >= parseInt(selectedDay.value))) {
    return CurrentYear - parseInt(selectedYear.value);
} else {
    return (CurrentYear - parseInt(selectedYear.value) - 1);
}
})

const AgeMonths = computed(() => {
if (CurrentDate >= parseInt(selectedDay.value)) {
    let computedMonths = CurrentMonth - parseInt(selectedMonth.value);
    return computedMonths < 0 ? computedMonths + 12 : computedMonths;
}
else if (CurrentDate < parseInt(selectedDay.value)) {
    let computedMonths = CurrentMonth - parseInt(selectedMonth.value) - 1;
    return computedMonths < 0 ? computedMonths + 12 : computedMonths;
}
})
const AgeDays = computed(() => {
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var LeapMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (CurrentDate >= parseInt(selectedDay.value)) {
        return CurrentDate - parseInt(selectedDay.value);
    } else if(parseInt(selectedDay.value) < CurrentDate && parseInt(selectedYear.value)% 4 === 0 && parseInt(selectedMonth.value) === 2){
        return CurrentDate - parseInt(selectedDay.value) + LeapMonths[(parseInt(selectedMonth.value)) - 1];
    }
    else {
        return CurrentDate - parseInt(selectedDay.value) + monthDays[(parseInt(selectedMonth.value)) - 1];
    }
})
console.log(CurrentMonth);
console.log(selectedYear);




</script>
<style scoped>
.column{
    display: flex;
    flex-direction: column;
    font-size: 5rem;
    font-weight: 800;
    font-style: italic;
}
p{
    padding: 0;
    margin: 0;
}
span{
    color: #854dff;
}

</style>