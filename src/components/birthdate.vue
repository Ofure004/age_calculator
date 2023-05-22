<template>
    <div class="birth_date row">
        <div class="col">
            <label>Year</label>
            <select v-model="store.selectedYear" name="years">
                <option value="" disabled selected hidden style="color: #c0b6b6;" class="disabled"> YYYY </option>
                <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
            </select>
        </div>

        <div class="col">
            <label>Month</label>
            <select v-model="store.selectedMonth" name="months">
                <option value="" disabled selected hidden style="color: #c0b6b6;" class="disabled"> MM </option>
                <option v-for = "month in months" :value="month" :key="month">{{ month }}</option>
            </select>
        </div>
<!-- 
        {{ store.selectedYear }}
        {{ numbers }} -->
        <div class="col">
            <label>Day</label>
            <select v-model="store.selectedDay" name="days">
                <option value="" disabled selected hidden style="color: #c0b6b6;" class="disabled"> DD </option>
                <option v-for = "day in days" :value="day" :key="day">{{ day }}</option>
            </select>
        </div>
    </div>
</template>

<script setup>

import { ref, onMounted, computed, watch } from 'vue';
import { useDateStore } from '@/stores/DateStore';

const store = useDateStore()

const numberOfMonths = ref(12);
const months = ref([...Array(numberOfMonths.value).keys()].map((i) => i + 1));
const selectedMonth = ref('');

const numbers = computed(() => {
if(store.selectedMonth.value === '4' || store.selectedMonth.value === '6' || store.selectedMonth.value === '9' || store.selectedMonth.value === '11'){
    return 30;
} else if(store.selectedMonth.value === '2'){
    return 28;
}
else{
    return 31;
}
});
const days = ref([...Array(numbers.value).keys()].map((i) => i + 1));
const selectedDay = ref('');



const years = ref([]);
const selectedYear = ref('');
const getYears = () =>{
    const startYear = 1800;
    const endYear = new Date().getFullYear();
    for (let i = startYear; i <= endYear; i++){
        years.value = [...years.value, i];
    }
}
watch(selectedMonth, () =>{
    // if(newValue == 4 || newValue == 6 || newValue == 9 || newValue == 11){

    //     console.log("Odd month");
    //     console.log(days.length);
    // } else if(newValue == 2){
    //     console.log("February");
    //     console.log(days.length);
    // }
    // else{
    //     days.length = 31;
    //     console.log(days.length);
    // }
    console.log(selectedMonth.value);
    console.log(days);
    console.log(numbers);
})

onMounted(() => {getYears()})



</script>

<style scoped>
    .row{
        display:flex;
        flex-direction: row;
        width: 100%;
        /* gap: 30px; */
        justify-content: space-between;
    }
    .col{
        gap: 5px;
        display: flex;
        flex-direction: column;
    }
    label{
        display: flex;
        justify-content: flex-start;
        text-transform: uppercase;
        color: #716f6f;
        font-weight: 700;
        letter-spacing: 4px;
        font-size: 1rem;
    }
    select{
        width: 11rem;
        height: 5rem;
        border-radius: 10px;
        border: 1.5px solid rgba(185, 184, 184, .5);
        padding: .5rem 0 .5rem 1rem;
        font-size: 2rem;
        font-weight: 800;
    }
    .disabled{
        font-size: 1.5rem;
        font-weight: 700;
        color: #c0b6b6;
    }
    input::selection{
        border-color: rgba(185, 184, 184, .5);
    }
    /* .Invalid{
        border-color: #ff5757;
    } */
</style>