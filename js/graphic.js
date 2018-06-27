//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
var key =
  "https://docs.google.com/spreadsheets/d/1EdxuA7WUvBeI7OqHLc2AR7QW4zR1ke0f1r-fEisUtXI/pubhtml?gid=790763898&single=true";

//"data" refers to the column name with no spaces and no capitals
//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [{
  "data": "pfn",
  "title": "First Name"
}, {
  "data": "psn",
  "title": "Surname"
}, {
  "data": "clb",
  "title": "Team"
}, {
  "data": "fgm",
  "title": "First Game"
}, {
  "data": "lgm",
  "title": "Last Game"
}, {
  "data": "itl",
  "title": "International"
}];


$(document).ready(function() {
  
  function initializeTabletopObject() {
    Tabletop.init({
      key: key,
      callback: function(data, tabletop) {
        writeTable(data); //call up datatables function
      },
      simpleSheet: true,
      debug: false
    });
  }

  initializeTabletopObject();

  function writeTable(data) {
    //select main div and put a table there
    //use bootstrap css to customize table style: http://getbootstrap.com/css/#tables
    $('#graphic').html(
      '<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-condensed table-responsive" id="mySelection"></table>'
    );    
    
    //initialize the DataTable object and put settings in
    $("#mySelection").DataTable({
      "autoWidth": false,
      "responsive": true,
     // "columnDefs": [
	//	            { "visible": false, targets: 1 },
	//	            { "visible": false, targets: 5 }
	//	        ],
      "data": data,
      "columns": columns,
      "order": [
        [1, "asc", 2, "asc"]
      ],
      "pagingType": "simple" //no page numbers
        //uncomment these options to simplify your table
        //"paging": false,
        //"searching": false,
        //"info": false
    });
  }
});
//end of writeTable
