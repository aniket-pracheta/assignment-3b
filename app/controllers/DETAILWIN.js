// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = arguments[0] || {};

$.rowId.text=args.rowId;
$.itemName.text=args.itemName;

function closeme()
{
	$.win.close();
	
}
