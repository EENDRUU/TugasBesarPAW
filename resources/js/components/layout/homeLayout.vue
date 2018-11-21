<template>
<div class="has-background-light" style="height:100%;">
    <div>
         <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="index.html">
                <img src="img/logo.png" width="112" height="28">
                </a>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                <router-link :to="{name:'Search'}"  class="navbar-item" :class="{'is-black': burger}">
                    Home
                </router-link>

                <a class="navbar-item">
                    Cari Lowongan
                </a>
                <a class="navbar-item">
                    Lamar Kerja
                </a>
                <a class="navbar-item">
                    Contact Us
                </a>
                <a class="navbar-item">
                    About Us
                </a>

                </div>

                <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-info">
                        Log in
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </nav>
        <div id="appPage">
            <main class="pageContent">
            <transition name="fade">
            <router-view></router-view>
            </transition>
            </main>
        </div>
        <footer class="footer">
            <div class="content has-text-centered">

                    <h6>
                        <strong>InfoKerja </strong> @2018 find us on <a href="https://facebook.com">Facebook</a> or
                        <a href="http://twitter.com">Twitter</a></h6>

            </div>
        </footer>
    </div>

</div>

</template>



<script>
    export default {

    }
</script>

<style>
    .footer{
        background-color: black;
    }
</style>
