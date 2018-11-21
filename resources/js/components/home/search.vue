<template>
    <div class="container">
        <div class="container" style="margin-top: 50px;">
            <div class="box">
                <div class="field is-grouped">
                    <p class="control is-expanded">
                        <input class="input  is-large" type="text" placeholder="Nama Pekerjaan">
                    </p>
                    <p class="control">
                        <span class="select is-large">
                            <select>
                            <option>Lokasi</option>
                            <option>Yogyakarta</option>
                            <option>Semarang</option>
                            <option>Jakarta</option>
                            </select>
                        </span>
                        </p>
                    <p class="control">
                        <a class="button is-info is-large" >
                            Search
                        </a>
                    </p>
                </div>
            </div>
        </div>
        <div class="container" style="margin-top: 40px">
            <div class="box">
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
                                <!-- {{data.namaLowongan}} -->
                                dsdsdasasas
                            </strong>
                            <br>
                            <!-- {{data.deskripsiLowongan}} -->
                            - Mengurus Jaringan yang ada di dalam kantor
                            - Mengurus website yang ada di kantor
                            - Mengurus database karyawan
                            - Melakukan pengecekan dan reparasi hardware maupun software secara berkala - ...
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
            datas:[]
        }
    },
    created(){
        this.getData();
    },

    methods:{
        getData(){
             let uri="/api/Lowongan";
             axios.get(uri).then((response) => {
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
<<<<<<< HEAD

=======
<style>

</style>
>>>>>>> 518dc3497c412fa278a9a428b7dad36fa54b9064
