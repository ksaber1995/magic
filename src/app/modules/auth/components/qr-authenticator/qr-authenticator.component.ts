import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../../../../swagger/swagger.service';

@Component({
  selector: 'app-qr-authenticator',
  templateUrl: './qr-authenticator.component.html',
  styleUrl: './qr-authenticator.component.scss'
})
export class QrAuthenticatorComponent implements OnInit {
  qrImageUrl
  constructor(private swagger : SwaggerService){

  }
  ngOnInit(): void {
    this.swagger.generateMfaSecret().subscribe(res=>{
      // console.log(res.imageUrl , 'res')
      // this.qrImageUrl = res.imageUrl
      console.log(res)
    })

  }

}
