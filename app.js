const { createApp } = Vue;

createApp({
  template: `
    <div>
      <h1>Lista de Animales</h1>
      

      <!--La estructura de la tabla la he sacado de: https://stackoverflow.com/questions/51963481/how-to-use-v-for-to-render-a-table-using-vue-js-->
      <table class="table table-striped">
      <thead>
      <tr>
        <th>Nombre</th>
        <th>Edad</th>
        <th>Especie</th>
        <th>Imagen</th>
        <th>Video</th>
      </tr>
    </thead>
      <tbody>
        <tr v-for="animal in paginatedAnimals" :key="animal.id">
           <th scope="row">{{ animal.nombre  }}</th>  
           <td>{{ animal.edad }}</td> 
           <td>{{ animal.especie }}</td>
           <td><img :src="animal.imagen" :alt="animal.animal" width="300" height="300" /></td>
          
           <td>
           
                <video :src="animal.video" :alt="animal.animal" width="600" height="400" controls>
                   
                </video>
           
           </td>
           
 
         
        </tr>
       </tbody>
    </table>

   
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
        <span>Página {{ currentPage }} de {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
      </div>

    </div>
  `,
  data() {
    return {

      animalitos:[
        { id: 1, nombre: "Ruperta", edad: 90, especie: "Ballena Jorobada", imagen: "img/ballenajorobada.webp", video:"vid/ballenajorobada.mp4" },
        { id: 2, nombre: "Luis", edad: 14, especie: "Camello", imagen: "img/camello.webp" , video:"vid/camello.mp4"},
        { id: 3, nombre: "María", edad: 11, especie: "Delfín", imagen: "img/delfin.webp" , video:"vid/delfin.mp4"},
        { id: 4, nombre: "Rodolfo", edad: 27, especie: "Dromedario", imagen: "img/drome.webp", video:"vid/drome.mp4" },
        { id: 5, nombre: "Jesé", edad: 32, especie: "Hipopótamo", imagen: "img/hipo.webp" , video:"vid/hipo.mp4"},
        { id: 6, nombre: "Francisca", edad: 22, especie: "Jirafa", imagen: "img/jirafa.webp" , video:"vid/jirafa.mp4"},
        { id: 7, nombre: "Simba", edad: 9, especie: "León", imagen: "img/leon.webp", video:"vid/leon.mp4" },
        { id: 8, nombre: "Jhon", edad: 19, especie: "Lobo", imagen: "img/lobo.webp" , video:"vid/lobo.mp4"},
        { id: 9, nombre: "Estela", edad: 45, especie: "Orca", imagen: "img/orca.webp" , video:"vid/orca.mp4"},
        { id: 10, nombre: "Jesulín", edad: 10, especie: "Oso Pardo", imagen: "img/oso.webp" , video:"vid/oso.mp4"},
        { id: 11, nombre: "Cody Maverick", edad: 8, especie: "Pingüino Emperador", imagen: "img/pingu.webp" , video:"vid/pingu.mp4"},
        { id: 12, nombre: "Aleksei Sytsevich", edad: 31, especie: "Rinoceronte", imagen: "img/rino.webp" , video:"vid/rino.mp4"},
        { id: 13, nombre: "Eustaquio", edad: 56, especie: "Tiburón Peregrino", imagen: "img/tibuperegrino.webp" , video:"vid/tiburonperegrino.mp4"},
        { id: 14, nombre: "Kirat", edad: 25, especie: "Tigre de Bengala", imagen: "img/tigrebengala.webp" , video:"vid/tigrebengala.mp4"},
        { id: 15, nombre: "Jacinta", edad: 29, especie: "Zebra", imagen: "img/zebra.webp" , video:"vid/zebra.mp4"}
      ],
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.animalitos.length / this.itemsPerPage);
    },
    paginatedAnimals() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.animalitos.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
}).mount('#app');
