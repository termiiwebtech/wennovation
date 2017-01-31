<?php

if(isset($_POST['submit'])){
    $to       = 'support@termii.com';
$subject  = $_POST['subject'];
$message  = 'Hello Admin, <br><br> you just received an email from a new client, below are the details meant for processing: <br><br>' .
    '<br> Client Full Name : ' . $_POST['email'] .
    '<br> Number of emails to send to : ' . $_POST['emailsize'] .
    '<br> Client Phone Number : ' . $_POST['phone'] .
    '<br><br> Please Ensure you respond to this request promptly and Reach out to the client within 48 hours. Thanks for your service';
$headers  = 'From: info@termii.com' . "\r\n" .
            'MIME-Version: 1.0' . "\r\n" .
            'Content-type: text/html; charset=utf-8';  
    
  if(mail($to, $subject, $message, $headers))
    echo "<script>window.location = 'success'</script>";
else
    echo "Something went wrong your Registration process failed.";
    }
?>

<!-- Page Banner Start -->
<div id="page_banner" class="m-b-20">
    <div class="container">
		<div class="page-header text-center">
          <h2>Contact Us</h2>
          <h4 class="color_white">Connect with the most energetic community of change makers in Nigeria.</h4>
        </div>
    </div>
</div>
<!-- Page Banner End -->

<!-- Contact Us Start -->
<section id="contact_form" class="p-t-60 p-b-100">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-sm-12 p-b-10">
                <div class="heading">
                      <div class="heading_border bg_red"></div>
                      <p>Contact Us</p>
                      <h2>WE WANT TO <span class="color_red">HEAR FROM YOU</span></h2>
                    </div>
                <div class="row p-t-40">
                      <form  id="contact-form" onSubmit="return false">

                             <div class="col-md-12"><div id="result"></div></div>

                             <div class="col-md-6 col-sm-6">
                                <div class="single-query">
                                    <input type="text" placeholder="Your Name" class="keyword-input" required name="name" id="name">
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <div class="single-query">
                                    <input type="email" placeholder="Email Address" class="keyword-input" required name="email" id="email" >
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <div class="single-query">
                                    <input type="text" placeholder="Phone Number" class="keyword-input"  name="phone" id="phone" >
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <div class="single-query">
                                    <input type="text" placeholder="Subject" class="keyword-input" name="subject">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="single-query">
                                    <textarea placeholder="Massege" name="message" id="message" required="required"></textarea>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <button type="submit" class="btn-light button-black" id="btn_submit" name="btn_submit">Submit</button>
                            </div>
                        </form>
                  </div>
             </div>
             
             <div class="col-md-4 col-sm-12 col-xs-12">
                
                <div class="form_left p-t-80">
                    <h3 class="text-uppercase"><span>1</span>Get in Touch</h3>
                    <div class="over_image"><img src="images/update_bg.png" alt="image"/></div>
                    
                   	<div class="updates">
                        	<p>Subscribe to our newsletters to receive latest news and updates. </p>
                            <form class="p-t-25">
                            	<div class="col-md-12">
                            		<input type="text" placeholder="Name">
                                </div>
                                <div class="col-md-10">
                                	<input type="email" class="email" placeholder="Email">
                                </div>
                                <div class="col-md-2">
                                	<input type="submit" class="submit" value="">
                                    <span><a href="#"><i class="icon-mail-envelope-closed3"></i></a></span>
                                </div>
                            </form>
                        </div>
                                
             </div>
             
        </div>
    </div>
    </div>
</section>
<!-- Contact Us End -->