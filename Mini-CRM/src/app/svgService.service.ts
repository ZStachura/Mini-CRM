import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({providedIn:'root'})
export class SvgServiceService {

constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) { }

registerAllIcons()
{
    this.matIconRegistry.addSvgIcon('bee',
    this.domSanitizer.bypassSecurityTrustResourceUrl('../src/assets/svg/bee.svg'));
}
}
