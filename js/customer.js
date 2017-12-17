var Customers = (function () {
	var allCustumers = [];
	var out={};	

	out.getCustomers = function () {

        var tmp = ajaxGet("API/api.php?op=Customers");
        console.log(tmp);
        return tmp;
    };

	// my.moduleProperty = 1;
	// my.moduleMethod = function () {
		// ...
	// };

	return out;
}());


function Customer( customerDataObj )
{
    for (var key in customerDataObj)
    {
        this[key] = customerDataObj[key];
             
    }
}





