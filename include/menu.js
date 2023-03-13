(function () {
  let content = `
      <div class="mainMenu">
        <div class="logo"><img src="images/logo.svg" alt="" />
        <!--點擊控制主選單開關-->
        <button type="button" class="mainMenuBtn" title="選單"></button></div>
        <nav>
          <ul>
            <li>
              <button type="button"><i class="kitIcon"><img src="images/icon/icon_taiwan.svg"/></i><span>台灣地區平台商</span></button>
            </li>
            <!--展開時li增加active-->
            <li class="active">
              <button type="button"><i class="kitIcon"><img src="images/icon/icon_office.svg"/></i><span>建立牙技所帳號</span></button>
              <ul>
                <li><a href="#">工作人員管理</a></li>
                <li><a href="#">牙技所人員管理</a></li>
                <li><a href="#">牙醫診所人員管理</a></li>
              </ul>
            </li>
            <li>
              <button type="button"><i class="kitIcon"><img src="images/icon/icon_settings.svg"/></i><span>設定</span></button>
            </li>
            <li>
              <button type="button"><i class="kitIcon"><img src="images/icon/icon_groups.svg"/></i><span>合作夥伴</span></button>
            </li>
            <li>
              <button type="button"><i class="kitIcon"><img src="images/icon/icon_profile.svg"/></i><span>會員帳號管理</span></button>
            </li>
            <li>
              <button type="button"><i class="kitIcon"><img src="images/icon/icon_project.svg"/></i><span>製程項目管理</span></button>
              <ul>
                <li><a href="#">基本工序管理</a></li>
                <li><a href="#">工序管理</a></li>
                <li><a href="#">補綴物屬性管理</a></li>
                <li><a href="#">補綴物類別管理</a></li>
                <li><a href="#">補綴物管理</a></li>
              </ul>
            </li>
            <li>
              <button type="button"><i class="kitIcon"><img src="images/icon/icon_material.svg"/></i><span>材料管理</span></button>
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
              <button type="button"><i class="kitIcon"><img src="images/icon/icon_organize.svg"/></i><span>組織管理</span></button>
              <ul>
                <li><a href="#">平台管理</a></li>
                <li><a href="#">牙技所管理</a></li>
                <li><a href="#">牙醫診所管理</a></li>
                <li><a href="#">供應商管理</a></li>
              </ul>
            </li>
            <li>
              <button type="button"><i class="kitIcon"><img src="images/icon/icon_cooperate.svg"/></i><span>合作組織</span></button>
            </li>
            <li>
              <button type="button"><i class="kitIcon"><img src="images/icon/icon_system.svg"/></i><span>系統管理</span></button>
            </li>
            <li>
              <button type="button"><i class="kitIcon"><img src="images/icon/icon_order.svg"/></i><span>訂單管理</span></button>
              <ul>
                <li><a href="#">諮詢管理</a></li>
                <li><a href="#">假牙訂單管理</a></li>
                <li><a href="#">出貨單管理</a></li>
              </ul>
            </li>
            <li>
              <button type="button"><i class="kitIcon"><img src="images/icon/icon_home.svg"/></i><span>Home</span></button>
            </li>
            <li>
              <button type="button"><i class="kitIcon"><img src="images/icon/icon_home.svg"/></i><span>供應商產品管理</span></button>
            </li>
            <li>
              <button type="button"><i class="kitIcon"><img src="images/icon/icon_report.svg"/></i><span>報表管理</span></button>
            </li>
            <li>
              <button type="button"><i class="kitIcon"><img src="images/icon/icon_device.svg"/></i><span>裝置管理</span></button>
            </li>
            <li>
              <button type="button"><i class="kitIcon"><img src="images/icon/icon_account.svg"/></i><span>帳務管理</span></button>
            </li>
          </ul>
        </nav>
        </div>
      `;
  document.write(content);
})();
