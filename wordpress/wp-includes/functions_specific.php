<?php
add_action('rest_api_init', function() {


    register_rest_route ('wp/v2', '/video', [
        'methods' => 'GET',
        'callback' => function() {
            $args = [
                'numberposts' => 999999,
                'post_type' => 'video'
            ];

            $posts = get_posts($args);
            $data = [];

            $i=0;
            foreach($posts as $post) {
                $data[$i] ['id'] = $post->ID;
                $acf = get_fields($post->ID);
                $data[$i] ['titre']  = $acf['titre'];
                $data[$i] ['description']  = $acf['description'];
                $data[$i] ['date']  = $acf['date'];
                $data[$i] ['url']  = $acf['url'];
                $data[$i] ['miniature']  = $acf['miniature'];
                $data[$i] ['duree']  = $acf['duree'];
                $data[$i] ['themes_video']  = $acf['themes_video'];
                $data[$i] ['categories_video']  = $acf['categories_video'];
                $i++;
            }

            return $data;
        }


    ]);
})

?>


