function SportGame(name, countplayer){
    this.name = name;
    this.countPlayer = countplayer;
    this.GetName = function(){
        return this.name;
    }
}

SportGame.prototype.GetCountPlayer = function(){
    return this.countPlayer;
}

function Hockey(name, countplayer, nameteam){
    SportGame.apply(this, arguments);
    this.nameTeam = nameteam;
}

Hockey.prototype.GetNameTeam = function(){
    return this.nameTeam;
}

Hockey.prototype.Message = function(){
    return "Sport game: "  + this.GetName() + "\nCount player: " + SportGame.prototype.GetCountPlayer.apply(this) +  "\nName team: " + this.nameTeam;
}

function Football(name, countplayer, lenght, width){
    SportGame.apply(this, arguments);
    this.lenght = lenght;
    this.width = width;
}

Football.prototype.FieldArea = function(){
    return this.width * this.lenght;
}

Football.prototype.Message = function(){
    return "Sport game: "  + this.GetName() +  "\nCount player: " + SportGame.prototype.GetCountPlayer.apply(this) + "\nField area: " + this.FieldArea() + "m*m";
}

var football = new Football('Football' , 11, 50, 100);
alert(football.Message());

var hockey = new Hockey("Hockey", 6, "Washington Capitals");
alert(hockey.Message());