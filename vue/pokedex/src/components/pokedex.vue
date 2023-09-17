<script>
import { onMounted, reactive } from 'vue';
export default {
  setup() {
    const init = reactive({
      pokemons: [],
    })

    onMounted(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0`)
        .then(res => res.json())
        .then(data => {
          init.value = data.results;
          console.log(init)
        })
        .catch(error => console.error(error))
    })
    return init
  }
}
</script>
<template>
  <div class="card">
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.name">
        <v-card>
          <v-card-title></v-card-title>
        </v-card>
      </li>
    </ul>
  </div>
</template>
