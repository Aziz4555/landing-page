<template>

  <div>
    <video autoplay="autoplay" loop="loop" preload="auto" muted defaultmuted playsinline oncontextmenu="return false;">
        <source src="../src/assets/desktop_video.mp4" type="video/mp4">
    </video>

    <div class="absolute text-white font-extrabold lg:text-5xl lg:bottom-1/2 bottom-3/4 text-2xl  pl-10">
      <p>ECOUTEURS SANS FIL PREMIUM</p>
      <p>(et abordables)</p>
    </div>

  </div>

  <div class="py-5 px-10">
    <p class="font-bold text-3xl text-center mt-6 mb-6">OBTENEZ 40% de réduction en vous inscrivant à la newsletter !</p>
    <div class="w-2/3 mx-auto">
      <input class="w-1/2 py-2.5 px-5 mt-6 mb-6 rounded block mx-auto shadow-lg bg-gray-200" type="email" placeholder="adresse email" v-model="email">
      <div class="w-16 block mx-auto"></div>
      <button class="w-1/8 py-2.5 px-5 bg-blue-600 mt-6 mb-6 text-white rounded block mx-auto" type="submit"  @click="sendMail">Valider</button>
    </div>
  </div>

  <div class="text-white bg-black py-10">
    <div class="mx-auto ">
      <h2 class="text-center font-bold text-4xl">AUCUN FIL, AUCUNE LIMITE</h2>

      <div class="flex  justify-center lg:w-3/4 lg:mx-auto pt-10 lg:px-0 px-3">

        <div class="flex-1 py-3 lg:px-6 mx-2">
          <p class="text-center lg:mb-0 mb-3">Plus de</p>
          <p class="text-center"><span class="font-bold lg:text-6xl text-4xl">18</span> heures</p>
          <p class="mt-2 text-center">d'écoute avec plusieurs recharges</p>
        </div>

        <div class="flex-1 py-3 lg:px-6 mx-2">
          <p class="text-center lg:mb-0 mb-3">Jusqu'à</p>
          <p class="text-center"><span class="font-bold lg:text-6xl text-4xl">4.5</span> heures</p>
          <p class="mt-2 text-center">d'écoute sur une seule charge</p>
        </div>

        <div class="flex-1 py-3 lg:px-6 mx-2">
          <p class="text-center lg:mb-0 mb-3" >Autour de</p>
          <p class="text-center"><span class="font-bold lg:text-6xl text-4xl">50</span> minutes</p>
          <p class="mt-2 text-center">d'écoute après seulement 5 minutes  de charge</p>
        </div>
      </div>

      <div class="max-w-2xl my-0 mx-auto">
        <img src="../src/assets/batterie_noir.png" role="img">
      </div>


    </div>
  </div>

  <div class="my-10">
    <div class="w-3/4 mx-auto">
      <h2 class="text-center text-4xl font-bold">SON HAUTE-FIDÉLITÉ</h2>
      <div class="flex flex-col">
        <p class="text-justify pb-3 pt-10">Profitez d'une expérience d'écoute immersive, vibrante et incroyablement précise grâce à des hauts-parleurs dynamiques
          de 12.4mm vous offrant une amplification profonde et fidèle des basses. Pour vous garantir une expérience inégalée,
          les codecs AAC/SBC améliorent la qualité audio pour un son riche et détaillé.</p>
        <p class="py-3">Il faut le voir(et l'entendre) pour le croire !</p>
        <img src="../src/assets/haute_fidelite.png" alt="" role="img">
        <p class="text-justify">Chaque écouteur est équipé d’un microphone haute sensibilité qui réduit efficacement les bruits de fond,
          rendant l’appel parfaitement clair pour vous et eux, même dans des environnements bruyants.</p>
      </div>
    </div>
  </div>

  <div class="text-white bg-black py-10">
    <div class="w-3/4 mx-auto ">
      <h2 class="text-center font-bold text-4xl">AUCUN FIL, AUCUNE LIMITE</h2>
      <img src="../src/assets/aucun_fil.png" role="img">
      <div class="flex lg:flex-nowrap flex-wrap">

        <div class="py-3 px-6">
          <h3 class="font-bold text-center">CONNEXION AUTOMATIQUE</h3>
          <p class="text-center">Connexion instantanée et automatique (après la connexion initiale) au dernier appareil appairé dès que
            vous ouvrez le boitier de charge</p>
        </div>

        <div class="py-3 px-5">
          <h3 class="font-bold text-center">COMPATIBILITÉ</h3>
          <p class="text-center">Compatible avec IOS et Android. Activez le Bluetooth sur votre appareil pour vous connecter. Fonctionne
            avec les téléphones, tablettes et ordinateurs.</p>
        </div>

        <div class="py-3 px-6">
          <h2 class="font-bold text-center">BLUETOOTH 5.0</h2>
          <p class="text-center">Toute nouvelle technologie Bluetooth 5.0 offrant une connexion plus forte, plus rapide et plus stable où
            que vous soyez</p>
        </div>
      </div>
    </div>
  </div>

  <div class="my-10">
    <div class="w-3/4 mx-auto">
      <h2 class="text-center text-4xl font-bold">COULEURS DISPONIBLES</h2>
      <div class="flex flex-col">
        <p class="text-center text-xl pb-3 pt-6">Choisissez une couleur</p>

        <div class="my-0 mx-auto">
          <div class="inline-block w-12 h-12 cursor-pointer bg-whitesmoke my-0 mx-1 rounded-full" @click="ecouteurWhite"></div>
          <div class="inline-block w-12 h-12 cursor-pointer bg-black my-0 mx-1 rounded-full" @click="ecouteurBlack"></div>
          <div class="inline-block w-12 h-12 cursor-pointer bg-pinkk my-0 mx-1 rounded-full" @click="ecouteurPink"></div>
        </div>


        <div id="slider" class="w-80 h-80 my-0 mx-auto rounded-full animation-fade-in-down" style="background: whitesmoke">
          <img id="slider_white" class="block max-w-full animate-fade" src="../src/assets/couleur_blanc.png" alt="" role="img">
          <img id="slider_black" class="hidden max-w-full animate-fade" src="../src/assets/coueleur_noir.png" alt="" role="img">
          <img id="slider_pink" class="hidden max-w-full animate-fade" src="../src/assets/couleur_rose.png" alt="" role="img">
        </div>

      </div>
    </div>
  </div>


  <div class="bg-black py-5 px-10">
    <p class="font-bold text-3xl text-white text-center mt-6 mb-6">OBTENEZ 40% de réduction en vous inscrivant à la newsletter !</p>
    <div class="w-2/3 mx-auto">
      <input class="w-1/2 py-2.5 px-5 mt-6 mb-6 rounded block mx-auto shadow-lg bg-gray-200" type="email" placeholder="adresse email" v-model="email">
      <div class="w-16 block mx-auto"></div>
      <button class="w-1/8 py-2.5 px-5 bg-blue-600 mt-6 mb-6 text-white rounded block mx-auto" type="submit"  @click="sendMail">Valider</button>
    </div>
  </div>

  <div>
  </div>





</template>

<script>


export default {
  name: 'App',

  data(){
    return {
      email:''
    }
  },

  computed: {

  },
  methods: {
    sendMail() {
      console.log(this.email)
    },

    ecouteurWhite(){
      const img_active= document.querySelectorAll('#slider img');
      for(var i=0; i<img_active.length; i++ ){
        if(!(img_active[i].classList.contains('hidden'))) {
          img_active[i].classList.add('hidden');
          img_active[i].classList.remove('active:animate-fade');
          document.querySelector('#slider_white').classList.remove('hidden')
          document.querySelector('#slider').style.backgroundColor='whitesmoke';
          document.querySelector('#slider_white').classList.add('active:animate-fade')
        }
      }
    },

    ecouteurBlack(){
      const img_active= document.querySelectorAll('#slider img');
      for(var i=0; i<img_active.length; i++ ){
        if(!(img_active[i].classList.contains('hidden'))) {
          img_active[i].classList.add('hidden');
          img_active[i].classList.remove('active:animate-fade');
          document.querySelector('#slider_black').classList.remove('hidden')
          document.querySelector('#slider').style.backgroundColor='black';
          document.querySelector('#slider_black').classList.add('active:animate-fade')
        }
      }
    },

    ecouteurPink(){
      const img_active= document.querySelectorAll('#slider img');
      for(var i=0; i<img_active.length; i++ ){
        if(!(img_active[i].classList.contains('hidden'))) {
          img_active[i].classList.add('hidden');
          img_active[i].classList.remove('active:animate-fade');
          document.querySelector('#slider_pink').classList.remove('hidden')
          document.querySelector('#slider').style.backgroundColor='pink';
          document.querySelector('#slider_pink').classList.add('active:animate-fade')
        }
      }
    }
  }

}
</script>

<style>

</style>
