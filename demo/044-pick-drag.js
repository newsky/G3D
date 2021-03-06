import G3D from '../src/G3D';
import main from './044-pick-drag-main';

import { controlArcRotateCamera } from './lib/attach-control';

main(G3D, {
    canvas: document.getElementById('canvas'),
    requestAnimationFrame,
    controlArcRotateCamera,
    onClickCanvas: function (callback) {
        document.getElementById('canvas').addEventListener('click', callback)
    }
});