let A_count = 0
let B_count = 0
let index = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.A, function () {
    A_count += 1
})
input.onGesture(Gesture.SixG, function () {
	
})
input.onButtonPressed(Button.B, function () {
    B_count += 1
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        if (A_count == 1 && B_count == 1) {
            music.setTempo(145)
            for (let index2 = 0; index2 < 2; index2++) {
                for (let index = 0; index <= 1; index++) {
                    music.playTone(740, music.beat(BeatFraction.Half))
                    music.playTone(831, music.beat(BeatFraction.Half))
                    music.playTone(587, music.beat(BeatFraction.Quarter))
                    music.playTone(622, music.beat(BeatFraction.Half))
                    music.playTone(494, music.beat(BeatFraction.Quarter))
                    music.playTone(587, music.beat(BeatFraction.Quarter))
                    music.playTone(554, music.beat(BeatFraction.Quarter))
                    music.playTone(494, music.beat(BeatFraction.Half))
                    music.playTone(494, music.beat(BeatFraction.Half))
                    control.waitMicros(500)
                    music.playTone(494, music.beat(BeatFraction.Quarter))
                    music.playTone(554, music.beat(BeatFraction.Quarter))
                    music.playTone(587, music.beat(BeatFraction.Half))
                    music.playTone(587, music.beat(BeatFraction.Quarter))
                    music.playTone(554, music.beat(BeatFraction.Quarter))
                    music.playTone(494, music.beat(BeatFraction.Quarter))
                    music.playTone(554, music.beat(BeatFraction.Quarter))
                    music.playTone(587, music.beat(BeatFraction.Quarter))
                    music.playTone(740, music.beat(BeatFraction.Quarter))
                    music.playTone(831, music.beat(BeatFraction.Quarter))
                    music.playTone(587, music.beat(BeatFraction.Quarter))
                    music.playTone(740, music.beat(BeatFraction.Quarter))
                    music.playTone(554, music.beat(BeatFraction.Quarter))
                    music.playTone(587, music.beat(BeatFraction.Quarter))
                    music.playTone(494, music.beat(BeatFraction.Quarter))
                    music.playTone(554, music.beat(BeatFraction.Quarter))
                    music.playTone(494, music.beat(BeatFraction.Quarter))
                    music.playTone(622, music.beat(BeatFraction.Half))
                    music.playTone(740, music.beat(BeatFraction.Half))
                    music.playTone(831, music.beat(BeatFraction.Quarter))
                    music.playTone(622, music.beat(BeatFraction.Quarter))
                    music.playTone(740, music.beat(BeatFraction.Quarter))
                    music.playTone(554, music.beat(BeatFraction.Quarter))
                    music.playTone(622, music.beat(BeatFraction.Quarter))
                    music.playTone(494, music.beat(BeatFraction.Quarter))
                    music.playTone(587, music.beat(BeatFraction.Quarter))
                    music.playTone(622, music.beat(BeatFraction.Quarter))
                    music.playTone(587, music.beat(BeatFraction.Quarter))
                    music.playTone(554, music.beat(BeatFraction.Quarter))
                    music.playTone(494, music.beat(BeatFraction.Quarter))
                    music.playTone(554, music.beat(BeatFraction.Quarter))
                    music.playTone(587, music.beat(BeatFraction.Half))
                    music.playTone(494, music.beat(BeatFraction.Quarter))
                    music.playTone(554, music.beat(BeatFraction.Quarter))
                    music.playTone(622, music.beat(BeatFraction.Quarter))
                    music.playTone(740, music.beat(BeatFraction.Quarter))
                    music.playTone(554, music.beat(BeatFraction.Quarter))
                    music.playTone(587, music.beat(BeatFraction.Quarter))
                    music.playTone(554, music.beat(BeatFraction.Quarter))
                    music.playTone(494, music.beat(BeatFraction.Quarter))
                    music.playTone(554, music.beat(BeatFraction.Half))
                    music.playTone(494, music.beat(BeatFraction.Half))
                    if (index == 1) {
                        music.playTone(494, music.beat(BeatFraction.Half))
                    } else {
                        music.playTone(554, music.beat(BeatFraction.Half))
                    }
                }
                index = 0
                music.playTone(494, music.beat(BeatFraction.Half))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(415, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Half))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(415, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Quarter))
                music.playTone(554, music.beat(BeatFraction.Quarter))
                music.playTone(622, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Quarter))
                music.playTone(659, music.beat(BeatFraction.Quarter))
                music.playTone(622, music.beat(BeatFraction.Quarter))
                music.playTone(659, music.beat(BeatFraction.Quarter))
                music.playTone(740, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Half))
                music.playTone(494, music.beat(BeatFraction.Half))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(415, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Quarter))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(659, music.beat(BeatFraction.Quarter))
                music.playTone(622, music.beat(BeatFraction.Quarter))
                music.playTone(554, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Quarter))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(311, music.beat(BeatFraction.Quarter))
                music.playTone(330, music.beat(BeatFraction.Quarter))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Half))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(415, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Half))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(415, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Quarter))
                music.playTone(554, music.beat(BeatFraction.Quarter))
                music.playTone(622, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Quarter))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(415, music.beat(BeatFraction.Quarter))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Half))
                music.playTone(494, music.beat(BeatFraction.Half))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(415, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Quarter))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(659, music.beat(BeatFraction.Quarter))
                music.playTone(622, music.beat(BeatFraction.Quarter))
                music.playTone(659, music.beat(BeatFraction.Quarter))
                music.playTone(740, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Half))
                music.playTone(466, music.beat(BeatFraction.Half))
                music.playTone(494, music.beat(BeatFraction.Half))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(415, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Half))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(415, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Quarter))
                music.playTone(554, music.beat(BeatFraction.Quarter))
                music.playTone(622, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Quarter))
                music.playTone(659, music.beat(BeatFraction.Quarter))
                music.playTone(622, music.beat(BeatFraction.Quarter))
                music.playTone(659, music.beat(BeatFraction.Quarter))
                music.playTone(740, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Half))
                music.playTone(494, music.beat(BeatFraction.Half))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(415, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Quarter))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(659, music.beat(BeatFraction.Quarter))
                music.playTone(622, music.beat(BeatFraction.Quarter))
                music.playTone(554, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Quarter))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(311, music.beat(BeatFraction.Quarter))
                music.playTone(330, music.beat(BeatFraction.Quarter))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Half))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(415, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Half))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(415, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Quarter))
                music.playTone(554, music.beat(BeatFraction.Quarter))
                music.playTone(622, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Quarter))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(415, music.beat(BeatFraction.Quarter))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Half))
                music.playTone(494, music.beat(BeatFraction.Half))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(415, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Quarter))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(659, music.beat(BeatFraction.Quarter))
                music.playTone(622, music.beat(BeatFraction.Quarter))
                music.playTone(659, music.beat(BeatFraction.Quarter))
                music.playTone(740, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Half))
                music.playTone(554, music.beat(BeatFraction.Half))
            }
            basic.showString("Fucking nyan cat")
        } else {
            if (A_count == 2 && B_count == 1) {
            	
            } else {
                if (true) {
                	
                } else {
                    if (true) {
                    	
                    } else {
                    	
                    }
                }
            }
        }
        A_count = 0
        B_count = 0
    }
    music.setBuiltInSpeakerEnabled(true)
})
