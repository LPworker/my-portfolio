// スクロール表示
window.addEventListener("scroll", function() {

  const elements = document.querySelectorAll(".fade");

  elements.forEach(function(el) {

    const position = el.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
      el.classList.add("show");
    }

  });

});

// フォームチェック
function validateForm() {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

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
