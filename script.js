// ページ読み込み時に実行
window.addEventListener("load", function() { // ページが読み込まれたら

  const first = document.querySelector(".fade"); // 最初のfade要素を取得

  if (first) { // 存在したら
    first.classList.add("show"); // 最初から表示する
  }

});


// スクロールアニメーション
window.addEventListener("scroll", function() { // スクロール時

  const elements = document.querySelectorAll(".fade"); // 全fade取得

  elements.forEach(function(el) { // 1つずつ

    const position = el.getBoundingClientRect().top; // 位置取得

    if (position < window.innerHeight - 100) { // 画面内に入ったら
      el.classList.add("show"); // 表示
    }

  });

});


// フォームチェック
function validateForm() { // 送信時

  const name = document.getElementById("name").value; // 名前取得
  const email = document.getElementById("email").value; // メール取得
  const message = document.getElementById("message").value; // 内容取得

  if (name === "") {
    alert("お名前を入力してください");
    return false;
  }

  if (email === "") {
    alert("メールアドレスを入力してください");
    return false;
  }

  if (message === "") {
    alert("お問い合わせ内容を入力してください");
    return false;
  }

  alert("送信完了しました");
  return true;
}
// 最初にアンカーを無視
window.addEventListener('load', () => {
  if (window.location.hash) {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }
});
