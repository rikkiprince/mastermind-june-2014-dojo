var http = require('http');

function initialise() {
    gameObject = {
        gameState: [],
        correct: [randInt(0, 5), randInt(0, 5), randInt(0, 5), randInt(0, 5)],    
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

            return [red, white];
        }
    }
    return gameObject;
}

function randInt(low, high) {
    return Math.floor(low + (Math.random() * high));
}

http.createServer(function(request, response) {
      response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();

}).listen(8080);
