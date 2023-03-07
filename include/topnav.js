(function () {
  let content = `
              <nav class="topNav">
                <div class="language">
                  <button type="button" title="語系">
                    <i class="kitIcon"><img src="images/icon/icon_world.svg" /></i>
                  </button>
                  <ul>
                    <li><a href="#">中文</a></li>
                    <li><a href="#">EN</a></li>
                  </ul>
                </div>
                <div class="message">
                  <a href="#"
                    ><i class="kitIcon"><img src="images/icon/icon_bell.svg" /></i>
                    <div class="notice">2</div></a
                  >
                </div>
                <!--展開時增加active-->
                <div class="account active">
                  <button type="button">
                    <div class="name">Thomas Anree</div>
                    <div class="title">牙技師</div>
                  </button>
                  <ul>
                    <li><a href="#">個人資料維護</a></li>
                    <li><a href="#">登出</a></li>
                  </ul>
                </div>
              </nav>
      `;
  document.write(content);
})();
