let dt = new Date();

const full_date_time = function(){
	return dt;
};
const only_date = function(){
	var day = dt.getUTCDate();
	var month = dt.getUTCMonth() + 1;
	var year = dt.getUTCFullYear();
	return newdate = day + "/" + month + "/" + year;
	
};

const only_time = function(){
	var hr = dt.getHours() + 1;
	var min = dt.getMinutes();
	var sec = dt.getSeconds();
	return newdate = hr + ":" + min + ":" + sec;

};

module.exports = {full_date_time, only_date, only_time,};