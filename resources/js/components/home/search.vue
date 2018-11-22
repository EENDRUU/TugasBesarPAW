<template>
    <div class="container" style="padding-bottom: 30%;">
        <div style="margin-top: 50px;">
            <h1 style="font-size:40px;">Search Result</h1>
        </div>
        <div class="container" style="margin-top: 20px;">
            <div class="box">
            <form @submit.prevent="getData();load = true">
                <div class="field is-grouped">
                    <p class="control is-expanded">
                        <input class="input  is-large" v-model="namaLowongan" type="text" placeholder="Nama Pekerjaan">
                    </p>
                    <p class="control">
                        <span class="select is-large">
                            <select v-model="lokasi">
                                <option>Semarang</option>
                                <option>Jakarta</option>
                                <option>Yogyakarta</option>
                                <option>bandung</option>
                            </select>
                        </span>
                        </p>
                    <p class="control">
                        <button class="button is-large is-info" :class="{'is-loading':load}">Search</button>
                    </p>
                </div>
            </form>
            </div>
        </div>
        <div class="container" style="margin-top: 60px"  v-for="data in datas" :key="data.namaLowongan">
            <div class="box" style="margin-bottom: 40px;">
                <article class="media">
                    <figure class="media-left">
                        <p class="image is-64x64">
                        <img src="">
                        </p>
                    </figure>
                    <div class="media-content">
                        <div class="content">
                        <p>
                            <strong>
                                {{data.namaLowongan}}
                            </strong>
                            <br>
                            {{data.deskripsiLowongan}}
                        </p>
                        </div>
                        <nav class="level is-mobile">
                            <div class="level-left">
                                    <div class="level-item">
                                        <a class="button is-info">Selengkapnya</a>
                                    </div>
                            </div>
                        </nav>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            datas:[],
            namaLowongan: '',
            lokasi: 'Lokasi',
            load: false,
        }
    },

    methods:{
        getData(){

             axios.get("/api/Lowongan/"+this.namaLowongan+"/"+this.lokasi).then((response) => {
                 console.log(response);
                 this.datas = response.data;
                  this.load = false;
                this.$router.push({ name: 'Search' })
            }).catch(error => {
                this.$toast.open({
                    duration: 2000,
                    message: error,
                    position: 'is-bottom',
                    type: 'is-danger',
                    queue: false,
                })
            });
        }
    }
}
</script>
<style>

</style>
