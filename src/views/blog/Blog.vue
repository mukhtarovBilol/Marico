<script setup>
import Card from '@/components/UI/card/Card.vue';
import Helped from '@/views/helped/Helped.vue';
import Started from '@/components/UI/started/Started.vue';
import Footer from '@/layout/footer/Footer.vue';

import { twitterImage, youtubeImage, wordpressImage, substackImage, mediumImage, rssFeedsImage, spotifyImage, anchorImage, podcastImage, instagramImage, linkedinImage, facebookImage } from '@/helper/images.js'

const products = [
    {
        id: 1,
        img: twitterImage,
        title: 'Twitter',
        txt: 'Connect your Twitter feed to your Marico homepage.'
    },
    {
        id: 2,
        img: youtubeImage,
        title: 'YouTube',
        txt: 'Connect your YouTube feed to your Marico homepage.'
    },
    {
        id: 3,
        img: wordpressImage,
        title: 'Wordpress',
        txt: 'Connect your Wordpress feed to your Marico homepage.'
    },
    {
        id: 4,
        img: substackImage ,
        title: 'Substack',
        txt: 'Connect your Substack feed to your Marico homepage.'
    },
    {
        id: 5,
        img: mediumImage,
        title: 'Medium',
        txt: 'Connect your Medium feed to your Marico homepage.'
    },
    {
        id: 6,
        img: rssFeedsImage,
        title: 'RSS Feeds',
        txt: 'Connect your RSS feed to your Marico homepage.'
    },
    {
        id: 7,
        img: spotifyImage,
        title: 'Spotify',
        txt: 'Connect your Spotify to your Marico homepage.'
    },
    {
        id: 8,
        img: anchorImage,
        title: 'Anchor',
        txt: 'Connect your Anchor to your Marico homepage.'
    },
    {
        id: 9,
        img: podcastImage,
        title: 'Apple Podcasts',
        txt: 'Connect your Apple Podcasts to your Marico homepage.'
    },
    {
        id: 10,
        img: instagramImage,
        title: 'Instagram',
        txt: 'Connect your Instagram to your Marico homepage.'
    },
    {
        id: 11,
        img: linkedinImage,
        title: 'Linkedin',
        txt: 'Connect your Linkedin to your Marico homepage.'
    },
    {
        id: 12,
        img: facebookImage,
        title: 'Facebook',
        txt: 'Connect your Facebook to your Marico homepage.'
    },
]

</script>

<template>

    <section class="blog">
        <div class="container">
            <div class="blog__desc">
                <h3 class="blog__title">Content Sources</h3>
                <p class="blog__txt">Connect these sources to your Marico homepage.</p>
            </div>
            <div class="blog__cards">
                <Card v-for="item in products" :key="item.id" :info="item" />
            </div>
            <Helped class="blog__helped" />
            <Started/>
            <Footer/>
        </div>
    </section>

</template>
