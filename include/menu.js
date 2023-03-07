(function () {
  let content = `
      <div class="mainMenu">
        <div class="logo"><img src="images/logo.svg" alt="" />
        <!--點擊控制主選單開關-->
        <button type="button" class="mainMenuBtn" title="選單"></button></div>
        <nav>
          <ul>
            <!--展開時li增加active-->
            <li class="active">
              <button type="button"><i class="kitIcon"><img src="images/icon/icon_account.svg"/></i>帳號管理</button>
              <ul>
                <li><a href="#">工作人員管理</a></li>
                <li><a href="#">牙技所人員管理</a></li>
                <li><a href="#">牙醫診所人員管理</a></li>
              </ul>
            </li>
            <li class="active">
              <button type="button"><i class="kitIcon"><img src="images/icon/icon_organize.svg"/></i>組織管理</button>
              <ul>
                <li><a href="#">平台管理</a></li>
                <li><a href="#">牙技所管理</a></li>
                <li><a href="#">牙醫診所管理</a></li>
                <li><a href="#">供應商管理</a></li>
              </ul>
            </li>
            <li class="active">
              <button type="button"><i class="kitIcon"><img src="images/icon/icon_material.svg"/></i>材料管理</button>
              <ul>
                <li>
                  <a href="#">材料設定</a>
                </li>
                <li><a href="#">供應商管理</a></li>
                <li><a href="#">入庫管理</a></li>
                <li><a href="#">盤點材料</a></li>
              </ul>
            </li>
            <li>
              <button type="button"><i class="kitIcon"><img src="images/icon/icon_manage.svg"/></i>製程項目管理</button>
              <ul>
                <li><a href="#">基本工序管理</a></li>
                <li><a href="#">工序管理</a></li>
                <li><a href="#">補綴物屬性管理</a></li>
                <li><a href="#">補綴物類別管理</a></li>
                <li><a href="#">補綴物管理</a></li>
              </ul>
            </li>
            <li>
              <button type="button"><i class="kitIcon"><img src="images/icon/icon_order.svg"/></i>訂單管理</button>
              <ul>
                <li><a href="#">諮詢管理</a></li>
                <li><a href="#">假牙訂單管理</a></li>
                <li><a href="#">出貨單管理</a></li>
              </ul>
            </li>
          </ul>
        </nav>
        </div>
      `;
  document.write(content);
})();
