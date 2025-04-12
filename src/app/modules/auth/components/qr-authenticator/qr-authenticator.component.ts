import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../../../../swagger/swagger.service';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qr-authenticator',
  templateUrl: './qr-authenticator.component.html',
  styleUrls: ['./qr-authenticator.component.scss'] // <-- Fixed typo: "styleUrl" → "styleUrls"
})
export class QrAuthenticatorComponent implements OnInit {
  qrImageUrl: string = ''; // Base64 image URL
  secretKey: string = '';  // Optional: store secret if needed

  constructor(private swagger: SwaggerService) {}

  ngOnInit(): void {
    this.swagger.generateMfaSecret().subscribe(res => {
      console.log(res); // { secret_key: "...", setup_url: "otpauth://..." }

      this.secretKey = res.secret_key;

      QRCode.toDataURL(res.setup_url, { width: 200 })
        .then(url => this.qrImageUrl = url)
        .catch(err => console.error('QR code generation error:', err));
    });
  }
}
