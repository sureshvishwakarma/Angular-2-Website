 import { Component } from '@angular/core';
    @Component({

      
      template: `
       
      <!-- top bar -->
    <div class="top-bar">
        <h1>contact Me</h1>
        <p><a href="#">Home</a> / Contact Me</p>
    </div>
    <!-- end top bar -->

    <!-- main-container -->
    <div class="container main-container">
        <div class="col-md-6">
            <form action="#" method="post">
                <div class="row">
                    <div class="col-md-6">
                        <div class="input-contact">
                            <input type="text" name="name">
                            <span>your name</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="input-contact">
                            <input type="text" name="email">
                            <span>your email</span>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="input-contact">
                            <input type="text" name="object">
                            <span>object</span>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="textarea-contact">
                            <textarea name="message"></textarea>
                            <span>message</span>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <a href="#" class="btn btn-box">Send</a>
                    </div>
                </div>
            </form>
        </div>

        <div class="col-md-6">
            <h3 class="text-uppercase">contact me</h3>
            <h5>Creative & Lorem ipsum dolor sit amet</h5>
            <div class="h-30"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter enim nosmet ipsos nosse non possumus. Inscite autem medicinae et gubernationis ultimum cum ultimo sapientiae comparatur. Tecum optime, deinde etiam cum mediocri amico. Et nemo nimium beatus est; Ac ne plura complectar-sunt enim innumerabilia-, bene laudata virtus voluptatis aditus </p>
            <div class="contact-info">
                <p><i class="ion-android-call"></i> 0100 787 3456</p>
                <p><i class="ion-ios-email"></i> box@info.com</p>
            </div>
        </div>


    </div>
    <!-- end main-container -->
        `

        
    })
    export class ContactComponent { }