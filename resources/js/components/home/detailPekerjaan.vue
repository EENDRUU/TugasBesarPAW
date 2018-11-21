<template>
   <div>
                            <section class="hero is-info is-bold">
                                    <div class="hero-body">
                                            <div class="columns is-desktop">
                                                    <div class="column is-three-fifths" style="margin-top: 0; padding-top: 0;">
                                                        <h1 class="title" style="padding-bottom: 60px">
                                                                IT Support Staff PT. Culletprima Setia, Tangerang
                                                        </h1>
                                                        <a class="button is-white is-outlined" > Back to search result</a>
                                                    </div>
                                                    <div class="column">
                                                 
                                                                <table style="font-size: 20px;">
                                                                        <tr>
                                                                            <td>
                                                                                <label>Lokasi: </label>
                                                                                <hr style="margin-top: 10px; margin-bottom: 10px; height: 1px">
                                                                            </td>
                                                                            <td>
                                                                                    <label style="padding-left: 60px; padding-right: 50px;">Tanggerang</label>
                                                                                    <hr style="margin-top: 10px; margin-bottom: 10px; height: 1px">
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <label>Perusahaan: </label>
                                                                                <hr style="margin-top: 10px; margin-bottom: 10px; height: 1px">
                                                                            </td>
                                                                            <td>
                                                                                <label style="padding-left: 60px; padding-right: 50px;">PT. Culletprima Setia</label>
                                                                                <hr style="margin-top: 10px; margin-bottom: 10px; height: 1px">
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                                <td>
                                                                                    <label>Pendidikan: </label>
                                                                                    <hr style="margin-top: 10px; margin-bottom: 10px; height: 1px">
                                                                                </td>
                                                                                <td>
                                                                                    <label style="padding-left: 60px; padding-right: 50px;">S1</label>
                                                                                    <hr style="margin-top: 10px; margin-bottom: 10px; height: 1px">
                                                                                </td>
                                                                            </tr>
                                                                </table>
                                        
                                                        
                                                    </div>
                                            </div>
                                    </div>
                            </section>
                            <div class="tile is-ancestor" style="margin: 30px;">
                                    <div class="tile is-vertical is-8">
                                      <div class="tile is-parent">
                                        <article class="tile is-child notification is-white">
                                          <p class="title">Deskripsi</p>
                                          <p class="subtitle">
                                          </p>
                                          <div class="content">
                                            <p>
                                              <br>
                                              – Mengurus Jaringan yang ada di dalam kantor<br>
                                              – Mengurus website yang ada di kantor<br>
                                              – Mengurus database karyawan<br>
                                              – Melakukan pengecekan dan reparasi hardware maupun software secara berkala<br>
                                              – Melakukan rekap absensi karyawan melalui sistem fingerprint<br><br>

                                              Tanggung Jawab Pekerjaan :<br>
                                              – Memastikan seluruh jaringan komputer terhubung dengan baik<br>
                                              – Memastikan database karyawan tersusun dengan baik<br>
                                              – Memastikan hardware dan software dalam keadaan baik<br>
                                              – Memastikan rekap absensi dari fingerprint ter-report setiap minggu<br><br>

                                              Syarat Pengalaman :<br>
                                              Berpengalaman minimal 1-2 tahun dibidang yang sama. Freshgraduate silahkan melamar.<br>
                                              Keahlian :<br>
                                              – Menguasai semua Operating System<br>
                                              – Menguasai sistem jaringan dan server (Install dan troubleshooting)<br>
                                              – Menguasai web programming min: HTML5, javascript, PHP, CSS, Jquery, ajax dan penguasaan framework (merupakan nilai lebih)<br>
                                              – Menguasai Database Management System min: Oracle, SQL (merupakan nilai lebih)<br>
                                              – Mampu mereparasi hardware dan software yang rusak<br>
                                              – Mampu menguasai administrasi didalam kantor merupakan nilai lebih<br><br>

                                              Kualifikasi :<br>
                                              – Pria/Wanita Maks. 30 Thn<br>
                                              – Min. D3 Teknik Informatika / Ilmu Komputer / sejenisnya<br>
                                              – Berpenampilan rapih dan sopan<br>
                                              – Memiliki kemampuan menganalisis, teliti, berpikir cepat dan memecahkan masalah<br>
                                              – Memiliki kemauan untuk belajar dan mengembangkan diri<br>
                                              – Mampu berkomunikasi menggunakan bahasa Inggris merupakan nilai lebih<br><br>

                                              Waktu Bekerja :<br>
                                              Jam 08:00 – 17:00<br>
                                            </p>
                                            <a class="button is-success is-outlined" > Back to search result</a>
                                            <a class="button is-info is-outlined" >Lamar Pekerjaan</a>
                                          </div>
                                        </article>
                                      </div>
                                    </div>
                                    <div class="tile is-parent">
                                      <article class="tile is-child notification is-white">
                                        <div class="content">
                                          <p class="title">Profile Perusahaan</p>
                                          <p class="subtitle"></p>
                                          <div class="content">
                                            <p class="image is-64x64">
                                              <img src="../../../img/job3.png">
                                            </p>
                                            <p class="subtitle">
                                              Deskripsi Perusahaan
                                            </p>
                                            <p>
                                              ETI is leading in the development of foam protection systems, with fully qualified, university educated mechanical and electronics enigineers at the cutting edge of professionalism. These systems have been installed on thousands of vehicles and other equipment worldwide over the past 13 years and have proved themselves as successful fire detection and suppression systems.
                                            </p>
                                          </div>
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
<style>
 
</style>
