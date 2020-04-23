$(document).ready(function () {
  $(".desg p1").hide();
  $(".desg").click(function () {
    $(".desg p1").toggle();
    $(".desg img").toggle();
  });


  $(".devp p2").hide();
  $(".devp").click(function () {
    $(".devp p2").toggle();
    $(".devp img").toggle();
  });


  $(".prd p3").hide();
  $(".prd").click(function () {
    $(".prd p3").toggle();
    $(".prd img").toggle();
  });
});

//creating a hover effect for the portfolio images
// $(document).ready(function () {
//   $(".imeg").hover (
//     function() {
//       $(".logo").show();
//     },
//     function() {
//       $(".logo").hide();
//     }
//   );
// });


$(document).ready(function () {
  $('.submit').click(function (event) {
    console.log('clicked button');
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('maill').value;
    var message = document.getElementById('messageInput').value;
    var statusElm = document.getElementById('status');

    if (email.length > 5 && email.includes('@') && email.includes('.')) {
      console.log("email valid")
    } else {
      console.log("email invalid")
    }
    if (name.length > 2) {
      console.log(name);
    } else {
      console.log('name invalid')
    }
    if (message.length > 2) {
      alert("Thank you," + name + " we have received your subscription message.Have a Nice Day")
      event.allowDefault();
    } else {
      alert("Please input  Your Details")
      event.preventDefault();
    }
  });

});
$(document).ready(function () {
  $('#fom').bind('.submit', function () {

    var name = $('#nameInput').val;
    var email = $('#maill').val;
    var message = $('#messageInput').val;
    // var url = "https://us20.api.mailchimp.com/2.0/lists/subscribe.json?" + "apikey=1a1c73619960fb07fb98d28c5659197b-us4"
    // "id= 1a1c73619960fb07fb98d28c5659197b-us4" +
    // "&email[email]=" + email +
    //   "&merge_vars[NAME]=" + name +
    //   "&merge_vars[NAME]=" + message +
    //   "&send_welcome=false";

    // $.ajax({
    //   type: "POST",
    //   url: url,
    //   dataType: 'json',
    //   success: function(data) {
    //     $('#subscribe-form').html("Thank you!");
    //   },
    //   error: function(jqXHR, textStatus, errorThrown) {
    //     alert(errorThrown);
    //   }
    // });
  });
});
