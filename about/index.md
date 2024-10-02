---
layout: default
title: "about"
---

<div tag="infocontainer">
<div class="infos">
<br>
<p>he/him</p>
<br>
<p>Hobbies: Gaming, Programming, learning languages, anime, mtg, D&D, and occasionally art.</p>
<br>
<p>Favorite video games: <a href="https://www.rockstargames.com/games?franchise=grand-theft-auto">GTA</a>, <a href="https://www.rockstargames.com/games/reddeadredemption2">RDR2</a>, <a href="https://www.playstation.com/en-us/the-last-of-us/">The Last of Us</a>, <a href="https://www.counter-strike.net/">CounterStrike</a>, <a href="https://minecraft.net">Minecraft</a>, <a href="https://www.nicalis.com/games/thebindingofisaacrepentance">The Binding of Issac</a>, <a href="https://gmod.facepunch.com/">Garry's Mod</a>, <a href="https://www.half-life.com/en/halflife2">Half-Life 2</a>, <a href="https://steamcommunity.com/id/the-duck-quack-quack/games/?tab=all">and a bunch more lol</a>.</p>
<br>
<p>Favorite anime: <a href="https://www.crunchyroll.com/series/GDKHZEJ0K/solo-leveling?srsltid=AfmBOopWtHsd6kZ-LvyYfVTDwW8Nf3bURdHMazPb05BLTMF2m7DYtSvN">Solo Leveling</a></p>
<br>
<p>Favorite TV Show (non-anime): <a href="https://www.sonypictures.com/tv/breakingbad">Breaking Bad</a> or <a href="https://abc.com/primetime/lost/index?pn=index">Lost</a></p>
<br>
<p>Favorite book: Ready Player One</p>
<br>
<p>Favorite D&D class: wizard or rogue</p>
<br>
<script>

    $(document).ready(function() {
 
        $.getJSON( "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=CB35A41F1BF9FE42C5CEC3F3CEED1E7F&steamids=76561199058891639", function( response ) {
        var items = [];
        $.each( response, function( key, val ) {
            items.push( "<li id='" + key + "'>" + val + "</li>" );
        });
        
        $( "<ul/>", {
            "class": "my-new-list",
            html: items.join( "" )
        }).appendTo( "body" );
        }); 
    });

</script>

</div>
</div>
