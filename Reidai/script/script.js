// JavaScript用ファイル
new Vue({
    el: '#app',
    
    data() {
      return {
        pass : '',
        repass : ''
      };
    },
    computed: {
      // 入力されている、且つパスワードが一致しているかを確認する算出プロパティ
      // 入力されているかは、this.･･･ で判定可能
      // 例）一致TRUE（パスワード：aaaa、パスワード確認：aaaa）
      // 例）不一致FALSE（パスワード：aaaa、パスワード確認：aaab）
      isClear(){
        return this.pass && this.pass == this.repass;
      },
      // ボタンをTRUEなら登録を表示orFALSEなら使用不可を表示にする算出プロパティ
      isFalse(){
        return this.pass && this.repass && this.pass != this.repass;
      }
    }
  });