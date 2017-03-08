import { Component, state, trigger, style, transition, animate, keyframes, group } from '@angular/core';

@Component({
    selector: 'animation-selector',
    templateUrl: 'app/animation/animation.component.html',
    animations: [
        trigger('lightsOnOff', [
            state('off', style({
                backgroundColor: 'black'
            })),
            state('on', style({
                backgroundColor: 'red'
            })),
            transition('on => off', [animate('2000ms 3s ease-in',
                style({ transform: 'rotate(90deg)' }))]),
            transition('off => on', [animate('2s ease-out',
                style({ tranform: 'rotate(-90deg' }))])
        ]),
        trigger('heightTrigger', [
            state('noHeight', style({
                height: 0
            })),
            state('fullHeight', style({
                height: '*'
            })),
            transition('noHeight <=> fullHeight', [animate('200ms 3s ease-in', )])

        ])]
})
export class AnimationComponent {
    pageTitle: String = 'Angular Animation ';
    roomState: String = 'off';
    heightState: String = 'fullHeight';

    toggleLights() {
        this.roomState = (this.roomState === 'off') ? 'on' : 'off';
    }

    toggleHeights() {
        this.heightState = (this.heightState === 'noHeight') ? 'fullHeight' : 'noHeight';
    }

}

