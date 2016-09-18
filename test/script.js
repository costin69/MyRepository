$(document).ready(function (e) {
$("#uploadimage").on('submit',(function(e) {
e.preventDefault();
$("#message").empty();
$('#loading').show();
$.ajax({
url: "ajax_php_file.php", // Url to which the request is send
type: "POST",             // Type of request to be send, called as method
data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
contentType: false,       // The content type used when sending data to the server.
cache: false,             // To unable request pages to be cached
processData:false,        // To send DOMDocument or non processed data file it is set to false
success: function(data)   // A function to be called if request succeeds
{
$('#loading').hide();
$("#message").html(data);
}
});
}));

// Function to preview image after validation
$(function() {
$("#file").change(function() {
$("#message").empty(); // To remove the previous error message
var file = this.files[0];
var file = file.type;
var match= ["audio/wav","audio/mp3","audio/mid"];
if(!((file==match[0]) || (file==match[1]) || (file==match[2])))
{
$('#previewing').attr('src','ipad-air-1.jpg');
$("#message").html("<p id='error'>Please Select A valid Audio File</p>"+"<h4>Note</h4>"+"<span id='error_message'>Only wav, mp3 and mid Audio type allowed</span>");
return false;
}
else
{
var reader = new FileReader();
//reader.onload = audioIsLoaded;
reader.readAsDataURL(this.files[0]);
}
});
});
function audioIsLoaded(e) {
$("#file").css("color","green");
$('#image_preview').css("display", "block");
$('#previewing').attr('src', e.target.result);
$('#previewing').attr('width', '250px');
$('#previewing').attr('height', '230px');
};

});
function playaudio(){
	var path="upload/"+ $('#audioname').text();
	$('#playaudio').attr('src', path);
	$('#playaudio').trigger('play');
};