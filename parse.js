  //"2015-09-07T17:00:00-04:00"
function parse(dtObject)
{
	var m_time = (dtObject.split("T"))[1];
	var hour = (m_time.split(":"))[0];
	var minutes = (m_time.split(":"))[1];
	var re_time = hour + ":" + minutes;
	return re_time;
}

