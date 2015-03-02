Crafty.extend({
    init: function (w, h, stage_elem) {
        // var w =

        Crafty.viewport.init(w, h, stage_elem);

        //call all arbitrary functions attached to onload
        this.trigger("Load");
        this.timer.init();

        window.onresize();

        return this;
    }
}),

// On window resize, fill it with the game again!
window.onresize = function() {
    var aspectRatio = GAME_SIZE.width / GAME_SIZE.height;
    var frameSize = Math.min(window.innerWidth, window.innerHeight * aspectRatio);

    Crafty.viewport.width = frameSize;
    Crafty.viewport.height = frameSize / aspectRatio;
    Crafty.viewport.scale(frameSize / GAME_SIZE.width);
};
// window.onresize();

Crafty.init(600, 400, document.getElementById('game-canvas'));

Crafty.scene('title');