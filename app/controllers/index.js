// function doClick(e) {
    // alert($.label.text);
// }
// 
// $.index.open();

function showItems(e){
	Ti.API.info(e);
	var payload={
		rowId:e.rowData.rowId,
		itemName:e.rowData.itemName
	}
	var w=Alloy.createController('DETAILWIN',payload).getView();
	w.open();
}
var rowData=[];
for (var i=1; i < 10; i++) {
	var payload={
		rowId:i,
		itemName:'Test'+i
		}
	var row=Alloy.createController('row',payload).getView();
	//Ti.API.info(JSON.stringify(row));
	rowData.push(row);
}
//Ti.API.info(JSON.stringify(rowData[2]));
$.itemsList.data=rowData;
$.win.open();
