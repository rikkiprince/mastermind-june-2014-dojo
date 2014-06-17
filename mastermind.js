function initialise() {
    gameObject = {
        gameState: [],
        scores: [],
        correct: [randInt(1, 6), randInt(1, 6), randInt(1, 6), randInt(1, 6)],
        knuth: function() {
            
        },
        makeTurn: function(turn) {
            this.gameState.push(turn);
            return this.score(turn);
        },
        score: function(turn) {
            red = 0;
            white = 0;
            reds = [false, false, false, false]
            for(i = 0; i < 4; i++) {
                if(turn[i] == this.correct[i]) {
                    red++;
                    reds[i] = true;
                }
            }

            for(i = 0; i < 4; i++) {
                if(reds[i]) {
                    continue;
                }
                for(j = 0; j < 4; j++) {
                    if(reds[j]) {
                        continue;
                    }
                    if(turn[i] == this.correct[j]) {
                        white++;
                        break;
                    }
                }
            }
            
            s = [red, white];
            this.scores.push(s);
            return s;
        }
    }
    return gameObject;
}

function randInt(low, high) {
    return Math.floor(low + (Math.random() * high));
}
