<template>
<div class="hero-body header-image" style="padding-top: 210px; padding-bottom: 220px">
    <div class="container has-text-centered">
        <div class="column">
            <strong>
                <h1 class="title" style="font-size: 50px; color: black">
                        Cari Lowongan Kerja
                </h1>
            </strong>
            <h2 class="subtitle" style="color:black">
                Sesuai dengan keahlian dan lokasi anda.
            </h2>
        </div>
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
                <p class="control ">
                    <router-link :to="{name:'Search'}" class="button is-info is-large" :class="{'is-black': burger}">
                        Search
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>

</script>
<style>
    .header-image {
                    background-image: url("../../../img/backgroud_index.jpg");
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    background-size: cover;
                    background-color: #999;
            }

</style>
