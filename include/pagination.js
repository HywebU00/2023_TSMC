(function () {
  let content = `
          <div class="pagination">
            <form action=""><div class="show">Show 
        <div class="formGrp">
          <div class="formContent">
            <select name="" id="">
              <option value="">20</option>
              <option value="">30</option>
              <option value="">50</option>
              <option value="">...</option>
            </select>
          </div>
        </div> entries </div> Showing <b>1</b> to <b>20</b> of <b>4</b> entries</form>
            <ul class="page">
              <li class="prev disabled"><a href="#">< Previous</a></li>
              <li class="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li class="next"><a href="#">Next ></a></li>
            </ul>
          </div>
      `;
  document.write(content);
})();
