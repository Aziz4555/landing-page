<template>

  <div>
    <video autoplay="autoplay" loop="loop" preload="auto" muted defaultmuted playsinline oncontextmenu="return false;">
        <source src="../src/assets/desktop_video.mp4" type="video/mp4">
    </video>

    <div class="absolute text-white font-extrabold text-5xl bottom-1/2 pl-10">
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
  
  <div class="text-white bg-black h-screen pt-10">
    <div class="w-3/4 mx-auto ">
      <h2 class="text-center font-bold text-4xl">AUCUN FIL, AUCUNE LIMITE</h2>
      <img src="../src/assets/aucun_fil.png" role="img">
      <div class="flex">

        <div class="py-3 px-6">
          <h3 class="font-bold">CONNEXION AUTOMATIQUE</h3>
          <p class="text-justify">Connexion instantanée et automatique (après la connexion initiale) au dernier appareil appairé dès que
          vous ouvrez le boitier de charge</p>
        </div>

        <div class="py-3 px-5">
          <h3 class="font-bold">COMPATIBILITÉ</h3>
          <p class="text-justify">Compatible avec IOS et Android. Activez le Bluetooth sur votre appareil pour vous connecter. Fonctionne
          avec les téléphones, tablettes et ordinateurs.</p>
        </div>

        <div class="py-3 px-6">
          <h2 class="font-bold">BLUETOOTH 5.0</h2>
          <p class="text-justify">Toute nouvelle technologie Bluetooth 5.0 offrant une connexion plus forte, plus rapide et plus stable où
          que vous soyez</p>
        </div>
      </div>
    </div>
  </div>

  <div class="h-screen pt-10">
    <div class="w-3/4 mx-auto my-0">
      <h2 class="text-center text-4xl font-bold">SON HAUTE-FIDÉLITÉ</h2>
      <p class="text-justify pb-3 pt-10">Profitez d'une expérience d'écoute immersive, vibrante et incroyablement précise grâce à des hauts-parleurs dynamiques
      de 12.4mm vous offrant une amplification profonde et fidèle des basses. Pour vous garantir une expérience inégalée,
       les codecs AAC/SBC améliorent la qualité audio pour un son riche et détaillé.</p>
      <p class="py-3">Il faut le voir(et l'entendre) pour le croire !</p>
      <img src="../src/assets/haute_fidelite.png" role="img">
      <p>Chaque écouteur est équipé d’un microphone haute sensibilité qui réduit efficacement les bruits de fond,
        rendant l’appel parfaitement clair pour vous et eux, même dans des environnements bruyants.</p>
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
  methods: {
    sendMail() {
      console.log(this.email)
    }
  }

}
</script>

<style>

</style>
