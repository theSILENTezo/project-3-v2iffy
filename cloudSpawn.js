//loads in the notes the user must catch
function spawnClouds(){
  var convertIT = int(millis() / 1000);
  beatHits;

  for(let i = 0; i < beatHits[i]; i++){
    var newBeat = songTime - beatHits[i];

    if (newBeat = countDown){
      y+= speed;

      image(droplet, x, y, 50, 30);  

      print(newBeat);

      if(y==-50){
        pickRandom();
      }
    }
  }
}

