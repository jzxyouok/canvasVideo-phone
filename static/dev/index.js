/**
 * Created by yantianyu on 2016/7/25 0025.
 */

import './css/style.css'

import './lib/zepto.min'
import './lib/zepto.scroll'

import {JSNativeBridge} from './lib/tools'
import canvasVideo from './components/canvasVideo'
import mediaPlayer from './components/mediaPlayer'

$.ajax({
    method: 'GET',
    url: './test_data/canvas.json',
    success: function (data) {
        // canvasVideo.init(JSON.parse(data));
        canvasVideo.init(JSON.parse($('#canvasData').text()));
        setTimeout(function () {
            $('#audio')[0].src = './test_data/audio.mp3';
        }, 1000);
    }
});

mediaPlayer.init();

JSNativeBridge.init();