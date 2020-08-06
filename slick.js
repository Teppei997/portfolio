jQuery(function($) {
    $('body').bgSwitcher({
        images: ['img/canada.JPG', 'img/statue.JPG'], // 切り替える背景画像を指定します。
        interval: 2000,                         // 切り替えの間隔を指定します。
        loop: true,                             // 切り替えをループするかを指定します。
        shuffle: false,                         // 背景画像の順番をシャッフルするかを指定します。
        effect: "fade",                         // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定します。
        duration: 1000,                         // エフェクトの時間を指定します。
        easing: "swing"                         // エフェクトのイージングを指定します。
    });
});