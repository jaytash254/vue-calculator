<template>
  <div class="calculator">
    <div class="display">{{ current || '0' }}</div>
    <div class="buttons">
      <button @click="clear">C</button>
      <button @click="append('%')">%</button>
      <button @click="append('/')">÷</button>
      <button @click="append('*')">×</button>

      <button @click="append('7')">7</button>
      <button @click="append('8')">8</button>
      <button @click="append('9')">9</button>
      <button @click="append('-')">−</button>

      <button @click="append('4')">4</button>
      <button @click="append('5')">5</button>
      <button @click="append('6')">6</button>
      <button @click="append('+')">+</button>

      <button @click="append('1')">1</button>
      <button @click="append('2')">2</button>
      <button @click="append('3')">3</button>
      <button @click="calculate">=</button>

      <button class="zero" @click="append('0')">0</button>
      <button @click="append('.')">.</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const current = ref('')

function append(value) {
  current.value += value
}

function clear() {
  current.value = ''
}

function calculate() {
  try {
    current.value = eval(current.value).toString()
  } catch (e) {
    current.value = 'Error'
  }
}
</script>

<style scoped>
.calculator {
  max-width: 300px;
  margin: 50px auto;
  background: #222;
  padding: 20px;
  border-radius: 10px;
  color: white;
}
.display {
  background: #000;
  padding: 20px;
  font-size: 2em;
  text-align: right;
  margin-bottom: 10px;
  border-radius: 5px;
}
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
button {
  padding: 20px;
  font-size: 1.2em;
  background: #444;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background: #666;
}
.zero {
  grid-column: span 2;
}
</style>
