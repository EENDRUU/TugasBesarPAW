<template>
    <div class="container">
        <div style="margin-top: 50px;">
            <h1 style="font-size:40px;">Search Result</h1>
        </div>
        <div class="container" style="margin-top: 20px;">
            <div class="box">
                <div class="field is-grouped">
                    <p class="control is-expanded">
                        <input class="input  is-large" type="text" placeholder="Nama Pekerjaan">
                    </p>
                    <p class="control">
                        <span class="select is-large">
                            <select>
                            <option>Lokasi</option>
                            <option>Semarang</option>
                            <option>Jakarta</option>
                            </select>
                        </span>
                        </p>
                    <p class="control">
                        <router-link :to="{name:'Search'}"  class="button is-info" :class="{'is-black': burger}">
                            Search
                        </router-link>
                    </p>
                </div>
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
            namaLowongan: 'a'
        }
    },
    created(){
        this.getData();
    },

    methods:{
        getData(){
             let uri='/api/Lowongan/' + namaLowongan;
             axios.get("/api/Lowongan/a").then((response) => {
                 console.log(response);
                 this.datas = response.data;
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
