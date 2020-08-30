import { Component, Input } from '@angular/core';

@Component({
    selector: 'us-vmessage',
    templateUrl: './vmessage.component.html'
})
export class VMessageComponent {
    @Input() text = '';
 }
