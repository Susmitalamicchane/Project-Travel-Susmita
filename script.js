// ページが読み込まれたときに実行する
document.addEventListener("DOMContentLoaded", function () {

    // ナビゲーションのリンクを取得
    const navLinks = document.querySelectorAll("nav a");

    // ナビゲーションリンクにクリックイベントを追加
    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log("ページを移動します：" + link.textContent);

        });

    });


    // 「観光スポットを見る」ボタン
    const spotButton = document.querySelector(".button");

    if (spotButton) {

        spotButton.addEventListener("click", function () {

            console.log("観光スポットを確認します");

        });

    }

});